> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corevideo/cvpixelformatdescription/pixellayout/init(blocksize:bitsperblock:bitspercomponent:blockalignment:subsampling:blackblock:fillextendedpixels:cgbitmapinfo:)

# init(blockSize:bitsPerBlock:bitsPerComponent:blockAlignment:subsampling:blackBlock:fillExtendedPixels:cgBitmapInfo:)

**Framework:** Core Video  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init(blockSize: CVImageSize = .init(width: 1, height: 1), bitsPerBlock: Int, bitsPerComponent: Int? = nil, blockAlignment: CVPixelFormatDescription.Dimensions = .init(horizontal: 1, vertical: 1), subsampling: CVPixelFormatDescription.Dimensions = .init(horizontal: 1, vertical: 1), blackBlock: Data? = nil, fillExtendedPixels: (@Sendable (inout CVMutablePixelBuffer) -> Void)? = nil, cgBitmapInfo: CGBitmapInfo? = nil)
```
