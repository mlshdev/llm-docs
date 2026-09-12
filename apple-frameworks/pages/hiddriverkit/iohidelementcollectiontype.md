> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidelementcollectiontype](https://developer.apple.com/documentation/hiddriverkit/iohidelementcollectiontype)

# IOHIDElementCollectionType

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit · macOS

Constants that indicate the types of relationships that exist between two or more elements.

## Declaration

```objectivec
enum IOHIDElementCollectionType : unsigned int;
```

## Topics

### Getting the Element Collection Types

- [kIOHIDElementCollectionTypePhysical](iohidelementcollectiontype/kiohidelementcollectiontypephysical.md): A collection in which the child elements are data points collected at one geometric point.
- [kIOHIDElementCollectionTypeApplication](iohidelementcollectiontype/kiohidelementcollectiontypeapplication.md): A collection in which the child elements serve different purposes in a single device.
- [kIOHIDElementCollectionTypeLogical](iohidelementcollectiontype/kiohidelementcollectiontypelogical.md): A collection in which the child elements form a composite data structure.
- [kIOHIDElementCollectionTypeReport](iohidelementcollectiontype/kiohidelementcollectiontypereport.md): A collection that wraps all the other elements in a report.
- [kIOHIDElementCollectionTypeNamedArray](iohidelementcollectiontype/kiohidelementcollectiontypenamedarray.md): A collection in which the elements are an array of selector usages.
- [kIOHIDElementCollectionTypeUsageSwitch](iohidelementcollectiontype/kiohidelementcollectiontypeusageswitch.md): A collection that modifies the meaning of the usage it contains.
- [kIOHIDElementCollectionTypeUsageModifier](iohidelementcollectiontype/kiohidelementcollectiontypeusagemodifier.md): A collection that modifies the meaning of the usage attached to the encompassing collection.

## See Also

### Managing the Element Hierarchy

- [getType](iohidelement/gettype.md)
- [getCollectionType](iohidelement/getcollectiontype.md)
- [getChildElements](iohidelement/getchildelements.md)
- [getParentElement](iohidelement/getparentelement.md)
- [IOHIDElementType](iohidelementtype.md): The types of HID elements that you can examine.
