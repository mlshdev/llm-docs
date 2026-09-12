> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiosession/preparerouteselectionforplayback(completionhandler:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/preparerouteselectionforplayback(completionhandler:))

# prepareRouteSelectionForPlayback(completionHandler:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Prepares the route selection for long-form video playback.

## Declaration

```swift
func prepareRouteSelectionForPlayback(completionHandler: @escaping @Sendable (Bool, AVAudioSession.RouteSelection) -> Void)
```

```swift
func prepareRouteSelectionForPlayback() async -> (Bool, AVAudioSession.RouteSelection)
```

## Parameters

- `completionHandler`: A completion handler called after the system finishes preparing the playback route. The system passes the completion handler the following parameters:

  - **`shouldStartPlayback`**: A Boolean value that indicates whether playback should start.
  - **`routeSelection`**: A route selection value that indicates the active playback route.

<a id="Discussion"></a>

## Discussion

When playing long-form video content, call this method to indicate that playback is about to begin. Doing so provides the system the opportunity to prompt the user for an output destination, if needed, and perform any required routing.

The system only prompts the user to select a route if you’ve configured the audio session with a long-form video route-sharing policy. After the system configures the needed routing, it calls its completion handler, from which you can begin playback.

```swift
let session = AVAudioSession.sharedInstance()
session.prepareRouteSelectionForPlayback { shouldStartPlayback, routeSelection in
    if shouldStartPlayback {
        // Prepare and present player.
    }
}
```

## See Also

### Related Documentation

- [setCategory(\_:mode:policy:options:)](setcategory%28__mode_policy_options_%29.md): Sets the session category, mode, route-sharing policy, and options.

### Preparing for long-form video playback

- [AVAudioSession.RouteSelection](routeselection.md): Constants used to define the active route selection.

# prepareRouteSelectionForPlaybackWithCompletionHandler: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Prepares the route selection for long-form video playback.

## Declaration

```objectivec
- (void) prepareRouteSelectionForPlaybackWithCompletionHandler:(void (^)(BOOL shouldStartPlayback, AVAudioSessionRouteSelection routeSelection)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler called after the system finishes preparing the playback route. The system passes the completion handler the following parameters:

  - **`shouldStartPlayback`**: A Boolean value that indicates whether playback should start.
  - **`routeSelection`**: A route selection value that indicates the active playback route.

<a id="Discussion"></a>

## Discussion

When playing long-form video content, call this method to indicate that playback is about to begin. Doing so provides the system the opportunity to prompt the user for an output destination, if needed, and perform any required routing.

The system only prompts the user to select a route if you’ve configured the audio session with a long-form video route-sharing policy. After the system configures the needed routing, it calls its completion handler, from which you can begin playback.

```swift
let session = AVAudioSession.sharedInstance()
session.prepareRouteSelectionForPlayback { shouldStartPlayback, routeSelection in
    if shouldStartPlayback {
        // Prepare and present player.
    }
}
```

## See Also

### Related Documentation

- [setCategory:mode:routeSharingPolicy:options:error:](setcategory%28__mode_policy_options_%29.md): Sets the session category, mode, route-sharing policy, and options.

### Preparing for long-form video playback

- [AVAudioSessionRouteSelection](../../avkit/avaudiosessionrouteselection.md): Constants that indicate the audio route selection.
