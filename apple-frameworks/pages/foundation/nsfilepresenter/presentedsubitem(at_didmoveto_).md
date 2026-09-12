> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilepresenter/presentedsubitem(at:didmoveto:)](https://developer.apple.com/documentation/foundation/nsfilepresenter/presentedsubitem(at:didmoveto:))

# presentedSubitem(at:didMoveTo:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that an item in the presented directory moved to a new location.

## Declaration

```swift
optional func presentedSubitem(at oldURL: URL, didMoveTo newURL: URL)
```

## Parameters

- `oldURL`: The original URL of the item inside the presented directory. The item need not be at the top level of the presented directory but may itself be inside a nested subdirectory.
- `newURL`: The new URL for the item. This URL may or may not be located inside the presented directory.

<a id="Discussion"></a>

## Discussion

This method is relevant for applications that present directories. This might occur if the delegate manages the contents of a directory or manages a file that is implemented as a file package. Your implementation of this method should take whatever actions necessary to handle the change in location of the specified item. For example, you might update references to the item in your application’s data structures and refresh your user interface.

If the presented directory is a file package, the system calls the [presentedItemDidChange()](presenteditemdidchange%28%29.md) method if your delegate does not implement this method.

## See Also

### Handling Changes to a Presented Directory

- [accommodatePresentedSubitemDeletion(at:completionHandler:)](accommodatepresentedsubitemdeletion%28at_completionhandler_%29.md): Tells the delegate that some entity wants to delete an item that is inside of a presented directory.
- [presentedSubitemDidAppear(at:)](presentedsubitemdidappear%28at_%29.md): Tells the delegate that an item was added to the presented directory.
- [presentedSubitemDidChange(at:)](presentedsubitemdidchange%28at_%29.md): Tells the delegate that the contents or attributes of the specified item changed.

# presentedSubitemAtURL:didMoveToURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that an item in the presented directory moved to a new location.

## Declaration

```objectivec
- (void) presentedSubitemAtURL:(NSURL *) oldURL didMoveToURL:(NSURL *) newURL;
```

## Parameters

- `oldURL`: The original URL of the item inside the presented directory. The item need not be at the top level of the presented directory but may itself be inside a nested subdirectory.
- `newURL`: The new URL for the item. This URL may or may not be located inside the presented directory.

<a id="Discussion"></a>

## Discussion

This method is relevant for applications that present directories. This might occur if the delegate manages the contents of a directory or manages a file that is implemented as a file package. Your implementation of this method should take whatever actions necessary to handle the change in location of the specified item. For example, you might update references to the item in your application’s data structures and refresh your user interface.

If the presented directory is a file package, the system calls the [presentedItemDidChange](presenteditemdidchange%28%29.md) method if your delegate does not implement this method.

## See Also

### Handling Changes to a Presented Directory

- [accommodatePresentedSubitemDeletionAtURL:completionHandler:](accommodatepresentedsubitemdeletion%28at_completionhandler_%29.md): Tells the delegate that some entity wants to delete an item that is inside of a presented directory.
- [presentedSubitemDidAppearAtURL:](presentedsubitemdidappear%28at_%29.md): Tells the delegate that an item was added to the presented directory.
- [presentedSubitemDidChangeAtURL:](presentedsubitemdidchange%28at_%29.md): Tells the delegate that the contents or attributes of the specified item changed.
