> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopshardwareserialnumberkey

# kIOPSHardwareSerialNumberKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

A unique serial number that identifies the power source.

## Declaration

```objectivec
#define kIOPSHardwareSerialNumberKey
```

<a id="discussion"></a>

## Discussion

For Apple-manufactured batteries, this is an alphanumeric string generated during the battery manufacturing process.

- Apple-defined power sources will publish this key if the hardware provides the serial number.
- For power source creators: Providing this key is RECOMMENDED.
- Type CFStringRef
