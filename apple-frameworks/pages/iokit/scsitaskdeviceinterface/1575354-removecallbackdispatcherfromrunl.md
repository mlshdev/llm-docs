> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/scsitaskdeviceinterface/1575354-removecallbackdispatcherfromrunl

# RemoveCallbackDispatcherFromRunLoop

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Convenience method to remove asynchronous callback mechanisms from the CFRunLoop.

## Declaration

```objectivec
void (*RemoveCallbackDispatcherFromRunLoop)(void *self);
```

## Parameters

- `self`: Pointer to a SCSITaskDeviceInterface instance.

<a id="discussion"></a>

## Discussion

Once a SCSITaskDeviceInterface is opened, the client may make synchronous or asynchronous requests to the device. This method removes the asynchronous notifications delivered via the CFRunLoop. This should be called only after calling AddCallbackDispatcherToRunLoop.
