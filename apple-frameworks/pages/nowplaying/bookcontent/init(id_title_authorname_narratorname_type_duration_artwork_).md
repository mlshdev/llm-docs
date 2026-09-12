> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/bookcontent/init(id:title:authorname:narratorname:type:duration:artwork:)](https://developer.apple.com/documentation/nowplaying/bookcontent/init(id:title:authorname:narratorname:type:duration:artwork:))

# init(id:title:authorName:narratorName:type:duration:artwork:)

**Framework:** Now Playing  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates audiobook content.

## Declaration

```swift
init(id: String, title: String, authorName: String, narratorName: String? = nil, type: MediaType = .audio, duration: MediaDuration?, artwork: Artwork?)
```

## Parameters

- `id`: A unique identifier for this book.
- `title`: The book’s display title.
- `authorName`: The name of the book’s author.
- `narratorName`: The name of the audiobook narrator, if available.
- `type`: The media type. Defaults to `.audio` for spoken-word content.
- `duration`: The total duration of the audiobook, or `nil` when unknown.
- `artwork`: Cover artwork, or `nil` when unavailable.
