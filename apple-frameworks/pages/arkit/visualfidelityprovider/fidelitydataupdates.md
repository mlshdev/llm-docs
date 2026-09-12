> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/visualfidelityprovider/fidelitydataupdates](https://developer.apple.com/documentation/arkit/visualfidelityprovider/fidelitydataupdates)

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
