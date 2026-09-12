> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iovideocontroldictionary/1517829-createbooleancontrol](https://developer.apple.com/documentation/kernel/iovideocontroldictionary/1517829-createbooleancontrol)

# createBooleanControl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static OSDictionary * createBooleanControl(UInt32 controlID, UInt32 baseClass, UInt32 derivedClass, UInt32 scope, UInt32 element, bool value, bool isReadOnly, UInt32 variant, OSString *name);
```
