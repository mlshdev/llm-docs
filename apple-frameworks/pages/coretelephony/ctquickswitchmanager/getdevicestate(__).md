> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctquickswitchmanager/getdevicestate(_:)](https://developer.apple.com/documentation/coretelephony/ctquickswitchmanager/getdevicestate(_:))

# getDeviceState(\_:) (Swift)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Gets the quick switch state of the current device.

## Declaration

```swift
func getDeviceState(_ completionHandler: @escaping @Sendable (CTQuickSwitchState, (any Error)?) -> Void)
```

```swift
var deviceState: CTQuickSwitchState { get async throws }
```

## Parameters

- `completionHandler`: A completion handler the framework calls after processing the request. The parameters passed to the completion handler indicate the [CTQuickSwitchState](../ctquickswitchstate.md) and an error value that indicates whether the request succeeded, failed, or ended in an unknown state.

## See Also

### Checking the state of a device

- [getPhoneNumberState(forSuffix:completion:)](getphonenumberstate%28forsuffix_completion_%29.md): Queries the quick switch state for a phone number whose suffix matches the provided phone number suffix.
- [CTQuickSwitchState](../ctquickswitchstate.md): Values that describe a device’s quick switch status.

# getDeviceState: (Objective-C)

**Framework:** Core Telephony  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Gets the quick switch state of the current device.

## Declaration

```objectivec
- (void) getDeviceState:(void (^)(CTQuickSwitchState state, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler the framework calls after processing the request. The parameters passed to the completion handler indicate the [CTQuickSwitchState](../ctquickswitchstate.md) and an error value that indicates whether the request succeeded, failed, or ended in an unknown state.

## See Also

### Checking the state of a device

- [getPhoneNumberStateForSuffix:completion:](getphonenumberstate%28forsuffix_completion_%29.md): Queries the quick switch state for a phone number whose suffix matches the provided phone number suffix.
- [CTQuickSwitchState](../ctquickswitchstate.md): Values that describe a device’s quick switch status.
