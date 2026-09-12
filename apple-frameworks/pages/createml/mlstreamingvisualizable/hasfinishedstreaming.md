> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlstreamingvisualizable/hasfinishedstreaming](https://developer.apple.com/documentation/createml/mlstreamingvisualizable/hasfinishedstreaming)

# hasFinishedStreaming

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A Boolean value that indicates whether the stream has provided its final iteration.

## Declaration

```swift
var hasFinishedStreaming: Bool { get }
```

<a id="discussion"></a>

## Discussion

This method updates [cgImage](../mlvisualizable/cgimage.md) to the next iteration.

## See Also

### Seeing the next visualization

- [nextIteration()](nextiteration%28%29.md): Advances the visualization stream to the next iteration.
