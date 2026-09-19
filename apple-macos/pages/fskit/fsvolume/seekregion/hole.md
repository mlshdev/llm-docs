> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsvolume/seekregion/hole

# FSVolume.SeekRegion.hole (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 27.0+

Seek the next hole region.

## Declaration

```swift
case hole
```

<a id="discussion"></a>

## Discussion

When there are no more hole regions past the supplied `offset`, the current file size (end-of-file offset) should be returned.

## See Also

### Seek region types

- [FSVolume.SeekRegion.data](data.md): Seek the next data region.

# FSSeekRegionHole (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

Seek the next hole region.

## Declaration

```objectivec
FSSeekRegionHole
```

<a id="discussion"></a>

## Discussion

When there are no more hole regions past the supplied `offset`, the current file size (end-of-file offset) should be returned.

## See Also

### Seek region types

- [FSSeekRegionData](data.md): Seek the next data region.
