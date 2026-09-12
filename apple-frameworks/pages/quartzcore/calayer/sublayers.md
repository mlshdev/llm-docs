> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/sublayers](https://developer.apple.com/documentation/quartzcore/calayer/sublayers)

# sublayers (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An array containing the layer’s sublayers.

## Declaration

```swift
var sublayers: [CALayer]? { get set }
```

<a id="Discussion"></a>

## Discussion

The sublayers are listed in back to front order. The default value of this property is `nil`.

<a id="Special-Considerations"></a>

### Special Considerations

When setting the [sublayers](sublayers.md) property to an array populated with layer objects, each layer in the array must not already have a superlayer—that is, its [superlayer](superlayer.md) property must currently be `nil`.

## See Also

### Managing the layer hierarchy

- [superlayer](superlayer.md): The superlayer of the layer.
- [addSublayer(\_:)](addsublayer%28__%29.md): Appends the layer to the layer’s list of sublayers.
- [removeFromSuperlayer()](removefromsuperlayer%28%29.md): Detaches the layer from its parent layer.
- [insertSublayer(\_:at:)](insertsublayer%28__at_%29.md): Inserts the specified layer into the receiver’s list of sublayers at the specified index.
- [insertSublayer(\_:below:)](insertsublayer%28__below_%29.md): Inserts the specified sublayer below a different sublayer that already belongs to the receiver.
- [insertSublayer(\_:above:)](insertsublayer%28__above_%29.md): Inserts the specified sublayer above a different sublayer that already belongs to the receiver.
- [replaceSublayer(\_:with:)](replacesublayer%28__with_%29.md): Replaces the specified sublayer with a different layer object.

# sublayers (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

An array containing the layer’s sublayers.

## Declaration

```objectivec
@property (copy, nullable) NSArray<__kindof CALayer *> * sublayers;
```

<a id="Discussion"></a>

## Discussion

The sublayers are listed in back to front order. The default value of this property is `nil`.

<a id="Special-Considerations"></a>

### Special Considerations

When setting the [sublayers](sublayers.md) property to an array populated with layer objects, each layer in the array must not already have a superlayer—that is, its [superlayer](superlayer.md) property must currently be `nil`.

## See Also

### Managing the layer hierarchy

- [superlayer](superlayer.md): The superlayer of the layer.
- [addSublayer:](addsublayer%28__%29.md): Appends the layer to the layer’s list of sublayers.
- [removeFromSuperlayer](removefromsuperlayer%28%29.md): Detaches the layer from its parent layer.
- [insertSublayer:atIndex:](insertsublayer%28__at_%29.md): Inserts the specified layer into the receiver’s list of sublayers at the specified index.
- [insertSublayer:below:](insertsublayer%28__below_%29.md): Inserts the specified sublayer below a different sublayer that already belongs to the receiver.
- [insertSublayer:above:](insertsublayer%28__above_%29.md): Inserts the specified sublayer above a different sublayer that already belongs to the receiver.
- [replaceSublayer:with:](replacesublayer%28__with_%29.md): Replaces the specified sublayer with a different layer object.
