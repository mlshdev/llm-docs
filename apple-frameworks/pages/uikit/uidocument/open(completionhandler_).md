> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/open(completionhandler:)](https://developer.apple.com/documentation/uikit/uidocument/open(completionhandler:))

# open(completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Opens a document asynchronously.

## Declaration

```swift
func open(completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func open() async -> Bool
```

## Parameters

- `completionHandler`: A block with code to execute after the open operation concludes. The block returns no value and has one parameter:

  - **`success`**: [true](https://developer.apple.com/documentation/swift/true) if the open operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

  The block is invoked on the main queue.

<a id="Discussion"></a>

## Discussion

Call this method to begin the sequence of method calls that opens and reads a document asynchronously. The method obtains the file-system location of the document from the [fileURL](fileurl.md) property. After the open operation concludes, the code in `completionHandler` is executed.

You can override this method if you want custom document-opening behavior, but if you do it’s recommended that you call the superclass implementation first (`super`). If you don’t call `super`, you should use the [NSFileCoordinator](../../foundation/nsfilecoordinator.md) class to implement coordinated reading. The default implementation calls [performAsynchronousFileAccess(\_:)](performasynchronousfileaccess%28__%29.md) to schedule the document-reading work for execution on a background queue and then, from the dispatched block, performs file coordination. The queued task then calls [read(from:)](read%28from_%29.md).

## See Also

### Reading document data

- [load(fromContents:ofType:)](load%28fromcontents_oftype_%29.md): Loads the document data into the app’s data model.
- [read(from:)](read%28from_%29.md): Reads the document data in a file at a specified location in the application sandbox.

# openWithCompletionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Opens a document asynchronously.

## Declaration

```objectivec
- (void) openWithCompletionHandler:(void (^)(BOOL success)) completionHandler;
```

## Parameters

- `completionHandler`: A block with code to execute after the open operation concludes. The block returns no value and has one parameter:

  - **`success`**: [true](https://developer.apple.com/documentation/swift/true) if the open operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

  The block is invoked on the main queue.

<a id="Discussion"></a>

## Discussion

Call this method to begin the sequence of method calls that opens and reads a document asynchronously. The method obtains the file-system location of the document from the [fileURL](fileurl.md) property. After the open operation concludes, the code in `completionHandler` is executed.

You can override this method if you want custom document-opening behavior, but if you do it’s recommended that you call the superclass implementation first (`super`). If you don’t call `super`, you should use the [NSFileCoordinator](../../foundation/nsfilecoordinator.md) class to implement coordinated reading. The default implementation calls [performAsynchronousFileAccessUsingBlock:](performasynchronousfileaccess%28__%29.md) to schedule the document-reading work for execution on a background queue and then, from the dispatched block, performs file coordination. The queued task then calls [readFromURL:error:](read%28from_%29.md).

## See Also

### Reading document data

- [loadFromContents:ofType:error:](load%28fromcontents_oftype_%29.md): Loads the document data into the app’s data model.
- [readFromURL:error:](read%28from_%29.md): Reads the document data in a file at a specified location in the application sandbox.
