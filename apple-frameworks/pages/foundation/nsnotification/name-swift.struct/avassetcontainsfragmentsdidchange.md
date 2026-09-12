> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/avassetcontainsfragmentsdidchange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/avassetcontainsfragmentsdidchange)

# AVAssetContainsFragmentsDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 12.0+ · visionOS 1.0+

A notification the system posts when an asset’s fragments change.

## Declaration

```swift
static let AVAssetContainsFragmentsDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

You can receive notifications of changes to an asset’s fragments after the system loads the value of an asset’s [containsFragments](../../../avfoundation/avasset/containsfragments.md) property, and you’ve added the asset to an instance of [AVFragmentedAssetMinder](../../../avfoundation/avfragmentedassetminder.md).

## See Also

### AVFoundation

- [AVAssetChapterMetadataGroupsDidChange](avassetchaptermetadatagroupsdidchange.md): A notification the system posts when an asset’s chapter metadata groups change.
- [AVAssetDurationDidChange](avassetdurationdidchange.md): A notification the system posts when a fragmented asset minder observes a change to a fragmented asset’s duration.
- [AVAssetMediaSelectionGroupsDidChange](avassetmediaselectiongroupsdidchange.md): A notification the system posts when an asset’s media selection groups change.
- [AVAssetTrackSegmentsDidChange](avassettracksegmentsdidchange.md): A notification the system posts when a fragmented asset minder observes a change to a fragmented asset track’s segments.
- [AVAssetTrackTimeRangeDidChange](avassettracktimerangedidchange.md): A notification the system posts when a fragmented asset minder observes a change to a fragmented asset track’s time range.
- [AVAssetTrackTrackAssociationsDidChange](avassettracktrackassociationsdidchange.md): A notification the system posts when the track associations for an asset track change.
- [AVAssetWasDefragmented](avassetwasdefragmented.md): A notification the system posts when a fragmented asset minder observes that the system defragments the asset on disk.
- [subjectAreaDidChangeNotification](../../../avfoundation/avcapturedevice/subjectareadidchangenotification.md): A notification the system posts when a capture device detects a substantial change to the video subject area.
- [wasConnectedNotification](../../../avfoundation/avcapturedevice/wasconnectednotification.md): A notification the system posts when a new capture device becomes available.
- [wasDisconnectedNotification](../../../avfoundation/avcapturedevice/wasdisconnectednotification.md): A notification the system posts when an existing device becomes unavailable.
- [formatDescriptionDidChangeNotification](../../../avfoundation/avcaptureinput/port/formatdescriptiondidchangenotification.md): A notification the system posts when the capture input port’s format description changes.
- [didStartRunningNotification](../../../avfoundation/avcapturesession/didstartrunningnotification.md): A notification the system posts when a capture session starts.
- [didStopRunningNotification](../../../avfoundation/avcapturesession/didstoprunningnotification.md): A notification the system posts when a capture session stops.
- [interruptionEndedNotification](../../../avfoundation/avcapturesession/interruptionendednotification.md): A notification the system posts when an interruption to a capture session finishes.
- [runtimeErrorNotification](../../../avfoundation/avcapturesession/runtimeerrornotification.md): A notification the system posts when an error occurs during a capture session.
