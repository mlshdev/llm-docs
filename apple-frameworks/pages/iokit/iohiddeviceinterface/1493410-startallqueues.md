> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohiddeviceinterface/1493410-startallqueues

# startAllQueues

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Starts data delivery on all queues for this device.

## Declaration

```objectivec
IOReturn (*startAllQueues)(void *self);
```

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.
