> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/info](https://developer.apple.com/documentation/tvml/info)

# info

Displays grouped sets of information.

<a id="Overview"></a>

## Overview

The `info` element displays displays grouped sets of data in either table or list form, depending on its parent element. For example, in an `infoList` element, the `info` element is often used to display a list of directors and actors for a product. Here’s an example that shows the director and main actors for a movie.

```xml
<infoList>
   <info>
      <header>
         <title>Director</title>
      </header>
      <text>John Appleseed</text>
   </info>
   <info>
      <header>
         <title>Actors</title>
      </header>
      <text>Anne Johnson</text>
      <text>Tom Clark</text>
      <text>Maria Ruiz</text>
   </info>
</infoList>
```

<a id="Subelements-of-info"></a>

### Subelements of info

- [button](button.md)
- [description](description.md)
- [header](header.md)
- [row](row.md)
- [text](text.md)

<a id="Elements-that-Use-info"></a>

### Elements that Use info

- [infoList](infolist.md)
- [infoTable](infotable.md)

## Topics

### Valid TVML Styles

- [tv-line-spacing](tv-line-spacing.md): Specifies the amount of space between lines of text.

### Valid TVML Attributes

- [binding](binding.md): Associates information in a data item with an element.
- [prototype](prototype.md): Associates a data item type with an element.
- [theme](theme.md): Sets the color scheme for an element.

## See Also

### General Information Elements

- [productInfo](productinfo.md): Contains general information about a product.
