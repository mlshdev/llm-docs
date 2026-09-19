> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohidqueueinterface/1493274-getasyncport

# getAsyncPort

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Obtains the current async port.

## Declaration

```objectivec
mach_port_t (*getAsyncPort)(void *self);
```

<a id="return_value"></a>

## Return Value

Returns a mach_port_t.
