> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitoringevent/identifier](https://developer.apple.com/documentation/corelocation/clmonitoringevent/identifier)

# identifier

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

A string that represents the identifier of a monitored condition.

## Declaration

```objectivec
@property (strong, readonly) NSString * identifier;
```

## See Also

### Event properties

- [date](date.md): The date the event occurs.
- [refinement](refinement.md): An optional instance of a condition that represents the most specific condition to that this event can apply to.
- [state](state.md): The state of the condition at the time of the event.
- [CLMonitoringState](../clmonitoringstate.md): Values that represent the current state of a monitoring condition.
