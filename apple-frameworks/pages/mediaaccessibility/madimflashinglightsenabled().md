> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/madimflashinglightsenabled()](https://developer.apple.com/documentation/mediaaccessibility/madimflashinglightsenabled())

# MADimFlashingLightsEnabled() (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+

Returns a Boolean value that indicates whether the flashing lights setting is enabled on the device.

## Declaration

```swift
func MADimFlashingLightsEnabled() -> Bool
```

## See Also

### Dim flashing lights

- [Responding to changes in the flashing lights setting](responding-to-changes-in-the-flashing-lights-setting.md): Adjust your UI when a person chooses to dim flashing lights on their Apple device.
- [kMADimFlashingLightsChangedNotification](kmadimflashinglightschangednotification.md): A notification that posts when a person changes the flashing lights setting on the device.
- [MAFlashingLightsProcessor](maflashinglightsprocessor.md): A class that processes a framebuffer object to detect and dim sequences of flashing lights.

# MADimFlashingLightsEnabled (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+

Returns a Boolean value that indicates whether the flashing lights setting is enabled on the device.

## Declaration

```objectivec
extern bool MADimFlashingLightsEnabled();
```

## See Also

### Dim flashing lights

- [kMADimFlashingLightsChangedNotification](kmadimflashinglightschangednotification.md): A notification that posts when a person changes the flashing lights setting on the device.
- [MAFlashingLightsProcessor](maflashinglightsprocessor.md): A class that processes a framebuffer object to detect and dim sequences of flashing lights.
