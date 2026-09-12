> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/binding](https://developer.apple.com/documentation/tvml/binding)

# binding

**Kind:** Article

Associates information in a data item with an element.

<a id="Overview"></a>

## Overview

Use the `binding` attribute to associate the property path in a data item with an element.

> **Note**

> For more information on binding, see [Manipulating the Document Object Model (DOM)](https://developer.apple.com/library/content/documentation/TVMLKitJS/Conceptual/TVMLProgrammingGuide/GeneratingContentForYourApp.html#//apple_ref/doc/uid/TP40016718-CH4-SW1) in the TVML Programming Guide.

<a id="Values-for-binding"></a>

### Values for binding

- **`@<attribute>:{value}`**: The attribute tag and value. For example, `<img binding=”@src:{url};”/>` adds the `src` attribute with the URL found in the associated data item.
- **`items:{property path}`**: The item associated with the specified property path.
- **`textContent:{property path}`**: The text associated with the specified property path.

<a id="Elements-that-Use-binding"></a>

### Elements that Use binding

The `binding` attribute can be used with any element.

## See Also

### Valid TVML Attributes

- [autoHighlight](autohighlight.md): Specifies that the element should initially be in focus.
- [layoutDirection](layoutdirection.md): Specifies the direction in which text is displayed.
- [prototype](prototype.md): Associates a data item type with an element.
- [theme](theme.md): Sets the color scheme for an element.
