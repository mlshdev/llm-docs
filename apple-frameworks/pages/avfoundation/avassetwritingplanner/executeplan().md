> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwritingplanner/executeplan()](https://developer.apple.com/documentation/avfoundation/avassetwritingplanner/executeplan())

# executePlan()

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Starts the incremental segment writing.

## Declaration

```swift
func executePlan() async throws -> AVComposition
```

<a id="return-value"></a>

## Return Value

The assembly composition containing all completed segments from all tracks.

<a id="discussion"></a>

## Discussion

The planner calls every segment handler sequentially, starting with the first one available, or at the next unfinished segment if resuming a previously canceled session. Upon success (no error thrown), this means that all segments for all tracks have been completed. The returned assemblyComposition can be used to put the incremental tracks back together. One way to accomplish this is by feeding the assemblyComposition through AVAssetExportSession with the pass-through preset. The client is responsible for combining any other tracks (those that were not eligible for incremental writing), as well as establishing any track references between the incrementally written tracks and the other tracks in the final asset.

> **Throws**

> An error if the export fails or if a segment handler reports an error.
