> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatorbase/fence](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/fence)

# fence (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An optional fence that this frame interpolator waits for and updates.

## Declaration

```swift
var fence: (any MTLFence)? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property for synchronizing access to untracked resources.

# fence (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An optional fence that this frame interpolator waits for and updates.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLFence> fence;
```

<a id="discussion"></a>

## Discussion

Use this property for synchronizing access to untracked resources.
