> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem/uniqueidentifier](https://developer.apple.com/documentation/corespotlight/cssearchableitem/uniqueidentifier)

# uniqueIdentifier (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The value that uniquely identifies the searchable item within your app.

## Declaration

```swift
var uniqueIdentifier: String { get set }
```

<a id="Discussion"></a>

## Discussion

This property is required because it’s the only way to identify searchable items in the index when you need to access or delete them. When you create a searchable item, the system generates a UUID by default, but you can replace the default value with a unique identifier that makes sense in the context of your app. If you want to use a custom value for [uniqueIdentifier](uniqueidentifier.md), be sure to set it before the item is indexed for the first time.

## See Also

### Setting attributes on a searchable item

- [domainIdentifier](domainidentifier.md): An optional identifier that represents the domain or owner of the item.
- [attributeSet](attributeset.md): The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) object.
- [expirationDate](expirationdate.md): The date after which the searchable item should no longer exist.
- [isUpdate](isupdate.md): A Boolean value that indicates whether to treat the item as an update instead of a new item.
- [updateListenerOptions](updatelisteneroptions-swift.property.md): The types of notifications to request from Spotlight.
- [CSSearchableItem.UpdateListenerOptions](updatelisteneroptions-swift.struct.md): The options to generate summarization or prioritization information for a searchable item.

# uniqueIdentifier (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The value that uniquely identifies the searchable item within your app.

## Declaration

```objectivec
@property (copy) NSString * uniqueIdentifier;
```

<a id="Discussion"></a>

## Discussion

This property is required because it’s the only way to identify searchable items in the index when you need to access or delete them. When you create a searchable item, the system generates a UUID by default, but you can replace the default value with a unique identifier that makes sense in the context of your app. If you want to use a custom value for [uniqueIdentifier](uniqueidentifier.md), be sure to set it before the item is indexed for the first time.

## See Also

### Setting attributes on a searchable item

- [domainIdentifier](domainidentifier.md): An optional identifier that represents the domain or owner of the item.
- [attributeSet](attributeset.md): The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) object.
- [expirationDate](expirationdate.md): The date after which the searchable item should no longer exist.
- [isUpdate](isupdate.md): A Boolean value that indicates whether to treat the item as an update instead of a new item.
- [updateListenerOptions](updatelisteneroptions-swift.property.md): The types of notifications to request from Spotlight.
- [CSSearchableItemUpdateListenerOptions](updatelisteneroptions-swift.struct.md): The options to generate summarization or prioritization information for a searchable item.
