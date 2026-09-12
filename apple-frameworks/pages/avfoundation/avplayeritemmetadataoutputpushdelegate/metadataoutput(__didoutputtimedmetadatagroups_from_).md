> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemmetadataoutputpushdelegate/metadataoutput(_:didoutputtimedmetadatagroups:from:)](https://developer.apple.com/documentation/avfoundation/avplayeritemmetadataoutputpushdelegate/metadataoutput(_:didoutputtimedmetadatagroups:from:))

# metadataOutput(\_:didOutputTimedMetadataGroups:from:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells the delegate a new collection of metadata items is available.

## Declaration

```swift
optional func metadataOutput(_ output: AVPlayerItemMetadataOutput, didOutputTimedMetadataGroups groups: sending [AVTimedMetadataGroup], from track: AVPlayerItemTrack?)
```

## Parameters

- `output`: The [AVPlayerItemMetadataOutput](../avplayeritemmetadataoutput.md) source.
- `groups`: An array of `AVTimedMetadataGroups` that contain metadata items with requested identifiers, according to the format descriptions associated with the underlying tracks.
- `track`: An instance of [AVPlayerItemTrack](../avplayeritemtrack.md) that indicates the source of the metadata items in the group.

<a id="Discussion"></a>

## Discussion

Each group provided in a single invocation of this method will have timing that does not overlap with any other group in the array.

Note that for some timed metadata formats carried by HTTP live streaming, the `timeRange` of each group must be reported as [indefinite](../../coremedia/cmtime/indefinite.md), because its duration will be unknown until the next metadata group in the stream arrives. In these cases, the groups parameter will always contain a single group.

Groups are typically packaged into arrays for delivery to your delegate according to the chunking or interleaving of the underlying metadata data.

Note that if the item carries multiple metadata tracks containing metadata with the same metadata identifiers, this method can be invoked for each one separately, each with reference to the associated [AVPlayerItemTrack](../avplayeritemtrack.md).

# metadataOutput:didOutputTimedMetadataGroups:fromPlayerItemTrack: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Tells the delegate a new collection of metadata items is available.

## Declaration

```objectivec
- (void) metadataOutput:(AVPlayerItemMetadataOutput *) output didOutputTimedMetadataGroups:(NSArray<AVTimedMetadataGroup *> *) groups fromPlayerItemTrack:(AVPlayerItemTrack *) track;
```

## Parameters

- `output`: The [AVPlayerItemMetadataOutput](../avplayeritemmetadataoutput.md) source.
- `groups`: An array of `AVTimedMetadataGroups` that contain metadata items with requested identifiers, according to the format descriptions associated with the underlying tracks.
- `track`: An instance of [AVPlayerItemTrack](../avplayeritemtrack.md) that indicates the source of the metadata items in the group.

<a id="Discussion"></a>

## Discussion

Each group provided in a single invocation of this method will have timing that does not overlap with any other group in the array.

Note that for some timed metadata formats carried by HTTP live streaming, the `timeRange` of each group must be reported as [kCMTimeIndefinite](../../coremedia/cmtime/indefinite.md), because its duration will be unknown until the next metadata group in the stream arrives. In these cases, the groups parameter will always contain a single group.

Groups are typically packaged into arrays for delivery to your delegate according to the chunking or interleaving of the underlying metadata data.

Note that if the item carries multiple metadata tracks containing metadata with the same metadata identifiers, this method can be invoked for each one separately, each with reference to the associated [AVPlayerItemTrack](../avplayeritemtrack.md).
