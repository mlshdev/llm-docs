> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlfeaturedescription/stateconstraint](https://developer.apple.com/documentation/coreml/mlfeaturedescription/stateconstraint)

# stateConstraint (Swift)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The state feature value constraint.

## Declaration

```swift
var stateConstraint: MLStateConstraint? { get }
```

<a id="discussion"></a>

## Discussion

The property has a value when `.type == MLFeatureTypeState`.

## See Also

### Accessing feature constraints

- [imageConstraint](imageconstraint.md): The size and format constraints for an image feature.
- [MLImageConstraint](../mlimageconstraint.md): The width, height, and pixel format constraints of an image feature.
- [dictionaryConstraint](dictionaryconstraint.md): The constraint for a dictionary feature.
- [MLDictionaryConstraint](../mldictionaryconstraint.md): The constraint on the keys for a dictionary feature.
- [multiArrayConstraint](multiarrayconstraint.md): The constraints on a multidimensional array feature.
- [MLMultiArrayConstraint](../mlmultiarrayconstraint.md): The shape and data type constraints for a multidimensional array feature.
- [sequenceConstraint](sequenceconstraint.md): The constraints for a sequence feature.
- [MLSequenceConstraint](../mlsequenceconstraint.md): The constraints for a sequence feature.

# stateConstraint (Objective-C)

**Framework:** Core ML  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The state feature value constraint.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) MLStateConstraint * stateConstraint;
```

<a id="discussion"></a>

## Discussion

The property has a value when `.type == MLFeatureTypeState`.

## See Also

### Accessing feature constraints

- [imageConstraint](imageconstraint.md): The size and format constraints for an image feature.
- [MLImageConstraint](../mlimageconstraint.md): The width, height, and pixel format constraints of an image feature.
- [dictionaryConstraint](dictionaryconstraint.md): The constraint for a dictionary feature.
- [MLDictionaryConstraint](../mldictionaryconstraint.md): The constraint on the keys for a dictionary feature.
- [multiArrayConstraint](multiarrayconstraint.md): The constraints on a multidimensional array feature.
- [MLMultiArrayConstraint](../mlmultiarrayconstraint.md): The shape and data type constraints for a multidimensional array feature.
- [sequenceConstraint](sequenceconstraint.md): The constraints for a sequence feature.
- [MLSequenceConstraint](../mlsequenceconstraint.md): The constraints for a sequence feature.
