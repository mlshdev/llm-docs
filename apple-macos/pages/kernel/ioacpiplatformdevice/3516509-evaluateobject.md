> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioacpiplatformdevice/3516509-evaluateobject

# evaluateObject

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
virtual IOReturn evaluateObject(const char *objectName, OSObject **result, OSObject *params[], IOItemCount paramCount, IOOptionBits options);
```
