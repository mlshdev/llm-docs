> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/chooserandomly/init(_:)

# init(\_:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a choose randomly augmentation.

## Declaration

```swift
init<RandomTransformer>(@AugmentationBuilder<Element> _ augmentation: () -> RandomTransformer) where Element == RandomTransformer.Input, RandomTransformer : RandomTransformer, RandomTransformer.Input == RandomTransformer.Output
```

## Parameters

- `augmentation`: An augmentation builder.
