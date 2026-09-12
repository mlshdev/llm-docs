> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkhaptictype](https://developer.apple.com/documentation/watchkit/wkhaptictype)

# WKHapticType (Swift)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+

Constant indicating the style of feedback to deliver using haptics.

## Declaration

```swift
enum WKHapticType
```

## Topics

### Constants

- [WKHapticType.notification](wkhaptictype/notification.md): Alerts the user to an arrived notification when the Watch app is not running in the foreground.
- [WKHapticType.directionUp](wkhaptictype/directionup.md): Indicates an increase in a specific value or when a value has gone above a certain threshold.
- [WKHapticType.directionDown](wkhaptictype/directiondown.md): Indicates a decrease in a specific value or when a value has gone below a certain threshold.
- [WKHapticType.success](wkhaptictype/success.md): Indicates the successful completion of a task or the answering of a question.
- [WKHapticType.failure](wkhaptictype/failure.md): Indicates the failed completion of a task or answering of a question.
- [WKHapticType.retry](wkhaptictype/retry.md): Indicates that the user should retry a task that temporarily failed.
- [WKHapticType.start](wkhaptictype/start.md): Indicates the beginning of an action.
- [WKHapticType.stop](wkhaptictype/stop.md): Indicates the end of an action.
- [WKHapticType.click](wkhaptictype/click.md): Indicates a simple click type of feedback.
- [WKHapticType.navigationGenericManeuver](wkhaptictype/navigationgenericmaneuver.md): Indicates a new navigation step.
- [WKHapticType.navigationLeftTurn](wkhaptictype/navigationleftturn.md): Indicates that the user should turn left.
- [WKHapticType.navigationRightTurn](wkhaptictype/navigationrightturn.md): Indicates that the user should turn right.

### Enumeration Cases

- [WKHapticType.underwaterDepthCriticalPrompt](wkhaptictype/underwaterdepthcriticalprompt.md)
- [WKHapticType.underwaterDepthPrompt](wkhaptictype/underwaterdepthprompt.md)

### Initializers

- [init(rawValue:)](wkhaptictype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Playing Haptic Feedback

- [play(\_:)](wkinterfacedevice/play%28__%29.md): Gives haptic feedback to the user.

# WKHapticType (Objective-C)

**Framework:** WatchKit  
**Kind:** Enumeration  
**Availability:** watchOS 2.0+

Constant indicating the style of feedback to deliver using haptics.

## Declaration

```objectivec
enum WKHapticType : NSInteger;
```

## Topics

### Constants

- [WKHapticTypeNotification](wkhaptictype/notification.md): Alerts the user to an arrived notification when the Watch app is not running in the foreground.
- [WKHapticTypeDirectionUp](wkhaptictype/directionup.md): Indicates an increase in a specific value or when a value has gone above a certain threshold.
- [WKHapticTypeDirectionDown](wkhaptictype/directiondown.md): Indicates a decrease in a specific value or when a value has gone below a certain threshold.
- [WKHapticTypeSuccess](wkhaptictype/success.md): Indicates the successful completion of a task or the answering of a question.
- [WKHapticTypeFailure](wkhaptictype/failure.md): Indicates the failed completion of a task or answering of a question.
- [WKHapticTypeRetry](wkhaptictype/retry.md): Indicates that the user should retry a task that temporarily failed.
- [WKHapticTypeStart](wkhaptictype/start.md): Indicates the beginning of an action.
- [WKHapticTypeStop](wkhaptictype/stop.md): Indicates the end of an action.
- [WKHapticTypeClick](wkhaptictype/click.md): Indicates a simple click type of feedback.
- [WKHapticTypeNavigationGenericManeuver](wkhaptictype/navigationgenericmaneuver.md): Indicates a new navigation step.
- [WKHapticTypeNavigationLeftTurn](wkhaptictype/navigationleftturn.md): Indicates that the user should turn left.
- [WKHapticTypeNavigationRightTurn](wkhaptictype/navigationrightturn.md): Indicates that the user should turn right.

### Enumeration Cases

- [WKHapticTypeUnderwaterDepthCriticalPrompt](wkhaptictype/underwaterdepthcriticalprompt.md)
- [WKHapticTypeUnderwaterDepthPrompt](wkhaptictype/underwaterdepthprompt.md)

## See Also

### Playing Haptic Feedback

- [playHaptic:](wkinterfacedevice/play%28__%29.md): Gives haptic feedback to the user.
