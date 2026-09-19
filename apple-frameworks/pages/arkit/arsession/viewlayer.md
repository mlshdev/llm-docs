> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arsession/viewlayer

# viewLayer (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The layer that displays the `ARFrame`, required before `viewRotationAngle` becomes available.

## Declaration

```swift
weak var viewLayer: CALayer? { get set }
```

<a id="discussion"></a>

## Discussion

Assign the layer that presents the camera image. Renderers such as `ARSCNView`, `ARSKView`, `ARView`, and `RealityView` set this for you.

# viewLayer (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

The layer that displays the `ARFrame`, required before `viewRotationAngle` becomes available.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) CALayer * viewLayer;
```

<a id="discussion"></a>

## Discussion

Assign the layer that presents the camera image. Renderers such as `ARSCNView`, `ARSKView`, `ARView`, and `RealityView` set this for you.
