> Snapshot-pinned source payload for Apple watchOS snapshot-2bb3946a9b15; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchkit/wkinterfacescnscene/snapshot()

# snapshot() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Renders the scene to a new image object.

## Declaration

```swift
func snapshot() -> UIImage
```

<a id="return-value"></a>

## Return Value

An image object depicting the scene in its current state.

<a id="Discussion"></a>

## Discussion

This method is thread-safe and may be called at any time.

## See Also

### Managing the SceneKit Scene

- [antialiasingMode](antialiasingmode.md): The antialiasing mode used for rendering the scene.
- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the interface uses to render its scene.
- [scene](scene.md): The scene to be displayed.

# snapshot (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 3.0+

Renders the scene to a new image object.

## Declaration

```objectivec
- (UIImage *) snapshot;
```

<a id="return-value"></a>

## Return Value

An image object depicting the scene in its current state.

<a id="Discussion"></a>

## Discussion

This method is thread-safe and may be called at any time.

## See Also

### Managing the SceneKit Scene

- [antialiasingMode](antialiasingmode.md): The antialiasing mode used for rendering the scene.
- [preferredFramesPerSecond](preferredframespersecond.md): The animation frame rate that the interface uses to render its scene.
- [scene](scene.md): The scene to be displayed.
