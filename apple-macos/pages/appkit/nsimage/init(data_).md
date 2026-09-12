> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/init(data:)](https://developer.apple.com/documentation/appkit/nsimage/init(data:))

# init(data:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Initializes and returns an image object using the provided image data.

## Declaration

```swift
convenience init?(data: Data)
```

## Parameters

- `data`: The data object containing the image data. The data can be in any format that macOS supports, including PDF, PICT, EPS, or any number of bitmap data formats.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object or `nil` if the method cannot create an image representation from the contents of the specified data object.

<a id="Discussion"></a>

## Discussion

Use this method in cases where you already have image data in a supported format and want to obtain an `NSImage` object that represents that data. This method initializes the object with an image representation that is most appropriate for the type of data you provided.

## See Also

### Creating Images from Existing Data

- [init(dataIgnoringOrientation:)](init%28dataignoringorientation_%29.md): Initializes and returns an image object using the provided image data and ignoring the EXIF orientation tags.
- [init(cgImage:size:)](init%28cgimage_size_%29-8oznv.md): Creates a new image using the contents of the provided image.
- [init(pasteboard:)](init%28pasteboard_%29.md): Initializes and returns an image object with data from the specified pasteboard.
- [init(coder:)](init%28coder_%29.md): Initializes and returns an image object from data in an unarchiver.

# initWithData: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Initializes and returns an image object using the provided image data.

## Declaration

```objectivec
- (instancetype) initWithData:(NSData *) data;
```

## Parameters

- `data`: The data object containing the image data. The data can be in any format that macOS supports, including PDF, PICT, EPS, or any number of bitmap data formats.

<a id="return-value"></a>

## Return Value

An initialized `NSImage` object or `nil` if the method cannot create an image representation from the contents of the specified data object.

<a id="Discussion"></a>

## Discussion

Use this method in cases where you already have image data in a supported format and want to obtain an `NSImage` object that represents that data. This method initializes the object with an image representation that is most appropriate for the type of data you provided.

## See Also

### Creating Images from Existing Data

- [initWithDataIgnoringOrientation:](init%28dataignoringorientation_%29.md): Initializes and returns an image object using the provided image data and ignoring the EXIF orientation tags.
- [initWithCGImage:size:](init%28cgimage_size_%29-8oznv.md): Creates a new image using the contents of the provided image.
- [initWithPasteboard:](init%28pasteboard_%29.md): Initializes and returns an image object with data from the specified pasteboard.
- [initWithCoder:](init%28coder_%29.md): Initializes and returns an image object from data in an unarchiver.
