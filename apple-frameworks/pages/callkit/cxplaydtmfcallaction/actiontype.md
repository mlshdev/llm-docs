> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxplaydtmfcallaction/actiontype](https://developer.apple.com/documentation/callkit/cxplaydtmfcallaction/actiontype)

# CXPlayDTMFCallAction.ActionType (Swift)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+ · watchOS 9.0+

The types of events that generate dial tones.

## Declaration

```swift
enum ActionType
```

## Topics

### Constants

- [CXPlayDTMFCallAction.ActionType.singleTone](actiontype/singletone.md): Indicates that the user tapped a digit on the in-call keypad.
- [CXPlayDTMFCallAction.ActionType.softPause](actiontype/softpause.md): Indicates that the user included digits after a soft pause in their dial string. A soft pause is indicated by a comma (`,`) and waits a few seconds before dialing the additional digits.
- [CXPlayDTMFCallAction.ActionType.hardPause](actiontype/hardpause.md): Indicates that the user included digits after a hard pause in their dial string. A hard pause is indicated by a semicolon (`;`) and waits for further user interaction before dialing the additional digits.

### Initializers

- [init(rawValue:)](actiontype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CXPlayDTMFCallActionType (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 9.0+

The types of events that generate dial tones.

## Declaration

```objectivec
enum CXPlayDTMFCallActionType : NSInteger;
```

## Topics

### Constants

- [CXPlayDTMFCallActionTypeSingleTone](actiontype/singletone.md): Indicates that the user tapped a digit on the in-call keypad.
- [CXPlayDTMFCallActionTypeSoftPause](actiontype/softpause.md): Indicates that the user included digits after a soft pause in their dial string. A soft pause is indicated by a comma (`,`) and waits a few seconds before dialing the additional digits.
- [CXPlayDTMFCallActionTypeHardPause](actiontype/hardpause.md): Indicates that the user included digits after a hard pause in their dial string. A hard pause is indicated by a semicolon (`;`) and waits for further user interaction before dialing the additional digits.
