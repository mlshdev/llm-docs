> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/getcurrentzerotimestamp](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getcurrentzerotimestamp)

# GetCurrentZeroTimestamp

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets the current zero timestamp value.

## Declaration

```objectivec
void GetCurrentZeroTimestamp(uint64_t *out_sample_time, uint64_t *out_host_time);
```

## Parameters

- `out_sample_time`: Pointer to uint64_t that will be set with last updated sample time.
- `out_host_time`: Pointer to uint64_t that will be set with last updated host time.

## See Also

### Accessing timestamps

- [UpdateCurrentZeroTimestamp](updatecurrentzerotimestamp.md): Update the current timestamp value.
