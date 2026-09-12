> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfilepromisereceiver/receivepromisedfiles(atdestination:options:operationqueue:reader:)](https://developer.apple.com/documentation/appkit/nsfilepromisereceiver/receivepromisedfiles(atdestination:options:operationqueue:reader:))

# receivePromisedFiles(atDestination:options:operationQueue:reader:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Fulfills the promises at the specified destination.

## Declaration

```swift
func receivePromisedFiles(atDestination destinationDir: URL, options: [AnyHashable : Any] = [:], operationQueue: OperationQueue, reader: @escaping (URL, (any Error)?) -> Void)
```

## Parameters

- `destinationDir`: The destination location URL of the file promise.
- `options`: An options dictionary to pass additional data.
- `operationQueue`: The operation queue on which to call the reader block when the promised file is ready.
- `reader`: A block to be called on the supplied operationQueue when the promised file is ready to be read.

<a id="Discussion"></a>

## Discussion

Call this method only when you’re accepting the file promise. All file promise receivers in a drag must specify the same destination location. The `options` dictionary is ignored for now. The `reader` block is called on the supplied `operationQueue` when the promised file is ready to be read.

Avoid blocking the main thread while waiting for the file promise to be written (which can be a long process) by specifying an operation queue other than the main queue. When the source is an [NSFilePromiseProvider](../nsfilepromiseprovider.md), the reader block call is wrapped in a file coordination read.

> **Note**

>  If writing the promised file fails, the `reader` block is still called with a non-nil `error`. There may be nothing in `fileURL`, or there may be a partial or corrupt file.

# receivePromisedFilesAtDestination:options:operationQueue:reader: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Fulfills the promises at the specified destination.

## Declaration

```objectivec
- (void) receivePromisedFilesAtDestination:(NSURL *) destinationDir options:(NSDictionary *) options operationQueue:(NSOperationQueue *) operationQueue reader:(void (^)(NSURL *fileURL, NSError *errorOrNil)) reader;
```

## Parameters

- `destinationDir`: The destination location URL of the file promise.
- `options`: An options dictionary to pass additional data.
- `operationQueue`: The operation queue on which to call the reader block when the promised file is ready.
- `reader`: A block to be called on the supplied operationQueue when the promised file is ready to be read.

<a id="Discussion"></a>

## Discussion

Call this method only when you’re accepting the file promise. All file promise receivers in a drag must specify the same destination location. The `options` dictionary is ignored for now. The `reader` block is called on the supplied `operationQueue` when the promised file is ready to be read.

Avoid blocking the main thread while waiting for the file promise to be written (which can be a long process) by specifying an operation queue other than the main queue. When the source is an [NSFilePromiseProvider](../nsfilepromiseprovider.md), the reader block call is wrapped in a file coordination read.

> **Note**

>  If writing the promised file fails, the `reader` block is still called with a non-nil `error`. There may be nothing in `fileURL`, or there may be a partial or corrupt file.
