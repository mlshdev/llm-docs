> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/blendshapeweights](https://developer.apple.com/documentation/realitykit/blendshapeweights)

# BlendShapeWeights

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A set of animatable weight values that collectively represent the blending amounts for all the blend shapes’ blend targets.

## Declaration

```swift
struct BlendShapeWeights
```

## Topics

### Operators

- [==(\_:\_:)](blendshapeweights/==%28____%29.md): Returns a Boolean value that indicates whether two collections of weights are equal.

### Initializers

- [init()](blendshapeweights/init%28%29.md): Initializes a collection of animatable weights for a blend shape.
- [init(\_:)](blendshapeweights/init%28__%29.md): Initializes a collection of weights for a single blend shape.
- [init(arrayLiteral:)](blendshapeweights/init%28arrayliteral_%29.md): Creates a collection of animatable weights using the argument elements for a blend shape.

### Instance Properties

- [endIndex](blendshapeweights/endindex.md): An index to the last weight in the collection.
- [startIndex](blendshapeweights/startindex.md): An index to the first weight in the collection.

### Instance Methods

- [index(after:)](blendshapeweights/index%28after_%29.md): Returns the position in the sequence of the weight that follows the given position.
- [index(before:)](blendshapeweights/index%28before_%29.md): Returns the position in the sequence of the weight that preceeds the given position.

### Subscripts

- [subscript(\_:)](blendshapeweights/subscript%28__%29.md): Accesses a single weight in the collection at the given index.

### Type Aliases

- [BlendShapeWeights.ArrayLiteralElement](blendshapeweights/arrayliteralelement.md): The type of the elements of an array literal.
- [BlendShapeWeights.Element](blendshapeweights/element.md): An individual weight in the collection.
- [BlendShapeWeights.Index](blendshapeweights/index.md): A position of an individual weight in the collection.

## Relationships

### Conforms To

- [AnimatableData](animatabledata.md)
- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Blend shape management

- [BlendShapeWeightsComponent](blendshapeweightscomponent.md): A component that provides access to the current weights associated with all blend shape meshes on an entity.
- [BlendShapeWeightsMapping](blendshapeweightsmapping.md): A mapping of blend weights to the target meshes that those weights affect.
- [BlendShapeWeightsData](blendshapeweightsdata.md): A structure that encapsulates the blend shape name, blend shape weights and the names of those weights to be stored by the blend shape weights set.
- [BlendShapeWeightsSet](blendshapeweightsset.md): A custom collection of named blend shape weights.
