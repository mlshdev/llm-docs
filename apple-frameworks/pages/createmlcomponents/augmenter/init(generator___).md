> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/augmenter/init(generator:_:)](https://developer.apple.com/documentation/createmlcomponents/augmenter/init(generator:_:))

# init(generator:\_:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Creates an augmenter from a random number generator and an augmentation builder.

## Declaration

```swift
init<Input>(generator: RandomNumberGenerator = SystemRandomNumberGenerator(), @AugmentationBuilder<Input> _ builder: @escaping () -> RandomTransformer) where Input == RandomTransformer.Input
```

## Parameters

- `generator`: A random number generator.
- `builder`: An augmentation builder.
