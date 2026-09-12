> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isportraiteffectactive](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isportraiteffectactive)

# isPortraitEffectActive (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

A Boolean value that indicates whether the Portrait video effect is active on a device.

## Declaration

```swift
var isPortraitEffectActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When active, the device blurs the background, simulating a shallow depth of field effect. The device also limits the values of its [activeVideoMinFrameDuration](activevideominframeduration.md) and [activeVideoMaxFrameDuration](activevideomaxframeduration.md) to the value that the device format’s [videoFrameRateRangeForPortraitEffect](format/videoframeraterangeforportraiteffect.md) specifies.

When a capture device’s [isPortraitEffectEnabled](isportraiteffectenabled.md) property value is [true](https://developer.apple.com/documentation/swift/true), it may also return [true](https://developer.apple.com/documentation/swift/true) for this property, depending on whether it supports the feature in its current configuration.

This property is key-value observable.

## See Also

### Inspecting the Portrait Effect settings

- [isPortraitEffectEnabled](isportraiteffectenabled.md): A Boolean value that indicates whether the user enabled the Portrait video effect in Control Center.

# portraitEffectActive (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

A Boolean value that indicates whether the Portrait video effect is active on a device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isPortraitEffectActive) BOOL portraitEffectActive;
```

<a id="Discussion"></a>

## Discussion

When active, the device blurs the background, simulating a shallow depth of field effect. The device also limits the values of its [activeVideoMinFrameDuration](activevideominframeduration.md) and [activeVideoMaxFrameDuration](activevideomaxframeduration.md) to the value that the device format’s [videoFrameRateRangeForPortraitEffect](format/videoframeraterangeforportraiteffect.md) specifies.

When a capture device’s [portraitEffectEnabled](isportraiteffectenabled.md) property value is [true](https://developer.apple.com/documentation/swift/true), it may also return [true](https://developer.apple.com/documentation/swift/true) for this property, depending on whether it supports the feature in its current configuration.

This property is key-value observable.

## See Also

### Inspecting the Portrait Effect settings

- [portraitEffectEnabled](isportraiteffectenabled.md): A Boolean value that indicates whether the user enabled the Portrait video effect in Control Center.
