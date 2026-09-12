> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirawfilter/init(cvpixelbuffer:properties:)-6209q](https://developer.apple.com/documentation/coreimage/cirawfilter/init(cvpixelbuffer:properties:)-6209q)

# init(cvPixelBuffer:properties:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a RAW filter from the pixel buffer and its properties that you specify.

## Declaration

```swift
convenience init?(cvPixelBuffer buffer: CVPixelBuffer, properties: [AnyHashable : Any])
```

## Parameters

- `buffer`: A Core Video pixel buffer.
- `properties`: A dictionary that defines the properties of the pixel buffer.

## See Also

### Creating a filter

- [init(imageData:identifierHint:)](init%28imagedata_identifierhint_%29.md): Creates a RAW filter from the image data and type hint that you specify.
- [init(imageURL:)](init%28imageurl_%29.md): Creates a RAW filter from the image at the URL location that you specify.

# filterWithCVPixelBuffer:properties: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a RAW filter from the pixel buffer and its properties that you specify.

## Declaration

```objectivec
+ (instancetype) filterWithCVPixelBuffer:(CVPixelBufferRef) buffer properties:(NSDictionary *) properties;
```

## Parameters

- `buffer`: A Core Video pixel buffer.
- `properties`: A dictionary that defines the properties of the pixel buffer.

## See Also

### Creating a filter

- [filterWithImageData:identifierHint:](init%28imagedata_identifierhint_%29.md): Creates a RAW filter from the image data and type hint that you specify.
- [filterWithImageURL:](init%28imageurl_%29.md): Creates a RAW filter from the image at the URL location that you specify.
