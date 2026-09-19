> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/documentobservation/container/list/boundingregion

# boundingRegion

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A polygon that defines the boundary of the list.

## Declaration

```swift
var boundingRegion: NormalizedRegion { get }
```

## Parameters

- `boundingBox`: The bounding box of the object.

## See Also

### Inspecting a list

- [items](items.md): The elements of the list.
- [DocumentObservation.Container.List.Marker](marker.md): The symbol or character at the beginning of each list item.
