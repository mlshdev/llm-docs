> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimagebrowserview/setbackgroundlayer(_:)](https://developer.apple.com/documentation/quartz/ikimagebrowserview/setbackgroundlayer(_:))

# setBackgroundLayer(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

The Core Animation layer used as the view’s background.

## Declaration

```swift
func setBackgroundLayer(_ aLayer: CALayer!)
```

## Parameters

- `aLayer`: A `CALayer` instance.

<a id="Discussion"></a>

## Discussion

The background layer can have sublayers. Additionally, the layers can also contain animations.

The layer is optional.

## See Also

### Core Animation Layer Integration

- [setForegroundLayer(\_:)](setforegroundlayer%28__%29.md): The Core Animation layer used as the foreground overlay.
- [foregroundLayer()](foregroundlayer%28%29.md): Returns the foreground Core Animation layer
- [backgroundLayer()](backgroundlayer%28%29.md): Returns the foreground Core Animation layer

# setBackgroundLayer: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

The Core Animation layer used as the view’s background.

## Declaration

```objectivec
- (void) setBackgroundLayer:(CALayer *) aLayer;
```

## Parameters

- `aLayer`: A `CALayer` instance.

<a id="Discussion"></a>

## Discussion

The background layer can have sublayers. Additionally, the layers can also contain animations.

The layer is optional.

## See Also

### Core Animation Layer Integration

- [setForegroundLayer:](setforegroundlayer%28__%29.md): The Core Animation layer used as the foreground overlay.
- [foregroundLayer](foregroundlayer%28%29.md): Returns the foreground Core Animation layer
- [backgroundLayer](backgroundlayer%28%29.md): Returns the foreground Core Animation layer
