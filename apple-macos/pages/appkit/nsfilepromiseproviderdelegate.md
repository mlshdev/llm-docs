> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfilepromiseproviderdelegate](https://developer.apple.com/documentation/appkit/nsfilepromiseproviderdelegate)

# NSFilePromiseProviderDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that provides the name of the promised file and writes the file to the destination directory when the file promise is fulfilled.

## Declaration

```swift
protocol NSFilePromiseProviderDelegate : NSObjectProtocol
```

## Topics

### Handling File Promises

- [filePromiseProvider(\_:fileNameForType:)](nsfilepromiseproviderdelegate/filepromiseprovider%28__filenamefortype_%29.md): Provides the drag destination file’s name.
- [filePromiseProvider(\_:writePromiseTo:completionHandler:)](nsfilepromiseproviderdelegate/filepromiseprovider%28__writepromiseto_completionhandler_%29.md): Writes the contents of a promise to the specified URL.
- [operationQueue(for:)](nsfilepromiseproviderdelegate/operationqueue%28for_%29.md): Returns the operation queue from which to issue the write request.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### File Promises

- [Supporting Drag and Drop Through File Promises](supporting-drag-and-drop-through-file-promises.md): Receive and provide file promises to support dragged app files and pasteboard operations.
- [Supporting Table View Drag and Drop Through File Promises](supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [Supporting Collection View Drag and Drop Through File Promises](supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [NSFilePromiseProvider](nsfilepromiseprovider.md): An object that provides a promise for the pasteboard.
- [NSFilePromiseReceiver](nsfilepromisereceiver.md): An object that receives a file promise from the pasteboard.

# NSFilePromiseProviderDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that provides the name of the promised file and writes the file to the destination directory when the file promise is fulfilled.

## Declaration

```objectivec
@protocol NSFilePromiseProviderDelegate <NSObject>
```

## Topics

### Handling File Promises

- [filePromiseProvider:fileNameForType:](nsfilepromiseproviderdelegate/filepromiseprovider%28__filenamefortype_%29.md): Provides the drag destination file’s name.
- [filePromiseProvider:writePromiseToURL:completionHandler:](nsfilepromiseproviderdelegate/filepromiseprovider%28__writepromiseto_completionhandler_%29.md): Writes the contents of a promise to the specified URL.
- [operationQueueForFilePromiseProvider:](nsfilepromiseproviderdelegate/operationqueue%28for_%29.md): Returns the operation queue from which to issue the write request.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### File Promises

- [Supporting Drag and Drop Through File Promises](supporting-drag-and-drop-through-file-promises.md): Receive and provide file promises to support dragged app files and pasteboard operations.
- [Supporting Table View Drag and Drop Through File Promises](supporting-table-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [Supporting Collection View Drag and Drop Through File Promises](supporting-collection-view-drag-and-drop-through-file-promises.md): Share data between macOS apps during drag and drop by using an item provider.
- [NSFilePromiseProvider](nsfilepromiseprovider.md): An object that provides a promise for the pasteboard.
- [NSFilePromiseReceiver](nsfilepromisereceiver.md): An object that receives a file promise from the pasteboard.
