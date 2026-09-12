> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchqos/qosclass-swift.enum/default](https://developer.apple.com/documentation/dispatch/dispatchqos/qosclass-swift.enum/default)

# DispatchQoS.QoSClass.default

**Framework:** Dispatch  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS · visionOS · watchOS

The default quality-of-service class.

## Declaration

```swift
case `default`
```

<a id="Discussion"></a>

## Discussion

Default tasks have a lower priority than user-initiated and user-interactive tasks, but a higher priority than utility and background tasks. Assign this class to tasks or queues that your app initiates or uses to perform active work on the user’s behalf.

## See Also

### Getting the Quality-of-Service Class

- [DispatchQoS.QoSClass.userInteractive](userinteractive.md): The quality-of-service class for user-interactive tasks, such as animations, event handling, or updating your app’s user interface.
- [DispatchQoS.QoSClass.userInitiated](userinitiated.md): The quality-of-service class for tasks that prevent the user from actively using your app.
- [DispatchQoS.QoSClass.utility](utility.md): The quality-of-service class for tasks that the user does not track actively.
- [DispatchQoS.QoSClass.background](background.md): The quality-of-service class for maintenance or cleanup tasks that you create.
- [DispatchQoS.QoSClass.unspecified](unspecified.md): The absence of a quality-of-service class.
