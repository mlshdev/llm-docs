> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/augmenter/applied(to:)](https://developer.apple.com/documentation/createmlcomponents/augmenter/applied(to:))

# applied(to:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Applies an augmentation per input of the base sequence.

## Declaration

```swift
func applied<S, Annotation>(to base: S) -> AugmentationSequence<S, RandomTransformer, RandomNumberGenerator, Annotation> where S : Sequence, Annotation : Equatable, S.Element == AnnotatedFeature<RandomTransformer.Input, Annotation>
```

## Parameters

- `base`: A sequence of elements to augment.

<a id="return-value"></a>

## Return Value

A sequence of augmented elements having the same number of elements as the input sequence.

## Mentioned In

- [Augmenting images to expand your training data](../augmenting-images-to-expand-your-training-data.md)

## See Also

### Applying an augmentation

- [applied(to:upsampledBy:)](applied%28to_upsampledby_%29.md): Applies an augmentation repeatedly to an array of inputs.
