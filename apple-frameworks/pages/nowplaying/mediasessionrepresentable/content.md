> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nowplaying/mediasessionrepresentable/content](https://developer.apple.com/documentation/nowplaying/mediasessionrepresentable/content)

# content

**Framework:** Now Playing  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The content being played in this session.

## Declaration

```swift
@MainActor var content: (any MediaContentRepresentable)? { get }
```

## Mentioned In

- [Publishing media sessions](../publishing-media-sessions.md)

<a id="discussion"></a>

## Discussion

Use a content type like [MusicContent](../musiccontent.md), [PodcastContent](../podcastcontent.md), [MovieContent](../moviecontent.md), [TVShowContent](../tvshowcontent.md), or [GenericContent](../genericcontent.md) to describe the media being played. You can provide additional metadata using the content type’s trailing closure.

The system displays content information on the device’s Lock Screen, in Control Center, and on connected accessories. Provide as much information as possible to ensure compatibility with a wide range of accessories and system interfaces.
