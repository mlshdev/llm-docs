> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/updatecurrentzerotimestamp

# UpdateCurrentZeroTimestamp

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [GetCurrentZeroTimestamp](getcurrentzerotimestamp.md): Beta. Gets the current zero timestamp value.
