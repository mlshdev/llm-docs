> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/applyeachrandomly/init(probability:_:)](https://developer.apple.com/documentation/createmlcomponents/applyeachrandomly/init(probability:_:))

# init(probability:\_:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Creates an augmentation that applies each transformer randomly in the given order.

## Declaration

```swift
init<RandomTransformer>(probability: Double = 0.5, @AugmentationBuilder<Element> _ augmentation: () -> RandomTransformer) where Element == RandomTransformer.Input, RandomTransformer : RandomTransformer, RandomTransformer.Input == RandomTransformer.Output
```

## Parameters

- `probability`: The probability of applying each transformer. Default value is 0.5.
- `augmentation`: An augmentation builder.
