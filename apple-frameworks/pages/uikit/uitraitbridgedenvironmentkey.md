> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitraitbridgedenvironmentkey

# UITraitBridgedEnvironmentKey

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

## Declaration

```swift
protocol UITraitBridgedEnvironmentKey : EnvironmentKey
```

## Topics

### Reading trait values

- [read(from:)](uitraitbridgedenvironmentkey/read%28from_%29.md)

### Writing trait values

- [write(to:value:)](uitraitbridgedenvironmentkey/write%28to_value_%29.md)

## Relationships

### Inherits From

- [EnvironmentKey](https://developer.apple.com/documentation/swiftui/environmentkey)

## See Also

### Custom traits

- [Providing data to the view hierarchy with custom traits](providing-data-to-the-view-hierarchy-with-custom-traits.md): Share data that needs to flow hierarchically across multiple levels of your view hierarchy.
- [UIMutableTraits](uimutabletraits-13ja5.md): A mutable container of traits.
- [UITrait](uitrait-9423.md): A type representing a trait in a trait collection.
- [UITraitDefinition](uitraitdefinition-64c15.md): A type representing a trait in a trait collection.
