> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqos/default](https://developer.apple.com/documentation/dispatch/dispatchqos/default)

# default

**Framework:** Dispatch  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

The default quality-of-service class.

## Declaration

```swift
static let `default`: DispatchQoS
```

<a id="Discussion"></a>

## Discussion

Default tasks have a lower priority than user-initiated and user-interactive tasks, but a higher priority than utility and background tasks. Assign this class to tasks or queues that your app initiates or uses to perform active work on the user’s behalf.

## See Also

### Getting the Predefined QoS Objects

- [userInteractive](userinteractive.md): The quality-of-service class for user-interactive tasks, such as animations, event handling, or updates to your app’s user interface.
- [userInitiated](userinitiated.md): The quality-of-service class for tasks that prevent the user from actively using your app.
- [utility](utility.md): The quality-of-service class for tasks that the user does not track actively.
- [background](background.md): The quality-of-service class for maintenance or cleanup tasks that you create.
- [unspecified](unspecified.md): The absence of a quality-of-service class.
