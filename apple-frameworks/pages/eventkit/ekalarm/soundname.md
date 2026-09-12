> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekalarm/soundname](https://developer.apple.com/documentation/eventkit/ekalarm/soundname)

# soundName (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The name of the sound to play when the alarm triggers.

## Declaration

```swift
var soundName: String? { get set }
```

## Mentioned In

- [Setting an alarm](../setting-an-alarm.md)

<a id="Discussion"></a>

## Discussion

The value of this property is the name of a system sound that can be used with the [init(named:)](https://developer.apple.com/documentation/appkit/nssound/init%28named:%29) class method to create an `NSSound` object. Assigning this property a value will set the [emailAddress](emailaddress.md) and [url](url.md) properties to `nil`.

## See Also

### Triggering Alarm Actions

- [EKAlarmType](../ekalarmtype.md): A value that specifies what type of action occurs when the alarm triggers.
- [type](type.md): The type of action to trigger when the alarm fires.
- [emailAddress](emailaddress.md): The recipient of an email to send when the alarm triggers.

# soundName (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The name of the sound to play when the alarm triggers.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * soundName;
```

## Mentioned In

- [Setting an alarm](../setting-an-alarm.md)

<a id="Discussion"></a>

## Discussion

The value of this property is the name of a system sound that can be used with the [soundNamed:](https://developer.apple.com/documentation/appkit/nssound/init%28named:%29) class method to create an `NSSound` object. Assigning this property a value will set the [emailAddress](emailaddress.md) and [url](url.md) properties to `nil`.

## See Also

### Triggering Alarm Actions

- [EKAlarmType](../ekalarmtype.md): A value that specifies what type of action occurs when the alarm triggers.
- [type](type.md): The type of action to trigger when the alarm fires.
- [emailAddress](emailaddress.md): The recipient of an email to send when the alarm triggers.
- [url](url.md): Deprecated. The URL to open when the alarm triggers.
