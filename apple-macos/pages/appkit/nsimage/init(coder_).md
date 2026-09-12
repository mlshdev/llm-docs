> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/init(coder:)](https://developer.apple.com/documentation/appkit/nsimage/init(coder:))

# init(coder:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns an image object from data in an unarchiver.

## Declaration

```swift
init(coder: NSCoder)
```

## See Also

### Creating Images from Existing Data

- [init(data:)](init%28data_%29.md): Initializes and returns an image object using the provided image data.
- [init(dataIgnoringOrientation:)](init%28dataignoringorientation_%29.md): Initializes and returns an image object using the provided image data and ignoring the EXIF orientation tags.
- [init(cgImage:size:)](init%28cgimage_size_%29-8oznv.md): Creates a new image using the contents of the provided image.
- [init(pasteboard:)](init%28pasteboard_%29.md): Initializes and returns an image object with data from the specified pasteboard.

# initWithCoder: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns an image object from data in an unarchiver.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) coder;
```

## See Also

### Creating Images from Existing Data

- [initWithData:](init%28data_%29.md): Initializes and returns an image object using the provided image data.
- [initWithDataIgnoringOrientation:](init%28dataignoringorientation_%29.md): Initializes and returns an image object using the provided image data and ignoring the EXIF orientation tags.
- [initWithCGImage:size:](init%28cgimage_size_%29-8oznv.md): Creates a new image using the contents of the provided image.
- [initWithPasteboard:](init%28pasteboard_%29.md): Initializes and returns an image object with data from the specified pasteboard.
