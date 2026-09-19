> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/visualfidelityprovider/fidelitydataupdates

# fidelityDataUpdates

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

An async sequence of visual fidelity data updates.

## Declaration

```swift
final var fidelityDataUpdates: some AsyncSequence<VisualFidelityData, Never> { get }
```

<a id="return-value"></a>

## Return Value

An async sequence of fidelity data.
