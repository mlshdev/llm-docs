> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatorbase/distortionheight](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/distortionheight)

# distortionHeight (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The height, in pixels, of the content region within the distortion texture to use as input.

## Declaration

```swift
var distortionHeight: Int { get set }
```

<a id="discussion"></a>

## Discussion

When set to zero (the default), the frame interpolator uses [contentHeight](contentheight.md) instead.

# distortionHeight (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The height, in pixels, of the content region within the distortion texture to use as input.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger distortionHeight;
```

<a id="discussion"></a>

## Discussion

When set to zero (the default), the frame interpolator uses [contentHeight](contentheight.md) instead.
