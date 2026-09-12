> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iohiddeviceinterface/1493376-allocoutputtransaction](https://developer.apple.com/documentation/iokit/iohiddeviceinterface/1493376-allocoutputtransaction)

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
