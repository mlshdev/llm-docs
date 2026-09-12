> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/getinputlatency](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getinputlatency)

# GetInputLatency

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the input latency of the clock device.

## Declaration

```objectivec
uint32_t GetInputLatency();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with timing and latency

- [SetOutputLatency](setoutputlatency.md): Sets the output latency of the clock device.
- [GetOutputLatency](getoutputlatency.md): Gets the output latency of the clock device.
- [SetInputLatency](setinputlatency.md): Sets the input latency of the clock device.
