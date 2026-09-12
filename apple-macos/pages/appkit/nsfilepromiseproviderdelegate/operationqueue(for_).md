> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfilepromiseproviderdelegate/operationqueue(for:)](https://developer.apple.com/documentation/appkit/nsfilepromiseproviderdelegate/operationqueue(for:))

# operationQueue(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Returns the operation queue from which to issue the write request.

## Declaration

```swift
@MainActor optional func operationQueue(for filePromiseProvider: NSFilePromiseProvider) -> OperationQueue
```

## Parameters

- `filePromiseProvider`: The file promise provider for the operation queue.

<a id="Discussion"></a>

## Discussion

If this method isn’t implemented, the main operation queue is used. Although this method is optional, to avoid blocking your main thread, provide an operation queue other than the main operation queue.

## See Also

### Handling File Promises

- [filePromiseProvider(\_:fileNameForType:)](filepromiseprovider%28__filenamefortype_%29.md): Provides the drag destination file’s name.
- [filePromiseProvider(\_:writePromiseTo:completionHandler:)](filepromiseprovider%28__writepromiseto_completionhandler_%29.md): Writes the contents of a promise to the specified URL.

# operationQueueForFilePromiseProvider: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the operation queue from which to issue the write request.

## Declaration

```objectivec
- (NSOperationQueue *) operationQueueForFilePromiseProvider:(NSFilePromiseProvider *) filePromiseProvider;
```

## Parameters

- `filePromiseProvider`: The file promise provider for the operation queue.

<a id="Discussion"></a>

## Discussion

If this method isn’t implemented, the main operation queue is used. Although this method is optional, to avoid blocking your main thread, provide an operation queue other than the main operation queue.

## See Also

### Handling File Promises

- [filePromiseProvider:fileNameForType:](filepromiseprovider%28__filenamefortype_%29.md): Provides the drag destination file’s name.
- [filePromiseProvider:writePromiseToURL:completionHandler:](filepromiseprovider%28__writepromiseto_completionhandler_%29.md): Writes the contents of a promise to the specified URL.
