> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/setinputlatency](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/setinputlatency)

# SetInputLatency

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the input latency of the clock device.

## Declaration

```objectivec
kern_return_t SetInputLatency(uint32_t in_latency);
```

## Parameters

- `in_latency`: The uint32_t input latency value to set.

<a id="return-value"></a>

## Return Value

A kern_return_t value indicating success or failure.

<a id="discussion"></a>

## Discussion

Drivers can change the latency of the clock device dynamically. If successful, the clock device sends a notification to the host to update the object state. The object’s work queue synchronizes access to this value when it changes.

## See Also

### Working with timing and latency

- [SetOutputLatency](setoutputlatency.md): Sets the output latency of the clock device.
- [GetOutputLatency](getoutputlatency.md): Gets the output latency of the clock device.
- [GetInputLatency](getinputlatency.md): Gets the input latency of the clock device.
