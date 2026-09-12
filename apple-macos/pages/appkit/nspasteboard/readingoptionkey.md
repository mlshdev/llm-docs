> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/readingoptionkey](https://developer.apple.com/documentation/appkit/nspasteboard/readingoptionkey)

# NSPasteboard.ReadingOptionKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Options for reading pasteboard data.

## Declaration

```swift
struct ReadingOptionKey
```

<a id="Discussion"></a>

## Discussion

These options can be used for both the [readObjects(forClasses:options:)](readobjects%28forclasses_options_%29.md) and [canReadObject(forClasses:options:)](canreadobject%28forclasses_options_%29.md) methods, unless otherwise specified.  The currently available options allow for customization of how URLS are read from the pasteboard.

## Topics

### Type Properties

- [urlReadingContentsConformToTypes](readingoptionkey/urlreadingcontentsconformtotypes.md): Option for reading URLs to restrict the results to URLs with contents that conform to any of the provided UTI types.
- [urlReadingFileURLsOnly](readingoptionkey/urlreadingfileurlsonly.md): Option for reading URLs to restrict the results to file URLs only.

### Initializers

- [init(rawValue:)](readingoptionkey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reading data

- [readObjects(forClasses:options:)](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboard.ReadingOptions](readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
- [pasteboardItems](pasteboarditems.md): An array that contains all the items held by the pasteboard.
- [index(of:)](index%28of_%29.md): Returns the index of the specified pasteboard item.
- [data(forType:)](data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.
- [propertyList(forType:)](propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.
- [string(forType:)](string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.

# NSPasteboardReadingOptionKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Options for reading pasteboard data.

## Declaration

```objectivec
typedef NSString * NSPasteboardReadingOptionKey;
```

<a id="Discussion"></a>

## Discussion

These options can be used for both the [readObjectsForClasses:options:](readobjects%28forclasses_options_%29.md) and [canReadObjectForClasses:options:](canreadobject%28forclasses_options_%29.md) methods, unless otherwise specified.  The currently available options allow for customization of how URLS are read from the pasteboard.

## Topics

### Type Properties

- [NSPasteboardURLReadingContentsConformToTypesKey](readingoptionkey/urlreadingcontentsconformtotypes.md): Option for reading URLs to restrict the results to URLs with contents that conform to any of the provided UTI types.
- [NSPasteboardURLReadingFileURLsOnlyKey](readingoptionkey/urlreadingfileurlsonly.md): Option for reading URLs to restrict the results to file URLs only.

## See Also

### Reading data

- [readObjectsForClasses:options:](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboardReadingOptions](readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
- [pasteboardItems](pasteboarditems.md): An array that contains all the items held by the pasteboard.
- [indexOfPasteboardItem:](index%28of_%29.md): Returns the index of the specified pasteboard item.
- [dataForType:](data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.
- [propertyListForType:](propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.
- [stringForType:](string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.
