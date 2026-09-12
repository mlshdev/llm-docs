> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfilepromiseproviderdelegate/filepromiseprovider(_:filenamefortype:)](https://developer.apple.com/documentation/appkit/nsfilepromiseproviderdelegate/filepromiseprovider(_:filenamefortype:))

# filePromiseProvider(\_:fileNameForType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Provides the drag destination file’s name.

## Declaration

```swift
@MainActor func filePromiseProvider(_ filePromiseProvider: NSFilePromiseProvider, fileNameForType fileType: String) -> String
```

## Parameters

- `filePromiseProvider`: The file promise provider.
- `fileType`: A string describing the type of file being provided.

<a id="Discussion"></a>

## Discussion

This method is called when the drag destination fulfills the file promise. Determine and return the final filename (a base filename, not a full path).

> **Note**

>  Don’t start writing the file to the destination directory until the drag process is complete.  The drag process stops to wait for the method to return, and if it has to wait too long, the drag could be canceled.

## See Also

### Handling File Promises

- [filePromiseProvider(\_:writePromiseTo:completionHandler:)](filepromiseprovider%28__writepromiseto_completionhandler_%29.md): Writes the contents of a promise to the specified URL.
- [operationQueue(for:)](operationqueue%28for_%29.md): Returns the operation queue from which to issue the write request.

# filePromiseProvider:fileNameForType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Provides the drag destination file’s name.

## Declaration

```objectivec
- (NSString *) filePromiseProvider:(NSFilePromiseProvider *) filePromiseProvider fileNameForType:(NSString *) fileType;
```

## Parameters

- `filePromiseProvider`: The file promise provider.
- `fileType`: A string describing the type of file being provided.

<a id="Discussion"></a>

## Discussion

This method is called when the drag destination fulfills the file promise. Determine and return the final filename (a base filename, not a full path).

> **Note**

>  Don’t start writing the file to the destination directory until the drag process is complete.  The drag process stops to wait for the method to return, and if it has to wait too long, the drag could be canceled.

## See Also

### Handling File Promises

- [filePromiseProvider:writePromiseToURL:completionHandler:](filepromiseprovider%28__writepromiseto_completionhandler_%29.md): Writes the contents of a promise to the specified URL.
- [operationQueueForFilePromiseProvider:](operationqueue%28for_%29.md): Returns the operation queue from which to issue the write request.
