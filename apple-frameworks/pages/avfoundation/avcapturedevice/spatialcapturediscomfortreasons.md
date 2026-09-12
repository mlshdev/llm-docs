> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/spatialcapturediscomfortreasons](https://developer.apple.com/documentation/avfoundation/avcapturedevice/spatialcapturediscomfortreasons)

# spatialCaptureDiscomfortReasons (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Reasons why current environmental conditions aren’t suitable to capturing spatial videos that are comfortable to view.

## Declaration

```swift
var spatialCaptureDiscomfortReasons: Set<AVSpatialCaptureDiscomfortReason> { get }
```

<a id="Discussion"></a>

## Discussion

You can monitor this property to determine whether to present UI that recommends a person reframe their scene for more pleasing spatial capture. For example, you could show a message that indicates the subject is too close or the scene is too dark.

## See Also

### Supporting spatial capture

- [AVSpatialCaptureDiscomfortReason](../avspatialcapturediscomfortreason.md): Constants that indicate the suitability of the current scene to create a comfortable viewing experience.

# spatialCaptureDiscomfortReasons (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

Reasons why current environmental conditions aren’t suitable to capturing spatial videos that are comfortable to view.

## Declaration

```objectivec
@property (nonatomic, readonly) NSSet<NSString *> * spatialCaptureDiscomfortReasons;
```

<a id="Discussion"></a>

## Discussion

You can monitor this property to determine whether to present UI that recommends a person reframe their scene for more pleasing spatial capture. For example, you could show a message that indicates the subject is too close or the scene is too dark.

## See Also

### Supporting spatial capture

- [AVSpatialCaptureDiscomfortReason](../avspatialcapturediscomfortreason.md): Constants that indicate the suitability of the current scene to create a comfortable viewing experience.
