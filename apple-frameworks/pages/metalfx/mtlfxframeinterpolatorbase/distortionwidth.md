> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatorbase/distortionwidth](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/distortionwidth)

# distortionWidth (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The width, in pixels, of the content region within the distortion texture to use as input.

## Declaration

```swift
var distortionWidth: Int { get set }
```

<a id="discussion"></a>

## Discussion

When set to zero (the default), the frame interpolator uses [contentWidth](contentwidth.md) instead.

# distortionWidth (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The width, in pixels, of the content region within the distortion texture to use as input.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger distortionWidth;
```

<a id="discussion"></a>

## Discussion

When set to zero (the default), the frame interpolator uses [contentWidth](contentwidth.md) instead.
