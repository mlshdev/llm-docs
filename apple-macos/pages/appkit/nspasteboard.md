> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspasteboard](https://developer.apple.com/documentation/appkit/nspasteboard)

# NSPasteboard (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that transfers data to and from the pasteboard server.

## Declaration

```swift
class NSPasteboard
```

## Mentioned In

- [Supporting Writing Tools via the pasteboard](supporting-writing-tools-via-the-pasteboard.md)

<a id="overview"></a>

## Overview

The pasteboard server is shared by all running apps. It contains data that the user has cut or copied, as well as other data that one application wants to transfer to another. [NSPasteboard](nspasteboard.md) objects are an application’s sole interface to the server and to all pasteboard operations.

An [NSPasteboard](nspasteboard.md) object is also used to transfer data between apps and service providers listed in each application’s Services menu. The drag pasteboard is used to transfer data that is being dragged by the user.

A pasteboard can contain multiple items. You can directly write or read any object that implements the [NSPasteboardWriting](nspasteboardwriting.md) or [NSPasteboardReading](nspasteboardreading.md) [Protocol](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Protocol.html#//apple_ref/doc/uid/TP40008195-CH45) respectively. This allows you to write and read common items such as URLs, colors, images, strings, attributed strings, and sounds without an intermediary object. Your custom classes can also implement these protocols for use with the pasteboard.

Writing methods such as [setData(\_:forType:)](nspasteboard/setdata%28__fortype_%29.md) provide a convenient means of writing to the first pasteboard item, without having to create the first pasteboard item. You can use code like this, for example:

```objc
[pboard clearContents];
[pboard setData:data forType:type];
```

The general pasteboard, available by way of the [general](nspasteboard/general.md) class method, automatically participates with the Universal Clipboard feature in macOS 10.12 and later and in iOS 10.0 and later. There is no macOS API for interacting with this feature.

## Topics

### Creating and releasing a pasteboard

- [general](nspasteboard/general.md): The shared pasteboard object to use for general content.
- [init(byFilteringData:ofType:)](nspasteboard/init%28byfilteringdata_oftype_%29.md): Creates a new pasteboard object that supplies the specified data in as many types as possible based on the available filter services.
- [init(byFilteringFile:)](nspasteboard/init%28byfilteringfile_%29.md): Creates a new pasteboard object that supplies the specified file in as many types as possible based on the available filter services.
- [init(byFilteringTypesInPasteboard:)](nspasteboard/init%28byfilteringtypesinpasteboard_%29.md): Creates a new pasteboard object that supplies the specified pasteboard data in as many types as possible based on the available filter services.
- [init(name:)](nspasteboard/init%28name_%29.md): Returns the pasteboard with the specified name.
- [NSPasteboard.Name](nspasteboard/name-swift.struct.md): Constants that represent the standard pasteboard names.
- [withUniqueName()](nspasteboard/withuniquename%28%29.md): Creates and returns a new pasteboard with a name that is guaranteed to be unique with respect to other pasteboards in the system.
- [releaseGlobally()](nspasteboard/releaseglobally%28%29.md): Releases the receiver’s resources in the pasteboard server.

### Determining pasteboard access

- [accessBehavior](nspasteboard/accessbehavior-9k4t4.md): The current pasteboard access behavior. The user can customize this behavior per-app in System Settings for any app that has triggered a pasteboard access alert in the past.
- [accessBehavior](nspasteboard/accessbehavior-86972.md): The current pasteboard access behavior. The user can customize this behavior per-app in System Settings for any app that has triggered a pasteboard access alert in the past.
- [NSPasteboard.AccessBehavior](nspasteboard/accessbehavior-swift.enum.md): A value indicating pasteboard access behavior.

### Writing data

- [clearContents()](nspasteboard/clearcontents%28%29.md): Clears the existing contents of the pasteboard.
- [writeObjects(\_:)](nspasteboard/writeobjects%28__%29.md): Writes an array of objects to the receiver.
- [setData(\_:forType:)](nspasteboard/setdata%28__fortype_%29.md): Sets the data as the representation for the specified type for the first item on the receiver.
- [setPropertyList(\_:forType:)](nspasteboard/setpropertylist%28__fortype_%29.md): Sets the given property list as the representation for the specified type for the first item on the receiver.
- [setString(\_:forType:)](nspasteboard/setstring%28__fortype_%29.md): Sets the given string as the representation for the specified type for the first item on the receiver.
- [NSPasteboard.PasteboardType](nspasteboard/pasteboardtype.md): The supported pasteboard types.

### Reading data

- [readObjects(forClasses:options:)](nspasteboard/readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboard.ReadingOptionKey](nspasteboard/readingoptionkey.md): Options for reading pasteboard data.
- [NSPasteboard.ReadingOptions](nspasteboard/readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
- [pasteboardItems](nspasteboard/pasteboarditems.md): An array that contains all the items held by the pasteboard.
- [index(of:)](nspasteboard/index%28of_%29.md): Returns the index of the specified pasteboard item.
- [data(forType:)](nspasteboard/data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.
- [propertyList(forType:)](nspasteboard/propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.
- [string(forType:)](nspasteboard/string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.

### Validating contents

- [availableType(from:)](nspasteboard/availabletype%28from_%29.md): Scans the specified types for a type that the receiver supports.
- [canReadItem(withDataConformingToTypes:)](nspasteboard/canreaditem%28withdataconformingtotypes_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that conform to the specified UTIs.
- [canReadObject(forClasses:options:)](nspasteboard/canreadobject%28forclasses_options_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that can be represented as an instance of any class in a given array.
- [types](nspasteboard/types.md): An array of the receiver’s supported data types.
- [types(filterableTo:)](nspasteboard/types%28filterableto_%29.md): Returns the data types that can be converted to the specified type using the available filter services.

### Detecting patterns and metadata in pasteboard items

- [detectedPatterns(for:)](nspasteboard/detectedpatterns%28for_%29.md): Determines whether the first pasteboard item matches the specified patterns, without notifying the person using the app.
- [detectedValues(for:)](nspasteboard/detectedvalues%28for_%29.md): Determines whether the first pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [NSPasteboard.DetectedValues](nspasteboard/detectedvalues.md): A type that contains common types of data that the data detection system matches for a pasteboard.
- [Pasteboard detection patterns](nspasteboard-detection-patterns.md): Common types of data that the data detection system matches for a pasteboard.
- [detectedMetadata(for:)](nspasteboard/detectedmetadata%28for_%29.md): Determines available metadata from the specified metadata types for the first pasteboard item, without notifying the person using the app.
- [NSPasteboard.DetectedMetadata](nspasteboard/detectedmetadata.md): An object that contains common types of metadata that the data detection system matches for a pasteboard.
- [Pasteboard detection metadata types](nspasteboard-detection-metadata-types.md): Common types of metadata that the data detection system matches for a pasteboard.

### Preparing the pasteboard for content

- [prepareForNewContents(with:)](nspasteboard/preparefornewcontents%28with_%29.md): Prepares the pasteboard to receive new contents, removing the existing pasteboard contents.
- [NSPasteboard.ContentsOptions](nspasteboard/contentsoptions.md): Options for preparing the pasteboard.

### Getting information about a pasteboard

- [name](nspasteboard/name-swift.property.md): The receiver’s name.
- [changeCount](nspasteboard/changecount.md): The receiver’s change count.

### Writing data (macOS 10.5 and earlier)

These methods all operate on what is conceptually the first item on the pasteboard. They accept UTIs and pboard type strings. In a future release they may take only UTIs.

- [declareTypes(\_:owner:)](nspasteboard/declaretypes%28__owner_%29.md): Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.
- [addTypes(\_:owner:)](nspasteboard/addtypes%28__owner_%29.md): Adds promises for the specified types to the first pasteboard item.
- [writeFileContents(\_:)](nspasteboard/writefilecontents%28__%29.md): Writes the contents of the specified file to the pasteboard.
- [write(\_:)](nspasteboard/write%28__%29.md): Writes the serialized contents of the specified file wrapper to the pasteboard.

### Reading data (macOS 10.5 and earlier)

These methods all operate on what is conceptually the first item on the pasteboard. They accept UTIs and pboard type strings. In a future release they may take only UTIs.

- [readFileContentsType(\_:toFile:)](nspasteboard/readfilecontentstype%28__tofile_%29.md): Reads data representing a file’s contents from the receiver and writes it to the specified file.
- [readFileWrapper()](nspasteboard/readfilewrapper%28%29.md): Reads data representing a file’s contents from the receiver and returns it as a file wrapper.

### Structures

- [NSPasteboard.WritingOptions](nspasteboard/writingoptions.md): Type to specify options for writing to a pasteboard.

### Initializers

- [init(byFilteringTypesIn:)](nspasteboard/init%28byfilteringtypesin_%29.md)

### Default Implementations

- [NSPasteboard Implementations](nspasteboard/nspasteboard-implementations.md)

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

## See Also

### Pasteboard

- [NSPasteboardItem](nspasteboarditem.md): An item on a pasteboard.
- [NSPasteboardReading](nspasteboardreading.md): A set of methods that defines the interface for initializing an object from a pasteboard.
- [NSPasteboardWriting](nspasteboardwriting.md): A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.
- [NSPasteboardItemDataProvider](nspasteboarditemdataprovider.md): A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.
- [NSPasteboard.ContentsOptions](nspasteboard/contentsoptions.md): Options for preparing the pasteboard.
- [NSPasteboardTypeOwner](nspasteboardtypeowner.md): An object that serves as a data provider for data types that use lazy data fulfillment from a pasteboard request.

# NSPasteboard (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

An object that transfers data to and from the pasteboard server.

## Declaration

```objectivec
@interface NSPasteboard : NSObject
```

## Mentioned In

- [Supporting Writing Tools via the pasteboard](supporting-writing-tools-via-the-pasteboard.md)

<a id="overview"></a>

## Overview

The pasteboard server is shared by all running apps. It contains data that the user has cut or copied, as well as other data that one application wants to transfer to another. [NSPasteboard](nspasteboard.md) objects are an application’s sole interface to the server and to all pasteboard operations.

An [NSPasteboard](nspasteboard.md) object is also used to transfer data between apps and service providers listed in each application’s Services menu. The drag pasteboard is used to transfer data that is being dragged by the user.

A pasteboard can contain multiple items. You can directly write or read any object that implements the [NSPasteboardWriting](nspasteboardwriting.md) or [NSPasteboardReading](nspasteboardreading.md) [Protocol](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Protocol.html#//apple_ref/doc/uid/TP40008195-CH45) respectively. This allows you to write and read common items such as URLs, colors, images, strings, attributed strings, and sounds without an intermediary object. Your custom classes can also implement these protocols for use with the pasteboard.

Writing methods such as [setData:forType:](nspasteboard/setdata%28__fortype_%29.md) provide a convenient means of writing to the first pasteboard item, without having to create the first pasteboard item. You can use code like this, for example:

```objc
[pboard clearContents];
[pboard setData:data forType:type];
```

The general pasteboard, available by way of the [generalPasteboard](nspasteboard/general.md) class method, automatically participates with the Universal Clipboard feature in macOS 10.12 and later and in iOS 10.0 and later. There is no macOS API for interacting with this feature.

## Topics

### Creating and releasing a pasteboard

- [generalPasteboard](nspasteboard/general.md): The shared pasteboard object to use for general content.
- [pasteboardByFilteringData:ofType:](nspasteboard/init%28byfilteringdata_oftype_%29.md): Creates a new pasteboard object that supplies the specified data in as many types as possible based on the available filter services.
- [pasteboardByFilteringFile:](nspasteboard/init%28byfilteringfile_%29.md): Creates a new pasteboard object that supplies the specified file in as many types as possible based on the available filter services.
- [pasteboardWithName:](nspasteboard/init%28name_%29.md): Returns the pasteboard with the specified name.
- [NSPasteboardName](nspasteboard/name-swift.struct.md): Constants that represent the standard pasteboard names.
- [pasteboardWithUniqueName](nspasteboard/withuniquename%28%29.md): Creates and returns a new pasteboard with a name that is guaranteed to be unique with respect to other pasteboards in the system.
- [releaseGlobally](nspasteboard/releaseglobally%28%29.md): Releases the receiver’s resources in the pasteboard server.

### Determining pasteboard access

- [accessBehavior](nspasteboard/accessbehavior-86972.md): The current pasteboard access behavior. The user can customize this behavior per-app in System Settings for any app that has triggered a pasteboard access alert in the past.
- [NSPasteboardAccessBehavior](nspasteboard/accessbehavior-swift.enum.md): A value indicating pasteboard access behavior.

### Writing data

- [clearContents](nspasteboard/clearcontents%28%29.md): Clears the existing contents of the pasteboard.
- [writeObjects:](nspasteboard/writeobjects%28__%29.md): Writes an array of objects to the receiver.
- [setData:forType:](nspasteboard/setdata%28__fortype_%29.md): Sets the data as the representation for the specified type for the first item on the receiver.
- [setPropertyList:forType:](nspasteboard/setpropertylist%28__fortype_%29.md): Sets the given property list as the representation for the specified type for the first item on the receiver.
- [setString:forType:](nspasteboard/setstring%28__fortype_%29.md): Sets the given string as the representation for the specified type for the first item on the receiver.
- [NSPasteboardType](nspasteboard/pasteboardtype.md): The supported pasteboard types.

### Reading data

- [readObjectsForClasses:options:](nspasteboard/readobjects%28forclasses_options_%29.md): Reads from the receiver objects that best match the specified array of classes.
- [NSPasteboardReadingOptionKey](nspasteboard/readingoptionkey.md): Options for reading pasteboard data.
- [NSPasteboardReadingOptions](nspasteboard/readingoptions.md): Options that specify how to interpret data on the pasteboard when initializing pasteboard data.
- [pasteboardItems](nspasteboard/pasteboarditems.md): An array that contains all the items held by the pasteboard.
- [indexOfPasteboardItem:](nspasteboard/index%28of_%29.md): Returns the index of the specified pasteboard item.
- [dataForType:](nspasteboard/data%28fortype_%29.md): Returns the data for the specified type from the first item in the receiver that contains the type.
- [propertyListForType:](nspasteboard/propertylist%28fortype_%29.md): Returns the property list for the specified type from the first item in the receiver that contains the type.
- [stringForType:](nspasteboard/string%28fortype_%29.md): Returns a concatenation of the strings for the specified type from all the items in the receiver that contain the type.

### Validating contents

- [availableTypeFromArray:](nspasteboard/availabletype%28from_%29.md): Scans the specified types for a type that the receiver supports.
- [canReadItemWithDataConformingToTypes:](nspasteboard/canreaditem%28withdataconformingtotypes_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that conform to the specified UTIs.
- [canReadObjectForClasses:options:](nspasteboard/canreadobject%28forclasses_options_%29.md): Returns a Boolean value that indicates whether the receiver contains any items that can be represented as an instance of any class in a given array.
- [types](nspasteboard/types.md): An array of the receiver’s supported data types.
- [typesFilterableTo:](nspasteboard/types%28filterableto_%29.md): Returns the data types that can be converted to the specified type using the available filter services.

### Detecting patterns and metadata in pasteboard items

- [detectPatternsForPatterns:completionHandler:](nspasteboard/detectpatternsforpatterns_completionhandler_.md): Determines whether the first pasteboard item matches the specified patterns, without notifying the person using the app.
- [detectValuesForPatterns:completionHandler:](nspasteboard/detectvaluesforpatterns_completionhandler_.md): Determines whether the first pasteboard item matches the specified patterns, reading the contents if it finds a match.
- [Pasteboard detection patterns](nspasteboard-detection-patterns.md): Common types of data that the data detection system matches for a pasteboard.
- [detectMetadataForTypes:completionHandler:](nspasteboard/detectmetadatafortypes_completionhandler_.md): Determines available metadata from the specified metadata types for the first pasteboard item, without notifying the person using the app.
- [Pasteboard detection metadata types](nspasteboard-detection-metadata-types.md): Common types of metadata that the data detection system matches for a pasteboard.

### Preparing the pasteboard for content

- [prepareForNewContentsWithOptions:](nspasteboard/preparefornewcontents%28with_%29.md): Prepares the pasteboard to receive new contents, removing the existing pasteboard contents.
- [NSPasteboardContentsOptions](nspasteboard/contentsoptions.md): Options for preparing the pasteboard.

### Getting information about a pasteboard

- [name](nspasteboard/name-swift.property.md): The receiver’s name.
- [changeCount](nspasteboard/changecount.md): The receiver’s change count.

### Writing data (macOS 10.5 and earlier)

These methods all operate on what is conceptually the first item on the pasteboard. They accept UTIs and pboard type strings. In a future release they may take only UTIs.

- [declareTypes:owner:](nspasteboard/declaretypes%28__owner_%29.md): Prepares the receiver for a change in its contents by declaring the new types of data it will contain and a new owner.
- [addTypes:owner:](nspasteboard/addtypes%28__owner_%29.md): Adds promises for the specified types to the first pasteboard item.
- [writeFileContents:](nspasteboard/writefilecontents%28__%29.md): Writes the contents of the specified file to the pasteboard.
- [writeFileWrapper:](nspasteboard/write%28__%29.md): Writes the serialized contents of the specified file wrapper to the pasteboard.

### Reading data (macOS 10.5 and earlier)

These methods all operate on what is conceptually the first item on the pasteboard. They accept UTIs and pboard type strings. In a future release they may take only UTIs.

- [readFileContentsType:toFile:](nspasteboard/readfilecontentstype%28__tofile_%29.md): Reads data representing a file’s contents from the receiver and writes it to the specified file.
- [readFileWrapper](nspasteboard/readfilewrapper%28%29.md): Reads data representing a file’s contents from the receiver and returns it as a file wrapper.

### Structures

- [NSPasteboardWritingOptions](nspasteboard/writingoptions.md): Type to specify options for writing to a pasteboard.

### Type Methods

- [pasteboardByFilteringTypesInPasteboard:](nspasteboard/init%28byfilteringtypesin_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Pasteboard

- [NSPasteboardItem](nspasteboarditem.md): An item on a pasteboard.
- [NSPasteboardReading](nspasteboardreading.md): A set of methods that defines the interface for initializing an object from a pasteboard.
- [NSPasteboardWriting](nspasteboardwriting.md): A set of methods that defines the interface for retrieving a representation of an object that can be written to a pasteboard.
- [NSPasteboardItemDataProvider](nspasteboarditemdataprovider.md): A set of methods implemented by the data provider of a pasteboard item to provide the data for a particular UTI type.
- [NSPasteboardContentsOptions](nspasteboard/contentsoptions.md): Options for preparing the pasteboard.
- [NSPasteboardTypeOwner](nspasteboardtypeowner.md): An object that serves as a data provider for data types that use lazy data fulfillment from a pasteboard request.
