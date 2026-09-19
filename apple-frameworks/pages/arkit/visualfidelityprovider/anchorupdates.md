> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/visualfidelityprovider/anchorupdates

# anchorUpdates

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 27.0+

An async sequence of anchor updates for visualizing a preset field of view (FoV).

## Declaration

```swift
final var anchorUpdates: AnchorUpdateSequence<FieldOfViewAnchor> { get }
```

<a id="return-value"></a>

## Return Value

An async sequence of FoV anchor updates.
