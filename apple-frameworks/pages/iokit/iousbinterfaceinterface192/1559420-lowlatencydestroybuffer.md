> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbinterfaceinterface192/1559420-lowlatencydestroybuffer

# LowLatencyDestroyBuffer

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

Releases a buffer that was previously allocated using LowLatencyCreateBuffer().

## Declaration

```objectivec
IOReturn (*LowLatencyDestroyBuffer)(void *self, void *buffer);
```

## Parameters

- `self`: Pointer to the IOUSBInterfaceInterface.
- `buffer`: Pointer to the buffer previously allocated using LowLatencyCreateBuffer().

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, or kIOReturnNotOpen if the interface is not open for exclusive access. If the buffer was not previously allocated using LowLatencyCreateBuffer() it will return kIOReturnBadArgument.

<a id="discussion"></a>

## Discussion

The interface must be open for the pipe to exist.
