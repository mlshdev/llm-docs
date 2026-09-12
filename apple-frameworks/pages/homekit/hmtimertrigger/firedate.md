> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmtimertrigger/firedate](https://developer.apple.com/documentation/homekit/hmtimertrigger/firedate)

# fireDate (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The time at which the trigger will next fire.

## Declaration

```swift
var fireDate: Date { get }
```

<a id="Discussion"></a>

## Discussion

Timer triggers are only set at the beginning of a minute. Seconds are not used and an error will be returned if the fire date includes a seconds value other than 0. When the timer fires, it will typically fire within 1 minute of the scheduled fire date or calculated recurrence fire date, depending on system power and resource management.

## See Also

### Choosing the fire date

- [updateFireDate(\_:completionHandler:)](updatefiredate%28__completionhandler_%29.md): Updates the next fire date for the trigger.

# fireDate (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The time at which the trigger will next fire.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSDate * fireDate;
```

<a id="Discussion"></a>

## Discussion

Timer triggers are only set at the beginning of a minute. Seconds are not used and an error will be returned if the fire date includes a seconds value other than 0. When the timer fires, it will typically fire within 1 minute of the scheduled fire date or calculated recurrence fire date, depending on system power and resource management.

## See Also

### Choosing the fire date

- [updateFireDate:completionHandler:](updatefiredate%28__completionhandler_%29.md): Updates the next fire date for the trigger.
