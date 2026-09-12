> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/image-attributes-height](https://developer.apple.com/documentation/tvml/image-attributes-height)

# height

**Kind:** Article

Specifies the maximum height for an image.

<a id="Overview"></a>

## Overview

The image is shrunk to fit the bounding box if the image is bigger than the size specified for the `height` attribute. You must declare either a `height` style or attribute for an image. Declaring a style overwrites an attribute declaration. Here’s an example that sets the height of the image to 200 points.

```xml
<img src="resource://mpaa-g" height="200">
```

<a id="Values-for-height"></a>

### Values for height

- **Integer**: The height of the element, in points.

<a id="Elements-that-Use-height"></a>

### Elements that Use height

- [decorationLabel](decorationlabel.md)
- [fullscreenImg](fullscreenimg.md)
- [heroImg](heroimg.md)
- [img](img.md)

## See Also

### Image Size

- [width](image-attributes-width.md): Specifies the maximum width for an image element.
- [aspectRatio](aspectratio.md): Specifies the aspect ratio of an image.
