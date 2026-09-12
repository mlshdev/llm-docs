> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/setzerotimestampperiod](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/setzerotimestampperiod)

# SetZeroTimeStampPeriod

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets the zero time stamp of the clock device.

## Declaration

```objectivec
kern_return_t SetZeroTimeStampPeriod(uint32_t in_zts_period);
```

## Parameters

- `in_zts_period`: The zero time stamp period.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The parameter indicates the number of sample frames the host can expect between successive timestamps returned from [GetCurrentZeroTimestamp](getcurrentzerotimestamp.md). In other words, if [GetCurrentZeroTimestamp](getcurrentzerotimestamp.md) returns a sample time of `x`, the host can expect that the next valid timestamp it recieves will be `x + in_zero_timestamp_period`.

Only set this value during the [PerformDeviceConfigurationChange](performdeviceconfigurationchange.md) call. If you need to change the value at any other time, call [RequestDeviceConfigurationChange](requestdeviceconfigurationchange.md). This allows I/O to stop and calls [PerformDeviceConfigurationChange](performdeviceconfigurationchange.md), during which you can set the value.

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Timing and Latency

- [GetSupportsPrewarming](getsupportsprewarming.md): Returns a Boolean value that indicates clock device’s support for prewarming.
- [GetZeroTimestampPeriod](getzerotimestampperiod.md): Gets the zero time stamp of the clock device.
- [SetOutputLatency](setoutputlatency.md): Sets the output latency of the clock device.
- [GetOutputLatency](getoutputlatency.md): Gets the output latency of the clock device.
- [SetInputLatency](setinputlatency.md): Sets the input latency of the clock device.
- [GetInputLatency](getinputlatency.md): Get the input latency of the clock device.
