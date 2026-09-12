> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/stringsearchscope/freeformvideo](https://developer.apple.com/documentation/appintents/stringsearchscope/freeformvideo)

# StringSearchScope.freeformVideo

**Framework:** App Intents  
**Kind:** Case  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS · watchOS 10.2+

The app supports searching for free-form video content like videos people upload to social media platforms.

## Declaration

```swift
case freeformVideo
```

<a id="Overview"></a>

## Overview

Don’t use `freeformVideo` for highly structured content like movies and episodes of TV shows. For structured video content, use [StringSearchScope.movies](movies.md) or [StringSearchScope.tv](tv.md) instead.

## See Also

### Getting the search scopes

- [StringSearchScope.general](general.md): The app offers a general search functionality that’s exposed to the system.
- [StringSearchScope.movies](movies.md): The app supports searching for structured movie content.
- [StringSearchScope.tv](tv.md): The app supports searching for structured TV content including shows, seasons, or episodes.
