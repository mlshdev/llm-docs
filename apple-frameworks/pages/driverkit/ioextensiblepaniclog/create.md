> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioextensiblepaniclog/create](https://developer.apple.com/documentation/driverkit/ioextensiblepaniclog/create)

# Create

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Static Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
static kern_return_t Create(OSData *uuid, OSString *data_id, uint32_t max_len, uint32_t options, IOExtensiblePaniclog **out);
```

## Parameters

- `uuid`: The UUID of the handle.
- `data_id`: The string describing the handle. MAX length of 32.
- `max_len`: The maximum length of the buffer.
- `options`: Options to be passed while creating the handle
- `out`: The pointer to the created IOExtensiblePaniclog object. NULL in case of an error.

<a id="return-value"></a>

## Return Value

True in case of success. False in case of an error.

<a id="discussion"></a>

## Discussion

This function is to be called to create IOExtensiblePaniclog object.

First function to be called.
