> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usd/physicalwidth](https://developer.apple.com/documentation/usd/physicalwidth)

# physicalWidth

**Kind:** Article

An image’s width in centimeters.

<a id="overview"></a>

## Overview

This property informs the runtime how wide the image is in the physical environment. The runtime calculates the height based on the image’s aspect ratio.

Because this property describes a real-world width, the prim’s transform hierarchy doesn’t modify this property’s value.

<a id="Declaration"></a>

### Declaration

```other
uniform double physicalWidth
```

<a id="Define-a-reference-images-width"></a>

### Define a reference image’s width

To recognize an image in the real world, the runtime requires a prim to specify how wide the image is in the physical environment.

```other
def Preliminary_ReferenceImage "ImageReference"
{
    uniform double physicalWidth = 12
    ...
}
```

## See Also

### Properties

- [image](image.md): An image file for which the runtime should search.
