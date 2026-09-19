> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/historyview/subscript(_:)

# subscript(\_:)

**Framework:** Foundation Models  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Accesses the subsequence of entries within the specified bounds.

## Declaration

```swift
subscript(bounds: Range<Transcript.HistoryView.Index>) -> Transcript.HistoryView { get set }
```

## Parameters

- `bounds`: A range of valid indices in the view.
