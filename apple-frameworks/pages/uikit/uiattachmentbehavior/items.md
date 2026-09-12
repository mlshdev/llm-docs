> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiattachmentbehavior/items](https://developer.apple.com/documentation/uikit/uiattachmentbehavior/items)

# items (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The dynamic items connected by the attachment behavior.

## Declaration

```swift
var items: [any UIDynamicItem] { get }
```

<a id="Discussion"></a>

## Discussion

Contains two elements when used for an attachment behavior of type [UIAttachmentBehavior.AttachmentType.items](attachmenttype/items.md); contains one element when used for an attachment behavior of type [UIAttachmentBehavior.AttachmentType.anchor](attachmenttype/anchor.md).

# items (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The dynamic items connected by the attachment behavior.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<id<UIDynamicItem>> * items;
```

<a id="Discussion"></a>

## Discussion

Contains two elements when used for an attachment behavior of type [UIAttachmentBehaviorTypeItems](attachmenttype/items.md); contains one element when used for an attachment behavior of type [UIAttachmentBehaviorTypeAnchor](attachmenttype/anchor.md).
