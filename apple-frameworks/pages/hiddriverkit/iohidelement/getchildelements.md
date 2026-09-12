> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/hiddriverkit/iohidelement/getchildelements](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getchildelements)

# getChildElements

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+ · macOS

## Declaration

```objectivec
virtual OSArray * getChildElements();
```

<a id="return-value"></a>

## Return Value

Returns an array of child elements, if any.

## See Also

### Managing the Element Hierarchy

- [getType](gettype.md)
- [getCollectionType](getcollectiontype.md)
- [getParentElement](getparentelement.md)
- [IOHIDElementType](../iohidelementtype.md): The types of HID elements that you can examine.
- [IOHIDElementCollectionType](../iohidelementcollectiontype.md): Constants that indicate the types of relationships that exist between two or more elements.
