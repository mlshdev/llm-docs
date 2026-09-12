> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctquickswitchstate](https://developer.apple.com/documentation/coretelephony/ctquickswitchstate)

# CTQuickSwitchState (Swift)

**Framework:** Core Telephony  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Values that describe a device’s quick switch status.

## Declaration

```swift
enum CTQuickSwitchState
```

## Topics

### Creating a quick switch state value

- [init(rawValue:)](ctquickswitchstate/init%28rawvalue_%29.md): Initializes a quick switch state with the provided value.

### Quick switch states

- [CTQuickSwitchState.active](ctquickswitchstate/active.md): This device is the active participant; cellular service is available on this device.
- [CTQuickSwitchState.failed](ctquickswitchstate/failed.md): The framework couldn’t determine the state of the device due to an error.
- [CTQuickSwitchState.notEnrolled](ctquickswitchstate/notenrolled.md): The device or phone number isn’t enrolled in quick switch.
- [CTQuickSwitchState.passive](ctquickswitchstate/passive.md): This device is passive; cellular service is held by another device.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking the state of a device

- [getDeviceState(\_:)](ctquickswitchmanager/getdevicestate%28__%29.md): Gets the quick switch state of the current device.
- [getPhoneNumberState(forSuffix:completion:)](ctquickswitchmanager/getphonenumberstate%28forsuffix_completion_%29.md): Queries the quick switch state for a phone number whose suffix matches the provided phone number suffix.

# CTQuickSwitchState (Objective-C)

**Framework:** Core Telephony  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Values that describe a device’s quick switch status.

## Declaration

```objectivec
enum CTQuickSwitchState : NSInteger;
```

## Topics

### Quick switch states

- [CTQuickSwitchStateActive](ctquickswitchstate/active.md): This device is the active participant; cellular service is available on this device.
- [CTQuickSwitchStateFailed](ctquickswitchstate/failed.md): The framework couldn’t determine the state of the device due to an error.
- [CTQuickSwitchStateNotEnrolled](ctquickswitchstate/notenrolled.md): The device or phone number isn’t enrolled in quick switch.
- [CTQuickSwitchStatePassive](ctquickswitchstate/passive.md): This device is passive; cellular service is held by another device.

## See Also

### Checking the state of a device

- [getDeviceState:](ctquickswitchmanager/getdevicestate%28__%29.md): Gets the quick switch state of the current device.
- [getPhoneNumberStateForSuffix:completion:](ctquickswitchmanager/getphonenumberstate%28forsuffix_completion_%29.md): Queries the quick switch state for a phone number whose suffix matches the provided phone number suffix.
