> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekalarm/type](https://developer.apple.com/documentation/eventkit/ekalarm/type)

# type (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The type of action to trigger when the alarm fires.

## Declaration

```swift
var type: EKAlarmType { get }
```

<a id="Discussion"></a>

## Discussion

To set the type of alarm, define one of [emailAddress](emailaddress.md), [soundName](soundname.md), or [url](url.md).

## See Also

### Triggering Alarm Actions

- [EKAlarmType](../ekalarmtype.md): A value that specifies what type of action occurs when the alarm triggers.
- [emailAddress](emailaddress.md): The recipient of an email to send when the alarm triggers.
- [soundName](soundname.md): The name of the sound to play when the alarm triggers.

# type (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The type of action to trigger when the alarm fires.

## Declaration

```objectivec
@property (nonatomic, readonly) EKAlarmType type;
```

<a id="Discussion"></a>

## Discussion

To set the type of alarm, define one of [emailAddress](emailaddress.md), [soundName](soundname.md), or [url](url.md).

## See Also

### Triggering Alarm Actions

- [EKAlarmType](../ekalarmtype.md): A value that specifies what type of action occurs when the alarm triggers.
- [emailAddress](emailaddress.md): The recipient of an email to send when the alarm triggers.
- [soundName](soundname.md): The name of the sound to play when the alarm triggers.
- [url](url.md): Deprecated. The URL to open when the alarm triggers.
