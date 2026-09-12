> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkapplicationdelegate/handleremotenowplayingactivity()](https://developer.apple.com/documentation/watchkit/wkapplicationdelegate/handleremotenowplayingactivity())

# handleRemoteNowPlayingActivity() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Tells the delegate when the user plays audio in the corresponding iOS app.

## Declaration

```swift
optional func handleRemoteNowPlayingActivity()
```

<a id="Discussion"></a>

## Discussion

Use this method to update your user interface and display information about the iOS app’s content.

When the user begins playing audio content on the corresponding iOS app, your watch app automatically launches and becomes the frontmost app, similar to the behavior of the Now Playing app. It remains the frontmost app until the user pauses the audio or exits your watch app.

To opt out of this autolaunch behavior, set the Opt out of Auto-launch Audio App (`PUICAutoLaunchAudioOptOut`) key in your watchOS app’s `Info.plist` file.

![A screenshot showing the Opt out of Auto-launch Audio App key in the Info.plist editor.](https://developer.apple.com/images/com.apple.watchkit/media-4024617@2x.png)

# handleRemoteNowPlayingActivity (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 7.0+

Tells the delegate when the user plays audio in the corresponding iOS app.

## Declaration

```objectivec
- (void) handleRemoteNowPlayingActivity;
```

<a id="Discussion"></a>

## Discussion

Use this method to update your user interface and display information about the iOS app’s content.

When the user begins playing audio content on the corresponding iOS app, your watch app automatically launches and becomes the frontmost app, similar to the behavior of the Now Playing app. It remains the frontmost app until the user pauses the audio or exits your watch app.

To opt out of this autolaunch behavior, set the Opt out of Auto-launch Audio App (`PUICAutoLaunchAudioOptOut`) key in your watchOS app’s `Info.plist` file.

![A screenshot showing the Opt out of Auto-launch Audio App key in the Info.plist editor.](https://developer.apple.com/images/com.apple.watchkit/media-4024617@2x.png)
