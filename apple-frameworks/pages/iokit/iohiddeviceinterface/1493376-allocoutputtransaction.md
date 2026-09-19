> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohiddeviceinterface/1493376-allocoutputtransaction

# allocOutputTransaction

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

Wrapper to return instances of the IOHIDOutputTransactionInterface.

## Declaration

```objectivec
IOHIDOutputTransactionInterface **(*allocOutputTransaction)(void *self);
```

<a id="return_value"></a>

## Return Value

Returns the created IOHIDOutputTransactionInterface.
