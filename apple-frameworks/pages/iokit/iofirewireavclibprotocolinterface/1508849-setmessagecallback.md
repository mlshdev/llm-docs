> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibprotocolinterface/1508849-setmessagecallback](https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508849-setmessagecallback)

# setMessageCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Sets callback for user space message routine.

## Declaration

```objectivec
void (*setMessageCallback)(void *self, void *refCon, IOFWAVCMessageCallback callback);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibProtocolInterface.
- `refCon`: RefCon to be returned as first argument of completion routine.
- `callback`: Address of completion routine.

<a id="discussion"></a>

## Discussion

In FireWire and AVC, bus status messages are delivered via IOKit's message routine. This routine is emulated in user space for AVC and FireWire messages via this callback. You should register here for bus reset and reconnect messages.
