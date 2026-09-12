> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirawfilter/init(imageurl:)](https://developer.apple.com/documentation/coreimage/cirawfilter/init(imageurl:))

# init(imageURL:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a RAW filter from the image at the URL location that you specify.

## Declaration

```swift
convenience init?(imageURL url: URL)
```

## Parameters

- `url`: The URL location of the image.

## See Also

### Creating a filter

- [init(cvPixelBuffer:properties:)](init%28cvpixelbuffer_properties_%29-6209q.md): Creates a RAW filter from the pixel buffer and its properties that you specify.
- [init(imageData:identifierHint:)](init%28imagedata_identifierhint_%29.md): Creates a RAW filter from the image data and type hint that you specify.

# filterWithImageURL: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a RAW filter from the image at the URL location that you specify.

## Declaration

```objectivec
+ (instancetype) filterWithImageURL:(NSURL *) url;
```

## Parameters

- `url`: The URL location of the image.

## See Also

### Creating a filter

- [filterWithCVPixelBuffer:properties:](init%28cvpixelbuffer_properties_%29-6209q.md): Creates a RAW filter from the pixel buffer and its properties that you specify.
- [filterWithImageData:identifierHint:](init%28imagedata_identifierhint_%29.md): Creates a RAW filter from the image data and type hint that you specify.
