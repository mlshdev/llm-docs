> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohidoutputtransactioninterface/1493436-createasyncport

# createAsyncPort

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Creates an async port.

## Declaration

```objectivec
IOReturn (*createAsyncPort)(void *self, mach_port_t *port);
```

## Parameters

- `port`: The newly created async port.

<a id="return_value"></a>

## Return Value

Returns an IOReturn code.

<a id="discussion"></a>

## Discussion

This will be used with createAsyncEventSource.
