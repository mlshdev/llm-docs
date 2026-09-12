> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isgeometricdistortioncorrectionenabled](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isgeometricdistortioncorrectionenabled)

# isGeometricDistortionCorrectionEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether geometric distortion correction is enabled for this device.

## Declaration

```swift
var isGeometricDistortionCorrectionEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the device supports geometric distortion correction (GDC), the default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Enabling geometric distortion correction

- [isGeometricDistortionCorrectionSupported](isgeometricdistortioncorrectionsupported.md): A Boolean value that indicates whether this device supports geometric distortion correction.

# geometricDistortionCorrectionEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether geometric distortion correction is enabled for this device.

## Declaration

```objectivec
@property (nonatomic, getter=isGeometricDistortionCorrectionEnabled) BOOL geometricDistortionCorrectionEnabled;
```

<a id="Discussion"></a>

## Discussion

When the device supports geometric distortion correction (GDC), the default value is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Enabling geometric distortion correction

- [geometricDistortionCorrectionSupported](isgeometricdistortioncorrectionsupported.md): A Boolean value that indicates whether this device supports geometric distortion correction.
