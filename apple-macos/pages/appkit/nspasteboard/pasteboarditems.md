> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/pasteboarditems](https://developer.apple.com/documentation/appkit/nspasteboard/pasteboarditems)

# pasteboardItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

An array that contains all the items held by the pasteboard.

## Declaration

```swift
var pasteboardItems: [NSPasteboardItem]? { get }
```

<a id="Discussion"></a>

## Discussion

If an error occurs when retrieving the pasteboard items, the value of this property is `nil`.

## See Also

### Reading data

- [readObjects(forClasses:options:)](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboard.ReadingOptionKey](readingoptionkey.md): Options for reading pasteboard data.
- [NSPasteboard.ReadingOptions](readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
- [index(of:)](index%28of_%29.md): Returns the index of the specified pasteboard item.
- [data(forType:)](data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.
- [propertyList(forType:)](propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.
- [string(forType:)](string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.

# pasteboardItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

An array that contains all the items held by the pasteboard.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<NSPasteboardItem *> * pasteboardItems;
```

<a id="Discussion"></a>

## Discussion

If an error occurs when retrieving the pasteboard items, the value of this property is `nil`.

## See Also

### Reading data

- [readObjectsForClasses:options:](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboardReadingOptionKey](readingoptionkey.md): Options for reading pasteboard data.
- [NSPasteboardReadingOptions](readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
- [indexOfPasteboardItem:](index%28of_%29.md): Returns the index of the specified pasteboard item.
- [dataForType:](data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.
- [propertyListForType:](propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.
- [stringForType:](string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.
