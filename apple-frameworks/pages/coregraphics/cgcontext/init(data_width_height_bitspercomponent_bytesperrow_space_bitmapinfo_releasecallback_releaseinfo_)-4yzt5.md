> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgcontext/init(data:width:height:bitspercomponent:bytesperrow:space:bitmapinfo:releasecallback:releaseinfo:)-4yzt5

# init(data:width:height:bitsPerComponent:bytesPerRow:space:bitmapInfo:releaseCallback:releaseInfo:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
init?(data: UnsafeMutableRawPointer?, width: Int, height: Int, bitsPerComponent: Int, bytesPerRow: Int, space: CGColorSpace?, bitmapInfo: CGBitmapInfo, releaseCallback: CGBitmapContextReleaseDataCallback?, releaseInfo: UnsafeMutableRawPointer?)
```

# CGBitmapContextCreateWithData (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern CGContextRefCGBitmapContextCreateWithData(void *data, size_t width, size_t height, size_t bitsPerComponent, size_t bytesPerRow, CGColorSpaceRef space, CGBitmapInfo bitmapInfo, CGBitmapContextReleaseDataCallback releaseCallback, void *releaseInfo);
```
