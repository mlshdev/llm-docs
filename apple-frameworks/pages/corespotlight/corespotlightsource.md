> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/corespotlightsource](https://developer.apple.com/documentation/corespotlight/corespotlightsource)

# CoreSpotlightSource

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A search source that retrieves data from the app’s Spotlight index.

## Declaration

```swift
struct CoreSpotlightSource
```

## Mentioned In

- [Making your indexed content available to Foundation Models](making-your-indexed-content-available-to-foundation-models.md)

<a id="overview"></a>

## Overview

Use this type to configure the Spotlight search tool to search your app’s indexed content. When performing searches, the tool queries your content for [CSSearchableItem](cssearchableitem.md) objects that match the specified criteria. When delivering search results to the model, the tool delivers each item’s identifier and any attributes you specify in the [fetchAttributes](corespotlightsource/fetchattributes.md) property. To provide additional item-specific content that isn’t in the Spotlight index, provide a delegate object to generate that data dynamically from your content.

This type is `@unchecked Sendable` because [CSSearchableIndexDelegate](cssearchableindexdelegate.md) is a non-Sendable ObjC protocol. If you provide a delegate object, you must ensure that object is safe to use across isolation boundaries.

## Topics

### Creating a Spotlight source

- [init(fetchAttributes:)](corespotlightsource/init%28fetchattributes_%29.md)
- [init(searchableIndexDelegate:fetchAttributes:)](corespotlightsource/init%28searchableindexdelegate_fetchattributes_%29.md)

### Configuring the search options

- [fetchAttributes](corespotlightsource/fetchattributes.md): The attributes to fetch for each item and provide to the model.
- [sourceOptions](corespotlightsource/sourceoptions.md): Options you use to specify access to restricted content.
- [maximumResultCount](corespotlightsource/maximumresultcount.md): The maximum number of results to retrieve from this source.

### Providing additional attributes

- [searchableIndexDelegate](corespotlightsource/searchableindexdelegate.md): An optional delegate object you use to provide additional data about items in search results.
- [CSSearchableIndexDelegate](cssearchableindexdelegate.md): A protocol that defines methods a delegate object or app extension uses to handle communication from the on-device index.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data sources

- [SearchSource](searchsource.md): A source of data for Spotlight to search.
- [FileSource](filesource.md): A search source that retrieves indexed metadata from files and directories visible to Spotlight.
- [SearchableItemAttribute](searchableitemattribute.md): An attribute from a content item that the Spotlight search tool can include in search results.
