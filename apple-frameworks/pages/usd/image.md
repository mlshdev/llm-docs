> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usd/image](https://developer.apple.com/documentation/usd/image)

# image

**Kind:** Article

An image file for which the runtime should search.

<a id="overview"></a>

## Overview

Assign this property a path to a PNG or JPEG file.

<a id="Declaration"></a>

### Declaration

```other
uniform asset image
```

<a id="Define-a-reference-image"></a>

### Define a reference image

The following [Preliminary_ReferenceImage](preliminary-referenceimage.md) assigns this property a file named `image.png`.

```other
def Preliminary_ReferenceImage "ImageReference"
{
    uniform asset image = @image.png@
    ...
}
```

## See Also

### Properties

- [physicalWidth](physicalwidth.md): An image’s width in centimeters.
