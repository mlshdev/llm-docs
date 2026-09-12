> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/setpropertylist(_:fortype:)](https://developer.apple.com/documentation/appkit/nspasteboard/setpropertylist(_:fortype:))

# setPropertyList(\_:forType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the given property list as the representation for the specified type for the first item on the receiver.

## Declaration

```swift
func setPropertyList(_ plist: Any, forType dataType: NSPasteboard.PasteboardType) -> Bool
```

## Parameters

- `plist`: The property list data to write to the pasteboard.
- `dataType`: The type of property-list data in the `propertyList` parameter. The type must have been declared by a previous [declareTypes(\_:owner:)](declaretypes%28__owner_%29.md) message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false) if ownership of the pasteboard has changed. Any other error raises an `NSPasteboardCommunicationException`.

<a id="Discussion"></a>

## Discussion

This method invokes [setData(\_:forType:)](setdata%28__fortype_%29.md) with a serialized property list parameter.

## See Also

### Related Documentation

- [propertyList(forType:)](propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.

### Writing data

- [clearContents()](clearcontents%28%29.md): Clears the existing contents of the pasteboard.
- [writeObjects(\_:)](writeobjects%28__%29.md): Writes an array of objects to the receiver.
- [setData(\_:forType:)](setdata%28__fortype_%29.md): Sets the data as the representation for the specified type for the first item on the receiver.
- [setString(\_:forType:)](setstring%28__fortype_%29.md): Sets the given string as the representation for the specified type for the first item on the receiver.
- [NSPasteboard.PasteboardType](pasteboardtype.md): The supported pasteboard types.

# setPropertyList:forType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the given property list as the representation for the specified type for the first item on the receiver.

## Declaration

```objectivec
- (BOOL) setPropertyList:(id) plist forType:(NSPasteboardType) dataType;
```

## Parameters

- `plist`: The property list data to write to the pasteboard.
- `dataType`: The type of property-list data in the `propertyList` parameter. The type must have been declared by a previous [declareTypes:owner:](declaretypes%28__owner_%29.md) message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false) if ownership of the pasteboard has changed. Any other error raises an `NSPasteboardCommunicationException`.

<a id="Discussion"></a>

## Discussion

This method invokes [setData:forType:](setdata%28__fortype_%29.md) with a serialized property list parameter.

## See Also

### Related Documentation

- [propertyListForType:](propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.

### Writing data

- [clearContents](clearcontents%28%29.md): Clears the existing contents of the pasteboard.
- [writeObjects:](writeobjects%28__%29.md): Writes an array of objects to the receiver.
- [setData:forType:](setdata%28__fortype_%29.md): Sets the data as the representation for the specified type for the first item on the receiver.
- [setString:forType:](setstring%28__fortype_%29.md): Sets the given string as the representation for the specified type for the first item on the receiver.
- [NSPasteboardType](pasteboardtype.md): The supported pasteboard types.
