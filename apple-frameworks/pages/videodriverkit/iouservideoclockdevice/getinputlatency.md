> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getinputlatency

# GetInputLatency

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetOutputLatency](setoutputlatency.md): Beta. Sets the output latency of the clock device.
- [GetOutputLatency](getoutputlatency.md): Beta. Gets the output latency of the clock device.
- [SetInputLatency](setinputlatency.md): Beta. Sets the input latency of the clock device.
