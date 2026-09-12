> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/kmadimflashinglightschangednotification](https://developer.apple.com/documentation/mediaaccessibility/kmadimflashinglightschangednotification)

# kMADimFlashingLightsChangedNotification (Swift)

**Framework:** Media Accessibility  
**Kind:** Global Variable  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+

A notification that posts when a person changes the flashing lights setting on the device.

## Declaration

```swift
let kMADimFlashingLightsChangedNotification: CFString
```

## See Also

### Dim flashing lights

- [Responding to changes in the flashing lights setting](responding-to-changes-in-the-flashing-lights-setting.md): Adjust your UI when a person chooses to dim flashing lights on their Apple device.
- [MADimFlashingLightsEnabled()](madimflashinglightsenabled%28%29.md): Returns a Boolean value that indicates whether the flashing lights setting is enabled on the device.
- [MAFlashingLightsProcessor](maflashinglightsprocessor.md): A class that processes a framebuffer object to detect and dim sequences of flashing lights.

# kMADimFlashingLightsChangedNotification (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Global Variable  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+

A notification that posts when a person changes the flashing lights setting on the device.

## Declaration

```objectivec
extern CFStringRef const kMADimFlashingLightsChangedNotification;
```

## See Also

### Dim flashing lights

- [MADimFlashingLightsEnabled](madimflashinglightsenabled%28%29.md): Returns a Boolean value that indicates whether the flashing lights setting is enabled on the device.
- [MAFlashingLightsProcessor](maflashinglightsprocessor.md): A class that processes a framebuffer object to detect and dim sequences of flashing lights.
