> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewiresbp2libluninterface/1590424-removecallbackdispatcherfromrunl

# removeCallbackDispatcherFromRunLoop

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Removes a dispatcher for kernel callbacks from the specified runloop.

## Declaration

```objectivec
void (*removeCallbackDispatcherFromRunLoop)(void *self);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibLUNInterface.

<a id="discussion"></a>

## Discussion

Undoes the work of addCallbackDispatcherToRunLoop.
