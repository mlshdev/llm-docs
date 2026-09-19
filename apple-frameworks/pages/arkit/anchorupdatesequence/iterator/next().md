> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/anchorupdatesequence/iterator/next()

# next()

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Asynchronously retrieve the next anchor update.

## Declaration

```swift
mutating func next() async -> AnchorUpdateSequence<AnchorType>.Iterator<TypeOfAnchor>.Element?
```

<a id="return-value"></a>

## Return Value

The next anchor update if one has occurred since the last call to this function. Otherwise suspends the caller until a new anchor update has occurred. Returns `nil` (signals end of the sequence) if the provider has been stopped.
