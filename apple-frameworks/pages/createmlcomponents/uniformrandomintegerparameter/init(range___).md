> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/uniformrandomintegerparameter/init(range:_:)

# init(range:\_:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a Random Parameter transformer.

## Declaration

```swift
init<Input>(range: ClosedRange<Parameter>, @AugmentationBuilder<Input> _ augmentation: @escaping (Parameter) -> RandomTransformer) where Input == RandomTransformer.Input
```

## Parameters

- `range`: The range of a random number to use as input to the transformer.
- `augmentation`: An augmentation builder.
