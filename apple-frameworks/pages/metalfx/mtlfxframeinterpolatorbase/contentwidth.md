> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatorbase/contentwidth](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/contentwidth)

# contentWidth (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The width, in pixels, of the content region within the input textures to process.

## Declaration

```swift
var contentWidth: Int { get set }
```

<a id="discussion"></a>

## Discussion

Use this property together with [contentHeight](contentheight.md) to specify a subrectangle of the input textures for the frame interpolator to process.

# contentWidth (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The width, in pixels, of the content region within the input textures to process.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSUInteger contentWidth;
```

<a id="discussion"></a>

## Discussion

Use this property together with [contentHeight](contentheight.md) to specify a subrectangle of the input textures for the frame interpolator to process.
