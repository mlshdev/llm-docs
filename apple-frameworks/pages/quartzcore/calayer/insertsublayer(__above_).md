> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/insertsublayer(_:above:)](https://developer.apple.com/documentation/quartzcore/calayer/insertsublayer(_:above:))

# insertSublayer(\_:above:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Inserts the specified sublayer above a different sublayer that already belongs to the receiver.

## Declaration

```swift
func insertSublayer(_ layer: CALayer, above sibling: CALayer?)
```

## Parameters

- `layer`: The sublayer to be inserted into the current layer.
- `sibling`: An existing sublayer in the current layer. The layer in `aLayer` is inserted after this layer in the [sublayers](sublayers.md) array, and thus appears in front of it visually.

<a id="Discussion"></a>

## Discussion

If `sublayer` is not in the receiver’s [sublayers](sublayers.md) array, this method raises an exception.

## See Also

### Managing the layer hierarchy

- [sublayers](sublayers.md): An array containing the layer’s sublayers.
- [superlayer](superlayer.md): The superlayer of the layer.
- [addSublayer(\_:)](addsublayer%28__%29.md): Appends the layer to the layer’s list of sublayers.
- [removeFromSuperlayer()](removefromsuperlayer%28%29.md): Detaches the layer from its parent layer.
- [insertSublayer(\_:at:)](insertsublayer%28__at_%29.md): Inserts the specified layer into the receiver’s list of sublayers at the specified index.
- [insertSublayer(\_:below:)](insertsublayer%28__below_%29.md): Inserts the specified sublayer below a different sublayer that already belongs to the receiver.
- [replaceSublayer(\_:with:)](replacesublayer%28__with_%29.md): Replaces the specified sublayer with a different layer object.

# insertSublayer:above: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Inserts the specified sublayer above a different sublayer that already belongs to the receiver.

## Declaration

```objectivec
- (void) insertSublayer:(CALayer *) layer above:(CALayer *) sibling;
```

## Parameters

- `layer`: The sublayer to be inserted into the current layer.
- `sibling`: An existing sublayer in the current layer. The layer in `aLayer` is inserted after this layer in the [sublayers](sublayers.md) array, and thus appears in front of it visually.

<a id="Discussion"></a>

## Discussion

If `sublayer` is not in the receiver’s [sublayers](sublayers.md) array, this method raises an exception.

## See Also

### Managing the layer hierarchy

- [sublayers](sublayers.md): An array containing the layer’s sublayers.
- [superlayer](superlayer.md): The superlayer of the layer.
- [addSublayer:](addsublayer%28__%29.md): Appends the layer to the layer’s list of sublayers.
- [removeFromSuperlayer](removefromsuperlayer%28%29.md): Detaches the layer from its parent layer.
- [insertSublayer:atIndex:](insertsublayer%28__at_%29.md): Inserts the specified layer into the receiver’s list of sublayers at the specified index.
- [insertSublayer:below:](insertsublayer%28__below_%29.md): Inserts the specified sublayer below a different sublayer that already belongs to the receiver.
- [replaceSublayer:with:](replacesublayer%28__with_%29.md): Replaces the specified sublayer with a different layer object.
