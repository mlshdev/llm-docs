> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compression/algorithm/lzfse

# Algorithm.lzfse

**Framework:** Compression  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

The LZFSE compression algorithm, which is recommended for use on Apple platforms.

## Declaration

```swift
case lzfse
```

<a id="Discussion"></a>

## Discussion

LZFSE is Apple’s proprietary compression algorithm, matching the compression ratio of zlib level 5, but with much higher energy efficiency and speed (between 2x and 3x) for both encode and decode operations.

Use LZFSE when compressing a payload for iOS, macOS, watchOS, and tvOS. If you need to compress a payload for another platform (for example, Linux or Windows), use LZ4, LZMA, or zlib.

## See Also

### Related Documentation

- [COMPRESSION_LZFSE](../compression_lzfse.md): The LZFSE compression algorithm, which is recommended for use on Apple platforms.
