> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/ishighphotoqualitysupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/ishighphotoqualitysupported)

# isHighPhotoQualitySupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

A Boolean value that indicates whether this format supports high-quality capture with the current quality prioritization setting.

## Declaration

```swift
var isHighPhotoQualitySupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When this value is [true](https://developer.apple.com/documentation/swift/true), the format produces higher image quality when selecting a quality prioritization of [AVCapturePhotoOutput.QualityPrioritization.balanced](../../avcapturephotooutput/qualityprioritization/balanced.md) or [AVCapturePhotoOutput.QualityPrioritization.quality](../../avcapturephotooutput/qualityprioritization/quality.md) in comparison to [AVCapturePhotoOutput.QualityPrioritization.speed](../../avcapturephotooutput/qualityprioritization/speed.md).

High-quality formats adhere to the following rules:

- Photo requests that prioritize speed produce the fastest image result, which makes it a good choice for burst captures.
- Photo requests that prioritize speed and quality equally produce higher image quality without dropping frames if a video recording is underway.
- Photo requests that prioritize quality produce high-quality images and may cause frame drops if a video recording is underway. For maximum backward compatibility, photo requests on high photo quality formats only cause video frame drops if your app links against iOS 15 or later.

Formats that don’t support high photo quality produce the same image quality regardless of the current [photoQualityPrioritization](../../avcapturephotosettings/photoqualityprioritization.md) setting.

## See Also

### Determining photo quality

- [supportedMaxPhotoDimensions](supportedmaxphotodimensions.md): The maximum photo dimension this format supports.
- [isHighestPhotoQualitySupported](ishighestphotoqualitysupported.md): A Boolean value that indicates whether this format supports the highest photo quality that the platform delivers.

# highPhotoQualitySupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

A Boolean value that indicates whether this format supports high-quality capture with the current quality prioritization setting.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isHighPhotoQualitySupported) BOOL highPhotoQualitySupported;
```

<a id="Discussion"></a>

## Discussion

When this value is [true](https://developer.apple.com/documentation/swift/true), the format produces higher image quality when selecting a quality prioritization of [AVCapturePhotoQualityPrioritizationBalanced](../../avcapturephotooutput/qualityprioritization/balanced.md) or [AVCapturePhotoQualityPrioritizationQuality](../../avcapturephotooutput/qualityprioritization/quality.md) in comparison to [AVCapturePhotoQualityPrioritizationSpeed](../../avcapturephotooutput/qualityprioritization/speed.md).

High-quality formats adhere to the following rules:

- Photo requests that prioritize speed produce the fastest image result, which makes it a good choice for burst captures.
- Photo requests that prioritize speed and quality equally produce higher image quality without dropping frames if a video recording is underway.
- Photo requests that prioritize quality produce high-quality images and may cause frame drops if a video recording is underway. For maximum backward compatibility, photo requests on high photo quality formats only cause video frame drops if your app links against iOS 15 or later.

Formats that don’t support high photo quality produce the same image quality regardless of the current [photoQualityPrioritization](../../avcapturephotosettings/photoqualityprioritization.md) setting.

## See Also

### Determining photo quality

- [supportedMaxPhotoDimensions](../../avcapturedeviceformat/supportedmaxphotodimensions.md): The maximum photo dimension this format supports.
- [highestPhotoQualitySupported](ishighestphotoqualitysupported.md): A Boolean value that indicates whether this format supports the highest photo quality that the platform delivers.
