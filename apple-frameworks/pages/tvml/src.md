> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/src](https://developer.apple.com/documentation/tvml/src)

# src

**Kind:** Article

Specifies the URL for an image.

<a id="Overview"></a>

## Overview

The URL can point to an image on a server or to the resource scheme in your app. For a list of resource images provide by Apple, see the Resource Icons section of [TVML](../tvml.md). Here’s an example that displays the United States general admission movie rating icon.

```xml
<img src="resource://mpaa-g" />
```

> **Note**

> When this attribute loads an image using an HTTP URL, you must add `height` and `width` attributes to the element.

<a id="Values-for-src"></a>

### Values for src

- **String**: The URL pointing to the location of the image file.

<a id="Elements-that-Use-src"></a>

### Elements that Use src

- [badge](badge.md)
- [decorationImage](decorationimage.md)
- [fullscreenImg](fullscreenimg.md)
- [heroImg](heroimg.md)
- [img](img.md)

## See Also

### Image Retrieval

- [srcset](srcset.md): Specifies multiple URLs for an image.
