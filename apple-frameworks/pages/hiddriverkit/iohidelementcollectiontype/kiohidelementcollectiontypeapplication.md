> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidelementcollectiontype/kiohidelementcollectiontypeapplication](https://developer.apple.com/documentation/hiddriverkit/iohidelementcollectiontype/kiohidelementcollectiontypeapplication)

# kIOHIDElementCollectionTypeApplication

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit · macOS

A collection in which the child elements serve different purposes in a single device.

## Declaration

```objectivec
kIOHIDElementCollectionTypeApplication
```

<a id="Discussion"></a>

## Discussion

A keyboard that contains an integrated pointing device might define separate application collections for the keyboard and pointing data.

## See Also

### Getting the Element Collection Types

- [kIOHIDElementCollectionTypePhysical](kiohidelementcollectiontypephysical.md): A collection in which the child elements are data points collected at one geometric point.
- [kIOHIDElementCollectionTypeLogical](kiohidelementcollectiontypelogical.md): A collection in which the child elements form a composite data structure.
- [kIOHIDElementCollectionTypeReport](kiohidelementcollectiontypereport.md): A collection that wraps all the other elements in a report.
- [kIOHIDElementCollectionTypeNamedArray](kiohidelementcollectiontypenamedarray.md): A collection in which the elements are an array of selector usages.
- [kIOHIDElementCollectionTypeUsageSwitch](kiohidelementcollectiontypeusageswitch.md): A collection that modifies the meaning of the usage it contains.
- [kIOHIDElementCollectionTypeUsageModifier](kiohidelementcollectiontypeusagemodifier.md): A collection that modifies the meaning of the usage attached to the encompassing collection.
