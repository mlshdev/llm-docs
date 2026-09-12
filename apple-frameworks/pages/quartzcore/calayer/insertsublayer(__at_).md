> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/insertsublayer(_:at:)](https://developer.apple.com/documentation/quartzcore/calayer/insertsublayer(_:at:))

# insertSublayer(\_:at:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Inserts the specified layer into the receiver’s list of sublayers at the specified index.

## Declaration

```swift
func insertSublayer(_ layer: CALayer, at idx: UInt32)
```

## Parameters

- `layer`: The sublayer to be inserted into the current layer.
- `idx`: The index at which to insert `aLayer`. This value must be a valid 0-based index into the [sublayers](sublayers.md) array.

## See Also

### Managing the layer hierarchy

- [sublayers](sublayers.md): An array containing the layer’s sublayers.
- [superlayer](superlayer.md): The superlayer of the layer.
- [addSublayer(\_:)](addsublayer%28__%29.md): Appends the layer to the layer’s list of sublayers.
- [removeFromSuperlayer()](removefromsuperlayer%28%29.md): Detaches the layer from its parent layer.
- [insertSublayer(\_:below:)](insertsublayer%28__below_%29.md): Inserts the specified sublayer below a different sublayer that already belongs to the receiver.
- [insertSublayer(\_:above:)](insertsublayer%28__above_%29.md): Inserts the specified sublayer above a different sublayer that already belongs to the receiver.
- [replaceSublayer(\_:with:)](replacesublayer%28__with_%29.md): Replaces the specified sublayer with a different layer object.

# insertSublayer:atIndex: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Inserts the specified layer into the receiver’s list of sublayers at the specified index.

## Declaration

```objectivec
- (void) insertSublayer:(CALayer *) layer atIndex:(unsigned int) idx;
```

## Parameters

- `layer`: The sublayer to be inserted into the current layer.
- `idx`: The index at which to insert `aLayer`. This value must be a valid 0-based index into the [sublayers](sublayers.md) array.

## See Also

### Managing the layer hierarchy

- [sublayers](sublayers.md): An array containing the layer’s sublayers.
- [superlayer](superlayer.md): The superlayer of the layer.
- [addSublayer:](addsublayer%28__%29.md): Appends the layer to the layer’s list of sublayers.
- [removeFromSuperlayer](removefromsuperlayer%28%29.md): Detaches the layer from its parent layer.
- [insertSublayer:below:](insertsublayer%28__below_%29.md): Inserts the specified sublayer below a different sublayer that already belongs to the receiver.
- [insertSublayer:above:](insertsublayer%28__above_%29.md): Inserts the specified sublayer above a different sublayer that already belongs to the receiver.
- [replaceSublayer:with:](replacesublayer%28__with_%29.md): Replaces the specified sublayer with a different layer object.
