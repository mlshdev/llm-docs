> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/presentationdescriptorreader/metadataitem(frametimerange:)](https://developer.apple.com/documentation/immersivemediasupport/presentationdescriptorreader/metadataitem(frametimerange:))

# metadataItem(frameTimeRange:)

**Framework:** Immersive Media Support  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Builds a metadata item containing the presentation commands active at the start of the specified frame’s time range.

## Declaration

```swift
func metadataItem(frameTimeRange: CMTimeRange) throws -> AVMetadataItem?
```

## Parameters

- `frameTimeRange`: The frame’s presentation time range. Its `start` is used to resolve which commands are active; the returned item is stamped with the full range.

<a id="return-value"></a>

## Return Value

An `AVMetadataItem` whose value encodes the active presentation commands for that frame, or `nil` if none are active.

<a id="discussion"></a>

## Discussion

This is intended to be called once per video frame. The returned item’s `time` and `duration` are set directly from `frameTimeRange`, so the caller can write it into a per-frame metadata track without further clipping or stamping. Returns `nil` if no presentation commands are active at `frameTimeRange.start`.
