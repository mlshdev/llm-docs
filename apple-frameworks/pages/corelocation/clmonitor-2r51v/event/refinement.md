> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clmonitor-2r51v/event/refinement

# refinement

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

An optional instance of a condition that represents the most specific condition that this event can apply to.

## Declaration

```swift
let refinement: (any CLCondition)?
```

## See Also

### Event characteristics

- [date](date.md): A date indicating the time of the event.
- [identifier](identifier.md): A string that identifies the event.
- [state](state-swift.property.md): The event’s state.
