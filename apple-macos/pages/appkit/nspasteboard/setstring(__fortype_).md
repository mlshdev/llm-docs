> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/setstring(_:fortype:)](https://developer.apple.com/documentation/appkit/nspasteboard/setstring(_:fortype:))

# setString(\_:forType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the given string as the representation for the specified type for the first item on the receiver.

## Declaration

```swift
func setString(_ string: String, forType dataType: NSPasteboard.PasteboardType) -> Bool
```

## Parameters

- `string`: The string to write to the pasteboard.
- `dataType`: The type of string data. The type must have been declared by a previous [declareTypes(\_:owner:)](declaretypes%28__owner_%29.md) message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false) if ownership of the pasteboard has changed. Any other error raises an `NSPasteboardCommunicationException`.

## Mentioned In

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md)

<a id="Discussion"></a>

## Discussion

This method invokes [setData(\_:forType:)](setdata%28__fortype_%29.md) to perform the write.

## See Also

### Related Documentation

- [string(forType:)](string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.

### Writing data

- [clearContents()](clearcontents%28%29.md): Clears the existing contents of the pasteboard.
- [writeObjects(\_:)](writeobjects%28__%29.md): Writes an array of objects to the receiver.
- [setData(\_:forType:)](setdata%28__fortype_%29.md): Sets the data as the representation for the specified type for the first item on the receiver.
- [setPropertyList(\_:forType:)](setpropertylist%28__fortype_%29.md): Sets the given property list as the representation for the specified type for the first item on the receiver.
- [NSPasteboard.PasteboardType](pasteboardtype.md): The supported pasteboard types.

# setString:forType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the given string as the representation for the specified type for the first item on the receiver.

## Declaration

```objectivec
- (BOOL) setString:(NSString *) string forType:(NSPasteboardType) dataType;
```

## Parameters

- `string`: The string to write to the pasteboard.
- `dataType`: The type of string data. The type must have been declared by a previous [declareTypes:owner:](declaretypes%28__owner_%29.md) message.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data was written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false) if ownership of the pasteboard has changed. Any other error raises an `NSPasteboardCommunicationException`.

## Mentioned In

- [Supporting Writing Tools via the pasteboard](../supporting-writing-tools-via-the-pasteboard.md)

<a id="Discussion"></a>

## Discussion

This method invokes [setData:forType:](setdata%28__fortype_%29.md) to perform the write.

## See Also

### Related Documentation

- [stringForType:](string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.

### Writing data

- [clearContents](clearcontents%28%29.md): Clears the existing contents of the pasteboard.
- [writeObjects:](writeobjects%28__%29.md): Writes an array of objects to the receiver.
- [setData:forType:](setdata%28__fortype_%29.md): Sets the data as the representation for the specified type for the first item on the receiver.
- [setPropertyList:forType:](setpropertylist%28__fortype_%29.md): Sets the given property list as the representation for the specified type for the first item on the receiver.
- [NSPasteboardType](pasteboardtype.md): The supported pasteboard types.
