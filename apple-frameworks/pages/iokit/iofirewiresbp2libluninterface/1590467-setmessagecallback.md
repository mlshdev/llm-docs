> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2libluninterface/1590467-setmessagecallback](https://developer.apple.com/documentation/iokit/iofirewiresbp2libluninterface/1590467-setmessagecallback)

# setMessageCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Set callback for user space message routine.

## Declaration

```objectivec
void (*setMessageCallback)(void *self, void *refCon, IOFWSBP2MessageCallback callback);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLUNInterface.
- `refCon`: RefCon to be returned as first argument of completion routine
- `callback`: Address of completion routine.

<a id="discussion"></a>

## Discussion

In FireWire & SBP2 bus status messages are delivered via IOKit's message routine. This routine is emulated in user space for SBP2 & FireWire messages via this callback. You should register here for bus reset, and reconnect messages.
