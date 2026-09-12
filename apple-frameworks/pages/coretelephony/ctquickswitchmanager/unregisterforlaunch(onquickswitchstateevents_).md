> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctquickswitchmanager/unregisterforlaunch(onquickswitchstateevents:)](https://developer.apple.com/documentation/coretelephony/ctquickswitchmanager/unregisterforlaunch(onquickswitchstateevents:))

# unregisterForLaunch(onQuickSwitchStateEvents:) (Swift)

**Framework:** Core Telephony  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Removes the calling app’s registration for background launch on quick switch state changes.

## Declaration

```swift
class func unregisterForLaunch(onQuickSwitchStateEvents completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
class func unregisterForLaunchOnQuickSwitchStateEvents() async throws
```

## Parameters

- `completionHandler`: A completion handler the framework calls after processing the request. The parameter passed to the completion handler indicates whether the request succeeded, failed, or ended in an unknown state.

<a id="Discussion"></a>

## Discussion

Call this method when you want to de-register the current device so it no longer receives quick switch event notifications when your app isn’t running.

After this call succeeds, the system no longer launches the app  in the background when the device’s QuickSwitch state transitions. The framework calls the completion handler with a non-`nil` error if the app was not previously registered or if the the framework couldn’t complete the request.

## See Also

### Registering and unregistering for quick switch events

- [registerForLaunch(onQuickSwitchStateEvents:)](registerforlaunch%28onquickswitchstateevents_%29.md): Registers the calling app for background launch whenever the device’s quick switch state changes.

# unregisterForLaunchOnQuickSwitchStateEvents: (Objective-C)

**Framework:** Core Telephony  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Removes the calling app’s registration for background launch on quick switch state changes.

## Declaration

```objectivec
+ (void) unregisterForLaunchOnQuickSwitchStateEvents:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler the framework calls after processing the request. The parameter passed to the completion handler indicates whether the request succeeded, failed, or ended in an unknown state.

<a id="Discussion"></a>

## Discussion

Call this method when you want to de-register the current device so it no longer receives quick switch event notifications when your app isn’t running.

After this call succeeds, the system no longer launches the app  in the background when the device’s QuickSwitch state transitions. The framework calls the completion handler with a non-`nil` error if the app was not previously registered or if the the framework couldn’t complete the request.

## See Also

### Registering and unregistering for quick switch events

- [registerForLaunchOnQuickSwitchStateEvents:](registerforlaunch%28onquickswitchstateevents_%29.md): Registers the calling app for background launch whenever the device’s quick switch state changes.
