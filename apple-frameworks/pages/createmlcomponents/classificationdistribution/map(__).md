> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/classificationdistribution/map(_:)

# map(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a new classification distribution by applying a transformation to every element.

## Declaration

```swift
func map<T>(_ transform: (Classification<Label>) throws -> Classification<T>) rethrows -> ClassificationDistribution<T> where T : Hashable
```

## Parameters

- `transform`: A transformation closure.

## See Also

### Labeling and mapping

- [topLabels(\_:)](toplabels%28__%29.md): Computes the most likely labels in the classification set.
