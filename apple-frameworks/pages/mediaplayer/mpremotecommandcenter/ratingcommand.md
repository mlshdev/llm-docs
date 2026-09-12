> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandcenter/ratingcommand](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter/ratingcommand)

# ratingCommand (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for rating a media item.

## Declaration

```swift
var ratingCommand: MPRatingCommand { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for rating the current track. In your handler, apply the specified rating to the track. You can disable the command if your app does not support it.

## See Also

### Rating a media item

- [likeCommand](likecommand.md): The command object for indicating that a user likes what is currently playing.
- [dislikeCommand](dislikecommand.md): The command object for indicating that a user dislikes what is currently playing.

# ratingCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for rating a media item.

## Declaration

```objectivec
@property (nonatomic, readonly) MPRatingCommand * ratingCommand;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for rating the current track. In your handler, apply the specified rating to the track. You can disable the command if your app does not support it.

## See Also

### Rating a media item

- [likeCommand](likecommand.md): The command object for indicating that a user likes what is currently playing.
- [dislikeCommand](dislikecommand.md): The command object for indicating that a user dislikes what is currently playing.
