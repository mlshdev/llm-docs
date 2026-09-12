> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/clearcontents()](https://developer.apple.com/documentation/appkit/nspasteboard/clearcontents())

# clearContents() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Clears the existing contents of the pasteboard.

## Declaration

```swift
func clearContents() -> Int
```

<a id="return-value"></a>

## Return Value

The change count of the receiver.

<a id="Discussion"></a>

## Discussion

Clears the existing contents of the pasteboard, preparing it for new contents. This is the first step in providing data on the pasteboard.

## See Also

### Writing data

- [writeObjects(\_:)](writeobjects%28__%29.md): Writes an array of objects to the receiver.
- [setData(\_:forType:)](setdata%28__fortype_%29.md): Sets the data as the representation for the specified type for the first item on the receiver.
- [setPropertyList(\_:forType:)](setpropertylist%28__fortype_%29.md): Sets the given property list as the representation for the specified type for the first item on the receiver.
- [setString(\_:forType:)](setstring%28__fortype_%29.md): Sets the given string as the representation for the specified type for the first item on the receiver.
- [NSPasteboard.PasteboardType](pasteboardtype.md): The supported pasteboard types.

# clearContents (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Clears the existing contents of the pasteboard.

## Declaration

```objectivec
- (NSInteger) clearContents;
```

<a id="return-value"></a>

## Return Value

The change count of the receiver.

<a id="Discussion"></a>

## Discussion

Clears the existing contents of the pasteboard, preparing it for new contents. This is the first step in providing data on the pasteboard.

## See Also

### Writing data

- [writeObjects:](writeobjects%28__%29.md): Writes an array of objects to the receiver.
- [setData:forType:](setdata%28__fortype_%29.md): Sets the data as the representation for the specified type for the first item on the receiver.
- [setPropertyList:forType:](setpropertylist%28__fortype_%29.md): Sets the given property list as the representation for the specified type for the first item on the receiver.
- [setString:forType:](setstring%28__fortype_%29.md): Sets the given string as the representation for the specified type for the first item on the receiver.
- [NSPasteboardType](pasteboardtype.md): The supported pasteboard types.
