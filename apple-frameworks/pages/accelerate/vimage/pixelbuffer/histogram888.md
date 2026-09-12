> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/pixelbuffer/histogram888](https://developer.apple.com/documentation/accelerate/vimage/pixelbuffer/histogram888)

# vImage.PixelBuffer.Histogram888

**Framework:** Accelerate  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The histogram for three channel 8-bit pixel buffers.

## Declaration

```swift
typealias Histogram888 = ([vImagePixelCount], [vImagePixelCount], [vImagePixelCount])
```

## See Also

### Type aliases

- [vImage.PixelBuffer.Histogram8888](histogram8888.md): Conforms when `Format` conforms to `PixelFormat` and `Format.ComponentType` is `UInt8`. The histogram for four channel 8-bit pixel buffers.
- [vImage.PixelBuffer.HistogramFFF](histogramfff.md): Conforms when `Format` conforms to `PixelFormat` and `Format.ComponentType` is `Float`. The histogram for three channel 32-bit pixel buffers.
- [vImage.PixelBuffer.HistogramFFFF](histogramffff.md): Conforms when `Format` conforms to `PixelFormat` and `Format.ComponentType` is `Float`. The histogram for four channel 32-bit pixel buffers.
