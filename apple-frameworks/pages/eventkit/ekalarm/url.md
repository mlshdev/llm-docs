> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekalarm/url](https://developer.apple.com/documentation/eventkit/ekalarm/url)

# url

**Interface language:** Objective-C

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+ (deprecated in 10.9)

The URL to open when the alarm triggers.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * url;
```

## Mentioned In

- [Setting an alarm](../setting-an-alarm.md)

<a id="Discussion"></a>

## Discussion

Assigning this property a value will set the [emailAddress](emailaddress.md) and [soundName](soundname.md) properties to `nil`.

## See Also

### Triggering Alarm Actions

- [EKAlarmType](../ekalarmtype.md): A value that specifies what type of action occurs when the alarm triggers.
- [type](type.md): The type of action to trigger when the alarm fires.
- [emailAddress](emailaddress.md): The recipient of an email to send when the alarm triggers.
- [soundName](soundname.md): The name of the sound to play when the alarm triggers.
