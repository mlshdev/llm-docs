> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmeventtrigger/recurrences](https://developer.apple.com/documentation/homekit/hmeventtrigger/recurrences)

# recurrences (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Specifies the days on which the trigger can execute.

## Declaration

```swift
var recurrences: [DateComponents]? { get }
```

<a id="Discussion"></a>

## Discussion

This property represents the days of the week that the trigger recurs; the trigger ignores all properties other than [weekday](../../foundation/datecomponents/weekday.md) on the [DateComponents](../../foundation/datecomponents.md) object.

## See Also

### Controlling recurrence

- [updateRecurrences(\_:completionHandler:)](updaterecurrences%28__completionhandler_%29.md): Updates the days of the week the trigger can repeat.
- [executeOnce](executeonce.md): A Boolean that can execute the trigger many times.
- [updateExecuteOnce(\_:completionHandler:)](updateexecuteonce%28__completionhandler_%29.md): Updates the repetition status of the event trigger.

# recurrences (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Specifies the days on which the trigger can execute.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSDateComponents *> * recurrences;
```

<a id="Discussion"></a>

## Discussion

This property represents the days of the week that the trigger recurs; the trigger ignores all properties other than [weekday](../../foundation/datecomponents/weekday.md) on the [DateComponents](../../foundation/datecomponents.md) object.

## See Also

### Controlling recurrence

- [updateRecurrences:completionHandler:](updaterecurrences%28__completionhandler_%29.md): Updates the days of the week the trigger can repeat.
- [executeOnce](executeonce.md): A Boolean that can execute the trigger many times.
- [updateExecuteOnce:completionHandler:](updateexecuteonce%28__completionhandler_%29.md): Updates the repetition status of the event trigger.
