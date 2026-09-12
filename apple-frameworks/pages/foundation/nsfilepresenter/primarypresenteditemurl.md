> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsfilepresenter/primarypresenteditemurl](https://developer.apple.com/documentation/foundation/nsfilepresenter/primarypresenteditemurl)

# primaryPresentedItemURL (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The URL of a secondary item’s primary presented file or directory.

## Declaration

```swift
optional var primaryPresentedItemURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

This property supports App Sandbox in macOS.

Some apps require access to secondary files or directories with names that are related to the primary, user-selected file. For example, a subtitle file, by convention, has the same name as its corresponding movie file, but with a different filename extension. If a movie player is sandboxed, an [NSOpenPanel](https://developer.apple.com/documentation/appkit/nsopenpanel) object will grant access only to the user-selected movie file (the primary item) and not its associated subtitle file (the secondary item).

To gain access to a secondary item, first register an [NSFilePresenter](../nsfilepresenter.md) object for it. At any point in its existence, a secondary item must be able to return an [NSURL](../nsurl.md) object to its primary item. This is done by using this property.  When done accessing the secondary item, unregister the file presenter object.

## See Also

### Accessing File Presenter Attributes

- [presentedItemURL](presenteditemurl.md): The URL of the presented file or directory.
- [presentedItemOperationQueue](presenteditemoperationqueue.md): The operation queue in which to execute presenter-related messages.

# primaryPresentedItemURL (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The URL of a secondary item’s primary presented file or directory.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * primaryPresentedItemURL;
```

<a id="Discussion"></a>

## Discussion

This property supports App Sandbox in macOS.

Some apps require access to secondary files or directories with names that are related to the primary, user-selected file. For example, a subtitle file, by convention, has the same name as its corresponding movie file, but with a different filename extension. If a movie player is sandboxed, an [NSOpenPanel](https://developer.apple.com/documentation/appkit/nsopenpanel) object will grant access only to the user-selected movie file (the primary item) and not its associated subtitle file (the secondary item).

To gain access to a secondary item, first register an [NSFilePresenter](../nsfilepresenter.md) object for it. At any point in its existence, a secondary item must be able to return an [NSURL](../nsurl.md) object to its primary item. This is done by using this property.  When done accessing the secondary item, unregister the file presenter object.

## See Also

### Accessing File Presenter Attributes

- [presentedItemURL](presenteditemurl.md): The URL of the presented file or directory.
- [presentedItemOperationQueue](presenteditemoperationqueue.md): The operation queue in which to execute presenter-related messages.
