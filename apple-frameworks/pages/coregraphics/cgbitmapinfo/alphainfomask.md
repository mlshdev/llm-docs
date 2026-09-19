> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgbitmapinfo/alphainfomask

# alphaInfoMask

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** iOS 7.0+ (deprecated in 27.2) · iPadOS 7.0+ (deprecated in 27.2) · Mac Catalyst 7.0+ (deprecated in 27.2) · macOS 10.9+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

The alpha information mask. Use this to extract alpha information that specifies whether a bitmap contains an alpha channel and how the alpha channel is generated.

> Use .alpha instead

## Declaration

```swift
static var alphaInfoMask: CGBitmapInfo { get }
```

## See Also

### Constants

- [floatComponents](floatcomponents.md): Deprecated. The components of a bitmap are floating-point values.
- [byteOrderMask](byteordermask.md): Deprecated. The byte ordering of pixel formats.
- [byteOrderDefault](byteorderdefault.md): Deprecated. The default byte order.
- [byteOrder16Little](byteorder16little.md): Deprecated. 16-bit, little endian format.
- [byteOrder32Little](byteorder32little.md): Deprecated. 32-bit, little endian format.
- [byteOrder16Big](byteorder16big.md): Deprecated. 16-bit, big endian format.
- [byteOrder32Big](byteorder32big.md): Deprecated. 32-bit, big endian format.
- [floatInfoMask](floatinfomask.md): Deprecated.
