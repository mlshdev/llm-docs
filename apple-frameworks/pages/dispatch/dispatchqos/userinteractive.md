> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqos/userinteractive](https://developer.apple.com/documentation/dispatch/dispatchqos/userinteractive)

# userInteractive

**Framework:** Dispatch  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

The quality-of-service class for user-interactive tasks, such as animations, event handling, or updates to your app’s user interface.

## Declaration

```swift
static let userInteractive: DispatchQoS
```

<a id="Discussion"></a>

## Discussion

User-interactive tasks have the highest priority on the system. Use this class for tasks or queues that interact with the user or actively update your app’s user interface. For example, use this class for animations or for tracking events interactively.

## See Also

### Getting the Predefined QoS Objects

- [userInitiated](userinitiated.md): The quality-of-service class for tasks that prevent the user from actively using your app.
- [default](default.md): The default quality-of-service class.
- [utility](utility.md): The quality-of-service class for tasks that the user does not track actively.
- [background](background.md): The quality-of-service class for maintenance or cleanup tasks that you create.
- [unspecified](unspecified.md): The absence of a quality-of-service class.
