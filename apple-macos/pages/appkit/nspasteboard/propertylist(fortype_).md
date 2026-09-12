> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/propertylist(fortype:)](https://developer.apple.com/documentation/appkit/nspasteboard/propertylist(fortype:))

# propertyList(forType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the property list for the specified type from the first item in the receiver that contains the type.

## Declaration

```swift
func propertyList(forType dataType: NSPasteboard.PasteboardType) -> Any?
```

## Parameters

- `dataType`: The pasteboard data type containing the property-list data.

<a id="return-value"></a>

## Return Value

A property list of objects of the specified type, obtained from the first item in the receiver that contains the type. The returned property list can contain any combination of objects, as long as each object is a valid property-list type (for a list of types, see [Property list](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/PropertyList.html#//apple_ref/doc/uid/TP40008195-CH44)).

<a id="Discussion"></a>

## Discussion

This method invokes the [data(forType:)](data%28fortype_%29.md) method.

<a id="Special-Considerations"></a>

### Special Considerations

It’s a good idea to check [types](types.md) or call [availableType(from:)](availabletype%28from_%29.md) before invoking [propertyList(forType:)](propertylist%28fortype_%29.md). Although performing this check isn’t required, doing so can help you determine if a `nil` result from a reading method is due to something like a pasteboard timeout.

## See Also

### Related Documentation

- [setPropertyList(\_:forType:)](setpropertylist%28__fortype_%29.md): Sets the given property list as the representation for the specified type for the first item on the receiver.

### Reading data

- [readObjects(forClasses:options:)](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboard.ReadingOptionKey](readingoptionkey.md): Options for reading pasteboard data.
- [NSPasteboard.ReadingOptions](readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
- [pasteboardItems](pasteboarditems.md): An array that contains all the items held by the pasteboard.
- [index(of:)](index%28of_%29.md): Returns the index of the specified pasteboard item.
- [data(forType:)](data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.
- [string(forType:)](string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.

# propertyListForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the property list for the specified type from the first item in the receiver that contains the type.

## Declaration

```objectivec
- (id) propertyListForType:(NSPasteboardType) dataType;
```

## Parameters

- `dataType`: The pasteboard data type containing the property-list data.

<a id="return-value"></a>

## Return Value

A property list of objects of the specified type, obtained from the first item in the receiver that contains the type. The returned property list can contain any combination of objects, as long as each object is a valid property-list type (for a list of types, see [Property list](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/PropertyList.html#//apple_ref/doc/uid/TP40008195-CH44)).

<a id="Discussion"></a>

## Discussion

This method invokes the [dataForType:](data%28fortype_%29.md) method.

<a id="Special-Considerations"></a>

### Special Considerations

It’s a good idea to check [types](types.md) or call [availableTypeFromArray:](availabletype%28from_%29.md) before invoking [propertyListForType:](propertylist%28fortype_%29.md). Although performing this check isn’t required, doing so can help you determine if a `nil` result from a reading method is due to something like a pasteboard timeout.

## See Also

### Related Documentation

- [setPropertyList:forType:](setpropertylist%28__fortype_%29.md): Sets the given property list as the representation for the specified type for the first item on the receiver.

### Reading data

- [readObjectsForClasses:options:](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboardReadingOptionKey](readingoptionkey.md): Options for reading pasteboard data.
- [NSPasteboardReadingOptions](readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
- [pasteboardItems](pasteboarditems.md): An array that contains all the items held by the pasteboard.
- [indexOfPasteboardItem:](index%28of_%29.md): Returns the index of the specified pasteboard item.
- [dataForType:](data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.
- [stringForType:](string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.
