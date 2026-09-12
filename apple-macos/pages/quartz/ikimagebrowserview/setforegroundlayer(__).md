> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/setforegroundlayer(_:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/setforegroundlayer(_:))

# setForegroundLayer(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

The Core Animation layer used as the foreground overlay.

## Declaration

```swift
func setForegroundLayer(_ aLayer: CALayer!)
```

## Parameters

- `aLayer`: A `CALayer` instance.

<a id="Discussion"></a>

## Discussion

The foreground overlay layer can have sublayers. Additionally, the layers can also contain animations.

The foreground layer is an overlay that is applied to the view. It can be used to provide information such as loading progress or for pure cosmetic purposes, such as dark gradients on top and bottom of the browser view.

This layer is optional.

## See Also

### Core Animation Layer Integration

- [foregroundLayer()](foregroundlayer%28%29.md): Returns the foreground Core Animation layer
- [setBackgroundLayer(\_:)](setbackgroundlayer%28__%29.md): The Core Animation layer used as the view’s background.
- [backgroundLayer()](backgroundlayer%28%29.md): Returns the foreground Core Animation layer

# setForegroundLayer: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

The Core Animation layer used as the foreground overlay.

## Declaration

```objectivec
- (void) setForegroundLayer:(CALayer *) aLayer;
```

## Parameters

- `aLayer`: A `CALayer` instance.

<a id="Discussion"></a>

## Discussion

The foreground overlay layer can have sublayers. Additionally, the layers can also contain animations.

The foreground layer is an overlay that is applied to the view. It can be used to provide information such as loading progress or for pure cosmetic purposes, such as dark gradients on top and bottom of the browser view.

This layer is optional.

## See Also

### Core Animation Layer Integration

- [foregroundLayer](foregroundlayer%28%29.md): Returns the foreground Core Animation layer
- [setBackgroundLayer:](setbackgroundlayer%28__%29.md): The Core Animation layer used as the view’s background.
- [backgroundLayer](backgroundlayer%28%29.md): Returns the foreground Core Animation layer
