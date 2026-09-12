> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/specialize](https://developer.apple.com/documentation/tvml/specialize)

# specialize

Implements queries used for data binding.

<a id="Overview"></a>

## Overview

The `specialize` element is used to modify an existing element based on a data query. Combine the query with parameters contained in your JSON data to determine how to modify an existing element. Here’s an example that changes the text for a button if the user has started watching a media item, but hasn’t finished it.

```xml
<specialize state="({progress}-greater-than:0) and ({progress}-less-than:1)">
    <button tag="button">
        <text>Resume</text>
    </button>
</specialize>
```

<a id="Subelements-of-specialize"></a>

### Subelements of specialize

The `specialize` element can contain any element.

<a id="Elements-that-Use-specialize"></a>

### Elements that Use specialize

- [rules](rules.md)

## Topics

### Valid TVML Attributes

- [binding](binding.md): Associates information in a data item with an element.
- [prototype](prototype.md): Associates a data item type with an element.
- [theme](theme.md): Sets the color scheme for an element.

## See Also

### Binding Elements

- [prototypes](prototypes.md): Defines a group of elements that can be reused through binding.
- [rules](rules.md): Contains the elements used in data binding and media queries.
