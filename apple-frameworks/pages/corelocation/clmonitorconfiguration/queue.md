> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitorconfiguration/queue](https://developer.apple.com/documentation/corelocation/clmonitorconfiguration/queue)

# queue

**Interface language:** Objective-C

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

The dispatch queue to bind the instance of a location monitor to.

## Declaration

```objectivec
@property (readonly) dispatch_queue_t queue;
```

<a id="Discussion"></a>

## Discussion

You need to perform all interactions related to the [CLMonitor](../clmonitor-2r51v.md) instance on this queue, and the framework delivers events that the `CLMonitor` instance generates to the handler on this queue.

## See Also

### Instance properties

- [eventHandler](eventhandler.md): The block the framework calls as the event handler for the location monitor instance.
- [name](name.md): The name of the monitor instance.
