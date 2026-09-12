> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovie/init(url:)](https://developer.apple.com/documentation/avfoundation/avmovie/init(url:))

# init(url:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

Creates a movie that models the media at the specified URL.

## Declaration

```swift
convenience init(url: URL)
```

## Parameters

- `url`: A URL to a local, remote, or HTTP Live Streaming media resource.

## See Also

### Creating a movie

- [init(url:options:)](init%28url_options_%29-1wjrq.md): Creates a movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [init(data:options:)](init%28data_options_%29.md): Creates a movie object from a movie file’s data.
- [Initialization options](../initialization-options.md): Specify options to configure the initialization of a movie.
