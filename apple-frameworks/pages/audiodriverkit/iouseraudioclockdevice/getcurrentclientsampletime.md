> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/getcurrentclientsampletime](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/getcurrentclientsampletime)

# GetCurrentClientSampleTime

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets the current sample time in the ring buffer that the client has written to or read from.

## Declaration

```objectivec
void GetCurrentClientSampleTime(uint64_t *out_input_sample_time, uint64_t *out_output_sample_time);
```

## Parameters

- `out_input_sample_time`: On return, the current input sample time read by the client.
- `out_output_sample_time`: On return, the current output sample time written by the client.
