> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem/expirationdate](https://developer.apple.com/documentation/corespotlight/cssearchableitem/expirationdate)

# expirationDate (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The date after which the searchable item should no longer exist.

## Declaration

```swift
var expirationDate: Date! { get set }
```

## Mentioned In

- [Adding your app’s content to Spotlight indexes](../adding-your-app-s-content-to-spotlight-indexes.md)

<a id="Discussion"></a>

## Discussion

If you don’t set the [expirationDate](expirationdate.md) property appropriately, the system automatically expires the item after a period of time.

## See Also

### Setting attributes on a searchable item

- [uniqueIdentifier](uniqueidentifier.md): The value that uniquely identifies the searchable item within your app.
- [domainIdentifier](domainidentifier.md): An optional identifier that represents the domain or owner of the item.
- [attributeSet](attributeset.md): The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) object.
- [isUpdate](isupdate.md): A Boolean value that indicates whether to treat the item as an update instead of a new item.
- [updateListenerOptions](updatelisteneroptions-swift.property.md): The types of notifications to request from Spotlight.
- [CSSearchableItem.UpdateListenerOptions](updatelisteneroptions-swift.struct.md): The options to generate summarization or prioritization information for a searchable item.

# expirationDate (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The date after which the searchable item should no longer exist.

## Declaration

```objectivec
@property (copy, null_resettable) NSDate * expirationDate;
```

## Mentioned In

- [Adding your app’s content to Spotlight indexes](../adding-your-app-s-content-to-spotlight-indexes.md)

<a id="Discussion"></a>

## Discussion

If you don’t set the [expirationDate](expirationdate.md) property appropriately, the system automatically expires the item after a period of time.

## See Also

### Setting attributes on a searchable item

- [uniqueIdentifier](uniqueidentifier.md): The value that uniquely identifies the searchable item within your app.
- [domainIdentifier](domainidentifier.md): An optional identifier that represents the domain or owner of the item.
- [attributeSet](attributeset.md): The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) object.
- [isUpdate](isupdate.md): A Boolean value that indicates whether to treat the item as an update instead of a new item.
- [updateListenerOptions](updatelisteneroptions-swift.property.md): The types of notifications to request from Spotlight.
- [CSSearchableItemUpdateListenerOptions](updatelisteneroptions-swift.struct.md): The options to generate summarization or prioritization information for a searchable item.
