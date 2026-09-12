> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilepresenter/presentedsubitemdidchange(at:)](https://developer.apple.com/documentation/foundation/nsfilepresenter/presentedsubitemdidchange(at:))

# presentedSubitemDidChange(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the contents or attributes of the specified item changed.

## Declaration

```swift
optional func presentedSubitemDidChange(at url: URL)
```

## Parameters

- `url`: The URL of the item in the presented directory that changed. The item need not be at the top level of the presented directory but may itself be inside a nested subdirectory.

<a id="Discussion"></a>

## Discussion

This method is relevant for applications that present directories. This might occur if the delegate manages the contents of a directory or manages a file that is implemented as a file package. Your implementation of this method should take whatever actions necessary to handle the change in content or attributes of the specified item.

If the presented directory is a file package, the system calls the [presentedItemDidChange()](presenteditemdidchange%28%29.md) method if your delegate does not implement this method.

## See Also

### Handling Changes to a Presented Directory

- [accommodatePresentedSubitemDeletion(at:completionHandler:)](accommodatepresentedsubitemdeletion%28at_completionhandler_%29.md): Tells the delegate that some entity wants to delete an item that is inside of a presented directory.
- [presentedSubitemDidAppear(at:)](presentedsubitemdidappear%28at_%29.md): Tells the delegate that an item was added to the presented directory.
- [presentedSubitem(at:didMoveTo:)](presentedsubitem%28at_didmoveto_%29.md): Tells the delegate that an item in the presented directory moved to a new location.

# presentedSubitemDidChangeAtURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate that the contents or attributes of the specified item changed.

## Declaration

```objectivec
- (void) presentedSubitemDidChangeAtURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of the item in the presented directory that changed. The item need not be at the top level of the presented directory but may itself be inside a nested subdirectory.

<a id="Discussion"></a>

## Discussion

This method is relevant for applications that present directories. This might occur if the delegate manages the contents of a directory or manages a file that is implemented as a file package. Your implementation of this method should take whatever actions necessary to handle the change in content or attributes of the specified item.

If the presented directory is a file package, the system calls the [presentedItemDidChange](presenteditemdidchange%28%29.md) method if your delegate does not implement this method.

## See Also

### Handling Changes to a Presented Directory

- [accommodatePresentedSubitemDeletionAtURL:completionHandler:](accommodatepresentedsubitemdeletion%28at_completionhandler_%29.md): Tells the delegate that some entity wants to delete an item that is inside of a presented directory.
- [presentedSubitemDidAppearAtURL:](presentedsubitemdidappear%28at_%29.md): Tells the delegate that an item was added to the presented directory.
- [presentedSubitemAtURL:didMoveToURL:](presentedsubitem%28at_didmoveto_%29.md): Tells the delegate that an item in the presented directory moved to a new location.
