> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/calendar/recurrencerule/repeatedtimepolicy](https://developer.apple.com/documentation/foundation/calendar/recurrencerule/repeatedtimepolicy)

# repeatedTimePolicy

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

What to do when there are multiple recurrences occurring at the same time of the day but in different time zones due to a daylight saving transition.

## Declaration

```swift
var repeatedTimePolicy: Calendar.RepeatedTimePolicy
```

<a id="discussion"></a>

## Discussion

For example, an event with daily recurrence rule that starts at 1 am on November 2 in PDT will repeat on:

- 2024-11-02 01:00 PDT (08:00 UTC)
- 2024-11-03 01:00 PDT (08:00 UTC), if `repeatedTimePolicy = .first` (Time zone switches from PST to PDT - clock jumps back one hour at 02:00 PDT)
- 2024-11-03 01:00 PST (09:00 UTC), if `repeatedTimePolicy = .last`
- 2024-11-04 01:00 PST (09:00 UTC)

Due to the time zone switch on November 3, there are different times when the event might repeat.

Default value is `.first`
