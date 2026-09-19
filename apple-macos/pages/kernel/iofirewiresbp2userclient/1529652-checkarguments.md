> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewiresbp2userclient/1529652-checkarguments

# checkArguments

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn checkArguments(IOExternalMethodArguments *args, uint32_t scalarInCount, uint32_t structInCount, uint32_t scalarOutCount, uint32_t structOutCount);
```
