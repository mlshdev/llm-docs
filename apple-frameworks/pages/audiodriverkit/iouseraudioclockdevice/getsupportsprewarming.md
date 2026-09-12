> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/getsupportsprewarming](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/getsupportsprewarming)

# GetSupportsPrewarming

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Returns a Boolean value that indicates clock device’s support for prewarming.

## Declaration

```objectivec
bool GetSupportsPrewarming();
```

<a id="return-value"></a>

## Return Value

`true` if the clock device supports prewarming; `false` otherwise.

<a id="Discussion"></a>

## Discussion

A device that supports prewarming can enable a minimal state that allows it to be ready to start audio I/O immediately on demand.

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Timing and Latency

- [SetZeroTimeStampPeriod](setzerotimestampperiod.md): Sets the zero time stamp of the clock device.
- [GetZeroTimestampPeriod](getzerotimestampperiod.md): Gets the zero time stamp of the clock device.
- [SetOutputLatency](setoutputlatency.md): Sets the output latency of the clock device.
- [GetOutputLatency](getoutputlatency.md): Gets the output latency of the clock device.
- [SetInputLatency](setinputlatency.md): Sets the input latency of the clock device.
- [GetInputLatency](getinputlatency.md): Get the input latency of the clock device.
