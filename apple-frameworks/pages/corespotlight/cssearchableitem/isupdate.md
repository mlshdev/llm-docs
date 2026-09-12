> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem/isupdate](https://developer.apple.com/documentation/corespotlight/cssearchableitem/isupdate)

# isUpdate (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A Boolean value that indicates whether to treat the item as an update instead of a new item.

## Declaration

```swift
var isUpdate: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set the value of this property to `true` if the item represents an update to information already in the index. Marking an item as an update makes the indexing process more efficient. If this property is `false` and the system encounters an item with the same identifier in the index, it deletes the old item and then inserts the new one. When the property is `true`, it updates the existing item, which saves time. If this property is `true` and the item doesn’t exist in the index, the system ignores the request to index the item and doesn’t create a new item.

When configuring the attributes for the item, set an attribute to `nil` to remove its value.

## See Also

### Setting attributes on a searchable item

- [uniqueIdentifier](uniqueidentifier.md): The value that uniquely identifies the searchable item within your app.
- [domainIdentifier](domainidentifier.md): An optional identifier that represents the domain or owner of the item.
- [attributeSet](attributeset.md): The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) object.
- [expirationDate](expirationdate.md): The date after which the searchable item should no longer exist.
- [updateListenerOptions](updatelisteneroptions-swift.property.md): The types of notifications to request from Spotlight.
- [CSSearchableItem.UpdateListenerOptions](updatelisteneroptions-swift.struct.md): The options to generate summarization or prioritization information for a searchable item.

# isUpdate (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A Boolean value that indicates whether to treat the item as an update instead of a new item.

## Declaration

```objectivec
@property (assign) BOOL isUpdate;
```

<a id="Discussion"></a>

## Discussion

Set the value of this property to `true` if the item represents an update to information already in the index. Marking an item as an update makes the indexing process more efficient. If this property is `false` and the system encounters an item with the same identifier in the index, it deletes the old item and then inserts the new one. When the property is `true`, it updates the existing item, which saves time. If this property is `true` and the item doesn’t exist in the index, the system ignores the request to index the item and doesn’t create a new item.

When configuring the attributes for the item, set an attribute to `nil` to remove its value.

## See Also

### Setting attributes on a searchable item

- [uniqueIdentifier](uniqueidentifier.md): The value that uniquely identifies the searchable item within your app.
- [domainIdentifier](domainidentifier.md): An optional identifier that represents the domain or owner of the item.
- [attributeSet](attributeset.md): The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) object.
- [expirationDate](expirationdate.md): The date after which the searchable item should no longer exist.
- [updateListenerOptions](updatelisteneroptions-swift.property.md): The types of notifications to request from Spotlight.
- [CSSearchableItemUpdateListenerOptions](updatelisteneroptions-swift.struct.md): The options to generate summarization or prioritization information for a searchable item.
