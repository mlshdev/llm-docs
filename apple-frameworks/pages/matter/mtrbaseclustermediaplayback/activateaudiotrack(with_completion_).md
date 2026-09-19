> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclustermediaplayback/activateaudiotrack(with:completion:)

# activateAudioTrack(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ActivateAudioTrack

## Declaration

```swift
func activateAudioTrack(with params: MTRMediaPlaybackClusterActivateAudioTrackParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func activateAudioTrack(with params: MTRMediaPlaybackClusterActivateAudioTrackParams) async throws
```

<a id="discussion"></a>

## Discussion

This command is used to activate a specific Audio Track for the media being played.

# activateAudioTrackWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Command ActivateAudioTrack

## Declaration

```objectivec
- (void) activateAudioTrackWithParams:(MTRMediaPlaybackClusterActivateAudioTrackParams *) params completion:(MTRStatusCompletion) completion;
```

<a id="discussion"></a>

## Discussion

This command is used to activate a specific Audio Track for the media being played.
