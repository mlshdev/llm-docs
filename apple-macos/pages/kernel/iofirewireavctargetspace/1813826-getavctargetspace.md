> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewireavctargetspace/1813826-getavctargetspace](https://developer.apple.com/documentation/kernel/iofirewireavctargetspace/1813826-getavctargetspace)

# getAVCTargetSpace

**Interface language:** Objective-C

**Framework:** Kernel

returns the IOFireWireAVCTargetSpace object for the given FireWire bus

## Declaration

```objectivec
static IOFireWireAVCTargetSpace *getAVCTargetSpace(
 IOFireWireController *bus); 
```

## Parameters

- `bus`: The FireWire bus

## See Also

### Miscellaneous

- [init](1813830-init.md): initializes the IOFireWireAVCTargetSpace object
- [publishAVCUnitDirectory](1813834-publishavcunitdirectory.md): Creates a local AVC Unit directory if it doesn't already exist
