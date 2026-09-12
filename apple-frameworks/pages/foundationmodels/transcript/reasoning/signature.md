> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/transcript/reasoning/signature](https://developer.apple.com/documentation/foundationmodels/transcript/reasoning/signature)

# signature

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Opaque producer-supplied signature for this reasoning entry.

## Declaration

```swift
var signature: Data?
```

<a id="discussion"></a>

## Discussion

When this is non-nil, `segments` may represent a partial summary or be empty; full reasoning text may not be available.

## See Also

### Inspecting the reasoning

- [description](description.md)
- [metadata](metadata.md): Metadata produced by the model while generating this reasoning entry.
- [segments](segments.md): Ordered reasoning segments.
