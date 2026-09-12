> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/ikimageview/setoverlay(_:fortype:)](https://developer.apple.com/documentation/quartz/ikimageview/setoverlay(_:fortype:))

# setOverlay(\_:forType:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets an overlay type for a Core Animation layer.

## Declaration

```swift
func setOverlay(_ layer: CALayer!, forType layerType: String!)
```

## Parameters

- `layer`: A Core Animation layer object.
- `layerType`: A layer type. See [Overlay Types](../overlay-types.md).

## See Also

### Working With Core Animation

- [overlay(forType:)](overlay%28fortype_%29.md): Returns the Core Animation layer associated with a layer type.

# setOverlay:forType: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Sets an overlay type for a Core Animation layer.

## Declaration

```objectivec
- (void) setOverlay:(CALayer *) layer forType:(NSString *) layerType;
```

## Parameters

- `layer`: A Core Animation layer object.
- `layerType`: A layer type. See [Overlay Types](../overlay-types.md).

## See Also

### Working With Core Animation

- [overlayForType:](overlay%28fortype_%29.md): Returns the Core Animation layer associated with a layer type.
