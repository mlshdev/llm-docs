> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/iouseraudiodevice/getcurrentclientiotime

# GetCurrentClientIOTime

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

## Declaration

```objectivec
void GetCurrentClientIOTime(bool in_is_input, uint64_t *out_sample_time, uint64_t *out_host_time);
```
