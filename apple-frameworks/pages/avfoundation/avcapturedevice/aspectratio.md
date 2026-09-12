> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/aspectratio](https://developer.apple.com/documentation/avfoundation/avcapturedevice/aspectratio)

# AVCaptureDevice.AspectRatio (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

String constants describing the different video aspect ratios you can configure for a particular device.

## Declaration

```swift
struct AspectRatio
```

## Topics

### Aspect ratios

- [ratio16x9](aspectratio/ratio16x9.md): An aspect ratio of 16x9.
- [ratio1x1](aspectratio/ratio1x1.md): An aspect ratio of 1x1.
- [ratio3x4](aspectratio/ratio3x4.md): An aspect ratio of 3x4.
- [ratio4x3](aspectratio/ratio4x3.md): An aspect ratio of 4x3.
- [ratio9x16](aspectratio/ratio9x16.md): An aspect ratio of 9x16.

### Initializers

- [init(rawValue:)](aspectratio/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring dynamic aspect ratio

- [setDynamicAspectRatio(\_:completionHandler:)](setdynamicaspectratio%28__completionhandler_%29.md): Updates the dynamic aspect ratio of the device.
- [dynamicAspectRatio](dynamicaspectratio.md): A key-value observable property indicating the current aspect ratio for a device.
- [dynamicDimensions](dynamicdimensions.md): A key-value observable property describing the output dimensions of the video buffer based on the device’s dynamic aspect ratio.

# AVCaptureAspectRatio (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Alias  
**Availability:** iOS 26.0+ · iPadOS 26.0+

String constants describing the different video aspect ratios you can configure for a particular device.

## Declaration

```objectivec
typedef NSString * AVCaptureAspectRatio;
```

## Topics

### Aspect ratios

- [AVCaptureAspectRatio16x9](aspectratio/ratio16x9.md): An aspect ratio of 16x9.
- [AVCaptureAspectRatio1x1](aspectratio/ratio1x1.md): An aspect ratio of 1x1.
- [AVCaptureAspectRatio3x4](aspectratio/ratio3x4.md): An aspect ratio of 3x4.
- [AVCaptureAspectRatio4x3](aspectratio/ratio4x3.md): An aspect ratio of 4x3.
- [AVCaptureAspectRatio9x16](aspectratio/ratio9x16.md): An aspect ratio of 9x16.

## See Also

### Configuring dynamic aspect ratio

- [setDynamicAspectRatio:completionHandler:](setdynamicaspectratio%28__completionhandler_%29.md): Updates the dynamic aspect ratio of the device.
- [dynamicAspectRatio](dynamicaspectratio.md): A key-value observable property indicating the current aspect ratio for a device.
- [dynamicDimensions](dynamicdimensions.md): A key-value observable property describing the output dimensions of the video buffer based on the device’s dynamic aspect ratio.
