> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensionitem/attachments](https://developer.apple.com/documentation/foundation/nsextensionitem/attachments)

# attachments (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An optional array of media data associated with the extension item.

## Declaration

```swift
var attachments: [NSItemProvider]? { get set }
```

<a id="Discussion"></a>

## Discussion

Populate this array with images, videos, URLs, and so on. It’s not meant to be an array of alternative data formats or types, but is instead a collection to include in a social media post, for example. These items are always typed [NSItemProvider](../nsitemprovider.md).

> **Important**

>  Alternatively, you can set attachments in the [userInfo](userinfo.md) dictionary using the [NSExtensionItemAttachmentsKey](../nsextensionitemattachmentskey.md) key. However, setting the [userInfo](userinfo.md) dictionary after setting [attachments](attachments.md) will override this property.

## See Also

### Item Contents

- [attributedContentText](attributedcontenttext.md): An optional string describing the extension item content.

# attachments (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An optional array of media data associated with the extension item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<NSItemProvider *> * attachments;
```

```objectivec
@property (atomic, copy, nullable) NSArray<NSItemProvider *> * attachments;
```

<a id="Discussion"></a>

## Discussion

Populate this array with images, videos, URLs, and so on. It’s not meant to be an array of alternative data formats or types, but is instead a collection to include in a social media post, for example. These items are always typed [NSItemProvider](../nsitemprovider.md).

> **Important**

>  Alternatively, you can set attachments in the [userInfo](userinfo.md) dictionary using the [NSExtensionItemAttachmentsKey](../nsextensionitemattachmentskey.md) key. However, setting the [userInfo](userinfo.md) dictionary after setting [attachments](attachments.md) will override this property.

## See Also

### Item Contents

- [attributedContentText](attributedcontenttext.md): An optional string describing the extension item content.
