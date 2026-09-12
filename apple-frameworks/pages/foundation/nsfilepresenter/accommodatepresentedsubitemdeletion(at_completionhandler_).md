> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilepresenter/accommodatepresentedsubitemdeletion(at:completionhandler:)](https://developer.apple.com/documentation/foundation/nsfilepresenter/accommodatepresentedsubitemdeletion(at:completionhandler:))

# accommodatePresentedSubitemDeletion(at:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that some entity wants to delete an item that is inside of a presented directory.

## Declaration

```swift
optional func accommodatePresentedSubitemDeletion(at url: URL, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
optional func accommodatePresentedSubitemDeletion(at url: URL) async throws
```

## Parameters

- `url`: The URL of the item being deleted from the presented directory. The item need not be at the top level of the presented directory but may itself be inside a nested subdirectory.
- `completionHandler`: The [Block object](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Block.html#//apple_ref/doc/uid/TP40008195-CH3) to call after updating your data structures. Pass `nil` to the block’s `errorOrNil` parameter if you were able to successfully prepare for the deletion of the item. Pass an error object if your object could not prepare itself properly.

<a id="Discussion"></a>

## Discussion

This method is relevant for applications that present directories. This might occur if the delegate manages the contents of a directory or manages a file that is implemented as a file package. When called, your implementation of this method should take whatever actions needed to update your application to handle the deletion of the specified file.

> **Important**

>  If you implement this method, you must execute the block in the `completionHandler` parameter at the end of your implementation. The system waits for you to execute that block before allowing the other object to delete the item at the specified URL. Therefore, failure to execute the block could stall threads in your application or in other processes.

## See Also

### Handling Changes to a Presented Directory

- [presentedSubitemDidAppear(at:)](presentedsubitemdidappear%28at_%29.md): Tells the delegate that an item was added to the presented directory.
- [presentedSubitem(at:didMoveTo:)](presentedsubitem%28at_didmoveto_%29.md): Tells the delegate that an item in the presented directory moved to a new location.
- [presentedSubitemDidChange(at:)](presentedsubitemdidchange%28at_%29.md): Tells the delegate that the contents or attributes of the specified item changed.

# accommodatePresentedSubitemDeletionAtURL:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that some entity wants to delete an item that is inside of a presented directory.

## Declaration

```objectivec
- (void) accommodatePresentedSubitemDeletionAtURL:(NSURL *) url completionHandler:(void (^)(NSError *errorOrNil)) completionHandler;
```

## Parameters

- `url`: The URL of the item being deleted from the presented directory. The item need not be at the top level of the presented directory but may itself be inside a nested subdirectory.
- `completionHandler`: The [Block object](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/Block.html#//apple_ref/doc/uid/TP40008195-CH3) to call after updating your data structures. Pass `nil` to the block’s `errorOrNil` parameter if you were able to successfully prepare for the deletion of the item. Pass an error object if your object could not prepare itself properly.

<a id="Discussion"></a>

## Discussion

This method is relevant for applications that present directories. This might occur if the delegate manages the contents of a directory or manages a file that is implemented as a file package. When called, your implementation of this method should take whatever actions needed to update your application to handle the deletion of the specified file.

> **Important**

>  If you implement this method, you must execute the block in the `completionHandler` parameter at the end of your implementation. The system waits for you to execute that block before allowing the other object to delete the item at the specified URL. Therefore, failure to execute the block could stall threads in your application or in other processes.

## See Also

### Handling Changes to a Presented Directory

- [presentedSubitemDidAppearAtURL:](presentedsubitemdidappear%28at_%29.md): Tells the delegate that an item was added to the presented directory.
- [presentedSubitemAtURL:didMoveToURL:](presentedsubitem%28at_didmoveto_%29.md): Tells the delegate that an item in the presented directory moved to a new location.
- [presentedSubitemDidChangeAtURL:](presentedsubitemdidchange%28at_%29.md): Tells the delegate that the contents or attributes of the specified item changed.
