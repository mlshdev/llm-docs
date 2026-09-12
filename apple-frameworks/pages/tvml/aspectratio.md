> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/aspectratio](https://developer.apple.com/documentation/tvml/aspectratio)

# aspectRatio

**Kind:** Article

Specifies the aspect ratio of an image.

<a id="Overview"></a>

## Overview

Use the `aspectRatio` attribute when setting the image’s `contentsMode` to provide TVMLKit with the context needed to determine how to fit the source image in the view port.

The attribute’s value should correlate with the aspect ratio of the source image. The value is a `double` derived by dividing the width of the aspect ratio by the height. Here’s an example that demonstrates the `aspectRatio` attribute used to specify a source image with a 3 to 2 width to height ratio.

```xml
<img contentsMode="aspectFit" width="300" height="200" aspectRatio="1.5" src="path to images on your server/Car_Movie_300x200.png"/>
```

<a id="Elements-that-Use-aspectRatio"></a>

### Elements that Use aspectRatio

- [contentsMode](contentsmode.md)

## See Also

### Image Size

- [height](image-attributes-height.md): Specifies the maximum height for an image.
- [width](image-attributes-width.md): Specifies the maximum width for an image element.
