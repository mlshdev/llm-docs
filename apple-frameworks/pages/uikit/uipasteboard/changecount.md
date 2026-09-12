> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipasteboard/changecount](https://developer.apple.com/documentation/uikit/uipasteboard/changecount)

# changeCount (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of times the pasteboard’s contents change.

## Declaration

```swift
var changeCount: Int { get }
```

<a id="Discussion"></a>

## Discussion

Whenever the contents of a pasteboard changes—specifically, when pasteboard items are added, modified, or removed—`UIPasteboard` increments the value of this property. After it increments the change count, UIPasteboard posts the notifications named [changedNotification](changednotification.md) (for additions and modifications) and [removedNotification](removednotification.md) (for removals). These notifications include (in the `userInfo` dictionary) the types of the pasteboard items added or removed. Because `UIPasteboard` waits until the end of the current event loop before incrementing the change count, notifications can be batched. The class also updates the change count when an app reactivates and another app has changed the pasteboard contents. When users restart a device, the change count is reset to zero.

## See Also

### Getting and setting pasteboard attributes

- [name](name-swift.property.md): The name of the pasteboard.

# changeCount (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of times the pasteboard’s contents change.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger changeCount;
```

<a id="Discussion"></a>

## Discussion

Whenever the contents of a pasteboard changes—specifically, when pasteboard items are added, modified, or removed—`UIPasteboard` increments the value of this property. After it increments the change count, UIPasteboard posts the notifications named [UIPasteboardChangedNotification](changednotification.md) (for additions and modifications) and [UIPasteboardRemovedNotification](removednotification.md) (for removals). These notifications include (in the `userInfo` dictionary) the types of the pasteboard items added or removed. Because `UIPasteboard` waits until the end of the current event loop before incrementing the change count, notifications can be batched. The class also updates the change count when an app reactivates and another app has changed the pasteboard contents. When users restart a device, the change count is reset to zero.

## See Also

### Getting and setting pasteboard attributes

- [name](name-swift.property.md): The name of the pasteboard.
