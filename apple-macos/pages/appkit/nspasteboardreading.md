> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboardreading](https://developer.apple.com/documentation/appkit/nspasteboardreading)

# NSPasteboardReading (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that defines the interface for initializing an object from a pasteboard.

## Declaration

```swift
protocol NSPasteboardReading : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The Cocoa framework classes [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring), [NSURL](https://developer.apple.com/documentation/foundation/nsurl), [NSColor](nscolor.md), [NSSound](nssound.md), [NSImage](nsimage.md), and [NSPasteboardItem](nspasteboarditem.md) implement this protocol. You can make your custom class conform to this protocol so that you can read instances from a pasteboard using the [readObjects(forClasses:options:)](nspasteboard/readobjects%28forclasses_options_%29.md) method of [NSPasteboard](nspasteboard.md).

## Topics

### Initializing the Pasteboard

- [init(pasteboardPropertyList:ofType:)](nspasteboardreading/init%28pasteboardpropertylist_oftype_%29.md): Initializes an instance with a property list object and a type string.

### Reading From the Pasteboard

- [readableTypes(for:)](nspasteboardreading/readabletypes%28for_%29.md): Returns an array of uniform type identifier strings of data types the receiver can read from the pasteboard and initialize from.
- [readingOptions(forType:pasteboard:)](nspasteboardreading/readingoptions%28fortype_pasteboard_%29.md): Returns options for reading data of a specified type from a given pasteboard.
- [NSPasteboard.ReadingOptions](nspasteboard/readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSColor](nscolor.md)
- [NSFilePromiseReceiver](nsfilepromisereceiver.md)
- [NSImage](nsimage.md)
- [NSPasteboardItem](nspasteboarditem.md)
- [NSSound](nssound.md)
- [NSTextStorage](nstextstorage.md)

## See Also

### Pasteboard

- [NSPasteboard](nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [NSPasteboardItem](nspasteboarditem.md): An item on a pasteboard.
- [NSPasteboardWriting](nspasteboardwriting.md): A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.
- [NSPasteboardItemDataProvider](nspasteboarditemdataprovider.md): A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.
- [NSPasteboard.ContentsOptions](nspasteboard/contentsoptions.md): Options for preparing the pasteboard.
- [NSPasteboardTypeOwner](nspasteboardtypeowner.md): An object that serves as a data provider for data types that use lazy data fulfillment from a pasteboard request.

# NSPasteboardReading (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that defines the interface for initializing an object from a pasteboard.

## Declaration

```objectivec
@protocol NSPasteboardReading <NSObject>
```

<a id="overview"></a>

## Overview

The Cocoa framework classes [NSString](https://developer.apple.com/documentation/foundation/nsstring), [NSAttributedString](https://developer.apple.com/documentation/foundation/nsattributedstring), [NSURL](https://developer.apple.com/documentation/foundation/nsurl), [NSColor](nscolor.md), [NSSound](nssound.md), [NSImage](nsimage.md), and [NSPasteboardItem](nspasteboarditem.md) implement this protocol. You can make your custom class conform to this protocol so that you can read instances from a pasteboard using the [readObjectsForClasses:options:](nspasteboard/readobjects%28forclasses_options_%29.md) method of [NSPasteboard](nspasteboard.md).

## Topics

### Initializing the Pasteboard

- [initWithPasteboardPropertyList:ofType:](nspasteboardreading/init%28pasteboardpropertylist_oftype_%29.md): Initializes an instance with a property list object and a type string.

### Reading From the Pasteboard

- [readableTypesForPasteboard:](nspasteboardreading/readabletypes%28for_%29.md): Returns an array of uniform type identifier strings of data types the receiver can read from the pasteboard and initialize from.
- [readingOptionsForType:pasteboard:](nspasteboardreading/readingoptions%28fortype_pasteboard_%29.md): Returns options for reading data of a specified type from a given pasteboard.
- [NSPasteboardReadingOptions](nspasteboard/readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSColor](nscolor.md)
- [NSFilePromiseReceiver](nsfilepromisereceiver.md)
- [NSImage](nsimage.md)
- [NSPasteboardItem](nspasteboarditem.md)
- [NSSound](nssound.md)

## See Also

### Pasteboard

- [NSPasteboard](nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [NSPasteboardItem](nspasteboarditem.md): An item on a pasteboard.
- [NSPasteboardWriting](nspasteboardwriting.md): A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.
- [NSPasteboardItemDataProvider](nspasteboarditemdataprovider.md): A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.
- [NSPasteboardContentsOptions](nspasteboard/contentsoptions.md): Options for preparing the pasteboard.
- [NSPasteboardTypeOwner](nspasteboardtypeowner.md): An object that serves as a data provider for data types that use lazy data fulfillment from a pasteboard request.
