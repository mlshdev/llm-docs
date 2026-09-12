> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem](https://developer.apple.com/documentation/corespotlight/cssearchableitem)

# CSSearchableItem (Swift)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The details of your app-specific content that someone might search for on their devices.

## Declaration

```swift
class CSSearchableItem
```

## Mentioned In

- [Generating summary and priority data for indexed items](generating-summary-and-priority-data-for-indexed-items.md)
- [Adding your app’s content to Spotlight indexes](adding-your-app-s-content-to-spotlight-indexes.md)
- [Making your indexed content available to Foundation Models](making-your-indexed-content-available-to-foundation-models.md)
- [Searching for information in your app](searching-for-information-in-your-app.md)

<a id="overview"></a>

## Overview

A `CSSearchableItem` uniquely identifies a part of your app’s content, and provides the metadata that Spotlight indexes and uses to find that content later. As part of indexing your app’s content, you create searchable items and fill them with details about your app’s content and where to find it. After indexing the content, you can then execute queries using the Core Spotlight APIs to find the items you indexed. People can also use the system’s Spotlight search interface to find your app’s content.

When you create or update content in your app, create a `CSSearchableItem` for that content if you want it to be searchable. A searchable item contains identification strings you use to locate that item in your content and a [CSSearchableItemAttributeSet](cssearchableitemattributeset.md) object with details about the item. For the metadata, you typically want to provide values for the [title](cssearchableitemattributeset/title.md), [displayName](cssearchableitemattributeset/displayname.md), and [contentType](cssearchableitemattributeset/contenttype.md) attributes at a minimum. If you’re indexing a file on disk, provide a value for the [contentURL](cssearchableitemattributeset/contenturl.md) attribute. Fill in as many other attributes as makes sense for the content you’re indexing.

After creating a searchable item, index it using a [CSSearchableIndex](cssearchableindex.md) object. As you update your app’s content, update your `CSSearchableItem` objects for that content and index them right away. If you delete content, similarly delete the searchable items from the index. Keeping your app’s indexes current ensures that searches return valid information. For more information on indexing your content, see [Adding your app’s content to Spotlight indexes](adding-your-app-s-content-to-spotlight-indexes.md).

## Topics

### Getting a searchable item

- [init(uniqueIdentifier:domainIdentifier:attributeSet:)](cssearchableitem/init%28uniqueidentifier_domainidentifier_attributeset_%29.md): Returns a searchable item associated with the specified identifier, domain identifier, and attribute set.
- [init(appEntity:)](cssearchableitem/init%28appentity_%29-3hv5.md): Initializes a new searchable item with the relevant fields populated from the provided app entity. Resolves deferred properties before indexing.
- [init(appEntity:)](cssearchableitem/init%28appentity_%29-89ehq.md): Initializes a new searchable item with the relevant fields populated from the provided app entity.
- [init(appEntity:priority:)](cssearchableitem/init%28appentity_priority_%29-7h9s.md): Initializes a new searchable item with the relevant fields populated from the provided app entity.
- [init(appEntity:priority:)](cssearchableitem/init%28appentity_priority_%29-7xlow.md): Initializes a new searchable item with the relevant fields populated from the provided app entity. Resolves deferred properties before indexing.
- [init(coder:)](cssearchableitem/init%28coder_%29.md)

### Setting attributes on a searchable item

- [uniqueIdentifier](cssearchableitem/uniqueidentifier.md): The value that uniquely identifies the searchable item within your app.
- [domainIdentifier](cssearchableitem/domainidentifier.md): An optional identifier that represents the domain or owner of the item.
- [attributeSet](cssearchableitem/attributeset.md): The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](cssearchableitemattributeset.md) object.
- [expirationDate](cssearchableitem/expirationdate.md): The date after which the searchable item should no longer exist.
- [isUpdate](cssearchableitem/isupdate.md): A Boolean value that indicates whether to treat the item as an update instead of a new item.
- [updateListenerOptions](cssearchableitem/updatelisteneroptions-swift.property.md): The types of notifications to request from Spotlight.
- [CSSearchableItem.UpdateListenerOptions](cssearchableitem/updatelisteneroptions-swift.struct.md): The options to generate summarization or prioritization information for a searchable item.

### Continuing a search or activity

- [CSSearchableItemActionType](cssearchableitemactiontype.md): Indicates that the activity type to continue is related to a searchable item.
- [CSSearchableItemActivityIdentifier](cssearchableitemactivityidentifier.md): The key you use to access a searchable item in a user activity object.
- [CSQueryContinuationActionType](csquerycontinuationactiontype.md): Indicates that the activity type to continue is a search or query.
- [CSSearchQueryString](cssearchquerystring.md): Provides the key for the current query in the info dictionary of the user activity object.

### Comparing items

- [compare(byRank:)](cssearchableitem/compare%28byrank_%29.md): Compares two items by rank and returns the result.

### Associating an entity with an item

- [associateAppEntity(\_:priority:)](cssearchableitem/associateappentity%28__priority_%29-6h7ym.md): Associates an app entity with this searchable item. Resolves deferred properties before association.
- [associateAppEntity(\_:priority:)](cssearchableitem/associateappentity%28__priority_%29-736lx.md): Associates an app entity with this searchable item.
- [relatedAppEntityIdentifier](cssearchableitem/relatedappentityidentifier.md): The identifier of the related indexed entity for this searchable item.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Searchable items

- [CSSearchableItemAttributeSet](cssearchableitemattributeset.md): The detailed metadata for a searchable item.
- [CSCustomAttributeKey](cscustomattributekey.md): A key associated with a custom attribute for a searchable item.
- [CSLocalizedString](cslocalizedstring.md): An object that displays localized text in search results related to your app.
- [CSPerson](csperson.md): An object that represents a person in the context of search results.

# CSSearchableItem (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The details of your app-specific content that someone might search for on their devices.

## Declaration

```objectivec
@interface CSSearchableItem : NSObject
```

## Mentioned In

- [Generating summary and priority data for indexed items](generating-summary-and-priority-data-for-indexed-items.md)
- [Adding your app’s content to Spotlight indexes](adding-your-app-s-content-to-spotlight-indexes.md)
- [Making your indexed content available to Foundation Models](making-your-indexed-content-available-to-foundation-models.md)
- [Searching for information in your app](searching-for-information-in-your-app.md)

<a id="overview"></a>

## Overview

A `CSSearchableItem` uniquely identifies a part of your app’s content, and provides the metadata that Spotlight indexes and uses to find that content later. As part of indexing your app’s content, you create searchable items and fill them with details about your app’s content and where to find it. After indexing the content, you can then execute queries using the Core Spotlight APIs to find the items you indexed. People can also use the system’s Spotlight search interface to find your app’s content.

When you create or update content in your app, create a `CSSearchableItem` for that content if you want it to be searchable. A searchable item contains identification strings you use to locate that item in your content and a [CSSearchableItemAttributeSet](cssearchableitemattributeset.md) object with details about the item. For the metadata, you typically want to provide values for the [title](cssearchableitemattributeset/title.md), [displayName](cssearchableitemattributeset/displayname.md), and [contentType](cssearchableitemattributeset/contenttype.md) attributes at a minimum. If you’re indexing a file on disk, provide a value for the [contentURL](cssearchableitemattributeset/contenturl.md) attribute. Fill in as many other attributes as makes sense for the content you’re indexing.

After creating a searchable item, index it using a [CSSearchableIndex](cssearchableindex.md) object. As you update your app’s content, update your `CSSearchableItem` objects for that content and index them right away. If you delete content, similarly delete the searchable items from the index. Keeping your app’s indexes current ensures that searches return valid information. For more information on indexing your content, see [Adding your app’s content to Spotlight indexes](adding-your-app-s-content-to-spotlight-indexes.md).

## Topics

### Getting a searchable item

- [initWithUniqueIdentifier:domainIdentifier:attributeSet:](cssearchableitem/init%28uniqueidentifier_domainidentifier_attributeset_%29.md): Returns a searchable item associated with the specified identifier, domain identifier, and attribute set.

### Setting attributes on a searchable item

- [uniqueIdentifier](cssearchableitem/uniqueidentifier.md): The value that uniquely identifies the searchable item within your app.
- [domainIdentifier](cssearchableitem/domainidentifier.md): An optional identifier that represents the domain or owner of the item.
- [attributeSet](cssearchableitem/attributeset.md): The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](cssearchableitemattributeset.md) object.
- [expirationDate](cssearchableitem/expirationdate.md): The date after which the searchable item should no longer exist.
- [isUpdate](cssearchableitem/isupdate.md): A Boolean value that indicates whether to treat the item as an update instead of a new item.
- [updateListenerOptions](cssearchableitem/updatelisteneroptions-swift.property.md): The types of notifications to request from Spotlight.
- [CSSearchableItemUpdateListenerOptions](cssearchableitem/updatelisteneroptions-swift.struct.md): The options to generate summarization or prioritization information for a searchable item.

### Continuing a search or activity

- [CSSearchableItemActionType](cssearchableitemactiontype.md): Indicates that the activity type to continue is related to a searchable item.
- [CSSearchableItemActivityIdentifier](cssearchableitemactivityidentifier.md): The key you use to access a searchable item in a user activity object.
- [CSQueryContinuationActionType](csquerycontinuationactiontype.md): Indicates that the activity type to continue is a search or query.
- [CSSearchQueryString](cssearchquerystring.md): Provides the key for the current query in the info dictionary of the user activity object.

### Comparing items

- [compareByRank:](cssearchableitem/compare%28byrank_%29.md): Compares two items by rank and returns the result.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Searchable items

- [CSSearchableItemAttributeSet](cssearchableitemattributeset.md): The detailed metadata for a searchable item.
- [CSCustomAttributeKey](cscustomattributekey.md): A key associated with a custom attribute for a searchable item.
- [CSLocalizedString](cslocalizedstring.md): An object that displays localized text in search results related to your app.
- [CSPerson](csperson.md): An object that represents a person in the context of search results.
