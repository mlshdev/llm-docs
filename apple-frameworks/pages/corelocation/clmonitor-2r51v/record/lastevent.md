> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitor-2r51v/record/lastevent](https://developer.apple.com/documentation/corelocation/clmonitor-2r51v/record/lastevent)

# lastEvent

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

The most recent event the monitor records.

## Declaration

```swift
let lastEvent: CLMonitor.Event
```

<a id="Discussion"></a>

## Discussion

The event record contains the specifics of the most recent event, including its state, date, and the specifics of the condition, if applicable.

## See Also

### Record characteristics

- [condition](condition.md): The condition that the framework is monitoring for.
