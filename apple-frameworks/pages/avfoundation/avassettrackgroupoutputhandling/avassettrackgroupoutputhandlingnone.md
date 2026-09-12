> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrackgroupoutputhandling/avassettrackgroupoutputhandlingnone](https://developer.apple.com/documentation/avfoundation/avassettrackgroupoutputhandling/avassettrackgroupoutputhandlingnone)

# AVAssetTrackGroupOutputHandlingNone

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A policy that doesn’t pass through alternate audio tracks from the source asset during export.

## Declaration

```objectivec
AVAssetTrackGroupOutputHandlingNone
```

<a id="Discussion"></a>

## Discussion

Setting this policy tells the session to disregard alternate track group assignments in the original asset.

## See Also

### Policies

- [AVAssetTrackGroupOutputHandlingPreserveAlternateTracks](preservealternatetracks.md): A policy that passes through alternate audio tracks from the source asset during export.
- [AVAssetTrackGroupOutputHandlingDefaultPolicy](avassettrackgroupoutputhandlingdefaultpolicy.md): The default track group output handling policy.
