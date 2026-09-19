> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getcurrentzerotimestamp

# GetCurrentZeroTimestamp

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [UpdateCurrentZeroTimestamp](updatecurrentzerotimestamp.md): Beta. Update the current timestamp value.
