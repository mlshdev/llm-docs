> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableitem/updatelisteneroptions-swift.struct](https://developer.apple.com/documentation/corespotlight/cssearchableitem/updatelisteneroptions-swift.struct)

# CSSearchableItem.UpdateListenerOptions (Swift)

**Framework:** Core Spotlight  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The options to generate summarization or prioritization information for a searchable item.

## Declaration

```swift
struct UpdateListenerOptions
```

<a id="overview"></a>

## Overview

When you configure a [CSSearchableItem](../cssearchableitem.md) with a listener option, Core Spotlight conveys your request to Apple Intelligence, which is responsible for generating the information. When the information becomes available, Core Spotlight updates the item and reports the change to the [searchableItemsDidUpdate(\_:)](../cssearchableindexdelegate/searchableitemsdidupdate%28__%29.md) method of your index’s delegate. If your app isn’t running but has a CoreSpotlight delegate app extension, the system calls your app extension’s implementation of this method instead.

## Topics

### Getting the listener options structure

- [init(rawValue:)](updatelisteneroptions-swift.struct/init%28rawvalue_%29.md): An unsigned integer that describes the listener options.

### Getting the listener options attributes

- [summarization](updatelisteneroptions-swift.struct/summarization.md): An option to summarize the contents of your searchable item. Specify this option only for items that contain emails, messages, or audio transcripts.
- [priority](updatelisteneroptions-swift.struct/priority.md): An option to classify the priority of SMS message content. Specify this option only if your item contains messages.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Setting attributes on a searchable item

- [uniqueIdentifier](uniqueidentifier.md): The value that uniquely identifies the searchable item within your app.
- [domainIdentifier](domainidentifier.md): An optional identifier that represents the domain or owner of the item.
- [attributeSet](attributeset.md): The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) object.
- [expirationDate](expirationdate.md): The date after which the searchable item should no longer exist.
- [isUpdate](isupdate.md): A Boolean value that indicates whether to treat the item as an update instead of a new item.
- [updateListenerOptions](updatelisteneroptions-swift.property.md): The types of notifications to request from Spotlight.

# CSSearchableItemUpdateListenerOptions (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Enumeration  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

The options to generate summarization or prioritization information for a searchable item.

## Declaration

```objectivec
enum CSSearchableItemUpdateListenerOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

When you configure a [CSSearchableItem](../cssearchableitem.md) with a listener option, Core Spotlight conveys your request to Apple Intelligence, which is responsible for generating the information. When the information becomes available, Core Spotlight updates the item and reports the change to the [searchableItemsDidUpdate:](../cssearchableindexdelegate/searchableitemsdidupdate%28__%29.md) method of your index’s delegate. If your app isn’t running but has a CoreSpotlight delegate app extension, the system calls your app extension’s implementation of this method instead.

## Topics

### Getting the listener options attributes

- [CSSearchableItemUpdateListenerOptionSummarization](updatelisteneroptions-swift.struct/summarization.md): An option to summarize the contents of your searchable item. Specify this option only for items that contain emails, messages, or audio transcripts.
- [CSSearchableItemUpdateListenerOptionPriority](updatelisteneroptions-swift.struct/priority.md): An option to classify the priority of SMS message content. Specify this option only if your item contains messages.

### Enumeration Cases

- [CSSearchableItemUpdateListenerOptionDefault](../cssearchableitemupdatelisteneroptions/cssearchableitemupdatelisteneroptiondefault.md)

## See Also

### Setting attributes on a searchable item

- [uniqueIdentifier](uniqueidentifier.md): The value that uniquely identifies the searchable item within your app.
- [domainIdentifier](domainidentifier.md): An optional identifier that represents the domain or owner of the item.
- [attributeSet](attributeset.md): The set of attributes that contain metadata associated with the item in a [CSSearchableItemAttributeSet](../cssearchableitemattributeset.md) object.
- [expirationDate](expirationdate.md): The date after which the searchable item should no longer exist.
- [isUpdate](isupdate.md): A Boolean value that indicates whether to treat the item as an update instead of a new item.
- [updateListenerOptions](updatelisteneroptions-swift.property.md): The types of notifications to request from Spotlight.
