> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/updatecurrentzerotimestamp](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/updatecurrentzerotimestamp)

# UpdateCurrentZeroTimestamp

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Update the current timestamp value.

## Declaration

```objectivec
void UpdateCurrentZeroTimestamp(uint64_t in_sample_time, uint64_t in_host_time);
```

## Parameters

- `in_sample_time`: uint64_t the most current sample time being tracked by the hardware device.
- `in_host_time`: uint64_t the most current host time being tracked by the hardware device.

<a id="discussion"></a>

## Discussion

Updating the current timestamp should use the time passed in the hardware interrupt.

## See Also

### Accessing timestamps

- [GetCurrentZeroTimestamp](getcurrentzerotimestamp.md): Gets the current zero timestamp value.
