> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioextensiblepaniclog/yieldbuffer](https://developer.apple.com/documentation/driverkit/ioextensiblepaniclog/yieldbuffer)

# YieldBuffer

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t YieldBuffer(uint32_t used_len);
```

## Parameters

- `used_len`: The length of the buffer used by the client.

<a id="return-value"></a>

## Return Value

0 in case of success. Negative in case of an error.

<a id="discussion"></a>

## Discussion

This function is called to yield the buffer and set the used_len for the buffer

After this function call, InsertData() and AppendData() can be called.
