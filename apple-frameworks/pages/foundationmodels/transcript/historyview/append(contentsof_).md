> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/transcript/historyview/append(contentsof:)

# append(contentsOf:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Adds the entries of a sequence to the end of the history view.

## Declaration

```swift
mutating func append(contentsOf newElements: some Sequence<Transcript.Entry>)
```

## Parameters

- `newElements`: The entries to append, in order.
