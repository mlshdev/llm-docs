> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboarditem](https://developer.apple.com/documentation/appkit/nspasteboarditem)

# NSPasteboardItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.6+

An item on a pasteboard.

## Declaration

```swift
class NSPasteboardItem
```

<a id="overview"></a>

## Overview

There are three main uses for an [NSPasteboardItem](nspasteboarditem.md) object:

- Providing data on the pasteboard.

You can create one or more pasteboard items, set data or data providers for types, and write them to the pasteboard.

- Customizing data already on the pasteboard.

As a delegate or subclass, you can retrieve the pasteboard items currently on the pasteboard, read the existing types and data, and set new data and data providers for types as necessary.

- Retrieving data from the pasteboard.

You can retrieve pasteboard items from the pasteboard and then read the data for types you’re interested in.

A pasteboard item can be associated with a single pasteboard. When you create an item, you can write it to any pasteboard. When you pass an item to a pasteboard in [writeObjects(\_:)](nspasteboard/writeobjects%28__%29.md), that item becomes bound to the pasteboard it writes to. When you retrieve items from a pasteboard using [pasteboardItems](nspasteboard/pasteboarditems.md) or [readObjects(forClasses:options:)](nspasteboard/readobjects%28forclasses_options_%29.md), the returned items are associated with the messaged pasteboard. Passing an item that is already associated with a pasteboard into [writeObjects(\_:)](nspasteboard/writeobjects%28__%29.md) causes an exception.

Use pasteboard items during a single pasteboard interaction, rather than retaining and reusing them. A pasteboard item is only valid until the owner of the pasteboard changes.

> **Important**

>  When a pasteboard item’s owner changes, it becomes stale and its methods return an empty array, `nil`, or [false](https://developer.apple.com/documentation/swift/false).

## Topics

### Getting types

- [types](nspasteboarditem/types.md): An array of uniform type identifier strings of the data types that the receiver supports.
- [availableType(from:)](nspasteboarditem/availabletype%28from_%29.md): Returns from a given array of types the first type within the pasteboard item, according to the ordering of types.

### Setting the data provider

- [setDataProvider(\_:forTypes:)](nspasteboarditem/setdataprovider%28__fortypes_%29.md): Sets the data provider for the specified types.

### Setting values

- [setData(\_:forType:)](nspasteboarditem/setdata%28__fortype_%29.md): Sets the value for a specified type as a data object.
- [setString(\_:forType:)](nspasteboarditem/setstring%28__fortype_%29.md): Sets the value for a specified type as a string.
- [setPropertyList(\_:forType:)](nspasteboarditem/setpropertylist%28__fortype_%29.md): Sets the value for a specified type as a property list.

### Getting values

- [data(forType:)](nspasteboarditem/data%28fortype_%29.md): Returns the value for the specified type as a data object.
- [string(forType:)](nspasteboarditem/string%28fortype_%29.md): Returns the value for the specified type as a string.
- [propertyList(forType:)](nspasteboarditem/propertylist%28fortype_%29.md): Returns the value for the specified type as a property list.

### Detecting patterns and metadata in pasteboard items

- [detectedPatterns(for:)](nspasteboarditem/detectedpatterns%28for_%29.md): Determines whether the pasteboard item matches the specified patterns, without notifying the person using the app.
- [detectedValues(for:)](nspasteboarditem/detectedvalues%28for_%29.md): Determines whether this pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [NSPasteboardItem.DetectedValues](nspasteboarditem/detectedvalues.md)
- [detectedMetadata(for:)](nspasteboarditem/detectedmetadata%28for_%29.md): Determines available metadata from the specified metadata types for this pasteboard item, without notifying the person using the app.
- [NSPasteboardItem.DetectedMetadata](nspasteboarditem/detectedmetadata.md)

### Initializers

- [init(pasteboardPropertyList:ofType:)](nspasteboarditem/init%28pasteboardpropertylist_oftype_%29.md)

### Instance Properties

- [collaborationMetadata](nspasteboarditem/collaborationmetadata.md): A model object you use for conveying data during a collaboration.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSPasteboardReading](nspasteboardreading.md)
- [NSPasteboardWriting](nspasteboardwriting.md)

## See Also

### Pasteboard

- [NSPasteboard](nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [NSPasteboardReading](nspasteboardreading.md): A set of methods that defines the interface for initializing an object from a pasteboard.
- [NSPasteboardWriting](nspasteboardwriting.md): A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.
- [NSPasteboardItemDataProvider](nspasteboarditemdataprovider.md): A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.
- [NSPasteboard.ContentsOptions](nspasteboard/contentsoptions.md): Options for preparing the pasteboard.
- [NSPasteboardTypeOwner](nspasteboardtypeowner.md): An object that serves as a data provider for data types that use lazy data fulfillment from a pasteboard request.

# NSPasteboardItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.6+

An item on a pasteboard.

## Declaration

```objectivec
@interface NSPasteboardItem : NSObject
```

<a id="overview"></a>

## Overview

There are three main uses for an [NSPasteboardItem](nspasteboarditem.md) object:

- Providing data on the pasteboard.

You can create one or more pasteboard items, set data or data providers for types, and write them to the pasteboard.

- Customizing data already on the pasteboard.

As a delegate or subclass, you can retrieve the pasteboard items currently on the pasteboard, read the existing types and data, and set new data and data providers for types as necessary.

- Retrieving data from the pasteboard.

You can retrieve pasteboard items from the pasteboard and then read the data for types you’re interested in.

A pasteboard item can be associated with a single pasteboard. When you create an item, you can write it to any pasteboard. When you pass an item to a pasteboard in [writeObjects:](nspasteboard/writeobjects%28__%29.md), that item becomes bound to the pasteboard it writes to. When you retrieve items from a pasteboard using [pasteboardItems](nspasteboard/pasteboarditems.md) or [readObjectsForClasses:options:](nspasteboard/readobjects%28forclasses_options_%29.md), the returned items are associated with the messaged pasteboard. Passing an item that is already associated with a pasteboard into [writeObjects:](nspasteboard/writeobjects%28__%29.md) causes an exception.

Use pasteboard items during a single pasteboard interaction, rather than retaining and reusing them. A pasteboard item is only valid until the owner of the pasteboard changes.

> **Important**

>  When a pasteboard item’s owner changes, it becomes stale and its methods return an empty array, `nil`, or [false](https://developer.apple.com/documentation/swift/false).

## Topics

### Getting types

- [types](nspasteboarditem/types.md): An array of uniform type identifier strings of the data types that the receiver supports.
- [availableTypeFromArray:](nspasteboarditem/availabletype%28from_%29.md): Returns from a given array of types the first type within the pasteboard item, according to the ordering of types.

### Setting the data provider

- [setDataProvider:forTypes:](nspasteboarditem/setdataprovider%28__fortypes_%29.md): Sets the data provider for the specified types.

### Setting values

- [setData:forType:](nspasteboarditem/setdata%28__fortype_%29.md): Sets the value for a specified type as a data object.
- [setString:forType:](nspasteboarditem/setstring%28__fortype_%29.md): Sets the value for a specified type as a string.
- [setPropertyList:forType:](nspasteboarditem/setpropertylist%28__fortype_%29.md): Sets the value for a specified type as a property list.

### Getting values

- [dataForType:](nspasteboarditem/data%28fortype_%29.md): Returns the value for the specified type as a data object.
- [stringForType:](nspasteboarditem/string%28fortype_%29.md): Returns the value for the specified type as a string.
- [propertyListForType:](nspasteboarditem/propertylist%28fortype_%29.md): Returns the value for the specified type as a property list.

### Detecting patterns and metadata in pasteboard items

- [detectPatternsForPatterns:completionHandler:](nspasteboarditem/detectpatternsforpatterns_completionhandler_.md): Determines whether this pasteboard item matches the specified patterns, without notifying the person using the app.
- [detectValuesForPatterns:completionHandler:](nspasteboarditem/detectvaluesforpatterns_completionhandler_.md): Determines whether this pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [detectMetadataForTypes:completionHandler:](nspasteboarditem/detectmetadatafortypes_completionhandler_.md): Determines available metadata from the specified metadata types for this pasteboard item, without notifying the person using the app.

### Instance Properties

- [collaborationMetadata](nspasteboarditem/collaborationmetadata.md): A model object you use for conveying data during a collaboration.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSPasteboardReading](nspasteboardreading.md)
- [NSPasteboardWriting](nspasteboardwriting.md)

## See Also

### Pasteboard

- [NSPasteboard](nspasteboard.md): An object that transfers data to and from the pasteboard server.
- [NSPasteboardReading](nspasteboardreading.md): A set of methods that defines the interface for initializing an object from a pasteboard.
- [NSPasteboardWriting](nspasteboardwriting.md): A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.
- [NSPasteboardItemDataProvider](nspasteboarditemdataprovider.md): A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.
- [NSPasteboardContentsOptions](nspasteboard/contentsoptions.md): Options for preparing the pasteboard.
- [NSPasteboardTypeOwner](nspasteboardtypeowner.md): An object that serves as a data provider for data types that use lazy data fulfillment from a pasteboard request.
