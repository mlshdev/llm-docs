> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetexportsession/audiotrackgrouphandling](https://developer.apple.com/documentation/avfoundation/avassetexportsession/audiotrackgrouphandling)

# audioTrackGroupHandling (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A policy that defines how the session exports alternate audio tracks.

## Declaration

```swift
var audioTrackGroupHandling: AVAssetTrackGroupOutputHandling { get set }
```

<a id="Discussion"></a>

## Discussion

By default, a session exports only the enabled audio tracks within an alternate track group from the source asset. You can specify that the session preserve all audio tracks within an alternate track group by setting this value to [preserveAlternateTracks](../avassettrackgroupoutputhandling/preservealternatetracks.md).

If no audio alternate track group is present, the value of this property has no effect. You can query the [trackGroups](../avpartialasyncproperty/trackgroups.md) property of [AVAsset](../avasset.md) to determine whether it contains audio track groups.

> **Important**

>  You can’t specify alternate track output handling while also setting a value for the export session’s [audioMix](audiomix.md) property. The system throws an exception if you specify both.

## See Also

### Configuring track groups

- [AVAssetTrackGroupOutputHandling](../avassettrackgroupoutputhandling.md): A type that specifies policies for how an export session processes alternate tracks in a track group.

# audioTrackGroupHandling (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A policy that defines how the session exports alternate audio tracks.

## Declaration

```objectivec
@property (nonatomic) AVAssetTrackGroupOutputHandling audioTrackGroupHandling;
```

<a id="Discussion"></a>

## Discussion

By default, a session exports only the enabled audio tracks within an alternate track group from the source asset. You can specify that the session preserve all audio tracks within an alternate track group by setting this value to [AVAssetTrackGroupOutputHandlingPreserveAlternateTracks](../avassettrackgroupoutputhandling/preservealternatetracks.md).

If no audio alternate track group is present, the value of this property has no effect. You can query the [trackGroups](../avpartialasyncproperty/trackgroups.md) property of [AVAsset](../avasset.md) to determine whether it contains audio track groups.

> **Important**

>  You can’t specify alternate track output handling while also setting a value for the export session’s [audioMix](audiomix.md) property. The system throws an exception if you specify both.

## See Also

### Configuring track groups

- [AVAssetTrackGroupOutputHandling](../avassettrackgroupoutputhandling.md): A type that specifies policies for how an export session processes alternate tracks in a track group.
