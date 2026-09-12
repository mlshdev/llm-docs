> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqos/utility](https://developer.apple.com/documentation/dispatch/dispatchqos/utility)

# utility

**Framework:** Dispatch  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

The quality-of-service class for tasks that the user does not track actively.

## Declaration

```swift
static let utility: DispatchQoS
```

<a id="Discussion"></a>

## Discussion

Utility tasks have a lower priority than default, user-initiated, and user-interactive tasks, but a higher priority than background tasks. Assign this quality-of-service class to tasks that do not prevent the user from continuing to use your app. For example, you might assign this class to long-running tasks whose progress the user does not follow actively.

## See Also

### Getting the Predefined QoS Objects

- [userInteractive](userinteractive.md): The quality-of-service class for user-interactive tasks, such as animations, event handling, or updates to your app’s user interface.
- [userInitiated](userinitiated.md): The quality-of-service class for tasks that prevent the user from actively using your app.
- [default](default.md): The default quality-of-service class.
- [background](background.md): The quality-of-service class for maintenance or cleanup tasks that you create.
- [unspecified](unspecified.md): The absence of a quality-of-service class.
