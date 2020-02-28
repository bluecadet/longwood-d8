## General Usage

* To contain grid items in a fluid container, wrap them in an element with class name `.o-container-fluid`
* To contain grid items in a varying fixed-width container, wrap them in an element with class name `.o-container`
* Grid elements should be wrapped in a `.o-row` element.
* Columns (`o.col-` classes) should be prepended with the breakpoint var when they should take effect. Base columns should start with `o-col`, which will set the width to `100%`

## Breakpoints
* Breakpoints are controlled via the `$breakpoints` var in `src/assets/scss/01-Settings/_vars.grid.scss`. Additional breakpoints can be added if needed.
* Available breakpoints (for the `.o-col-` class)
  * sm
  * sm-md
  * md
  * lg
  * xl

### Breakpoint usage
Modifiers are available to all `o-col` and `o-row` classes, with all breakpoints. Example usage:
* `o-col o-col-sm-10 o-col-md-6`
* `o-col o-col--top o-col-lg-6 o-col-lg--center`

## Modifiers
`o-row` modifiers:
* `--reverse`
* `--start`
* `--center`
* `--end`
* `--top`
* `--middle`
* `--bottom`
* `--around`
* `--between`

### Modifier usage
Modifiers are available to all `o-col` classes, with all breakpoints. Example usage:
* `row row-md--reverse`
* `row row--top row-sm--center row-md--start`



## Flexbox Grid

This project uses a modified version of the [Flexbox Grid Sass](http://hugeinc.github.io/flexboxgrid-sass/). Files can be located in `src/assets/scss/05-Objects/_obj.grid.scss`