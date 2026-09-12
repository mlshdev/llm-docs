> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibunitinterface/1508842-removecallbackdispatcherfromrunl](https://developer.apple.com/documentation/iokit/iofirewireavclibunitinterface/1508842-removecallbackdispatcherfromrunl)

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

- `self`: Pointer to IOFireWireAVCLibUnitInterface.

<a id="discussion"></a>

## Discussion

Undoes the work of addCallbackDispatcherToRunLoop.
