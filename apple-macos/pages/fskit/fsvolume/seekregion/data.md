> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/seekregion/data](https://developer.apple.com/documentation/fskit/fsvolume/seekregion/data)

# FSVolume.SeekRegion.data (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 27.0+

Seek the next data region.

## Declaration

```swift
case data
```

<a id="discussion"></a>

## Discussion

When there are no more data regions past the supplied `offset`, an error code `ENXIO` should be returned.

## See Also

### Seek region types

- [FSVolume.SeekRegion.hole](hole.md): Seek the next hole region.

# FSSeekRegionData (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

Seek the next data region.

## Declaration

```objectivec
FSSeekRegionData
```

<a id="discussion"></a>

## Discussion

When there are no more data regions past the supplied `offset`, an error code `ENXIO` should be returned.

## See Also

### Seek region types

- [FSSeekRegionHole](hole.md): Seek the next hole region.
