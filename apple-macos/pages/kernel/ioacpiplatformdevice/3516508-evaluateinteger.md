> Snapshot-pinned source payload for Apple macOS snapshot-8257b11be327; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ioacpiplatformdevice/3516508-evaluateinteger

# evaluateInteger

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.15.2+

## Declaration

```objectivec
virtual IOReturn evaluateInteger(const char *objectName, UInt64 *resultInt64, OSObject *params[], IOItemCount paramCount, IOOptionBits options);
```
