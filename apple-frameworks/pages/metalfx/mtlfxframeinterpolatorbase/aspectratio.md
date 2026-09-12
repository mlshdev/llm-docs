> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatorbase/aspectratio](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/aspectratio)

# aspectRatio (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The ratio between width and height of the screen.

## Declaration

```swift
var aspectRatio: Float { get set }
```

<a id="discussion"></a>

## Discussion

In a 3D game, you set this value to the same aspect ratio you use to create your perspective matrix, which is typically `width/height`.

# aspectRatio (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The ratio between width and height of the screen.

## Declaration

```objectivec
@property (nonatomic, readwrite) float aspectRatio;
```

<a id="discussion"></a>

## Discussion

In a 3D game, you set this value to the same aspect ratio you use to create your perspective matrix, which is typically `width/height`.
