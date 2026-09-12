> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/init(dataignoringorientation:)](https://developer.apple.com/documentation/appkit/nsimage/init(dataignoringorientation:))

# init(dataIgnoringOrientation:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.6+

Initializes and returns an image object using the provided image data and ignoring the EXIF orientation tags.

## Declaration

```swift
convenience init?(dataIgnoringOrientation data: Data)
```

## Parameters

- `data`: The data object containing the image data. The data can be in any format that macOS supports, including PDF, PICT, EPS, or any number of bitmap data formats.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object or `nil` if the method cannot create an image representation from the contents of the specified data object.

## See Also

### Creating Images from Existing Data

- [init(data:)](init%28data_%29.md): Initializes and returns an image object using the provided image data.
- [init(cgImage:size:)](init%28cgimage_size_%29-8oznv.md): Creates a new image using the contents of the provided image.
- [init(pasteboard:)](init%28pasteboard_%29.md): Initializes and returns an image object with data from the specified pasteboard.
- [init(coder:)](init%28coder_%29.md): Initializes and returns an image object from data in an unarchiver.

# initWithDataIgnoringOrientation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Initializes and returns an image object using the provided image data and ignoring the EXIF orientation tags.

## Declaration

```objectivec
- (instancetype) initWithDataIgnoringOrientation:(NSData *) data;
```

## Parameters

- `data`: The data object containing the image data. The data can be in any format that macOS supports, including PDF, PICT, EPS, or any number of bitmap data formats.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object or `nil` if the method cannot create an image representation from the contents of the specified data object.

## See Also

### Creating Images from Existing Data

- [initWithData:](init%28data_%29.md): Initializes and returns an image object using the provided image data.
- [initWithCGImage:size:](init%28cgimage_size_%29-8oznv.md): Creates a new image using the contents of the provided image.
- [initWithPasteboard:](init%28pasteboard_%29.md): Initializes and returns an image object with data from the specified pasteboard.
- [initWithCoder:](init%28coder_%29.md): Initializes and returns an image object from data in an unarchiver.
