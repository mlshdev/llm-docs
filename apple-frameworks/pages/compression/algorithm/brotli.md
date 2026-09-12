> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/algorithm/brotli](https://developer.apple.com/documentation/compression/algorithm/brotli)

# Algorithm.brotli

**Framework:** Compression  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

The Brotli compression algorithm, which is recommended for text compression.

## Declaration

```swift
case brotli
```

<a id="Discussion"></a>

## Discussion

The Brotli compression algorithm is a widely adopted content encoding method for the web. The Compression framework includes Brotli to provide decoding capabilities.

The Compression framework implements the Brotli level 2 encoder only. This compression level provides a good balance between compression speed and compression ratio. The Brotli decoder supports decoding data compressed with any compression level.
