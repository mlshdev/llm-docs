> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidelementtype](https://developer.apple.com/documentation/kernel/iohidelementtype)

# IOHIDElementType

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.0+

Describes different types of HID elements.

## Declaration

```objectivec
typedef enum IOHIDElementType IOHIDElementType;
```

<a id="discussion"></a>

## Discussion

Used by the IOHIDFamily to identify the type of element processed. Represented by the key kIOHIDElementTypeKey in the dictionary describing the element.

## Topics

### Constants

- [kIOHIDElementTypeInput_Misc](iohidelementtype/kiohidelementtypeinput_misc.md)
- [kIOHIDElementTypeInput_Button](iohidelementtype/kiohidelementtypeinput_button.md)
- [kIOHIDElementTypeInput_Axis](iohidelementtype/kiohidelementtypeinput_axis.md)
- [kIOHIDElementTypeInput_ScanCodes](iohidelementtype/kiohidelementtypeinput_scancodes.md)
- [kIOHIDElementTypeOutput](iohidelementtype/kiohidelementtypeoutput.md)
- [kIOHIDElementTypeFeature](iohidelementtype/kiohidelementtypefeature.md)
- [kIOHIDElementTypeCollection](iohidelementtype/kiohidelementtypecollection.md)
- [kIOHIDElementTypeInput_NULL](iohidelementtype/kiohidelementtypeinput_null.md)

## See Also

### HID Elements

- [IOHIDElementCollectionType](iohidelementcollectiontype.md): Describes different types of HID collections.
- [IOHIDElementCommitDirection](iohidelementcommitdirection.md)
- [IOHIDElementCookie](iohidelementcookie.md): Abstract data type used as a unique identifier for an element.
- [IOHIDElementFlags](iohidelementflags.md)
- [IOHIDValueOptions](iohidvalueoptions.md): Describes options for gathering element values.

### Related Documentation

- [IOHIDElementType](https://developer.apple.com/documentation/iokit/iohidelementtype): Describes different types of HID elements.
