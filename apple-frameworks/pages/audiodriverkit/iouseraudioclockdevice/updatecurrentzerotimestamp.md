> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/updatecurrentzerotimestamp](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/updatecurrentzerotimestamp)

# UpdateCurrentZeroTimestamp

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Updates the current timestamp value.

## Declaration

```objectivec
void UpdateCurrentZeroTimestamp(uint64_t in_sample_time, uint64_t in_host_time);
```

## Parameters

- `in_sample_time`: The most current sample time tracked by the hardware device.
- `in_host_time`: The most current host time tracked by the hardware device.

<a id="Discussion"></a>

## Discussion

Updating the current timestamp should use the time passed in the hardware interrupt.

## See Also

### Accessing Timestamps

- [GetCurrentZeroTimestamp](getcurrentzerotimestamp.md): Gets the current zero timestamp value.
