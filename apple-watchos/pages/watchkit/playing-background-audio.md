> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/playing-background-audio](https://developer.apple.com/documentation/watchkit/playing-background-audio)

# Playing Background Audio (Swift)

**Framework:** WatchKit  
**Kind:** Article

Enable background audio in your app to provide a seamless playback experience.

<a id="overview"></a>

## Overview

While most watchOS apps are optimized for quick interactions, apps that play audio content should continue playing even after the user lowers their wrists or navigates to a new app. Your app needs to play audio in the background in order to provide this seamless playback experience.

To play background audio:

1. Enable the Audio Background Mode.
2. Configure and Activate the audio session.
3. Start playing.

<a id="Enable-the-Audio-Background-Mode"></a>

### Enable the Audio Background Mode

First, you must enable the Audio Background Mode capability for your WatchKit extension, as shown in [Figure 1](https://developer.apple.com/documentation/watchkit/storyboard_support/playing_background_audio#3008217).

![A screenshot showing the Audio Background mode in your WatchKit extension’s Capabilities pane.](https://developer.apple.com/images/com.apple.watchkit/media-3008217@2x.png)

This step sets the [UIBackgroundModes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/plist/info/UIBackgroundModes) key in your extension’s `Info.plist` file.

<a id="Configure-and-Activate-the-Audio-Session"></a>

### Configure and Activate the Audio Session

Before you can play audio, you need to set up and activate the audio session.

Start by setting the session’s category to [playback](https://developer.apple.com/documentation/avfaudio/avaudiosession/category-swift.struct/playback), and the route policy to [AVAudioSession.RouteSharingPolicy.longFormAudio](https://developer.apple.com/documentation/avfaudio/avaudiosession/routesharingpolicy-swift.enum/longformaudio).

```swift
try session.setCategory(.playback,
                        mode: .default,
                        policy: .longFormAudio,
                        options: [])
```

Next, activate the session, by calling the [activate(options:completionHandler:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/activate%28options:completionhandler:%29) method.

```swift
try await session.activate()
```

This method sets up the audio route asynchronously before activating your session. watchOS requires a Bluetooth audio route for long-form audio. If necessary, the system presents an audio route picker to the user, letting them choose the Bluetooth route (see [Figure 2](https://developer.apple.com/documentation/watchkit/storyboard_support/playing_background_audio#3016837)).

![A screenshot of the audio route picker, showing two different Bluetooth headphones.](https://developer.apple.com/images/com.apple.watchkit/media-3016837@2x.png)

In general, if the user has previously selected a Bluetooth route or if AirPods or other W1-equipped Bluetooth headphones are nearby, the system picks the audio route automatically without displaying a picker view to the user. If no applicable Bluetooth route is selected (either automatically or by the user), the system passes an error to the completion handler.

<a id="Start-Playing"></a>

### Start Playing

The [activate(options:completionHandler:)](https://developer.apple.com/documentation/avfaudio/avaudiosession/activate%28options:completionhandler:%29) method calls its completion handler as soon as a Bluetooth route is selected or when an error occurs. Check for errors in the completion handler. If no errors occurred, you can begin playing your audio content.

The code listing below shows all the steps needed to set up the session, activate it, and begin playing.

```swift
// Set up the session.
let session = AVAudioSession.sharedInstance()

do {
    try session.setCategory(.playback,
                            mode: .default,
                            policy: .longFormAudio,
                            options: [])
} catch {
    fatalError("Unable to configure the audio session: \(error)")
}

// Set up the player.
let player: AVAudioPlayer
do {
    player = try AVAudioPlayer(data: audioData)
} catch {
    print("Unable to set up the audio player: \(error)")
    // Handle the error here.
    return
}

// Activate and request the route.
do {
    try await session.activate()
} catch {
    print("Unable to activate the audio session: \(error)")
    return
}

// Play the audio file.
player.play()
```

## See Also

### Background sessions

- [Enabling Background Sessions](enabling-background-sessions.md): Enable the background mode for audio, location updates, remote notifications, or workouts.
- [WKBackgroundModes](https://developer.apple.com/documentation/bundleresources/information-property-list/wkbackgroundmodes): The services a watchOS app provides that require it to continue running in the background.
- [UIBackgroundModes](https://developer.apple.com/documentation/bundleresources/information-property-list/uibackgroundmodes): Services provided by an app that require it to run in the background.

# Playing Background Audio (Objective-C)

**Framework:** WatchKit  
**Kind:** Article

Enable background audio in your app to provide a seamless playback experience.

<a id="overview"></a>

## Overview

While most watchOS apps are optimized for quick interactions, apps that play audio content should continue playing even after the user lowers their wrists or navigates to a new app. Your app needs to play audio in the background in order to provide this seamless playback experience.

To play background audio:

1. Enable the Audio Background Mode.
2. Configure and Activate the audio session.
3. Start playing.

<a id="Enable-the-Audio-Background-Mode"></a>

### Enable the Audio Background Mode

First, you must enable the Audio Background Mode capability for your WatchKit extension, as shown in [Figure 1](https://developer.apple.com/documentation/watchkit/storyboard_support/playing_background_audio#3008217).

![A screenshot showing the Audio Background mode in your WatchKit extension’s Capabilities pane.](https://developer.apple.com/images/com.apple.watchkit/media-3008217@2x.png)

This step sets the [UIBackgroundModes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html#//apple_ref/doc/plist/info/UIBackgroundModes) key in your extension’s `Info.plist` file.

<a id="Configure-and-Activate-the-Audio-Session"></a>

### Configure and Activate the Audio Session

Before you can play audio, you need to set up and activate the audio session.

Start by setting the session’s category to [AVAudioSessionCategoryPlayback](https://developer.apple.com/documentation/avfaudio/avaudiosession/category-swift.struct/playback), and the route policy to [AVAudioSessionRouteSharingPolicyLongFormAudio](https://developer.apple.com/documentation/avfaudio/avaudiosession/routesharingpolicy-swift.enum/longformaudio).

```swift
try session.setCategory(.playback,
                        mode: .default,
                        policy: .longFormAudio,
                        options: [])
```

Next, activate the session, by calling the [activateWithOptions:completionHandler:](https://developer.apple.com/documentation/avfaudio/avaudiosession/activate%28options:completionhandler:%29) method.

```swift
try await session.activate()
```

This method sets up the audio route asynchronously before activating your session. watchOS requires a Bluetooth audio route for long-form audio. If necessary, the system presents an audio route picker to the user, letting them choose the Bluetooth route (see [Figure 2](https://developer.apple.com/documentation/watchkit/storyboard_support/playing_background_audio#3016837)).

![A screenshot of the audio route picker, showing two different Bluetooth headphones.](https://developer.apple.com/images/com.apple.watchkit/media-3016837@2x.png)

In general, if the user has previously selected a Bluetooth route or if AirPods or other W1-equipped Bluetooth headphones are nearby, the system picks the audio route automatically without displaying a picker view to the user. If no applicable Bluetooth route is selected (either automatically or by the user), the system passes an error to the completion handler.

<a id="Start-Playing"></a>

### Start Playing

The [activateWithOptions:completionHandler:](https://developer.apple.com/documentation/avfaudio/avaudiosession/activate%28options:completionhandler:%29) method calls its completion handler as soon as a Bluetooth route is selected or when an error occurs. Check for errors in the completion handler. If no errors occurred, you can begin playing your audio content.

The code listing below shows all the steps needed to set up the session, activate it, and begin playing.

```swift
// Set up the session.
let session = AVAudioSession.sharedInstance()

do {
    try session.setCategory(.playback,
                            mode: .default,
                            policy: .longFormAudio,
                            options: [])
} catch {
    fatalError("Unable to configure the audio session: \(error)")
}

// Set up the player.
let player: AVAudioPlayer
do {
    player = try AVAudioPlayer(data: audioData)
} catch {
    print("Unable to set up the audio player: \(error)")
    // Handle the error here.
    return
}

// Activate and request the route.
do {
    try await session.activate()
} catch {
    print("Unable to activate the audio session: \(error)")
    return
}

// Play the audio file.
player.play()
```

## See Also

### Background sessions

- [Enabling Background Sessions](enabling-background-sessions.md): Enable the background mode for audio, location updates, remote notifications, or workouts.
- [WKBackgroundModes](https://developer.apple.com/documentation/bundleresources/information-property-list/wkbackgroundmodes): The services a watchOS app provides that require it to continue running in the background.
- [UIBackgroundModes](https://developer.apple.com/documentation/bundleresources/information-property-list/uibackgroundmodes): Services provided by an app that require it to run in the background.
