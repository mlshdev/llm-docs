> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/index(of:)](https://developer.apple.com/documentation/appkit/nspasteboard/index(of:))

# index(of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the index of the specified pasteboard item.

## Declaration

```swift
func index(of pasteboardItem: NSPasteboardItem) -> Int
```

## Parameters

- `pasteboardItem`: A pasteboard item.

<a id="return-value"></a>

## Return Value

The index of the specified pasteboard item. If `pasteboardItem` has not been added to any pasteboard, or is owned by another pasteboard, returns `NSNotFound`.

<a id="Discussion"></a>

## Discussion

An item’s index in the pasteboard is useful for a pasteboard item data provider that has promised data for multiple items, to be able to easily match the pasteboard item to an array of source data from which to derive the promised data.

## See Also

### Reading data

- [readObjects(forClasses:options:)](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboard.ReadingOptionKey](readingoptionkey.md): Options for reading pasteboard data.
- [NSPasteboard.ReadingOptions](readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
- [pasteboardItems](pasteboarditems.md): An array that contains all the items held by the pasteboard.
- [data(forType:)](data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.
- [propertyList(forType:)](propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.
- [string(forType:)](string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.

# indexOfPasteboardItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the index of the specified pasteboard item.

## Declaration

```objectivec
- (NSUInteger) indexOfPasteboardItem:(NSPasteboardItem *) pasteboardItem;
```

## Parameters

- `pasteboardItem`: A pasteboard item.

<a id="return-value"></a>

## Return Value

The index of the specified pasteboard item. If `pasteboardItem` has not been added to any pasteboard, or is owned by another pasteboard, returns `NSNotFound`.

<a id="Discussion"></a>

## Discussion

An item’s index in the pasteboard is useful for a pasteboard item data provider that has promised data for multiple items, to be able to easily match the pasteboard item to an array of source data from which to derive the promised data.

## See Also

### Reading data

- [readObjectsForClasses:options:](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboardReadingOptionKey](readingoptionkey.md): Options for reading pasteboard data.
- [NSPasteboardReadingOptions](readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
- [pasteboardItems](pasteboarditems.md): An array that contains all the items held by the pasteboard.
- [dataForType:](data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.
- [propertyListForType:](propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.
- [stringForType:](string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.
