> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/alarmkit/alarmmanager/alarmupdates-swift.property

# alarmUpdates

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

An asynchronous sequence that emits events when the set of alarms changes.

## Declaration

```swift
var alarmUpdates: some AsyncSequence<Array<Alarm>, Never> { get }
```

<a id="discussion"></a>

## Discussion

Use this to receive a notification when an alarm alerts, snoozes, or dismisses.

## See Also

### Updating an alarm

- [AlarmManager.AlarmUpdates](alarmupdates-swift.struct.md): An async sequence that publishes whenever an alarm changes.
- [alarms](alarms.md): Fetches all alarms from the daemon that belong to the current client.
