> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/getoutputlatency](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/getoutputlatency)

# GetOutputLatency

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the output latency of the clock device.

## Declaration

```objectivec
uint32_t GetOutputLatency();
```

<a id="return-value"></a>

## Return Value

The output latency of the clock device.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Timing and Latency

- [GetSupportsPrewarming](getsupportsprewarming.md): Returns a Boolean value that indicates clock device’s support for prewarming.
- [SetZeroTimeStampPeriod](setzerotimestampperiod.md): Sets the zero time stamp of the clock device.
- [GetZeroTimestampPeriod](getzerotimestampperiod.md): Gets the zero time stamp of the clock device.
- [SetOutputLatency](setoutputlatency.md): Sets the output latency of the clock device.
- [SetInputLatency](setinputlatency.md): Sets the input latency of the clock device.
- [GetInputLatency](getinputlatency.md): Get the input latency of the clock device.
