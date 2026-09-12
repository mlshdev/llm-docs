> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/applicationdidchangeocclusionstate(_:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/applicationdidchangeocclusionstate(_:))

# applicationDidChangeOcclusionState(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Tells the delegate about changes to the app’s occlusion state.

## Declaration

```swift
@MainActor optional func applicationDidChangeOcclusionState(_ notification: Notification)
```

## Parameters

- `notification`: A notification named [didChangeOcclusionStateNotification](../nsapplication/didchangeocclusionstatenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

<a id="Discussion"></a>

## Discussion

Upon receiving this method, you can query the application for its occlusion state. Note that this only notifies about changes in the state of the occlusion, not when the occlusion region changes. You can use this method to increase responsiveness and save power by halting any expensive calculations that the user can not see.

# applicationDidChangeOcclusionState: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Tells the delegate about changes to the app’s occlusion state.

## Declaration

```objectivec
- (void) applicationDidChangeOcclusionState:(NSNotification *) notification;
```

## Parameters

- `notification`: A notification named [NSApplicationDidChangeOcclusionStateNotification](../nsapplication/didchangeocclusionstatenotification.md). Calling the [object](https://developer.apple.com/documentation/foundation/nsnotification/object) method of this notification returns the `NSApplication` object itself.

<a id="Discussion"></a>

## Discussion

Upon receiving this method, you can query the application for its occlusion state. Note that this only notifies about changes in the state of the occlusion, not when the occlusion region changes. You can use this method to increase responsiveness and save power by halting any expensive calculations that the user can not see.
