> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clmonitoringrecord/lastevent

# lastEvent

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

An object that contains the specifics of the most recent event.

## Declaration

```objectivec
@property (strong, readonly) CLMonitoringEvent * lastEvent;
```

<a id="Discussion"></a>

## Discussion

This includes the state, the date, and the specifics of the condition, if applicable.

## See Also

### Event properties

- [condition](condition.md): The condition that the framework is monitoring events for.
