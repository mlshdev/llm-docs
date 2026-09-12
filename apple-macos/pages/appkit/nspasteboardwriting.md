> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboardwriting](https://developer.apple.com/documentation/appkit/nspasteboardwriting)

# NSPasteboardWriting (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.

## Declaration

```swift
protocol NSPasteboardWriting : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The Cocoa framework classes [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring), [NSURL](https://developer.apple.com/documentation/foundation/nsurl), [NSColor](nscolor.md), [NSSound](nssound.md), [NSImage](nsimage.md), and [NSPasteboardItem](nspasteboarditem.md) implement this protocol. You can make your custom class conform to this protocol so that you can write instances of the class to a pasteboard using the [writeObjects(\_:)](nspasteboard/writeobjects%28__%29.md) method of [NSPasteboard](nspasteboard.md).

## Topics

### Required Methods

- [writableTypes(for:)](nspasteboardwriting/writabletypes%28for_%29.md): Returns an array of UTI strings of data types the receiver can write to a given pasteboard.
- [writingOptions(forType:pasteboard:)](nspasteboardwriting/writingoptions%28fortype_pasteboard_%29.md): Returns options for writing data of a specified type to a given pasteboard.
- [NSPasteboard.WritingOptions](nspasteboard/writingoptions.md): Type to specify options for writing to a pasteboard.

### Property List for Type

- [pasteboardPropertyList(forType:)](nspasteboardwriting/pasteboardpropertylist%28fortype_%29.md): Returns a property list object to represent the receiver on a pasteboard as an object of a specified type.

### Constants

- [Pasteboard Writing Options](pasteboard-writing-options.md): Constant to specify options for writing to a pasteboard, used by [writingOptions(forType:pasteboard:)](nspasteboardwriting/writingoptions%28fortype_pasteboard_%29.md).
- [NSPasteboard.WritingOptions](nspasteboard/writingoptions.md): Type to specify options for writing to a pasteboard.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSColor](nscolor.md)
- [NSFilePromiseProvider](nsfilepromiseprovider.md)
- [NSImage](nsimage.md)
- [NSPasteboardItem](nspasteboarditem.md)
- [NSSound](nssound.md)
- [NSTextStorage](nstextstorage.md)

## See Also

### Pasteboard

- [NSPasteboard](nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [NSPasteboardItem](nspasteboarditem.md): An item on a pasteboard.
- [NSPasteboardReading](nspasteboardreading.md): A set of methods that defines the interface for initializing an object from a pasteboard.
- [NSPasteboardItemDataProvider](nspasteboarditemdataprovider.md): A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.
- [NSPasteboard.ContentsOptions](nspasteboard/contentsoptions.md): Options for preparing the pasteboard.
- [NSPasteboardTypeOwner](nspasteboardtypeowner.md): An object that serves as a data provider for data types that use lazy data fulfillment from a pasteboard request.

# NSPasteboardWriting (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.

## Declaration

```objectivec
@protocol NSPasteboardWriting <NSObject>
```

<a id="overview"></a>

## Overview

The Cocoa framework classes [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring), [NSURL](https://developer.apple.com/documentation/foundation/nsurl), [NSColor](nscolor.md), [NSSound](nssound.md), [NSImage](nsimage.md), and [NSPasteboardItem](nspasteboarditem.md) implement this protocol. You can make your custom class conform to this protocol so that you can write instances of the class to a pasteboard using the [writeObjects:](nspasteboard/writeobjects%28__%29.md) method of [NSPasteboard](nspasteboard.md).

## Topics

### Required Methods

- [writableTypesForPasteboard:](nspasteboardwriting/writabletypes%28for_%29.md): Returns an array of UTI strings of data types the receiver can write to a given pasteboard.
- [writingOptionsForType:pasteboard:](nspasteboardwriting/writingoptions%28fortype_pasteboard_%29.md): Returns options for writing data of a specified type to a given pasteboard.
- [NSPasteboardWritingOptions](nspasteboard/writingoptions.md): Type to specify options for writing to a pasteboard.

### Property List for Type

- [pasteboardPropertyListForType:](nspasteboardwriting/pasteboardpropertylist%28fortype_%29.md): Returns a property list object to represent the receiver on a pasteboard as an object of a specified type.

### Constants

- [Pasteboard Writing Options](pasteboard-writing-options.md): Constant to specify options for writing to a pasteboard, used by [writingOptionsForType:pasteboard:](nspasteboardwriting/writingoptions%28fortype_pasteboard_%29.md).
- [NSPasteboardWritingOptions](nspasteboard/writingoptions.md): Type to specify options for writing to a pasteboard.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSColor](nscolor.md)
- [NSFilePromiseProvider](nsfilepromiseprovider.md)
- [NSImage](nsimage.md)
- [NSPasteboardItem](nspasteboarditem.md)
- [NSSound](nssound.md)

## See Also

### Pasteboard

- [NSPasteboard](nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [NSPasteboardItem](nspasteboarditem.md): An item on a pasteboard.
- [NSPasteboardReading](nspasteboardreading.md): A set of methods that defines the interface for initializing an object from a pasteboard.
- [NSPasteboardItemDataProvider](nspasteboarditemdataprovider.md): A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.
- [NSPasteboardContentsOptions](nspasteboard/contentsoptions.md): Options for preparing the pasteboard.
- [NSPasteboardTypeOwner](nspasteboardtypeowner.md): An object that serves as a data provider for data types that use lazy data fulfillment from a pasteboard request.
