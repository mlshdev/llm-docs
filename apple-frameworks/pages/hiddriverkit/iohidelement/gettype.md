> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iohidelement/gettype

# getType

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

## Declaration

```objectivec
virtual IOHIDElementType getType();
```

<a id="return-value"></a>

## Return Value

Returns the element type. Types are defined by the IOHIDElementType enumerator in [IOHIDElementType](../iohidelementtype.md).

## See Also

### Managing the Element Hierarchy

- [getCollectionType](getcollectiontype.md)
- [getChildElements](getchildelements.md)
- [getParentElement](getparentelement.md)
- [IOHIDElementType](../iohidelementtype.md): The types of HID elements that you can examine.
- [IOHIDElementCollectionType](../iohidelementcollectiontype.md): Constants that indicate the types of relationships that exist between two or more elements.
