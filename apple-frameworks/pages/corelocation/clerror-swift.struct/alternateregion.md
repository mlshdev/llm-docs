> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corelocation/clerror-swift.struct/alternateregion

# alternateRegion

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+

A region that location services can monitor more effectively.

## Declaration

```swift
var alternateRegion: CLRegion? { get }
```

<a id="Discussion"></a>

## Discussion

This property has a value only for errors of type [regionMonitoringResponseDelayed](regionmonitoringresponsedelayed.md).
