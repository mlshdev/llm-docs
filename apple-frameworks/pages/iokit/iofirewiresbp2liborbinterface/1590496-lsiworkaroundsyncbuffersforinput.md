> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewiresbp2liborbinterface/1590496-lsiworkaroundsyncbuffersforinput](https://developer.apple.com/documentation/iokit/iofirewiresbp2liborbinterface/1590496-lsiworkaroundsyncbuffersforinput)

# LSIWorkaroundSyncBuffersForInput

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Synchronize the buffers for input.

## Declaration

```objectivec
IOReturn (*LSIWorkaroundSyncBuffersForInput)(void *self);
```

## Parameters

- `self`: Pointer to IOFireWireSBP2LibORBInterface.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if sync was successful.

<a id="discussion"></a>

## Discussion

Since double buffering may be invovled in the workaround. The driver needs to indicate when these buffers should be syncronized with the original descriptor. For data that will be input LSIWorkaroundSyncBuffersForInput should be called after receiving completion status for the ORB.
