> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/venuedescriptor/save(to:)](https://developer.apple.com/documentation/immersivemediasupport/venuedescriptor/save(to:))

# save(to:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.4+

Generates an AIME file at the specified location.

## Declaration

```swift
final func save(to aimeURL: URL) throws
```

## Parameters

- `aimeURL`: The destination URL with extension `.aime`.

## See Also

### Saving a venue descriptor data

- [aimeData](aimedata.md): Property holding the complete static metadata needed for the immersive media playback.
