> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/alarmkit/alarmmanager/alarms](https://developer.apple.com/documentation/alarmkit/alarmmanager/alarms)

# alarms

**Framework:** AlarmKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Fetches all alarms from the daemon that belong to the current client.

## Declaration

```swift
var alarms: [Alarm] { get throws }
```

<a id="discussion"></a>

## Discussion

As soon as an alarm fires and stops it’s deleted from the daemon’s store.  If you want to determine if a one-shot alarm has fired, persist your alarms in your own store and compare that with the result of this function call.  If the array is missing scheduled alarms, then those alarms fired.

## See Also

### Updating an alarm

- [AlarmManager.AlarmUpdates](alarmupdates-swift.struct.md): An async sequence that publishes whenever an alarm changes.
- [alarmUpdates](alarmupdates-swift.property.md): An asynchronous sequence that emits events when the set of alarms changes.
