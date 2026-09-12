> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilepresenter/accommodatepresenteditemdeletion(completionhandler:)](https://developer.apple.com/documentation/foundation/nsfilepresenter/accommodatepresenteditemdeletion(completionhandler:))

# accommodatePresentedItemDeletion(completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells your object that its presented item is about to be deleted.

## Declaration

```swift
optional func accommodatePresentedItemDeletion(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
optional func accommodatePresentedItemDeletion() async throws
```

## Parameters

- `completionHandler`: The [Block object](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Block.html#//apple_ref/doc/uid/TP40008195-CH3) to call after updating your data structures. Pass `nil` to the block’s `errorOrNil` parameter if you were able to successfully prepare for the deletion of the item. Pass an error object if your object could not prepare itself properly.

<a id="Discussion"></a>

## Discussion

A file coordinator calls this method when your object’s presented item is about to be deleted. You can use this method to perform any actions that are needed to prepare for the deletion. For example, document objects typically use this method to close the document.

> **Important**

>  If you implement this method, you must execute the block in the `completionHandler` parameter at the end of your implementation. The system waits for you to execute that block before allowing the other object to delete the file or directory. Therefore, failure to execute the block could stall threads in your application or other processes.

## See Also

### Handling Changes to Files

- [savePresentedItemChanges(completionHandler:)](savepresenteditemchanges%28completionhandler_%29.md): Tells your object to save any unsaved changes for the presented item.
- [presentedItemDidMove(to:)](presenteditemdidmove%28to_%29.md): Tells your object that the presented item moved or was renamed.
- [presentedItemDidChange()](presenteditemdidchange%28%29.md): Tells your object that the presented item’s contents or attributes changed.

# accommodatePresentedItemDeletionWithCompletionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells your object that its presented item is about to be deleted.

## Declaration

```objectivec
- (void) accommodatePresentedItemDeletionWithCompletionHandler:(void (^)(NSError *errorOrNil)) completionHandler;
```

## Parameters

- `completionHandler`: The [Block object](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Block.html#//apple_ref/doc/uid/TP40008195-CH3) to call after updating your data structures. Pass `nil` to the block’s `errorOrNil` parameter if you were able to successfully prepare for the deletion of the item. Pass an error object if your object could not prepare itself properly.

<a id="Discussion"></a>

## Discussion

A file coordinator calls this method when your object’s presented item is about to be deleted. You can use this method to perform any actions that are needed to prepare for the deletion. For example, document objects typically use this method to close the document.

> **Important**

>  If you implement this method, you must execute the block in the `completionHandler` parameter at the end of your implementation. The system waits for you to execute that block before allowing the other object to delete the file or directory. Therefore, failure to execute the block could stall threads in your application or other processes.

## See Also

### Handling Changes to Files

- [savePresentedItemChangesWithCompletionHandler:](savepresenteditemchanges%28completionhandler_%29.md): Tells your object to save any unsaved changes for the presented item.
- [presentedItemDidMoveToURL:](presenteditemdidmove%28to_%29.md): Tells your object that the presented item moved or was renamed.
- [presentedItemDidChange](presenteditemdidchange%28%29.md): Tells your object that the presented item’s contents or attributes changed.
