> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem/attributeset](https://developer.apple.com/documentation/corespotlight/cssearchableitem/attributeset)

# attributeSet (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) object.

## Declaration

```swift
var attributeSet: CSSearchableItemAttributeSet { get set }
```

## See Also

### Setting attributes on a searchable item

- [uniqueIdentifier](uniqueidentifier.md): The value that uniquely identifies the searchable item within your app.
- [domainIdentifier](domainidentifier.md): An optional identifier that represents the domain or owner of the item.
- [expirationDate](expirationdate.md): The date after which the searchable item should no longer exist.
- [isUpdate](isupdate.md): A Boolean value that indicates whether to treat the item as an update instead of a new item.
- [updateListenerOptions](updatelisteneroptions-swift.property.md): The types of notifications to request from Spotlight.
- [CSSearchableItem.UpdateListenerOptions](updatelisteneroptions-swift.struct.md): The options to generate summarization or prioritization information for a searchable item.

# attributeSet (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) object.

## Declaration

```objectivec
@property (strong) CSSearchableItemAttributeSet * attributeSet;
```

## See Also

### Setting attributes on a searchable item

- [uniqueIdentifier](uniqueidentifier.md): The value that uniquely identifies the searchable item within your app.
- [domainIdentifier](domainidentifier.md): An optional identifier that represents the domain or owner of the item.
- [expirationDate](expirationdate.md): The date after which the searchable item should no longer exist.
- [isUpdate](isupdate.md): A Boolean value that indicates whether to treat the item as an update instead of a new item.
- [updateListenerOptions](updatelisteneroptions-swift.property.md): The types of notifications to request from Spotlight.
- [CSSearchableItemUpdateListenerOptions](updatelisteneroptions-swift.struct.md): The options to generate summarization or prioritization information for a searchable item.
