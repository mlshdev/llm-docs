> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxframeinterpolatorbase/fieldofview](https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatorbase/fieldofview)

# fieldOfView (Swift)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The vertical field of view angle, in degrees, of the camera that renders the scene into the color buffer.

## Declaration

```swift
var fieldOfView: Float { get set }
```

<a id="discussion"></a>

## Discussion

In a 3D game, you set this value to the field of view you use to create your perspective matrix.

# fieldOfView (Objective-C)

**Framework:** MetalFX  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The vertical field of view angle, in degrees, of the camera that renders the scene into the color buffer.

## Declaration

```objectivec
@property (nonatomic, readwrite) float fieldOfView;
```

<a id="discussion"></a>

## Discussion

In a 3D game, you set this value to the field of view you use to create your perspective matrix.
