> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/nowplaying/tvshowcontent/init(id:episodetitle:showname:duration:artwork:)

# init(id:episodeTitle:showName:duration:artwork:)

**Framework:** Now Playing  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates TV show episode content.

## Declaration

```swift
init(id: String, episodeTitle: String, showName: String, duration: MediaDuration?, artwork: Artwork?)
```

## Parameters

- `id`: A unique identifier for this episode.
- `episodeTitle`: The title of the individual episode.
- `showName`: The name of the series.
- `duration`: The total duration of the episode, or `nil` when unknown.
- `artwork`: Artwork for the episode, or `nil` when unavailable.
