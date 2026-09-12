> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatorbase/contentheight](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/contentheight)

# contentHeight (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The height, in pixels, of the content region within the input textures to process.

## Declaration

```swift
var contentHeight: Int { get set }
```

<a id="discussion"></a>

## Discussion

Use this property together with [contentWidth](contentwidth.md) to specify a subrectangle of the input textures for the frame interpolator to process.

# contentHeight (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The height, in pixels, of the content region within the input textures to process.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger contentHeight;
```

<a id="discussion"></a>

## Discussion

Use this property together with [contentWidth](contentwidth.md) to specify a subrectangle of the input textures for the frame interpolator to process.
