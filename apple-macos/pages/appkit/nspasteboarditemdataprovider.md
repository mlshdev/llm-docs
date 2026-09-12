> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditemdataprovider](https://developer.apple.com/documentation/appkit/nspasteboarditemdataprovider)

# NSPasteboardItemDataProvider (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.

## Declaration

```swift
protocol NSPasteboardItemDataProvider : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You can specify an object as a pasteboard data provider for a pasteboard item using [NSPasteboardItem](nspasteboarditem.md)’s [setDataProvider(\_:forTypes:)](nspasteboarditem/setdataprovider%28__fortypes_%29.md) method. The data provider must implement this protocol to provide data upon request.

## Topics

### Providing Data

- [pasteboard(\_:item:provideDataForType:)](nspasteboarditemdataprovider/pasteboard%28__item_providedatafortype_%29.md): Asks the receiver to provide data for a specified type to a given pasteboard.
- [pasteboardFinishedWithDataProvider(\_:)](nspasteboarditemdataprovider/pasteboardfinishedwithdataprovider%28__%29.md): Informs the receiver that the pasteboard no longer needs the data provider for any of its pasteboard items.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Pasteboard

- [NSPasteboard](nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [NSPasteboardItem](nspasteboarditem.md): An item on a pasteboard.
- [NSPasteboardReading](nspasteboardreading.md): A set of methods that defines the interface for initializing an object from a pasteboard.
- [NSPasteboardWriting](nspasteboardwriting.md): A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.
- [NSPasteboard.ContentsOptions](nspasteboard/contentsoptions.md): Options for preparing the pasteboard.
- [NSPasteboardTypeOwner](nspasteboardtypeowner.md): An object that serves as a data provider for data types that use lazy data fulfillment from a pasteboard request.

# NSPasteboardItemDataProvider (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.

## Declaration

```objectivec
@protocol NSPasteboardItemDataProvider <NSObject>
```

<a id="overview"></a>

## Overview

You can specify an object as a pasteboard data provider for a pasteboard item using [NSPasteboardItem](nspasteboarditem.md)’s [setDataProvider:forTypes:](nspasteboarditem/setdataprovider%28__fortypes_%29.md) method. The data provider must implement this protocol to provide data upon request.

## Topics

### Providing Data

- [pasteboard:item:provideDataForType:](nspasteboarditemdataprovider/pasteboard%28__item_providedatafortype_%29.md): Asks the receiver to provide data for a specified type to a given pasteboard.
- [pasteboardFinishedWithDataProvider:](nspasteboarditemdataprovider/pasteboardfinishedwithdataprovider%28__%29.md): Informs the receiver that the pasteboard no longer needs the data provider for any of its pasteboard items.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Pasteboard

- [NSPasteboard](nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [NSPasteboardItem](nspasteboarditem.md): An item on a pasteboard.
- [NSPasteboardReading](nspasteboardreading.md): A set of methods that defines the interface for initializing an object from a pasteboard.
- [NSPasteboardWriting](nspasteboardwriting.md): A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.
- [NSPasteboardContentsOptions](nspasteboard/contentsoptions.md): Options for preparing the pasteboard.
- [NSPasteboardTypeOwner](nspasteboardtypeowner.md): An object that serves as a data provider for data types that use lazy data fulfillment from a pasteboard request.
