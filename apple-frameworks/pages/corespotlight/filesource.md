> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/filesource](https://developer.apple.com/documentation/corespotlight/filesource)

# FileSource

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A search source that retrieves indexed metadata from files and directories visible to Spotlight.

## Declaration

```swift
struct FileSource
```

## Mentioned In

- [Making your indexed content available to Foundation Models](making-your-indexed-content-available-to-foundation-models.md)

<a id="overview"></a>

## Overview

Use this type to search the metadata of your app’s custom file types. Configure the source with one or more directories for the tool to search. During a query, the Spotlight considers only the previously indexed files in those directories. When it finds a match, the tool delivers the item and any attributes you specify in the [fetchAttributes](filesource/fetchattributes.md) property to the model for consideration.

For more information about indexing your app’s files, see [CSImportExtension](csimportextension.md).

## Topics

### Creating a file source

- [init(fetchAttributes:)](filesource/init%28fetchattributes_%29.md)

### Configuring the search options

- [fetchAttributes](filesource/fetchattributes.md): The attributes to fetch for each file or directory and provide to the model.
- [scopes](filesource/scopes.md): The directories to search.
- [maximumResultCount](filesource/maximumresultcount.md): The maximum number of results to retrieve from this source.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data sources

- [SearchSource](searchsource.md): A source of data for Spotlight to search.
- [CoreSpotlightSource](corespotlightsource.md): A search source that retrieves data from the app’s Spotlight index.
- [SearchableItemAttribute](searchableitemattribute.md): An attribute from a content item that the Spotlight search tool can include in search results.
