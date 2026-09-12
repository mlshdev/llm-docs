> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboardtypeowner](https://developer.apple.com/documentation/appkit/nspasteboardtypeowner)

# NSPasteboardTypeOwner (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

An object that serves as a data provider for data types that use lazy data fulfillment from a pasteboard request.

## Declaration

```swift
protocol NSPasteboardTypeOwner : NSObjectProtocol
```

## Topics

### Fulfilling lazy data requests

- [pasteboard(\_:provideDataForType:)](nspasteboardtypeowner/pasteboard%28__providedatafortype_%29.md): Requests that the object provide data for the data type to the pasteboard.

### Changing pasteboard ownership

- [pasteboardChangedOwner(\_:)](nspasteboardtypeowner/pasteboardchangedowner%28__%29.md): Notifies the object that the pasteboard’s owner changed.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Pasteboard

- [NSPasteboard](nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [NSPasteboardItem](nspasteboarditem.md): An item on a pasteboard.
- [NSPasteboardReading](nspasteboardreading.md): A set of methods that defines the interface for initializing an object from a pasteboard.
- [NSPasteboardWriting](nspasteboardwriting.md): A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.
- [NSPasteboardItemDataProvider](nspasteboarditemdataprovider.md): A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.
- [NSPasteboard.ContentsOptions](nspasteboard/contentsoptions.md): Options for preparing the pasteboard.

# NSPasteboardTypeOwner (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

An object that serves as a data provider for data types that use lazy data fulfillment from a pasteboard request.

## Declaration

```objectivec
@protocol NSPasteboardTypeOwner <NSObject>
```

## Topics

### Fulfilling lazy data requests

- [pasteboard:provideDataForType:](nspasteboardtypeowner/pasteboard%28__providedatafortype_%29.md): Requests that the object provide data for the data type to the pasteboard.

### Changing pasteboard ownership

- [pasteboardChangedOwner:](nspasteboardtypeowner/pasteboardchangedowner%28__%29.md): Notifies the object that the pasteboard’s owner changed.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Pasteboard

- [NSPasteboard](nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [NSPasteboardItem](nspasteboarditem.md): An item on a pasteboard.
- [NSPasteboardReading](nspasteboardreading.md): A set of methods that defines the interface for initializing an object from a pasteboard.
- [NSPasteboardWriting](nspasteboardwriting.md): A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.
- [NSPasteboardItemDataProvider](nspasteboarditemdataprovider.md): A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.
- [NSPasteboardContentsOptions](nspasteboard/contentsoptions.md): Options for preparing the pasteboard.
