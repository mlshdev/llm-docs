> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/driverkit/ioextensiblepaniclog/claimbuffer](https://developer.apple.com/documentation/driverkit/ioextensiblepaniclog/claimbuffer)

# ClaimBuffer

**Interface language:** Objective-C

**Framework:** DriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · iOS · iPadOS · macOS

## Declaration

```objectivec
virtual kern_return_t ClaimBuffer(uint64_t *addr, uint64_t *len);
```

## Parameters

- `addr`: Address of the mapped buffer
- `len`: The length of the mapped buffer. This is same value as the max_len in the Create() function

<a id="return-value"></a>

## Return Value

0 in case of success. Negative in case of an error.

<a id="discussion"></a>

## Discussion

This function is called to get a pointer to the ext paniclog buffer

After this function is called, the user is responsible for copying data into the buffer. The entire buffer is copied when a system panics. After claiming the buffer, YieldBuffer() has to be called to set the used_len of the buffer before calling InsertData() or AppendData()
