> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/string(fortype:)](https://developer.apple.com/documentation/appkit/nspasteboard/string(fortype:))

# string(forType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.

## Declaration

```swift
func string(forType dataType: NSPasteboard.PasteboardType) -> String?
```

## Parameters

- `dataType`: The pasteboard data type to read.

<a id="return-value"></a>

## Return Value

A concatenation of the strings for the specified type from all the items in the receiver that contain the type, or `nil` if none of the items contain strings of the specified type.

<a id="Discussion"></a>

## Discussion

This method invokes [data(forType:)](data%28fortype_%29.md) to obtain the string. If the string cannot be obtained, [string(forType:)](string%28fortype_%29.md) returns `nil`. See [data(forType:)](data%28fortype_%29.md) for a description of what will cause `nil` to be returned.

In macOS 10.6 and later, if the receiver contains multiple items that can provide string, RTF, or RTFD data, the text data from each item is returned as a combined result separated by newlines.

<a id="Special-Considerations"></a>

### Special Considerations

It’s a good idea to check [types](types.md) or call [availableType(from:)](availabletype%28from_%29.md) before invoking [string(forType:)](string%28fortype_%29.md). Although performing this check isn’t required, doing so can help you determine if a `nil` result from a reading method is due to something like a pasteboard timeout.

## See Also

### Related Documentation

- [setString(\_:forType:)](setstring%28__fortype_%29.md): Sets the given string as the representation for the specified type for the first item on the receiver.

### Reading data

- [readObjects(forClasses:options:)](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboard.ReadingOptionKey](readingoptionkey.md): Options for reading pasteboard data.
- [NSPasteboard.ReadingOptions](readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
- [pasteboardItems](pasteboarditems.md): An array that contains all the items held by the pasteboard.
- [index(of:)](index%28of_%29.md): Returns the index of the specified pasteboard item.
- [data(forType:)](data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.
- [propertyList(forType:)](propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.

# stringForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.

## Declaration

```objectivec
- (NSString *) stringForType:(NSPasteboardType) dataType;
```

## Parameters

- `dataType`: The pasteboard data type to read.

<a id="return-value"></a>

## Return Value

A concatenation of the strings for the specified type from all the items in the receiver that contain the type, or `nil` if none of the items contain strings of the specified type.

<a id="Discussion"></a>

## Discussion

This method invokes [dataForType:](data%28fortype_%29.md) to obtain the string. If the string cannot be obtained, [stringForType:](string%28fortype_%29.md) returns `nil`. See [dataForType:](data%28fortype_%29.md) for a description of what will cause `nil` to be returned.

In macOS 10.6 and later, if the receiver contains multiple items that can provide string, RTF, or RTFD data, the text data from each item is returned as a combined result separated by newlines.

<a id="Special-Considerations"></a>

### Special Considerations

It’s a good idea to check [types](types.md) or call [availableTypeFromArray:](availabletype%28from_%29.md) before invoking [stringForType:](string%28fortype_%29.md). Although performing this check isn’t required, doing so can help you determine if a `nil` result from a reading method is due to something like a pasteboard timeout.

## See Also

### Related Documentation

- [setString:forType:](setstring%28__fortype_%29.md): Sets the given string as the representation for the specified type for the first item on the receiver.

### Reading data

- [readObjectsForClasses:options:](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboardReadingOptionKey](readingoptionkey.md): Options for reading pasteboard data.
- [NSPasteboardReadingOptions](readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
- [pasteboardItems](pasteboarditems.md): An array that contains all the items held by the pasteboard.
- [indexOfPasteboardItem:](index%28of_%29.md): Returns the index of the specified pasteboard item.
- [dataForType:](data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.
- [propertyListForType:](propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.
