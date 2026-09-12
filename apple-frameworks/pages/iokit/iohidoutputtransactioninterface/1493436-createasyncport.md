> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohidoutputtransactioninterface/1493436-createasyncport](https://developer.apple.com/documentation/iokit/iohidoutputtransactioninterface/1493436-createasyncport)

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
