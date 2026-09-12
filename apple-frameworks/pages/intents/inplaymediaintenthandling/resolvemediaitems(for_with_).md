> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintenthandling/resolvemediaitems(for:with:)](https://developer.apple.com/documentation/intents/inplaymediaintenthandling/resolvemediaitems(for:with:))

# resolveMediaItems(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Resolves the media items to play.

## Declaration

```swift
optional func resolveMediaItems(for intent: INPlayMediaIntent, with completion: @escaping @Sendable ([INPlayMediaMediaItemResolutionResult]) -> Void)
```

```swift
optional func resolveMediaItems(for intent: INPlayMediaIntent) async -> [INPlayMediaMediaItemResolutionResult]
```

## Parameters

- `intent`: The object that contains details about the user’s request. Use this object to get any initial information the user may have provided.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You must implement this resolve method. The other resolve methods in this protocol are optional.

Implement this method to resolve the media items to play. If your app isn’t completely sure of the match, return a few results with the best match first. The system can start playing the first item and offer the alternatives in case the user wants to play one of them instead.

## See Also

### Resolving the Intent Parameters

- [resolvePlayShuffled(for:with:)](resolveplayshuffled%28for_with_%29.md): Resolves whether to shuffle the played media.
- [resolvePlaybackQueueLocation(for:with:)](resolveplaybackqueuelocation%28for_with_%29.md): Resolves the location in the playback queue where your app plays the media.
- [resolvePlaybackRepeatMode(for:with:)](resolveplaybackrepeatmode%28for_with_%29.md): Resolves the repeat mode when playing media.
- [resolvePlaybackSpeed(for:with:)](resolveplaybackspeed%28for_with_%29.md): Resolves the playback speed when playing media.
- [resolveResumePlayback(for:with:)](resolveresumeplayback%28for_with_%29.md): Resolves whether to resume playback.

# resolveMediaItemsForPlayMedia:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Resolves the media items to play.

## Declaration

```objectivec
- (void) resolveMediaItemsForPlayMedia:(INPlayMediaIntent *) intent withCompletion:(void (^)(NSArray<INPlayMediaMediaItemResolutionResult *> *resolutionResults)) completion;
```

## Parameters

- `intent`: The object that contains details about the user’s request. Use this object to get any initial information the user may have provided.
- `completion`: The block to execute with the resolution. You must execute this block while implementing this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object that contains the details of your proposed resolution.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You must implement this resolve method. The other resolve methods in this protocol are optional.

Implement this method to resolve the media items to play. If your app isn’t completely sure of the match, return a few results with the best match first. The system can start playing the first item and offer the alternatives in case the user wants to play one of them instead.

## See Also

### Resolving the Intent Parameters

- [resolvePlayShuffledForPlayMedia:withCompletion:](resolveplayshuffled%28for_with_%29.md): Resolves whether to shuffle the played media.
- [resolvePlaybackQueueLocationForPlayMedia:withCompletion:](resolveplaybackqueuelocation%28for_with_%29.md): Resolves the location in the playback queue where your app plays the media.
- [resolvePlaybackRepeatModeForPlayMedia:withCompletion:](resolveplaybackrepeatmode%28for_with_%29.md): Resolves the repeat mode when playing media.
- [resolvePlaybackSpeedForPlayMedia:withCompletion:](resolveplaybackspeed%28for_with_%29.md): Resolves the playback speed when playing media.
- [resolveResumePlaybackForPlayMedia:withCompletion:](resolveresumeplayback%28for_with_%29.md): Resolves whether to resume playback.
