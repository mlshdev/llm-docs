> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidelementcollectiontype](https://developer.apple.com/documentation/kernel/iohidelementcollectiontype)

# IOHIDElementCollectionType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

Describes different types of HID collections.

## Declaration

```objectivec
typedef enum IOHIDElementCollectionType IOHIDElementCollectionType;
```

<a id="discussion"></a>

## Discussion

Collections identify a relationship between two or more elements.

## Topics

### Constants

- [kIOHIDElementCollectionTypePhysical](iohidelementcollectiontype/kiohidelementcollectiontypephysical.md)
- [kIOHIDElementCollectionTypeApplication](iohidelementcollectiontype/kiohidelementcollectiontypeapplication.md)
- [kIOHIDElementCollectionTypeLogical](iohidelementcollectiontype/kiohidelementcollectiontypelogical.md)
- [kIOHIDElementCollectionTypeReport](iohidelementcollectiontype/kiohidelementcollectiontypereport.md)
- [kIOHIDElementCollectionTypeNamedArray](iohidelementcollectiontype/kiohidelementcollectiontypenamedarray.md)
- [kIOHIDElementCollectionTypeUsageSwitch](iohidelementcollectiontype/kiohidelementcollectiontypeusageswitch.md)
- [kIOHIDElementCollectionTypeUsageModifier](iohidelementcollectiontype/kiohidelementcollectiontypeusagemodifier.md)

## See Also

### HID Elements

- [IOHIDElementCommitDirection](iohidelementcommitdirection.md)
- [IOHIDElementCookie](iohidelementcookie.md): Abstract data type used as a unique identifier for an element.
- [IOHIDElementFlags](iohidelementflags.md)
- [IOHIDElementType](iohidelementtype.md): Describes different types of HID elements.
- [IOHIDValueOptions](iohidvalueoptions.md): Describes options for gathering element values.

### Related Documentation

- [IOHIDElementCollectionType](https://developer.apple.com/documentation/iokit/iohidelementcollectiontype): Describes different types of HID collections.
