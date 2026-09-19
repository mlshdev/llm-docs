> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgcontext/init(data:width:height:bitspercomponent:bytesperrow:space:bitmapinfo:releasecallback:releaseinfo:)-71ea9

# init(data:width:height:bitsPerComponent:bytesPerRow:space:bitmapInfo:releaseCallback:releaseInfo:)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 4.0+ (deprecated in 27.2) · iPadOS 4.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.6+ (deprecated in 27.2) · tvOS  (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

> update space parameter to CGColorSpace?, bitmapInfo parameter to CGBitmapInfo

## Declaration

```swift
init?(data: UnsafeMutableRawPointer?, width: Int, height: Int, bitsPerComponent: Int, bytesPerRow: Int, space: CGColorSpace, bitmapInfo: UInt32, releaseCallback: CGBitmapContextReleaseDataCallback?, releaseInfo: UnsafeMutableRawPointer?)
```
