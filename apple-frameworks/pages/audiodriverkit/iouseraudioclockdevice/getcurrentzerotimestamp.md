> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/getcurrentzerotimestamp](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/getcurrentzerotimestamp)

# GetCurrentZeroTimestamp

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the current zero timestamp value.

## Declaration

```objectivec
void GetCurrentZeroTimestamp(uint64_t *out_sample_time, uint64_t *out_host_time);
```

## Parameters

- `out_sample_time`: On return, the most current sample time tracked by the hardware device.
- `out_host_time`: On return, the most current host time tracked by the hardware device.

## See Also

### Accessing Timestamps

- [UpdateCurrentZeroTimestamp](updatecurrentzerotimestamp.md): Updates the current timestamp value.
