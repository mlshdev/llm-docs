> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/begintrimming(completionhandler:)](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/begintrimming(completionhandler:))

# beginTrimming(completionHandler:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Presents the system trimming interface controls inside the player view.

## Declaration

```swift
func beginTrimming(completionHandler handler: ((Bool) -> Void)? = nil)
```

```swift
func beginTrimming() async -> Bool
```

## Parameters

- `handler`: A completion handler that the system calls with a Boolean value that indicates whether the user completed the trim operation, or if they canceled it.

## Mentioned In

- [Trimming and exporting media in visionOS](../trimming-and-exporting-media-in-visionos.md)

<a id="Discussion"></a>

## Discussion

After trimming is complete, you can access the trimmed range by querying the [forwardPlaybackEndTime](../../avfoundation/avplayeritem/forwardplaybackendtime.md) and [reversePlaybackEndTime](../../avfoundation/avplayeritem/reverseplaybackendtime.md) properties on the [AVPlayerItem](../../avfoundation/avplayeritem.md).

For more information on supporting trimming in your app, see [Trimming and exporting media in visionOS](../trimming-and-exporting-media-in-visionos.md).

## See Also

### Presenting the visionOS trimming UI

- [canBeginTrimming](canbegintrimming.md): A Boolean value that indicates whether the current media supports trimming.

# beginTrimmingWithCompletionHandler: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Presents the system trimming interface controls inside the player view.

## Declaration

```objectivec
- (void) beginTrimmingWithCompletionHandler:(void (^)(BOOL success)) handler;
```

## Parameters

- `handler`: A completion handler that the system calls with a Boolean value that indicates whether the user completed the trim operation, or if they canceled it.

## Mentioned In

- [Trimming and exporting media in visionOS](../trimming-and-exporting-media-in-visionos.md)

<a id="Discussion"></a>

## Discussion

After trimming is complete, you can access the trimmed range by querying the [forwardPlaybackEndTime](../../avfoundation/avplayeritem/forwardplaybackendtime.md) and [reversePlaybackEndTime](../../avfoundation/avplayeritem/reverseplaybackendtime.md) properties on the [AVPlayerItem](../../avfoundation/avplayeritem.md).

For more information on supporting trimming in your app, see [Trimming and exporting media in visionOS](../trimming-and-exporting-media-in-visionos.md).

## See Also

### Presenting the visionOS trimming UI

- [canBeginTrimming](canbegintrimming.md): A Boolean value that indicates whether the current media supports trimming.
