> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekalarmtype](https://developer.apple.com/documentation/eventkit/ekalarmtype)

# EKAlarmType (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A value that specifies what type of action occurs when the alarm triggers.

## Declaration

```swift
enum EKAlarmType
```

## Topics

### Constants

- [EKAlarmType.display](ekalarmtype/display.md): The alarm displays a message.
- [EKAlarmType.audio](ekalarmtype/audio.md): The alarm plays a sound.
- [EKAlarmType.procedure](ekalarmtype/procedure.md): The alarm opens a URL.
- [EKAlarmType.email](ekalarmtype/email.md): The alarm sends an email.

### Initializers

- [init(rawValue:)](ekalarmtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Triggering Alarm Actions

- [type](ekalarm/type.md): The type of action to trigger when the alarm fires.
- [emailAddress](ekalarm/emailaddress.md): The recipient of an email to send when the alarm triggers.
- [soundName](ekalarm/soundname.md): The name of the sound to play when the alarm triggers.

# EKAlarmType (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A value that specifies what type of action occurs when the alarm triggers.

## Declaration

```objectivec
enum EKAlarmType : NSInteger;
```

## Topics

### Constants

- [EKAlarmTypeDisplay](ekalarmtype/display.md): The alarm displays a message.
- [EKAlarmTypeAudio](ekalarmtype/audio.md): The alarm plays a sound.
- [EKAlarmTypeProcedure](ekalarmtype/procedure.md): The alarm opens a URL.
- [EKAlarmTypeEmail](ekalarmtype/email.md): The alarm sends an email.

## See Also

### Triggering Alarm Actions

- [type](ekalarm/type.md): The type of action to trigger when the alarm fires.
- [emailAddress](ekalarm/emailaddress.md): The recipient of an email to send when the alarm triggers.
- [soundName](ekalarm/soundname.md): The name of the sound to play when the alarm triggers.
- [url](ekalarm/url.md): Deprecated. The URL to open when the alarm triggers.
