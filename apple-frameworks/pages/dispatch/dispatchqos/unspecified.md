> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqos/unspecified](https://developer.apple.com/documentation/dispatch/dispatchqos/unspecified)

# unspecified

**Framework:** Dispatch  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The absence of a quality-of-service class.

## Declaration

```swift
static let unspecified: DispatchQoS
```

## See Also

### Getting the Predefined QoS Objects

- [userInteractive](userinteractive.md): The quality-of-service class for user-interactive tasks, such as animations, event handling, or updates to your app’s user interface.
- [userInitiated](userinitiated.md): The quality-of-service class for tasks that prevent the user from actively using your app.
- [default](default.md): The default quality-of-service class.
- [utility](utility.md): The quality-of-service class for tasks that the user does not track actively.
- [background](background.md): The quality-of-service class for maintenance or cleanup tasks that you create.
