> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgbitmapcontextcreateadaptive](https://developer.apple.com/documentation/coregraphics/cgbitmapcontextcreateadaptive)

# CGBitmapContextCreateAdaptive

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern CGContextRefCGBitmapContextCreateAdaptive(size_t width, size_t height, CFDictionaryRef auxiliaryInfo, bool (^onResolve)(const CGContentInfo *, CGBitmapParameters *), CGRenderingBufferProviderRef (^onAllocate)(const CGContentInfo *, const CGBitmapParameters *), void (^onFree)(CGRenderingBufferProviderRef , const CGContentInfo *, const CGBitmapParameters *), void (^onError)(CFErrorRef , const CGContentInfo *, const CGBitmapParameters *));
```
