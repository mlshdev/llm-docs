> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocument/revert(tocontentsof:completionhandler:)](https://developer.apple.com/documentation/uikit/uidocument/revert(tocontentsof:completionhandler:))

# revert(toContentsOf:completionHandler:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Reverts a document to the most recent document data stored on-disk.

## Declaration

```swift
func revert(toContentsOf url: URL, completionHandler: (@Sendable (Bool) -> Void)? = nil)
```

```swift
func revert(toContentsOf url: URL) async -> Bool
```

## Parameters

- `url`: A file URL locating the most recent version of the document file in the application’s sandbox.
- `completionHandler`: A block with code to execute after the reversion operation concludes. The block returns no value and has one parameter:

  - **`success`**: [true](https://developer.apple.com/documentation/swift/true) if the reversion operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

  The block is invoked on the main queue.

<a id="Discussion"></a>

## Discussion

You call this method to discard all unsaved document modifications and replace the document’s contents by reading the file or file package located by `url`. The default implementation brackets the reversion operation between [disableEditing()](disableediting%28%29.md) and [enableEditing()](enableediting%28%29.md)because the document shouldn’t accept user changes during this period. Subclasses that override this method must call the superclass implementation (`super`) or use the [NSFileCoordinator](../../foundation/nsfilecoordinator.md) class to initiate a coordinated read.

# revertToContentsOfURL:completionHandler: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Reverts a document to the most recent document data stored on-disk.

## Declaration

```objectivec
- (void) revertToContentsOfURL:(NSURL *) url completionHandler:(void (^)(BOOL success)) completionHandler;
```

## Parameters

- `url`: A file URL locating the most recent version of the document file in the application’s sandbox.
- `completionHandler`: A block with code to execute after the reversion operation concludes. The block returns no value and has one parameter:

  - **`success`**: [true](https://developer.apple.com/documentation/swift/true) if the reversion operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

  The block is invoked on the main queue.

<a id="Discussion"></a>

## Discussion

You call this method to discard all unsaved document modifications and replace the document’s contents by reading the file or file package located by `url`. The default implementation brackets the reversion operation between [disableEditing](disableediting%28%29.md) and [enableEditing](enableediting%28%29.md)because the document shouldn’t accept user changes during this period. Subclasses that override this method must call the superclass implementation (`super`) or use the [NSFileCoordinator](../../foundation/nsfilecoordinator.md) class to initiate a coordinated read.
