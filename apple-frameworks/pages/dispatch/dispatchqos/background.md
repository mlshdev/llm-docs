> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqos/background](https://developer.apple.com/documentation/dispatch/dispatchqos/background)

# background

**Framework:** Dispatch  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

The quality-of-service class for maintenance or cleanup tasks that you create.

## Declaration

```swift
static let background: DispatchQoS
```

<a id="Discussion"></a>

## Discussion

Background tasks have the lowest priority of all tasks. Assign this class to tasks or dispatch queues that you use to perform work while your app is running in the background.

## See Also

### Getting the Predefined QoS Objects

- [userInteractive](userinteractive.md): The quality-of-service class for user-interactive tasks, such as animations, event handling, or updates to your app’s user interface.
- [userInitiated](userinitiated.md): The quality-of-service class for tasks that prevent the user from actively using your app.
- [default](default.md): The default quality-of-service class.
- [utility](utility.md): The quality-of-service class for tasks that the user does not track actively.
- [unspecified](unspecified.md): The absence of a quality-of-service class.
