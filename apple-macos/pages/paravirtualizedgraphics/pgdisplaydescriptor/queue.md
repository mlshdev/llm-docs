> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplaydescriptor/queue](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaydescriptor/queue)

# queue (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The queue that the framework uses when dispatching messages to any of the display’s registered handlers.

## Declaration

```swift
var queue: dispatch_queue_t? { get set }
```

<a id="Discussion"></a>

## Discussion

Most often, your app provides a serial queue. If you can benefit from dispatching events out of order, handle the messages on the serial queue and redispatch them to other queues as necessary.

# queue (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The queue that the framework uses when dispatching messages to any of the display’s registered handlers.

## Declaration

```objectivec
@property (nonatomic, retain, readwrite, nullable) dispatch_queue_t queue;
```

<a id="Discussion"></a>

## Discussion

Most often, your app provides a serial queue. If you can benefit from dispatching events out of order, handle the messages on the serial queue and redispatch them to other queues as necessary.
