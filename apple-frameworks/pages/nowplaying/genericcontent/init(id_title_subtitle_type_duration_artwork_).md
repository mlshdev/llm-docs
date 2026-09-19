> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/nowplaying/genericcontent/init(id:title:subtitle:type:duration:artwork:)

# init(id:title:subtitle:type:duration:artwork:)

**Framework:** Now Playing  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates generic media content.

## Declaration

```swift
init(id: String, title: String, subtitle: String? = nil, type: MediaType, duration: MediaDuration?, artwork: Artwork?)
```

## Parameters

- `id`: A unique identifier for this content.
- `title`: The primary display title.
- `subtitle`: Secondary information to display below the title.
- `type`: The media type.
- `duration`: The total duration, or `nil` when unknown.
- `artwork`: Artwork for the content, or `nil` when unavailable.

<a id="discussion"></a>

## Discussion

Use this initializer when your media doesn’t fit other content types.
