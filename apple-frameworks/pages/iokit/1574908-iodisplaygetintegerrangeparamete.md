> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1574908-iodisplaygetintegerrangeparamete](https://developer.apple.com/documentation/iokit/1574908-iodisplaygetintegerrangeparamete)

# IODisplayGetIntegerRangeParameter

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.0+

## Declaration

```objectivec
IOReturn IODisplayGetIntegerRangeParameter(io_service_t service, IOOptionBits options, CFStringRef parameterName, SInt32 *value, SInt32 *min, SInt32 *max);
```
