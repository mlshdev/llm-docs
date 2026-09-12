> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/replaykit](https://developer.apple.com/documentation/replaykit)

# ReplayKit

**Interface languages:** Swift, Objective-C

**Framework:** ReplayKit  
**Kind:** Framework  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · tvOS 10.0+ · visionOS 1.0+

Record or stream video from the screen, and audio from the app and microphone.

<a id="overview"></a>

## Overview

Using the ReplayKit framework, users can record video from the screen, and audio from the app and microphone. They can then share their recordings with other users through email, messages, and social media. You can build app extensions for live broadcasting your content to sharing services. ReplayKit is incompatible with [AVPlayer](avfoundation/avplayer.md) content.

## Topics

### Replay Sharing

- [Recording and Streaming Your macOS App](replaykit/recording-and-streaming-your-macos-app.md): Share screen recordings, or broadcast live audio and video of your app, by adding ReplayKit to your macOS apps and games.
- [RPScreenRecorder](replaykit/rpscreenrecorder.md): Deprecated. The shared recorder object that provides the ability to record audio and video of your app.
- [RPPreviewViewController](replaykit/rppreviewviewcontroller.md): Deprecated. An object that displays a user interface where users preview and edit a screen recording that you create with ReplayKit.

### Media Clip Processing

- [RPBroadcastController](replaykit/rpbroadcastcontroller.md): Deprecated. An object containing methods for starting and controlling a broadcast.
- [RPBroadcastHandler](replaykit/rpbroadcasthandler.md): Deprecated. An object that sends messages to the broadcasting app.
- [RPBroadcastSampleHandler](replaykit/rpbroadcastsamplehandler.md): Deprecated. An object that processes buffer objects as received from ReplayKit.
- [RPBroadcastMP4ClipHandler](replaykit/rpbroadcastmp4cliphandler.md): Deprecated. An object that processes MP4 movie clips from ReplayKit.

### Live Broadcast Implementation

- [RPBroadcastActivityViewController](replaykit/rpbroadcastactivityviewcontroller.md): Deprecated. A view controller that displays a user interface where users choose a broadcast service.
- [RPSystemBroadcastPickerView](replaykit/rpsystembroadcastpickerview.md): Deprecated. A view displaying a broadcast button that, when tapped, shows a broadcast picker.
- [RPBroadcastActivityController](replaykit/rpbroadcastactivitycontroller.md): Deprecated. A controller object that presents the macOS broadcast picker.
- [RPBroadcastActivityControllerDelegate](replaykit/rpbroadcastactivitycontrollerdelegate.md): Deprecated. A protocol that defines the methods to implement to respond to selection events from a broadcast activity controller.
- [RPBroadcastConfiguration](replaykit/rpbroadcastconfiguration.md): Deprecated. An object used to configure the movie clips produced during a live broadcast.

### Errors

- [RPRecordingErrorCode](replaykit/rprecordingerrorcode.md): Deprecated. The ReplayKit error domain codes.
- [RPRecordingErrorDomain](replaykit/rprecordingerrordomain.md): Deprecated. The ReplayKit error domain.
- [SCStreamErrorDomain](replaykit/scstreamerrordomain.md)
