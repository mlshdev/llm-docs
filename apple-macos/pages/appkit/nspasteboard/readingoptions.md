> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard/readingoptions](https://developer.apple.com/documentation/appkit/nspasteboard/readingoptions)

# NSPasteboard.ReadingOptions (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.6+

Options that specify how to interpret data on the pasteboard when initializing pasteboard data.

## Declaration

```swift
struct ReadingOptions
```

<a id="overview"></a>

## Overview

You can specify only one option. If you don’t specify an option, the system uses the default [asData](readingoptions/asdata.md).

## Topics

### Options

- [asData](readingoptions/asdata.md): An option to read data from the pasteboard as-is and return it as a data object.
- [asString](readingoptions/asstring.md): An option to read data from the pasteboard and convert it to a string object.
- [asPropertyList](readingoptions/aspropertylist.md): An option to read data from the pasteboard and unserialize it as a property list.
- [asKeyedArchive](readingoptions/askeyedarchive.md): An option to read data from the pasteboard and use it to initialize the object.

### Initializers

- [init(rawValue:)](readingoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Reading data

- [readObjects(forClasses:options:)](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboard.ReadingOptionKey](readingoptionkey.md): Options for reading pasteboard data.
- [pasteboardItems](pasteboarditems.md): An array that contains all the items held by the pasteboard.
- [index(of:)](index%28of_%29.md): Returns the index of the specified pasteboard item.
- [data(forType:)](data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.
- [propertyList(forType:)](propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.
- [string(forType:)](string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.

# NSPasteboardReadingOptions (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.6+

Options that specify how to interpret data on the pasteboard when initializing pasteboard data.

## Declaration

```objectivec
enum NSPasteboardReadingOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

You can specify only one option. If you don’t specify an option, the system uses the default [NSPasteboardReadingAsData](readingoptions/asdata.md).

## Topics

### Options

- [NSPasteboardReadingAsData](readingoptions/asdata.md): An option to read data from the pasteboard as-is and return it as a data object.
- [NSPasteboardReadingAsString](readingoptions/asstring.md): An option to read data from the pasteboard and convert it to a string object.
- [NSPasteboardReadingAsPropertyList](readingoptions/aspropertylist.md): An option to read data from the pasteboard and unserialize it as a property list.
- [NSPasteboardReadingAsKeyedArchive](readingoptions/askeyedarchive.md): An option to read data from the pasteboard and use it to initialize the object.

## See Also

### Reading data

- [readObjectsForClasses:options:](readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboardReadingOptionKey](readingoptionkey.md): Options for reading pasteboard data.
- [pasteboardItems](pasteboarditems.md): An array that contains all the items held by the pasteboard.
- [indexOfPasteboardItem:](index%28of_%29.md): Returns the index of the specified pasteboard item.
- [dataForType:](data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.
- [propertyListForType:](propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.
- [stringForType:](string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.
