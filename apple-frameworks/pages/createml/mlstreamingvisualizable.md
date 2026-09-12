> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlstreamingvisualizable](https://developer.apple.com/documentation/createml/mlstreamingvisualizable)

# MLStreamingVisualizable

**Framework:** Create ML  
**Kind:** Protocol  
**Availability:** macOS 10.15+

A sequence of image visualizations for machine learning types.

## Declaration

```swift
protocol MLStreamingVisualizable : MLVisualizable
```

## Topics

### Seeing the next visualization

- [hasFinishedStreaming](mlstreamingvisualizable/hasfinishedstreaming.md): A Boolean value that indicates whether the stream has provided its final iteration.
- [nextIteration()](mlstreamingvisualizable/nextiteration%28%29.md): Advances the visualization stream to the next iteration.

## Relationships

### Inherits From

- [CustomPlaygroundDisplayConvertible](https://developer.apple.com/documentation/swift/customplaygrounddisplayconvertible)
- [MLVisualizable](mlvisualizable.md)

## See Also

### Visualization protocols

- [MLVisualizable](mlvisualizable.md): An image visualization of machine learning types.
