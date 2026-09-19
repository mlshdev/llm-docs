> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/immersivemediasupport/venuedescriptor/aimedata

# aimeData

**Framework:** Immersive Media Support  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

Property holding the complete static metadata needed for the immersive media playback.

## Declaration

```swift
final var aimeData: Data? { get throws }
```

## See Also

### Saving a venue descriptor data

- [save(to:)](save%28to_%29.md): Generates an AIME file at the specified location.
