> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewireavclibprotocolinterface/1508824-removecallbackdispatcherfromrunl

# removeCallbackDispatcherFromRunLoop

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Removes a dispatcher for kernel callbacks to the specified run loop.

## Declaration

```objectivec
void (*removeCallbackDispatcherFromRunLoop)(void *self);
```

## Parameters

- `self`: Pointer to IOFireWireAVCLibProtocolInterface.

<a id="discussion"></a>

## Discussion

Undoes the work of addCallbackDispatcherToRunLoop.
