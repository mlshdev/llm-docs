> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1574915-iodisplaysetintegerparameter

# IODisplaySetIntegerParameter

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
IOReturn IODisplaySetIntegerParameter(io_service_t service, IOOptionBits options, CFStringRef parameterName, SInt32 value);
```
