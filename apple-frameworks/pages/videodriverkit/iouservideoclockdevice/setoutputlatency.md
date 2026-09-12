> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/setoutputlatency](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/setoutputlatency)

# SetOutputLatency

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the output latency of the clock device.

## Declaration

```objectivec
kern_return_t SetOutputLatency(uint32_t in_latency);
```

## Parameters

- `in_latency`: uint32_t output latency value to set.

<a id="discussion"></a>

## Discussion

Drivers can change the latency of the clock device dynamically. The object sends a notification to the host to update the object state on success. The object’s work queue synchronizes access to the value.

## See Also

### Working with timing and latency

- [GetOutputLatency](getoutputlatency.md): Gets the output latency of the clock device.
- [SetInputLatency](setinputlatency.md): Sets the input latency of the clock device.
- [GetInputLatency](getinputlatency.md): Gets the input latency of the clock device.
