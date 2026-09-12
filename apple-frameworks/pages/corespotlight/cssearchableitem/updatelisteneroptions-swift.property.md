> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem/updatelisteneroptions-swift.property](https://developer.apple.com/documentation/corespotlight/cssearchableitem/updatelisteneroptions-swift.property)

# updateListenerOptions (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The types of notifications to request from Spotlight.

## Declaration

```swift
var updateListenerOptions: CSSearchableItem.UpdateListenerOptions { get set }
```

## Mentioned In

- [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md)

<a id="Discussion"></a>

## Discussion

As Spotlight indexes your app’s searchable items, it can notify your Spotlight delegate app extension when specific information becomes available. For example, Spotlight can notify your delegate when Apple Intelligence generates a summary for your items. Use this property to tell Spotlight which types of notifications you want to receive for this item.

For more information, see [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md).

## See Also

### Setting attributes on a searchable item

- [uniqueIdentifier](uniqueidentifier.md): The value that uniquely identifies the searchable item within your app.
- [domainIdentifier](domainidentifier.md): An optional identifier that represents the domain or owner of the item.
- [attributeSet](attributeset.md): The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) object.
- [expirationDate](expirationdate.md): The date after which the searchable item should no longer exist.
- [isUpdate](isupdate.md): A Boolean value that indicates whether to treat the item as an update instead of a new item.
- [CSSearchableItem.UpdateListenerOptions](updatelisteneroptions-swift.struct.md): The options to generate summarization or prioritization information for a searchable item.

# updateListenerOptions (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The types of notifications to request from Spotlight.

## Declaration

```objectivec
@property (assign) CSSearchableItemUpdateListenerOptions updateListenerOptions;
```

## Mentioned In

- [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md)

<a id="Discussion"></a>

## Discussion

As Spotlight indexes your app’s searchable items, it can notify your Spotlight delegate app extension when specific information becomes available. For example, Spotlight can notify your delegate when Apple Intelligence generates a summary for your items. Use this property to tell Spotlight which types of notifications you want to receive for this item.

For more information, see [Generating summary and priority data for indexed items](../generating-summary-and-priority-data-for-indexed-items.md).

## See Also

### Setting attributes on a searchable item

- [uniqueIdentifier](uniqueidentifier.md): The value that uniquely identifies the searchable item within your app.
- [domainIdentifier](domainidentifier.md): An optional identifier that represents the domain or owner of the item.
- [attributeSet](attributeset.md): The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) object.
- [expirationDate](expirationdate.md): The date after which the searchable item should no longer exist.
- [isUpdate](isupdate.md): A Boolean value that indicates whether to treat the item as an update instead of a new item.
- [CSSearchableItemUpdateListenerOptions](updatelisteneroptions-swift.struct.md): The options to generate summarization or prioritization information for a searchable item.
