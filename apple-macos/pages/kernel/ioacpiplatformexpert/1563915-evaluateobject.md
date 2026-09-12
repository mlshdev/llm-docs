> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioacpiplatformexpert/1563915-evaluateobject](https://developer.apple.com/documentation/kernel/ioacpiplatformexpert/1563915-evaluateobject)

# evaluateObject

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn evaluateObject(IOACPIPlatformDevice *device, const OSSymbol *objectName, OSObject **result, OSObject *params[], IOItemCount paramCount, IOOptionBits options);
```
