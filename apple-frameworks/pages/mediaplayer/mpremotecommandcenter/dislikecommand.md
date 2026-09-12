> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandcenter/dislikecommand](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter/dislikecommand)

# dislikeCommand (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for indicating that a user dislikes what is currently playing.

## Declaration

```swift
var dislikeCommand: MPFeedbackCommand { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for disliking the current track. Use your handler to register the user’s dislike for a track, artist, or whatever is appropriate for your app. You can disable the command if your app does not support it.

In addition to registering a handler, you can use the command object to provide a localized string to communicate what is being liked to the user.

## See Also

### Rating a media item

- [ratingCommand](ratingcommand.md): The command object for rating a media item.
- [likeCommand](likecommand.md): The command object for indicating that a user likes what is currently playing.

# dislikeCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for indicating that a user dislikes what is currently playing.

## Declaration

```objectivec
@property (nonatomic, readonly) MPFeedbackCommand * dislikeCommand;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for disliking the current track. Use your handler to register the user’s dislike for a track, artist, or whatever is appropriate for your app. You can disable the command if your app does not support it.

In addition to registering a handler, you can use the command object to provide a localized string to communicate what is being liked to the user.

## See Also

### Rating a media item

- [ratingCommand](ratingcommand.md): The command object for rating a media item.
- [likeCommand](likecommand.md): The command object for indicating that a user likes what is currently playing.
