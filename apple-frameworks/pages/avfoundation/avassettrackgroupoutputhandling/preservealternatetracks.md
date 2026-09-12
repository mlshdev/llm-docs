> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassettrackgroupoutputhandling/preservealternatetracks](https://developer.apple.com/documentation/avfoundation/avassettrackgroupoutputhandling/preservealternatetracks)

# preserveAlternateTracks (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A policy that passes through alternate audio tracks from the source asset during export.

## Declaration

```swift
static var preserveAlternateTracks: AVAssetTrackGroupOutputHandling { get }
```

<a id="Discussion"></a>

## Discussion

Setting this policy tells the session to export alternate tracks in a track group without reencoding them.

# AVAssetTrackGroupOutputHandlingPreserveAlternateTracks (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

A policy that passes through alternate audio tracks from the source asset during export.

## Declaration

```objectivec
AVAssetTrackGroupOutputHandlingPreserveAlternateTracks
```

<a id="Discussion"></a>

## Discussion

Setting this policy tells the session to export alternate tracks in a track group without reencoding them.

## See Also

### Policies

- [AVAssetTrackGroupOutputHandlingNone](avassettrackgroupoutputhandlingnone.md): A policy that doesn’t pass through alternate audio tracks from the source asset during export.
- [AVAssetTrackGroupOutputHandlingDefaultPolicy](avassettrackgroupoutputhandlingdefaultpolicy.md): The default track group output handling policy.
