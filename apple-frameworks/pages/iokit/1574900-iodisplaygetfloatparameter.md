> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1574900-iodisplaygetfloatparameter

# IODisplayGetFloatParameter

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
IOReturn IODisplayGetFloatParameter(io_service_t service, IOOptionBits options, CFStringRef parameterName, float *value);
```
