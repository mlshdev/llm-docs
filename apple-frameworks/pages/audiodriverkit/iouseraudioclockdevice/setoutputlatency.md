> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/setoutputlatency](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/setoutputlatency)

# SetOutputLatency

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the output latency of the clock device.

## Declaration

```objectivec
kern_return_t SetOutputLatency(uint32_t in_latency);
```

## Parameters

- `in_latency`: The output latency value to set.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

Drivers can change the output latency of the clock device dynamically. If successful, changing the available output latency sends a notification to the host to update the object state.

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Timing and Latency

- [GetSupportsPrewarming](getsupportsprewarming.md): Returns a Boolean value that indicates clock device’s support for prewarming.
- [SetZeroTimeStampPeriod](setzerotimestampperiod.md): Sets the zero time stamp of the clock device.
- [GetZeroTimestampPeriod](getzerotimestampperiod.md): Gets the zero time stamp of the clock device.
- [GetOutputLatency](getoutputlatency.md): Gets the output latency of the clock device.
- [SetInputLatency](setinputlatency.md): Sets the input latency of the clock device.
- [GetInputLatency](getinputlatency.md): Get the input latency of the clock device.
