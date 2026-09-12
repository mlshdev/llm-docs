> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitoringevent/state](https://developer.apple.com/documentation/corelocation/clmonitoringevent/state)

# state

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

The state of the condition at the time of the event.

## Declaration

```objectivec
@property (nonatomic, readonly) CLMonitoringState state;
```

## See Also

### Event properties

- [date](date.md): The date the event occurs.
- [identifier](identifier.md): A string that represents the identifier of a monitored condition.
- [refinement](refinement.md): An optional instance of a condition that represents the most specific condition to that this event can apply to.
- [CLMonitoringState](../clmonitoringstate.md): Values that represent the current state of a monitoring condition.
