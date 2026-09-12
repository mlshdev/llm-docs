> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsextensionitem/attributedtitle](https://developer.apple.com/documentation/foundation/nsextensionitem/attributedtitle)

# attributedTitle (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An optional title for the item.

## Declaration

```swift
@NSCopying var attributedTitle: NSAttributedString? { get set }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Alternatively, you can set attributed content in the [userInfo](userinfo.md) dictionary using the [NSExtensionItemAttributedTitleKey](../nsextensionitemattributedtitlekey.md) key. However, setting the [userInfo](userinfo.md) dictionary after setting [attributedTitle](attributedtitle.md) overrides this property.

## See Also

### Related Documentation

- [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214)

### Identifying the Item

- [userInfo](userinfo.md): An optional dictionary of keys and values corresponding to the extension item’s properties.

# attributedTitle (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An optional title for the item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSAttributedString * attributedTitle;
```

```objectivec
@property (atomic, copy, nullable) NSAttributedString * attributedTitle;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  Alternatively, you can set attributed content in the [userInfo](userinfo.md) dictionary using the [NSExtensionItemAttributedTitleKey](../nsextensionitemattributedtitlekey.md) key. However, setting the [userInfo](userinfo.md) dictionary after setting [attributedTitle](attributedtitle.md) overrides this property.

## See Also

### Related Documentation

- [App Extension Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/index.html#//apple_ref/doc/uid/TP40014214)

### Identifying the Item

- [userInfo](userinfo.md): An optional dictionary of keys and values corresponding to the extension item’s properties.
