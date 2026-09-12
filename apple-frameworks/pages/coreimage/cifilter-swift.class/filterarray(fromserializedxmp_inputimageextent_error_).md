> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/filterarray(fromserializedxmp:inputimageextent:error:)](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/filterarray(fromserializedxmp:inputimageextent:error:))

# filterArray(fromSerializedXMP:inputImageExtent:error:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 17.0) · iPadOS 6.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.9+ (deprecated in 14.0) · tvOS  (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Returns an array of filter objects de-serialized from XMP data.

## Declaration

```swift
class func filterArray(fromSerializedXMP xmpData: Data, inputImageExtent extent: CGRect, error outError: NSErrorPointer) -> [CIFilter]
```

## Parameters

- `xmpData`: The XMP data created previously by calling [serializedXMP(from:inputImageExtent:)](serializedxmp%28from_inputimageextent_%29.md).
- `extent`: The extent of the image from which the XMP data was extracted.
- `outError`: The address of an `NSError` object for receiving errors, otherwise `nil`.

## See Also

### Deprecated

- [init(CVPixelBuffer:properties:options:)](init%28cvpixelbuffer_properties_options_%29-7qpsv.md): Deprecated. Creates a filter from a Core Video pixel buffer.
- [init(imageData:options:)](init%28imagedata_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [init(imageURL:options:)](init%28imageurl_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [CIRAWFilterOption](../cirawfilteroption.md): Deprecated.
- [serializedXMP(from:inputImageExtent:)](serializedxmp%28from_inputimageextent_%29.md): Deprecated. Serializes filter parameters into XMP form that is suitable for embedding in an image.
- [supportedRawCameraModels()](supportedrawcameramodels%28%29.md): Deprecated.

# filterArrayFromSerializedXMP:inputImageExtent:error: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS 6.0+ (deprecated in 17.0) · iPadOS 6.0+ (deprecated in 17.0) · Mac Catalyst 13.1+ (deprecated in 17.0) · macOS 10.9+ (deprecated in 14.0) · tvOS  (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Returns an array of filter objects de-serialized from XMP data.

## Declaration

```objectivec
+ (NSArray<CIFilter *> *) filterArrayFromSerializedXMP:(NSData *) xmpData inputImageExtent:(CGRect) extent error:(NSError **) outError;
```

## Parameters

- `xmpData`: The XMP data created previously by calling [serializedXMPFromFilters:inputImageExtent:](serializedxmp%28from_inputimageextent_%29.md).
- `extent`: The extent of the image from which the XMP data was extracted.
- `outError`: The address of an `NSError` object for receiving errors, otherwise `nil`.

## See Also

### Deprecated

- [filterWithImageData:options:](init%28imagedata_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [filterWithImageURL:options:](init%28imageurl_options_%29.md): Deprecated. Creates a filter that allows the processing of RAW images.
- [CIRAWFilterOption](../cirawfilteroption.md): Deprecated.
- [serializedXMPFromFilters:inputImageExtent:](serializedxmp%28from_inputimageextent_%29.md): Deprecated. Serializes filter parameters into XMP form that is suitable for embedding in an image.
- [supportedRawCameraModels](supportedrawcameramodels%28%29.md): Deprecated.
