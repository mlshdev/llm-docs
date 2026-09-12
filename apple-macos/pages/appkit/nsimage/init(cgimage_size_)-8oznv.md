> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/init(cgimage:size:)-8oznv](https://developer.apple.com/documentation/appkit/nsimage/init(cgimage:size:)-8oznv)

# init(cgImage:size:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.6+

Creates a new image using the contents of the provided image.

## Declaration

```swift
convenience init(cgImage: CGImage, size: NSSize)
```

## Parameters

- `cgImage`: The source image.
- `size`: The size of the new image. Use [zero](https://developer.apple.com/documentation/corefoundation/cgsize/zero), or [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize) in Objective-C, to have the new image adopt the pixel dimensions of the source image.

<a id="Discussion"></a>

## Discussion

Don’t assume anything about the image, other than drawing it is equivalent to drawing the source image.

This is not a designated initializer.

## See Also

### Creating Images from Existing Data

- [init(data:)](init%28data_%29.md): Initializes and returns an image object using the provided image data.
- [init(dataIgnoringOrientation:)](init%28dataignoringorientation_%29.md): Initializes and returns an image object using the provided image data and ignoring the EXIF orientation tags.
- [init(pasteboard:)](init%28pasteboard_%29.md): Initializes and returns an image object with data from the specified pasteboard.
- [init(coder:)](init%28coder_%29.md): Initializes and returns an image object from data in an unarchiver.

# initWithCGImage:size: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Creates a new image using the contents of the provided image.

## Declaration

```objectivec
- (instancetype) initWithCGImage:(CGImageRef) cgImage size:(NSSize) size;
```

## Parameters

- `cgImage`: The source image.
- `size`: The size of the new image. Use [zero](https://developer.apple.com/documentation/corefoundation/cgsize/zero), or [NSZeroSize](https://developer.apple.com/documentation/foundation/nszerosize) in Objective-C, to have the new image adopt the pixel dimensions of the source image.

<a id="Discussion"></a>

## Discussion

Don’t assume anything about the image, other than drawing it is equivalent to drawing the source image.

This is not a designated initializer.

## See Also

### Creating Images from Existing Data

- [initWithData:](init%28data_%29.md): Initializes and returns an image object using the provided image data.
- [initWithDataIgnoringOrientation:](init%28dataignoringorientation_%29.md): Initializes and returns an image object using the provided image data and ignoring the EXIF orientation tags.
- [initWithPasteboard:](init%28pasteboard_%29.md): Initializes and returns an image object with data from the specified pasteboard.
- [initWithCoder:](init%28coder_%29.md): Initializes and returns an image object from data in an unarchiver.
