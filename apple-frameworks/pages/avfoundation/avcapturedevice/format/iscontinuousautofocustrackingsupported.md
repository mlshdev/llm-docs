> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/format/iscontinuousautofocustrackingsupported](https://developer.apple.com/documentation/avfoundation/avcapturedevice/format/iscontinuousautofocustrackingsupported)

# isContinuousAutoFocusTrackingSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Indicates whether the device format supports continuous autofocus tracking.

## Declaration

```swift
var isContinuousAutoFocusTrackingSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

Continuous autofocus tracking allows the device to keep a subject in focus by monitoring it as it moves throughout the scene. The device’s [isContinuousAutoFocusTrackingEnabled](../iscontinuousautofocustrackingenabled.md) property can only be set if this property returns `true`.

# continuousAutoFocusTrackingSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Indicates whether the device format supports continuous autofocus tracking.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isContinuousAutoFocusTrackingSupported) BOOL continuousAutoFocusTrackingSupported;
```

<a id="discussion"></a>

## Discussion

Continuous autofocus tracking allows the device to keep a subject in focus by monitoring it as it moves throughout the scene. The device’s [continuousAutoFocusTrackingEnabled](../iscontinuousautofocustrackingenabled.md) property can only be set if this property returns `true`.
