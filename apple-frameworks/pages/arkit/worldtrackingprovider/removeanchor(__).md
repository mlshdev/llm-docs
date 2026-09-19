> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/worldtrackingprovider/removeanchor(_:)

# removeAnchor(\_:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Removes a world anchor from a world-tracking provider.

## Declaration

```swift
final func removeAnchor(_ worldAnchor: WorldAnchor) async throws
```

## Parameters

- `worldAnchor`: The world anchor to remove.

## See Also

### Stopping object tracking

- [removeAnchor(forID:)](removeanchor%28forid_%29.md): Removes a world anchor from a world-tracking provider based on its ID.
