> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/replacesublayer(_:with:)](https://developer.apple.com/documentation/quartzcore/calayer/replacesublayer(_:with:))

# replaceSublayer(\_:with:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Replaces the specified sublayer with a different layer object.

## Declaration

```swift
func replaceSublayer(_ oldLayer: CALayer, with newLayer: CALayer)
```

## Parameters

- `oldLayer`: The layer to be replaced.
- `newLayer`: The layer with which to replace `oldLayer`.

<a id="Discussion"></a>

## Discussion

If `oldLayer` is not in the receiver’s [sublayers](sublayers.md) array, the behavior of this method is undefined.

## See Also

### Managing the layer hierarchy

- [sublayers](sublayers.md): An array containing the layer’s sublayers.
- [superlayer](superlayer.md): The superlayer of the layer.
- [addSublayer(\_:)](addsublayer%28__%29.md): Appends the layer to the layer’s list of sublayers.
- [removeFromSuperlayer()](removefromsuperlayer%28%29.md): Detaches the layer from its parent layer.
- [insertSublayer(\_:at:)](insertsublayer%28__at_%29.md): Inserts the specified layer into the receiver’s list of sublayers at the specified index.
- [insertSublayer(\_:below:)](insertsublayer%28__below_%29.md): Inserts the specified sublayer below a different sublayer that already belongs to the receiver.
- [insertSublayer(\_:above:)](insertsublayer%28__above_%29.md): Inserts the specified sublayer above a different sublayer that already belongs to the receiver.

# replaceSublayer:with: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Replaces the specified sublayer with a different layer object.

## Declaration

```objectivec
- (void) replaceSublayer:(CALayer *) oldLayer with:(CALayer *) newLayer;
```

## Parameters

- `oldLayer`: The layer to be replaced.
- `newLayer`: The layer with which to replace `oldLayer`.

<a id="Discussion"></a>

## Discussion

If `oldLayer` is not in the receiver’s [sublayers](sublayers.md) array, the behavior of this method is undefined.

## See Also

### Managing the layer hierarchy

- [sublayers](sublayers.md): An array containing the layer’s sublayers.
- [superlayer](superlayer.md): The superlayer of the layer.
- [addSublayer:](addsublayer%28__%29.md): Appends the layer to the layer’s list of sublayers.
- [removeFromSuperlayer](removefromsuperlayer%28%29.md): Detaches the layer from its parent layer.
- [insertSublayer:atIndex:](insertsublayer%28__at_%29.md): Inserts the specified layer into the receiver’s list of sublayers at the specified index.
- [insertSublayer:below:](insertsublayer%28__below_%29.md): Inserts the specified sublayer below a different sublayer that already belongs to the receiver.
- [insertSublayer:above:](insertsublayer%28__above_%29.md): Inserts the specified sublayer above a different sublayer that already belongs to the receiver.
