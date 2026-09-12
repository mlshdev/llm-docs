> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/searchsource](https://developer.apple.com/documentation/corespotlight/searchsource)

# SearchSource

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A source of data for Spotlight to search.

## Declaration

```swift
struct SearchSource
```

<a id="overview"></a>

## Overview

When configuring the search tool, use this type to specify whether to retrieve data from the app’s Spotlight index or from files at the specified locations. Each of the sources sets the scope of the search, along with other parameters.

## Topics

### Searching a Spotlight index

- [coreSpotlight](searchsource/corespotlight.md): A source that retrieves data from the app’s Spotlight index.
- [coreSpotlight(\_:)](searchsource/corespotlight%28__%29.md): Returns a source that retrieves data from the app’s Spotlight index.

### Searching files and directories

- [files](searchsource/files.md): A source that retrieves data from the files and directories you specify.
- [files(\_:)](searchsource/files%28__%29.md): Returns a source that retrieves data from the files and directories you specify.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data sources

- [CoreSpotlightSource](corespotlightsource.md): A search source that retrieves data from the app’s Spotlight index.
- [FileSource](filesource.md): A search source that retrieves indexed metadata from files and directories visible to Spotlight.
- [SearchableItemAttribute](searchableitemattribute.md): An attribute from a content item that the Spotlight search tool can include in search results.
