> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clmonitorconfiguration/eventhandler

# eventHandler

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

The block the framework calls as the event handler for the location monitor instance.

## Declaration

```objectivec
@property (nonatomic, readonly) void (^eventHandler)(CLMonitor *monitor, CLMonitoringEvent *event);
```

## See Also

### Instance properties

- [name](name.md): The name of the monitor instance.
- [queue](queue.md): The dispatch queue to bind the instance of a location monitor to.
