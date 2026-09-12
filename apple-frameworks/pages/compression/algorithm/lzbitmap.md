> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compression/algorithm/lzbitmap](https://developer.apple.com/documentation/compression/algorithm/lzbitmap)

# Algorithm.lzbitmap

**Framework:** Compression  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS · watchOS 6.0+

The LZBITMAP compression algorithm, which is designed to exploit the vector instruction set of current CPUs.

## Declaration

```swift
case lzbitmap
```

<a id="Discussion"></a>

## Discussion

The LZBITMAP compression algorithm provides compression ratios as close as possible to [COMPRESSION_ZLIB](../compression_zlib.md) and [COMPRESSION_LZFSE](../compression_lzfse.md), with a lower compression cost. This compression algorithm is available only for the Compression buffer API functions, [compression_encode_buffer(\_:\_:\_:\_:\_:\_:)](../compression_encode_buffer%28____________%29.md) and [compression_decode_buffer(\_:\_:\_:\_:\_:\_:)](../compression_decode_buffer%28____________%29.md).

[COMPRESSION_LZBITMAP](../compression_lzbitmap.md) is available only on Apple devices.
