> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iohidelementcollectiontype/kiohidelementcollectiontypeusagemodifier

# kIOHIDElementCollectionTypeUsageModifier

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit · macOS

A collection that modifies the meaning of the usage attached to the encompassing collection.

## Declaration

```objectivec
kIOHIDElementCollectionTypeUsageModifier
```

## See Also

### Getting the Element Collection Types

- [kIOHIDElementCollectionTypePhysical](kiohidelementcollectiontypephysical.md): A collection in which the child elements are data points collected at one geometric point.
- [kIOHIDElementCollectionTypeApplication](kiohidelementcollectiontypeapplication.md): A collection in which the child elements serve different purposes in a single device.
- [kIOHIDElementCollectionTypeLogical](kiohidelementcollectiontypelogical.md): A collection in which the child elements form a composite data structure.
- [kIOHIDElementCollectionTypeReport](kiohidelementcollectiontypereport.md): A collection that wraps all the other elements in a report.
- [kIOHIDElementCollectionTypeNamedArray](kiohidelementcollectiontypenamedarray.md): A collection in which the elements are an array of selector usages.
- [kIOHIDElementCollectionTypeUsageSwitch](kiohidelementcollectiontypeusageswitch.md): A collection that modifies the meaning of the usage it contains.
