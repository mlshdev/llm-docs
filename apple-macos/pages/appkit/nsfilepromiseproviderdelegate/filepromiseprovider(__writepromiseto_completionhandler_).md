> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfilepromiseproviderdelegate/filepromiseprovider(_:writepromiseto:completionhandler:)](https://developer.apple.com/documentation/appkit/nsfilepromiseproviderdelegate/filepromiseprovider(_:writepromiseto:completionhandler:))

# filePromiseProvider(\_:writePromiseTo:completionHandler:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Writes the contents of a promise to the specified URL.

## Declaration

```swift
nonisolated func filePromiseProvider(_ filePromiseProvider: NSFilePromiseProvider, writePromiseTo url: URL, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
nonisolated func filePromiseProvider(_ filePromiseProvider: NSFilePromiseProvider, writePromiseTo url: URL) async throws
```

## Parameters

- `filePromiseProvider`: The file promise provider.
- `url`: The destination URL to write to.
- `completionHandler`: A completion handler to execute after the file has been written.

<a id="Discussion"></a>

## Discussion

This method is called after the drag is complete. The request executes on the [OperationQueue](https://developer.apple.com/documentation/foundation/operationqueue) supplied by [operationQueue(for:)](operationqueue%28for_%29.md).

Call the completion handler with the file contents wrapped in [NSFileCoordinator](https://developer.apple.com/documentation/foundation/nsfilecoordinator).  Be sure to write your file to the input `url` parameter.

## See Also

### Handling File Promises

- [filePromiseProvider(\_:fileNameForType:)](filepromiseprovider%28__filenamefortype_%29.md): Provides the drag destination file’s name.
- [operationQueue(for:)](operationqueue%28for_%29.md): Returns the operation queue from which to issue the write request.

# filePromiseProvider:writePromiseToURL:completionHandler: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the contents of a promise to the specified URL.

## Declaration

```objectivec
- (void) filePromiseProvider:(NSFilePromiseProvider *) filePromiseProvider writePromiseToURL:(NSURL *) url completionHandler:(void (^)(NSError *errorOrNil)) completionHandler;
```

## Parameters

- `filePromiseProvider`: The file promise provider.
- `url`: The destination URL to write to.
- `completionHandler`: A completion handler to execute after the file has been written.

<a id="Discussion"></a>

## Discussion

This method is called after the drag is complete. The request executes on the [NSOperationQueue](https://developer.apple.com/documentation/foundation/operationqueue) supplied by [operationQueueForFilePromiseProvider:](operationqueue%28for_%29.md).

Call the completion handler with the file contents wrapped in [NSFileCoordinator](https://developer.apple.com/documentation/foundation/nsfilecoordinator).  Be sure to write your file to the input `url` parameter.

## See Also

### Handling File Promises

- [filePromiseProvider:fileNameForType:](filepromiseprovider%28__filenamefortype_%29.md): Provides the drag destination file’s name.
- [operationQueueForFilePromiseProvider:](operationqueue%28for_%29.md): Returns the operation queue from which to issue the write request.
