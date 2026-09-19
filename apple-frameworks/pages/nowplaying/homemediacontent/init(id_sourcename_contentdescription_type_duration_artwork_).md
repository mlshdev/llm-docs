> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/nowplaying/homemediacontent/init(id:sourcename:contentdescription:type:duration:artwork:)

# init(id:sourceName:contentDescription:type:duration:artwork:)

**Framework:** Now Playing  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates home media content.

## Declaration

```swift
init(id: String, sourceName: String, contentDescription: String?, type: MediaType, duration: MediaDuration?, artwork: Artwork?)
```

## Parameters

- `id`: A unique identifier for this content.
- `sourceName`: The display name of the device or source providing the media.
- `contentDescription`: A short description of the content, or `nil` when unavailable.
- `type`: The media type.
- `duration`: The total duration, or `nil` when live or unknown.
- `artwork`: Artwork for the content, or `nil` when unavailable.
