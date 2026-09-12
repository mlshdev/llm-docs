> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/size](https://developer.apple.com/documentation/appkit/nsimage/size)

# size (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The size of the image.

## Declaration

```swift
var size: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to `{0.0, 0.0}` if no size has been set and the size cannot be determined from any of the receiver’s image representations. If the size of the image hasn’t already been set when an image representation is added, the size is taken from the image representation’s data. For EPS images, the size is taken from the image’s bounding box. For TIFF images, the size is taken from the `ImageLength` and `ImageWidth` attributes.

Changing the size of an `NSImage` after it has been used effectively resizes the image. Changing the size invalidates all its caches and frees them. When the image is next composited, the selected representation will draw itself in an offscreen window to recreate the cache.

## See Also

### Setting Attributes of Images

- [isTemplate](istemplate.md): A Boolean value that determines whether the image represents a template image.
- [isTemplate](istemplate.md): A Boolean value that determines whether the image represents a template image.

# size (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The size of the image.

## Declaration

```objectivec
@property NSSize size;
```

<a id="Discussion"></a>

## Discussion

Defaults to `{0.0, 0.0}` if no size has been set and the size cannot be determined from any of the receiver’s image representations. If the size of the image hasn’t already been set when an image representation is added, the size is taken from the image representation’s data. For EPS images, the size is taken from the image’s bounding box. For TIFF images, the size is taken from the `ImageLength` and `ImageWidth` attributes.

Changing the size of an `NSImage` after it has been used effectively resizes the image. Changing the size invalidates all its caches and frees them. When the image is next composited, the selected representation will draw itself in an offscreen window to recreate the cache.

## See Also

### Setting Attributes of Images

- [template](istemplate.md): A Boolean value that determines whether the image represents a template image.
- [template](istemplate.md): A Boolean value that determines whether the image represents a template image.
