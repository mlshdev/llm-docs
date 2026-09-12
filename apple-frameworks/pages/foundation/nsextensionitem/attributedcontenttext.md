> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensionitem/attributedcontenttext](https://developer.apple.com/documentation/foundation/nsextensionitem/attributedcontenttext)

# attributedContentText (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An optional string describing the extension item content.

## Declaration

```swift
@NSCopying var attributedContentText: NSAttributedString? { get set }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Alternatively, you can set attributed content in the [userInfo](userinfo.md) dictionary using the [NSExtensionItemAttributedContentTextKey](../nsextensionitemattributedcontenttextkey.md) key. However, setting the [userInfo](userinfo.md) dictionary after setting [attributedContentText](attributedcontenttext.md) overrides this property.

## See Also

### Item Contents

- [attachments](attachments.md): An optional array of media data associated with the extension item.

# attributedContentText (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An optional string describing the extension item content.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSAttributedString * attributedContentText;
```

```objectivec
@property (atomic, copy, nullable) NSAttributedString * attributedContentText;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Alternatively, you can set attributed content in the [userInfo](userinfo.md) dictionary using the [NSExtensionItemAttributedContentTextKey](../nsextensionitemattributedcontenttextkey.md) key. However, setting the [userInfo](userinfo.md) dictionary after setting [attributedContentText](attributedcontenttext.md) overrides this property.

## See Also

### Item Contents

- [attachments](attachments.md): An optional array of media data associated with the extension item.
