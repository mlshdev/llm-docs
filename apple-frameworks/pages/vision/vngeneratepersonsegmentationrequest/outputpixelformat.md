> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vngeneratepersonsegmentationrequest/outputpixelformat](https://developer.apple.com/documentation/vision/vngeneratepersonsegmentationrequest/outputpixelformat)

# outputPixelFormat (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The pixel format of the output image.

## Declaration

```swift
var outputPixelFormat: OSType { get set }
```

<a id="Discussion"></a>

## Discussion

The property supports the following values:

- [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md)
- [kCVPixelFormatType_OneComponent16Half](../../corevideo/kcvpixelformattype_onecomponent16half.md)
- [kCVPixelFormatType_OneComponent32Float](../../corevideo/kcvpixelformattype_onecomponent32float.md)

The default value is [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md).

## See Also

### Configuring the Request

- [qualityLevel](qualitylevel-swift.property.md): A value that indicates how the request balances accuracy and performance.
- [VNGeneratePersonSegmentationRequest.QualityLevel](qualitylevel-swift.enum.md): Constants that define the levels of quality for a person segmentation request.

# outputPixelFormat (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The pixel format of the output image.

## Declaration

```objectivec
@property (nonatomic, readwrite) OSType outputPixelFormat;
```

<a id="Discussion"></a>

## Discussion

The property supports the following values:

- [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md)
- [kCVPixelFormatType_OneComponent16Half](../../corevideo/kcvpixelformattype_onecomponent16half.md)
- [kCVPixelFormatType_OneComponent32Float](../../corevideo/kcvpixelformattype_onecomponent32float.md)

The default value is [kCVPixelFormatType_OneComponent8](../../corevideo/kcvpixelformattype_onecomponent8.md).

## See Also

### Configuring the Request

- [qualityLevel](qualitylevel-swift.property.md): A value that indicates how the request balances accuracy and performance.
- [VNGeneratePersonSegmentationRequestQualityLevel](qualitylevel-swift.enum.md): Constants that define the levels of quality for a person segmentation request.
