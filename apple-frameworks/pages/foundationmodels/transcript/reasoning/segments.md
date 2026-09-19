> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/reasoning/segments

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

- [description](description.md): A textual representation of the reasoning entry.
- [metadata](metadata.md): Metadata produced by the model while generating this reasoning entry.
- [signature](signature.md): Opaque producer-supplied signature for this reasoning entry.
