> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/isdepthreversed

# isDepthReversed (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 27.1+

A Boolean value that indicates whether the depth texture uses zero to represent the farthest distance.

## Declaration

```swift
var isDepthReversed: Bool { get set }
```

<a id="discussion"></a>

## Discussion

This property’s default value is [true](https://developer.apple.com/documentation/swift/true).

# depthReversed (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 27.1+

A Boolean value that indicates whether the depth texture uses zero to represent the farthest distance.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isDepthReversed) BOOL depthReversed;
```

<a id="discussion"></a>

## Discussion

This property’s default value is [true](https://developer.apple.com/documentation/swift/true).
