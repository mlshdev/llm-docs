> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekalarm/emailaddress](https://developer.apple.com/documentation/eventkit/ekalarm/emailaddress)

# emailAddress (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The recipient of an email to send when the alarm triggers.

## Declaration

```swift
var emailAddress: String? { get set }
```

## Mentioned In

- [Setting an alarm](../setting-an-alarm.md)

<a id="Discussion"></a>

## Discussion

Assigning this property a value will set the [soundName](soundname.md) and [url](url.md) properties to `nil`.

## See Also

### Triggering Alarm Actions

- [EKAlarmType](../ekalarmtype.md): A value that specifies what type of action occurs when the alarm triggers.
- [type](type.md): The type of action to trigger when the alarm fires.
- [soundName](soundname.md): The name of the sound to play when the alarm triggers.

# emailAddress (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The recipient of an email to send when the alarm triggers.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * emailAddress;
```

## Mentioned In

- [Setting an alarm](../setting-an-alarm.md)

<a id="Discussion"></a>

## Discussion

Assigning this property a value will set the [soundName](soundname.md) and [url](url.md) properties to `nil`.

## See Also

### Triggering Alarm Actions

- [EKAlarmType](../ekalarmtype.md): A value that specifies what type of action occurs when the alarm triggers.
- [type](type.md): The type of action to trigger when the alarm fires.
- [soundName](soundname.md): The name of the sound to play when the alarm triggers.
- [url](url.md): Deprecated. The URL to open when the alarm triggers.
