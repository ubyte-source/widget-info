# Documentation widget-info

Widget Javascript Info is a library used to create a panel in whitch you can display the data of an element. (ex. User info, Customer Info etc.)

## Usage

The basic setup for a user looks something like this:

```

let detail = new Info();

detail.setUrl('<url where you can get the detail of a user.>');
document.appendChild(detail.out());

detail.request(function (json) {
    if (json.status !== true
        || false === json.hasOwnProperty('data')) return;

    let full_name = json.data.firstname + String.fromCharCode(32) + json.data.lastname;
    this.setName(full_name);

    let email = new Info.Line(this),
        role = new Info.Line(this);

    // email.getContainer().appendChild(<HTMLElement>);
    // role.getContainer().appendChild(<HTMLElement>);

    this.getLine().appendChild(email.out());
    this.getLine().appendChild(role.out());

    if (null !== json.data.picture) this.getImage().set(json.data.picture);
});

```

## Structure

library:
- [window.Info](https://github.com/energia-source/widget-info/tree/main/lib)
- [window.Info.Line](https://github.com/energia-source/widget-info/tree/main/lib)
- [window.Info.Preloader](https://github.com/energia-source/widget-info/tree/main/lib)
- [window.Info.Image](https://github.com/energia-source/widget-info/tree/main/lib)

<br>

## Contributing

Please read [CONTRIBUTING.md](https://github.com/energia-source/widget-info/blob/main/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting us pull requests.

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/energia-source/widget-info/tags). 

## Authors

* **Paolo Fabris** - *Initial work* - [energia-europa.com](https://www.energia-europa.com/)
* **Gabriele Luigi Masero** - *Developer* - [energia-europa.com](https://www.energia-europa.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details