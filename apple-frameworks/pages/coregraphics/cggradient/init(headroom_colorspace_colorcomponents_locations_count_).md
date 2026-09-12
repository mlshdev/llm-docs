> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cggradient/init(headroom:colorspace:colorcomponents:locations:count:)](https://developer.apple.com/documentation/coregraphics/cggradient/init(headroom:colorspace:colorcomponents:locations:count:))

# init(headroom:colorSpace:colorComponents:locations:count:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init?(headroom: Float, colorSpace space: CGColorSpace, colorComponents components: UnsafePointer<CGFloat>, locations: UnsafePointer<CGFloat>?, count: Int)
```

# CGGradientCreateWithContentHeadroom (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern CGGradientRefCGGradientCreateWithContentHeadroom(float headroom, CGColorSpaceRef space, const CGFloat *components, const CGFloat *locations, size_t count);
```
