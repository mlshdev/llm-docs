> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/nowplaying/moviecontent/init(id:title:duration:artwork:)

# init(id:title:duration:artwork:)

**Framework:** Now Playing  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates movie content.

## Declaration

```swift
init(id: String, title: String, duration: MediaDuration?, artwork: Artwork?)
```

## Parameters

- `id`: A unique identifier for this movie.
- `title`: The movie’s display title.
- `duration`: The total runtime, or `nil` when unknown.
- `artwork`: Poster artwork, or `nil` when unavailable.
