> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiapplication/state-swift.enum](https://developer.apple.com/documentation/xcuiautomation/xcuiapplication/state-swift.enum)

# XCUIApplication.State (Swift)

**Framework:** XCUIAutomation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The possible states of an application during UI testing.

## Declaration

```swift
enum State
```

## Topics

### Enumeration cases

- [XCUIApplication.State.unknown](state-swift.enum/unknown.md): The application’s current state is unknown.
- [XCUIApplication.State.notRunning](state-swift.enum/notrunning.md): The application isn’t running.
- [XCUIApplication.State.runningBackgroundSuspended](state-swift.enum/runningbackgroundsuspended.md): The application is running in the background, but is suspended.
- [XCUIApplication.State.runningBackground](state-swift.enum/runningbackground.md): The application is running in the background.
- [XCUIApplication.State.runningForeground](state-swift.enum/runningforeground.md): The application is running in the foreground.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Determining application state

- [state](state-swift.property.md): The most recent state of the application.

# XCUIApplicationState (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

The possible states of an application during UI testing.

## Declaration

```objectivec
enum XCUIApplicationState : NSUInteger;
```

## Topics

### Enumeration cases

- [XCUIApplicationStateUnknown](state-swift.enum/unknown.md): The application’s current state is unknown.
- [XCUIApplicationStateNotRunning](state-swift.enum/notrunning.md): The application isn’t running.
- [XCUIApplicationStateRunningBackgroundSuspended](state-swift.enum/runningbackgroundsuspended.md): The application is running in the background, but is suspended.
- [XCUIApplicationStateRunningBackground](state-swift.enum/runningbackground.md): The application is running in the background.
- [XCUIApplicationStateRunningForeground](state-swift.enum/runningforeground.md): The application is running in the foreground.

## See Also

### Determining application state

- [state](state-swift.property.md): The most recent state of the application.
