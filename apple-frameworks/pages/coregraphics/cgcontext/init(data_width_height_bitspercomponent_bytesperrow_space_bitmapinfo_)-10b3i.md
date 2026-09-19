> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgcontext/init(data:width:height:bitspercomponent:bytesperrow:space:bitmapinfo:)-10b3i

# init(data:width:height:bitsPerComponent:bytesPerRow:space:bitmapInfo:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
init?(data: UnsafeMutableRawPointer?, width: Int, height: Int, bitsPerComponent: Int, bytesPerRow: Int, space: CGColorSpace?, bitmapInfo: CGBitmapInfo)
```

# CGBitmapContextCreate (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
extern CGContextRefCGBitmapContextCreate(void *data, size_t width, size_t height, size_t bitsPerComponent, size_t bytesPerRow, CGColorSpaceRef space, CGBitmapInfo bitmapInfo);
```
