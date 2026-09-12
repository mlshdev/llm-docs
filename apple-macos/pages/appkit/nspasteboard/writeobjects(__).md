> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/writeobjects(_:)](https://developer.apple.com/documentation/appkit/nspasteboard/writeobjects(_:))

# writeObjects(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Writes an array of objects to the receiver.

## Declaration

```swift
func writeObjects(_ objects: [any NSPasteboardWriting]) -> Bool
```

## Parameters

- `objects`: An array of objects that implement the [NSPasteboardWriting](../nspasteboardwriting.md) protocol (including instances of [NSPasteboardItem](../nspasteboarditem.md)).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the array was successfully added, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Writing data

- [clearContents()](clearcontents%28%29.md): Clears the existing contents of the pasteboard.
- [setData(\_:forType:)](setdata%28__fortype_%29.md): Sets the data as the representation for the specified type for the first item on the receiver.
- [setPropertyList(\_:forType:)](setpropertylist%28__fortype_%29.md): Sets the given property list as the representation for the specified type for the first item on the receiver.
- [setString(\_:forType:)](setstring%28__fortype_%29.md): Sets the given string as the representation for the specified type for the first item on the receiver.
- [NSPasteboard.PasteboardType](pasteboardtype.md): The supported pasteboard types.

# writeObjects: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Writes an array of objects to the receiver.

## Declaration

```objectivec
- (BOOL) writeObjects:(NSArray<id<NSPasteboardWriting>> *) objects;
```

## Parameters

- `objects`: An array of objects that implement the [NSPasteboardWriting](../nspasteboardwriting.md) protocol (including instances of [NSPasteboardItem](../nspasteboarditem.md)).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the array was successfully added, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Writing data

- [clearContents](clearcontents%28%29.md): Clears the existing contents of the pasteboard.
- [setData:forType:](setdata%28__fortype_%29.md): Sets the data as the representation for the specified type for the first item on the receiver.
- [setPropertyList:forType:](setpropertylist%28__fortype_%29.md): Sets the given property list as the representation for the specified type for the first item on the receiver.
- [setString:forType:](setstring%28__fortype_%29.md): Sets the given string as the representation for the specified type for the first item on the receiver.
- [NSPasteboardType](pasteboardtype.md): The supported pasteboard types.
