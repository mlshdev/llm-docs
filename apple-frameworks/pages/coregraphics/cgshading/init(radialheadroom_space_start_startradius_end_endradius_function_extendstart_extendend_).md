> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgshading/init(radialheadroom:space:start:startradius:end:endradius:function:extendstart:extendend:)

# init(radialHeadroom:space:start:startRadius:end:endRadius:function:extendStart:extendEnd:) (Swift)

**Framework:** Core Graphics  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init?(radialHeadroom headroom: Float, space: CGColorSpace, start: CGPoint, startRadius: CGFloat, end: CGPoint, endRadius: CGFloat, function: CGFunction, extendStart: Bool, extendEnd: Bool)
```

# CGShadingCreateRadialWithContentHeadroom (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
extern CGShadingRefCGShadingCreateRadialWithContentHeadroom(float headroom, CGColorSpaceRef space, CGPoint start, CGFloat startRadius, CGPoint end, CGFloat endRadius, CGFunctionRef function, bool extendStart, bool extendEnd);
```
