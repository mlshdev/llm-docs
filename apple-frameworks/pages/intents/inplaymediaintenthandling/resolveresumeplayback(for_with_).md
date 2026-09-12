> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintenthandling/resolveresumeplayback(for:with:)](https://developer.apple.com/documentation/intents/inplaymediaintenthandling/resolveresumeplayback(for:with:))

# resolveResumePlayback(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Resolves whether to resume playback.

## Declaration

```swift
optional func resolveResumePlayback(for intent: INPlayMediaIntent, with completion: @escaping @Sendable (INBooleanResolutionResult) -> Void)
```

```swift
optional func resolveResumePlayback(for intent: INPlayMediaIntent) async -> INBooleanResolutionResult
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For a successful resolution, create a resolution object with the destination for the media.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve whether to resume playback for the media.

## See Also

### Resolving the Intent Parameters

- [resolveMediaItems(for:with:)](resolvemediaitems%28for_with_%29.md): Resolves the media items to play.
- [resolvePlayShuffled(for:with:)](resolveplayshuffled%28for_with_%29.md): Resolves whether to shuffle the played media.
- [resolvePlaybackQueueLocation(for:with:)](resolveplaybackqueuelocation%28for_with_%29.md): Resolves the location in the playback queue where your app plays the media.
- [resolvePlaybackRepeatMode(for:with:)](resolveplaybackrepeatmode%28for_with_%29.md): Resolves the repeat mode when playing media.
- [resolvePlaybackSpeed(for:with:)](resolveplaybackspeed%28for_with_%29.md): Resolves the playback speed when playing media.

# resolveResumePlaybackForPlayMedia:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Resolves whether to resume playback.

## Declaration

```objectivec
- (void) resolveResumePlaybackForPlayMedia:(INPlayMediaIntent *) intent withCompletion:(void (^)(INBooleanResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object that contains details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution. For a successful resolution, create a resolution object with the destination for the media.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve whether to resume playback for the media.

## See Also

### Resolving the Intent Parameters

- [resolveMediaItemsForPlayMedia:withCompletion:](resolvemediaitems%28for_with_%29.md): Resolves the media items to play.
- [resolvePlayShuffledForPlayMedia:withCompletion:](resolveplayshuffled%28for_with_%29.md): Resolves whether to shuffle the played media.
- [resolvePlaybackQueueLocationForPlayMedia:withCompletion:](resolveplaybackqueuelocation%28for_with_%29.md): Resolves the location in the playback queue where your app plays the media.
- [resolvePlaybackRepeatModeForPlayMedia:withCompletion:](resolveplaybackrepeatmode%28for_with_%29.md): Resolves the repeat mode when playing media.
- [resolvePlaybackSpeedForPlayMedia:withCompletion:](resolveplaybackspeed%28for_with_%29.md): Resolves the playback speed when playing media.
