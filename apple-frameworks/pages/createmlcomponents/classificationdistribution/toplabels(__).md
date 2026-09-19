> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/classificationdistribution/toplabels(_:)

# topLabels(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Computes the most likely labels in the classification set.

## Declaration

```swift
func topLabels(_ amount: Int) -> [Label]
```

## Parameters

- `amount`: The number of top labels.

<a id="return-value"></a>

## Return Value

The labels with the highest probabilities.

## See Also

### Labeling and mapping

- [map(\_:)](map%28__%29.md): Creates a new classification distribution by applying a transformation to every element.
