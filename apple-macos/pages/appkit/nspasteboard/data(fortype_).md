> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/data(fortype:)](https://developer.apple.com/documentation/appkit/nspasteboard/data(fortype:))

# data(forType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the data for the specified type from the first item in the receiver that contains the type.

## Declaration

```swift
func data(forType dataType: NSPasteboard.PasteboardType) -> Data?
```

## Parameters

- `dataType`: The type of data you want to read from the pasteboard. This value should be one of the types returned by [types](types.md) or [availableType(from:)](availabletype%28from_%29.md).

<a id="return-value"></a>

## Return Value

A data object containing the data for the specified type from the first item in the receiver that contains the type, or `nil` if the contents of the pasteboard changed since they were last checked.

<a id="discussion"></a>

## Discussion

This method may also return `nil` if the pasteboard server cannot supply the data in time—for example, if the pasteboard’s owner is slow in responding to a [pasteboard:provideDataForType:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/pasteboard:providedatafortype:) message and the interprocess communication times out.

<a id="Discussion"></a>

## Discussion

Errors other than a timeout raise an `NSPasteboardCommunicationException`.

If `nil` is returned, the application should put up a panel informing the user that it was unable to carry out the paste operation. Note that sending [types](types.md) or [availableType(from:)](availabletype%28from_%29.md) before invoking [data(forType:)](data%28fortype_%29.md) can help you determine whether a `nil` result from a reading method is due to something like a pasteboard timeout.

<a id="Special-Considerations"></a>

### Special Considerations

For standard text data types such as string, RTF, and RTFD, the text data from each item is returned as one combined result separated by newlines.

## See Also

### Related Documentation

- [setData(\_:forType:)](setdata%28__fortype_%29.md): Sets the data as the representation for the specified type for the first item on the receiver.

### Reading data

- [readObjects(forClasses:options:)](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboard.ReadingOptionKey](readingoptionkey.md): Options for reading pasteboard data.
- [NSPasteboard.ReadingOptions](readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
- [pasteboardItems](pasteboarditems.md): An array that contains all the items held by the pasteboard.
- [index(of:)](index%28of_%29.md): Returns the index of the specified pasteboard item.
- [propertyList(forType:)](propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.
- [string(forType:)](string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.

# dataForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the data for the specified type from the first item in the receiver that contains the type.

## Declaration

```objectivec
- (NSData *) dataForType:(NSPasteboardType) dataType;
```

## Parameters

- `dataType`: The type of data you want to read from the pasteboard. This value should be one of the types returned by [types](types.md) or [availableTypeFromArray:](availabletype%28from_%29.md).

<a id="return-value"></a>

## Return Value

A data object containing the data for the specified type from the first item in the receiver that contains the type, or `nil` if the contents of the pasteboard changed since they were last checked.

<a id="discussion"></a>

## Discussion

This method may also return `nil` if the pasteboard server cannot supply the data in time—for example, if the pasteboard’s owner is slow in responding to a [pasteboard:provideDataForType:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/pasteboard:providedatafortype:) message and the interprocess communication times out.

<a id="Discussion"></a>

## Discussion

Errors other than a timeout raise an `NSPasteboardCommunicationException`.

If `nil` is returned, the application should put up a panel informing the user that it was unable to carry out the paste operation. Note that sending [types](types.md) or [availableTypeFromArray:](availabletype%28from_%29.md) before invoking [dataForType:](data%28fortype_%29.md) can help you determine whether a `nil` result from a reading method is due to something like a pasteboard timeout.

<a id="Special-Considerations"></a>

### Special Considerations

For standard text data types such as string, RTF, and RTFD, the text data from each item is returned as one combined result separated by newlines.

## See Also

### Related Documentation

- [setData:forType:](setdata%28__fortype_%29.md): Sets the data as the representation for the specified type for the first item on the receiver.

### Reading data

- [readObjectsForClasses:options:](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboardReadingOptionKey](readingoptionkey.md): Options for reading pasteboard data.
- [NSPasteboardReadingOptions](readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
- [pasteboardItems](pasteboarditems.md): An array that contains all the items held by the pasteboard.
- [indexOfPasteboardItem:](index%28of_%29.md): Returns the index of the specified pasteboard item.
- [propertyListForType:](propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.
- [stringForType:](string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.
