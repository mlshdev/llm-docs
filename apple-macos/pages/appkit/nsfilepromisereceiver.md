> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfilepromisereceiver](https://developer.apple.com/documentation/appkit/nsfilepromisereceiver)

# NSFilePromiseReceiver (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12+

An object that receives a file promise from the pasteboard.

## Declaration

```swift
class NSFilePromiseReceiver
```

<a id="overview"></a>

## Overview

Because [NSFilePromiseReceiver](nsfilepromisereceiver.md) implements the [NSPasteboardReading](nspasteboardreading.md) protocol, you receive all file promises on the drag pasteboard as follows:

**Swift**

```swift
let filePromises = draggingPasteboard.readObjects(forClasses: [NSFilePromiseReceiver.self], options: nil)
```

**Objective-C**

```objc
NSArray<NSFilePromiseReceiver*> filePromises = [draggingPasteboard readObjectsForClasses:@[[NSFilePromiseReceiver class]] options:nil];
```

Likewise, you can enumerate dragged items by calling the following:

**Swift**

```swift
draggingInfo.enumerateDraggingItems(options: [], for: view, classes: [NSFilePromiseReceiver.self], searchOptions: [:], using: {(draggingItem, idx, stop) in
    let filePromiseReceiver = draggingItem.item
    // Use filePromiseReceiver here for your task.
}
```

**Objective-C**

```objc
[draggingInfo enumerateDraggingItemsWithOptions:0 forView:view classes:@[[NSFilePromiseReceiver class]] searchOptions:@{} usingBlock:^(NSDraggingItem* draggingItem, NSInteger idx, BOOL* stop) {
    NSFilePromiseReceiver* filePromiseReceiver = draggingItem.item
    // Use filePromiseReceiver here for your task.
}];
```

> **Note**

>  A non-item-based drag source may promise multiple files on the same pasteboard item. To be compatible with these drag sources, many [NSFilePromiseReceiver](nsfilepromisereceiver.md) methods return an array of values. Multiple-file item-based promises result in one [NSFilePromiseReceiver](nsfilepromisereceiver.md) per promised file.

## Topics

### Instance Properties

- [fileNames](nsfilepromisereceiver/filenames.md): An array containing names of the promised files being written to the destination location.
- [fileTypes](nsfilepromisereceiver/filetypes.md): An array containing types of the promised files being written to the destination location.

### Instance Methods

- [receivePromisedFiles(atDestination:options:operationQueue:reader:)](nsfilepromisereceiver/receivepromisedfiles%28atdestination_options_operationqueue_reader_%29.md): Fulfills the promises at the specified destination.

### Type Properties

- [readableDraggedTypes](nsfilepromisereceiver/readabledraggedtypes.md): An array containing dragged file types that are readable.

### Initializers

- [init(pasteboardPropertyList:ofType:)](nsfilepromisereceiver/init%28pasteboardpropertylist_oftype_%29.md)

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

## See Also

### File Promises

- [Supporting Drag and Drop Through File Promises](supporting-drag-and-drop-through-file-promises.md): Receive and provide file promises to support dragged app files and pasteboard operations.
- [Supporting Table View Drag and Drop Through File Promises](supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [Supporting Collection View Drag and Drop Through File Promises](supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [NSFilePromiseProvider](nsfilepromiseprovider.md): An object that provides a promise for the pasteboard.
- [NSFilePromiseProviderDelegate](nsfilepromiseproviderdelegate.md): A set of methods that provides the name of the promised file and writes the file to the destination directory when the file promise is fulfilled.

# NSFilePromiseReceiver (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.12+

An object that receives a file promise from the pasteboard.

## Declaration

```objectivec
@interface NSFilePromiseReceiver : NSObject
```

<a id="overview"></a>

## Overview

Because [NSFilePromiseReceiver](nsfilepromisereceiver.md) implements the [NSPasteboardReading](nspasteboardreading.md) protocol, you receive all file promises on the drag pasteboard as follows:

**Swift**

```swift
let filePromises = draggingPasteboard.readObjects(forClasses: [NSFilePromiseReceiver.self], options: nil)
```

**Objective-C**

```objc
NSArray<NSFilePromiseReceiver*> filePromises = [draggingPasteboard readObjectsForClasses:@[[NSFilePromiseReceiver class]] options:nil];
```

Likewise, you can enumerate dragged items by calling the following:

**Swift**

```swift
draggingInfo.enumerateDraggingItems(options: [], for: view, classes: [NSFilePromiseReceiver.self], searchOptions: [:], using: {(draggingItem, idx, stop) in
    let filePromiseReceiver = draggingItem.item
    // Use filePromiseReceiver here for your task.
}
```

**Objective-C**

```objc
[draggingInfo enumerateDraggingItemsWithOptions:0 forView:view classes:@[[NSFilePromiseReceiver class]] searchOptions:@{} usingBlock:^(NSDraggingItem* draggingItem, NSInteger idx, BOOL* stop) {
    NSFilePromiseReceiver* filePromiseReceiver = draggingItem.item
    // Use filePromiseReceiver here for your task.
}];
```

> **Note**

>  A non-item-based drag source may promise multiple files on the same pasteboard item. To be compatible with these drag sources, many [NSFilePromiseReceiver](nsfilepromisereceiver.md) methods return an array of values. Multiple-file item-based promises result in one [NSFilePromiseReceiver](nsfilepromisereceiver.md) per promised file.

## Topics

### Instance Properties

- [fileNames](nsfilepromisereceiver/filenames.md): An array containing names of the promised files being written to the destination location.
- [fileTypes](nsfilepromisereceiver/filetypes.md): An array containing types of the promised files being written to the destination location.

### Instance Methods

- [receivePromisedFilesAtDestination:options:operationQueue:reader:](nsfilepromisereceiver/receivepromisedfiles%28atdestination_options_operationqueue_reader_%29.md): Fulfills the promises at the specified destination.

### Type Properties

- [readableDraggedTypes](nsfilepromisereceiver/readabledraggedtypes.md): An array containing dragged file types that are readable.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSPasteboardReading](nspasteboardreading.md)

## See Also

### File Promises

- [Supporting Drag and Drop Through File Promises](supporting-drag-and-drop-through-file-promises.md): Receive and provide file promises to support dragged app files and pasteboard operations.
- [Supporting Table View Drag and Drop Through File Promises](supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [Supporting Collection View Drag and Drop Through File Promises](supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [NSFilePromiseProvider](nsfilepromiseprovider.md): An object that provides a promise for the pasteboard.
- [NSFilePromiseProviderDelegate](nsfilepromiseproviderdelegate.md): A set of methods that provides the name of the promised file and writes the file to the destination directory when the file promise is fulfilled.
