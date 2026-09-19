> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getcurrentclientsampletime

# GetCurrentClientSampleTime

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the current sample time in the ring buffer that the client reads from and writes to.

## Declaration

```objectivec
void GetCurrentClientSampleTime(uint64_t *out_input_sample_time, uint64_t *out_output_sample_time);
```

## Parameters

- `out_input_sample_time`: A pointer to a uint64_t value that this method sets to the current input sample time the client reads.
- `out_output_sample_time`: A pointer to a uint64_t value that this method sets to the current output sample time the client writes.
