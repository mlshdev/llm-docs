> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/addsublayer(_:)](https://developer.apple.com/documentation/quartzcore/calayer/addsublayer(_:))

# addSublayer(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Appends the layer to the layer’s list of sublayers.

## Declaration

```swift
func addSublayer(_ layer: CALayer)
```

## Parameters

- `layer`: The layer to be added.

<a id="Discussion"></a>

## Discussion

If the array in the sublayers property is `nil`, calling this method creates an array for that property and adds the specified layer to it.

## See Also

### Managing the layer hierarchy

- [sublayers](sublayers.md): An array containing the layer’s sublayers.
- [superlayer](superlayer.md): The superlayer of the layer.
- [removeFromSuperlayer()](removefromsuperlayer%28%29.md): Detaches the layer from its parent layer.
- [insertSublayer(\_:at:)](insertsublayer%28__at_%29.md): Inserts the specified layer into the receiver’s list of sublayers at the specified index.
- [insertSublayer(\_:below:)](insertsublayer%28__below_%29.md): Inserts the specified sublayer below a different sublayer that already belongs to the receiver.
- [insertSublayer(\_:above:)](insertsublayer%28__above_%29.md): Inserts the specified sublayer above a different sublayer that already belongs to the receiver.
- [replaceSublayer(\_:with:)](replacesublayer%28__with_%29.md): Replaces the specified sublayer with a different layer object.

# addSublayer: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Appends the layer to the layer’s list of sublayers.

## Declaration

```objectivec
- (void) addSublayer:(CALayer *) layer;
```

## Parameters

- `layer`: The layer to be added.

<a id="Discussion"></a>

## Discussion

If the array in the sublayers property is `nil`, calling this method creates an array for that property and adds the specified layer to it.

## See Also

### Managing the layer hierarchy

- [sublayers](sublayers.md): An array containing the layer’s sublayers.
- [superlayer](superlayer.md): The superlayer of the layer.
- [removeFromSuperlayer](removefromsuperlayer%28%29.md): Detaches the layer from its parent layer.
- [insertSublayer:atIndex:](insertsublayer%28__at_%29.md): Inserts the specified layer into the receiver’s list of sublayers at the specified index.
- [insertSublayer:below:](insertsublayer%28__below_%29.md): Inserts the specified sublayer below a different sublayer that already belongs to the receiver.
- [insertSublayer:above:](insertsublayer%28__above_%29.md): Inserts the specified sublayer above a different sublayer that already belongs to the receiver.
- [replaceSublayer:with:](replacesublayer%28__with_%29.md): Replaces the specified sublayer with a different layer object.
