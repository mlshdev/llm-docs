> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandcenter/bookmarkcommand](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter/bookmarkcommand)

# bookmarkCommand (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for indicating that a user wants to remember a media item.

## Declaration

```swift
var bookmarkCommand: MPFeedbackCommand { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for bookmarking the current track. In your handler, add the track to the user’s list of bookmarks. You can disable the command if your app does not support it.

In addition to registering a handler, you can use the command object to provide a localized string to communicate what is being bookmarked to the user.

# bookmarkCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for indicating that a user wants to remember a media item.

## Declaration

```objectivec
@property (nonatomic, readonly) MPFeedbackCommand * bookmarkCommand;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for bookmarking the current track. In your handler, add the track to the user’s list of bookmarks. You can disable the command if your app does not support it.

In addition to registering a handler, you can use the command object to provide a localized string to communicate what is being bookmarked to the user.
