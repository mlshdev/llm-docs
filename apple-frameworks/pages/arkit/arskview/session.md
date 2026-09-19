> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arskview/session

# session (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The AR session that manages motion tracking and camera image processing for the view’s contents.

## Declaration

```swift
var session: ARSession { get set }
```

<a id="Discussion"></a>

## Discussion

A view creates its own session object; use this property to access and configure the view’s session.

## See Also

### First Steps

- [Providing 2D Virtual Content with SpriteKit](../providing-2d-virtual-content-with-spritekit.md): Use SpriteKit to place two-dimensional images in 3D space in your AR experience.

# session (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The AR session that manages motion tracking and camera image processing for the view’s contents.

## Declaration

```objectivec
@property (nonatomic, strong) ARSession * session;
```

<a id="Discussion"></a>

## Discussion

A view creates its own session object; use this property to access and configure the view’s session.

## See Also

### First Steps

- [Providing 2D Virtual Content with SpriteKit](../providing-2d-virtual-content-with-spritekit.md): Use SpriteKit to place two-dimensional images in 3D space in your AR experience.
