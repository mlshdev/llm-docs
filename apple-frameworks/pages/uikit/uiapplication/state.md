> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/state](https://developer.apple.com/documentation/uikit/uiapplication/state)

# UIApplication.State (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Constants that indicate the running states of an app.

## Declaration

```swift
enum State
```

## Topics

### Constants

- [UIApplication.State.active](state/active.md): The app is running in the foreground and currently receiving events.
- [UIApplication.State.inactive](state/inactive.md): The app is running in the foreground but isn’t receiving events.
- [UIApplication.State.background](state/background.md): The app is running in the background.

### Initializers

- [init(rawValue:)](state/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the application state

- [applicationState](applicationstate.md): The app’s current state, or that of its most active scene.

# UIApplicationState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Constants that indicate the running states of an app.

## Declaration

```objectivec
enum UIApplicationState : NSInteger;
```

## Topics

### Constants

- [UIApplicationStateActive](state/active.md): The app is running in the foreground and currently receiving events.
- [UIApplicationStateInactive](state/inactive.md): The app is running in the foreground but isn’t receiving events.
- [UIApplicationStateBackground](state/background.md): The app is running in the background.

## See Also

### Getting the application state

- [applicationState](applicationstate.md): The app’s current state, or that of its most active scene.
