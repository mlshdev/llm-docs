> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/caclockmessage](https://developer.apple.com/documentation/audiotoolbox/caclockmessage)

# CAClockMessage (Swift)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** macOS

## Declaration

```swift
enum CAClockMessage
```

## Topics

### Constants

- [CAClockMessage.armed](caclockmessage/armed.md)
- [CAClockMessage.disarmed](caclockmessage/disarmed.md)
- [CAClockMessage.propertyChanged](caclockmessage/propertychanged.md)
- [CAClockMessage.startTimeSet](caclockmessage/starttimeset.md)
- [CAClockMessage.started](caclockmessage/started.md)
- [CAClockMessage.stopped](caclockmessage/stopped.md)
- [CAClockMessage.wrongSMPTEFormat](caclockmessage/wrongsmpteformat.md)

### Initializers

- [init(rawValue:)](caclockmessage/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding and Removing Listeners

- [CAClockAddListener(\_:\_:\_:)](caclockaddlistener%28______%29.md)
- [CAClockRemoveListener(\_:\_:\_:)](caclockremovelistener%28______%29.md)
- [CAClockListenerProc](caclocklistenerproc.md)

# CAClockMessage (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration  
**Availability:** macOS

## Declaration

```objectivec
enum CAClockMessage : UInt32;
```

## Topics

### Constants

- [kCAClockMessage_Armed](caclockmessage/armed.md)
- [kCAClockMessage_Disarmed](caclockmessage/disarmed.md)
- [kCAClockMessage_PropertyChanged](caclockmessage/propertychanged.md)
- [kCAClockMessage_StartTimeSet](caclockmessage/starttimeset.md)
- [kCAClockMessage_Started](caclockmessage/started.md)
- [kCAClockMessage_Stopped](caclockmessage/stopped.md)
- [kCAClockMessage_WrongSMPTEFormat](caclockmessage/wrongsmpteformat.md)

## See Also

### Adding and Removing Listeners

- [CAClockAddListener](caclockaddlistener%28______%29.md)
- [CAClockRemoveListener](caclockremovelistener%28______%29.md)
- [CAClockListenerProc](caclocklistenerproc.md)
