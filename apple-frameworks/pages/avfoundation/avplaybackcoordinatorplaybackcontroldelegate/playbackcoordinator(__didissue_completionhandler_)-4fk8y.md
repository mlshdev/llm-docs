> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplaybackcoordinatorplaybackcontroldelegate/playbackcoordinator(_:didissue:completionhandler:)-4fk8y](https://developer.apple.com/documentation/avfoundation/avplaybackcoordinatorplaybackcontroldelegate/playbackcoordinator(_:didissue:completionhandler:)-4fk8y)

# playbackCoordinator(\_:didIssue:completionHandler:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tells the delegate to seek to a new time.

## Declaration

```swift
func playbackCoordinator(_ coordinator: AVDelegatingPlaybackCoordinator, didIssue seekCommand: AVDelegatingPlaybackCoordinatorSeekCommand, completionHandler: @escaping @Sendable () -> Void)
```

```swift
func playbackCoordinator(_ coordinator: AVDelegatingPlaybackCoordinator, didIssue seekCommand: AVDelegatingPlaybackCoordinatorSeekCommand) async
```

## Parameters

- `coordinator`: The playback coordinator that issues the command.
- `seekCommand`: The command to execute. Before performing it, verify that its [expectedCurrentItemIdentifier](../avdelegatingplaybackcoordinatorplaybackcontrolcommand/expectedcurrentitemidentifier.md) property value matches the item that you’re currently playing. If the command isn’t valid for the current item, ignore it and call the completion handler.
- `completionHandler`: A completion handler that your app must call when it finishes handling the command, either successfully or after beginning a suspension if it can’t handle the command currently.

  If the value of the command’s [shouldBufferInAnticipationOfPlayback](../avdelegatingplaybackcoordinatorpausecommand/shouldbufferinanticipationofplayback.md) property is [true](https://developer.apple.com/documentation/swift/true), call the completion handler only after the player is ready for playback.

<a id="Discussion"></a>

## Discussion

The coordinator issues this command to perform a seek in the item timeline, potentially pausing playback in the process.

## See Also

### Responding to commands

- [playbackCoordinator(\_:didIssue:completionHandler:)](playbackcoordinator%28__didissue_completionhandler_%29-73p3a.md): Tells the delegate to match the playback rate to that of the group when the rate is nonzero.
- [playbackCoordinator(\_:didIssue:completionHandler:)](playbackcoordinator%28__didissue_completionhandler_%29-56t01.md): Tells the delegate to pause playback.
- [playbackCoordinator(\_:didIssue:completionHandler:)](playbackcoordinator%28__didissue_completionhandler_%29-btle.md): Tells the delegate to expect playback soon and to start buffering media data in preparation.

# playbackCoordinator:didIssueSeekCommand:completionHandler: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Tells the delegate to seek to a new time.

## Declaration

```objectivec
- (void) playbackCoordinator:(AVDelegatingPlaybackCoordinator *) coordinator didIssueSeekCommand:(AVDelegatingPlaybackCoordinatorSeekCommand *) seekCommand completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `coordinator`: The playback coordinator that issues the command.
- `seekCommand`: The command to execute. Before performing it, verify that its [expectedCurrentItemIdentifier](../avdelegatingplaybackcoordinatorplaybackcontrolcommand/expectedcurrentitemidentifier.md) property value matches the item that you’re currently playing. If the command isn’t valid for the current item, ignore it and call the completion handler.
- `completionHandler`: A completion handler that your app must call when it finishes handling the command, either successfully or after beginning a suspension if it can’t handle the command currently.

  If the value of the command’s [shouldBufferInAnticipationOfPlayback](../avdelegatingplaybackcoordinatorpausecommand/shouldbufferinanticipationofplayback.md) property is [true](https://developer.apple.com/documentation/swift/true), call the completion handler only after the player is ready for playback.

<a id="Discussion"></a>

## Discussion

The coordinator issues this command to perform a seek in the item timeline, potentially pausing playback in the process.

## See Also

### Responding to commands

- [playbackCoordinator:didIssuePlayCommand:completionHandler:](playbackcoordinator%28__didissue_completionhandler_%29-73p3a.md): Tells the delegate to match the playback rate to that of the group when the rate is nonzero.
- [playbackCoordinator:didIssuePauseCommand:completionHandler:](playbackcoordinator%28__didissue_completionhandler_%29-56t01.md): Tells the delegate to pause playback.
- [playbackCoordinator:didIssueBufferingCommand:completionHandler:](playbackcoordinator%28__didissue_completionhandler_%29-btle.md): Tells the delegate to expect playback soon and to start buffering media data in preparation.
