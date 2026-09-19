> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewireavctargetspace/1813834-publishavcunitdirectory

# publishAVCUnitDirectory

**Interface language:** Objective-C

**Framework:** Kernel

Creates a local AVC Unit directory if it doesn't already exist

## Declaration

```objectivec
virtual IOReturn publishAVCUnitDirectory(
 void); 
```

## See Also

### Miscellaneous

- [getAVCTargetSpace](1813826-getavctargetspace.md): returns the IOFireWireAVCTargetSpace object for the given FireWire bus
- [init](1813830-init.md): initializes the IOFireWireAVCTargetSpace object
