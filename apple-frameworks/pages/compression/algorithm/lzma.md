> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/algorithm/lzma](https://developer.apple.com/documentation/compression/algorithm/lzma)

# Algorithm.lzma

**Framework:** Compression  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

The LZMA compression algorithm, which is recommended for high-compression ratio.

## Declaration

```swift
case lzma
```

<a id="Discussion"></a>

## Discussion

The Compression library implements the LZMA encoder at level 6 only.  This is the default compression level for open source LZMA, and provides excellent compression.  The LZMA decoder supports decoding data compressed with any compression level.

## See Also

### Related Documentation

- [COMPRESSION_LZMA](../compression_lzma.md): The LZMA compression algorithm, which is recommended for high-compression ratio.
