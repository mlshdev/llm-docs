> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/augmenter/applied(to:upsampledby:)](https://developer.apple.com/documentation/createmlcomponents/augmenter/applied(to:upsampledby:))

# applied(to:upsampledBy:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Applies an augmentation repeatedly to an array of inputs.

## Declaration

```swift
func applied<C, Annotation>(to elements: C, upsampledBy count: Int) -> UpsampledAugmentationSequence<C, RandomTransformer, RandomNumberGenerator, Annotation> where C : Collection, Annotation : Equatable, C.Element == AnnotatedFeature<RandomTransformer.Input, Annotation>
```

## Parameters

- `elements`: A collection of elements to augment.
- `count`: The number of times to shuffle and augment the input elements. Must be at least one.

<a id="return-value"></a>

## Return Value

A sequence of augmented elements having `count` times the number of elements in the input collection.

## Mentioned In

- [Augmenting images to expand your training data](../augmenting-images-to-expand-your-training-data.md)

## See Also

### Applying an augmentation

- [applied(to:)](applied%28to_%29.md): Applies an augmentation per input of the base sequence.
