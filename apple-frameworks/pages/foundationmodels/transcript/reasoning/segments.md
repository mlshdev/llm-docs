> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/transcript/reasoning/segments](https://developer.apple.com/documentation/foundationmodels/transcript/reasoning/segments)

# segments

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Ordered reasoning segments.

## Declaration

```swift
var segments: [Transcript.Segment]
```

<a id="discussion"></a>

## Discussion

May be empty or a partial/summary representation; full text may not be available when `signature` is non-nil.

## See Also

### Inspecting the reasoning

- [description](description.md)
- [metadata](metadata.md): Metadata produced by the model while generating this reasoning entry.
- [signature](signature.md): Opaque producer-supplied signature for this reasoning entry.
