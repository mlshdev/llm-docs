> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioacpiplatformexpert/1563915-evaluateobject

# evaluateObject

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn evaluateObject(IOACPIPlatformDevice *device, const OSSymbol *objectName, OSObject **result, OSObject *params[], IOItemCount paramCount, IOOptionBits options);
```
