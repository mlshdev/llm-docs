> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporalscalerdescriptor/isjitteredmotionvectorsenabled](https://developer.apple.com/documentation/metalfx/mtlfxtemporalscalerdescriptor/isjitteredmotionvectorsenabled)

# isJitteredMotionVectorsEnabled (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A Boolean value that indicates whether the motion vectors include the jittering pattern.

## Declaration

```swift
var isJitteredMotionVectorsEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When you set this property to [true](https://developer.apple.com/documentation/swift/true), the scaler internally subtracts the jitter from the motion vectors using the jitter offset values provided each frame via [jitterOffsetX](../mtlfxtemporalscalerbase/jitteroffsetx.md) and [jitterOffsetY](../mtlfxtemporalscalerbase/jitteroffsety.md).

When [false](https://developer.apple.com/documentation/swift/false) (the default), the scaler uses the motion vectors directly without any adjustment.

# jitteredMotionVectorsEnabled (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

A Boolean value that indicates whether the motion vectors include the jittering pattern.

## Declaration

```objectivec
@property (nonatomic, readwrite, getter=isJitteredMotionVectorsEnabled) BOOL jitteredMotionVectorsEnabled;
```

<a id="discussion"></a>

## Discussion

When you set this property to [true](https://developer.apple.com/documentation/swift/true), the scaler internally subtracts the jitter from the motion vectors using the jitter offset values provided each frame via [jitterOffsetX](../mtlfxtemporalscalerbase/jitteroffsetx.md) and [jitterOffsetY](../mtlfxtemporalscalerbase/jitteroffsety.md).

When [false](https://developer.apple.com/documentation/swift/false) (the default), the scaler uses the motion vectors directly without any adjustment.
