> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/barcodedetectionprovider/anchorupdates

# anchorUpdates

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

An asynchronous sequence of anchor updates that describe the anchors in a person’s surroundings.

## Declaration

```swift
final var anchorUpdates: AnchorUpdateSequence<BarcodeAnchor> { get }
```

## See Also

### Inspecting a barcode detection provider

- [description](description.md): A textual representation of this barcode detection provider.
- [state](state.md): The state of a barcode detection provider.
