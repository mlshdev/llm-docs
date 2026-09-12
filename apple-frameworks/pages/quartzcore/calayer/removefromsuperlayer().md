> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/removefromsuperlayer()](https://developer.apple.com/documentation/quartzcore/calayer/removefromsuperlayer())

# removeFromSuperlayer() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Detaches the layer from its parent layer.

## Declaration

```swift
func removeFromSuperlayer()
```

<a id="Discussion"></a>

## Discussion

You can use this method to remove a layer (and all of its sublayers) from a layer hierarchy. This method updates both the superlayer’s list of sublayers and sets this layer’s [superlayer](superlayer.md) property to `nil`.

## See Also

### Managing the layer hierarchy

- [sublayers](sublayers.md): An array containing the layer’s sublayers.
- [superlayer](superlayer.md): The superlayer of the layer.
- [addSublayer(\_:)](addsublayer%28__%29.md): Appends the layer to the layer’s list of sublayers.
- [insertSublayer(\_:at:)](insertsublayer%28__at_%29.md): Inserts the specified layer into the receiver’s list of sublayers at the specified index.
- [insertSublayer(\_:below:)](insertsublayer%28__below_%29.md): Inserts the specified sublayer below a different sublayer that already belongs to the receiver.
- [insertSublayer(\_:above:)](insertsublayer%28__above_%29.md): Inserts the specified sublayer above a different sublayer that already belongs to the receiver.
- [replaceSublayer(\_:with:)](replacesublayer%28__with_%29.md): Replaces the specified sublayer with a different layer object.

# removeFromSuperlayer (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Detaches the layer from its parent layer.

## Declaration

```objectivec
- (void) removeFromSuperlayer;
```

<a id="Discussion"></a>

## Discussion

You can use this method to remove a layer (and all of its sublayers) from a layer hierarchy. This method updates both the superlayer’s list of sublayers and sets this layer’s [superlayer](superlayer.md) property to `nil`.

## See Also

### Managing the layer hierarchy

- [sublayers](sublayers.md): An array containing the layer’s sublayers.
- [superlayer](superlayer.md): The superlayer of the layer.
- [addSublayer:](addsublayer%28__%29.md): Appends the layer to the layer’s list of sublayers.
- [insertSublayer:atIndex:](insertsublayer%28__at_%29.md): Inserts the specified layer into the receiver’s list of sublayers at the specified index.
- [insertSublayer:below:](insertsublayer%28__below_%29.md): Inserts the specified sublayer below a different sublayer that already belongs to the receiver.
- [insertSublayer:above:](insertsublayer%28__above_%29.md): Inserts the specified sublayer above a different sublayer that already belongs to the receiver.
- [replaceSublayer:with:](replacesublayer%28__with_%29.md): Replaces the specified sublayer with a different layer object.
