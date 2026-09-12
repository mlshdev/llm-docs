> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureview/session](https://developer.apple.com/documentation/avkit/avcaptureview/session)

# session (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The view’s associated capture session.

## Declaration

```swift
var session: AVCaptureSession? { get }
```

<a id="Discussion"></a>

## Discussion

This property’s default value is a capture session configured for movie file recordings of audio and video data. Use the [setSession(\_:showVideoPreview:showAudioPreview:)](setsession%28__showvideopreview_showaudiopreview_%29.md) method to provide a custom capture session. Modifying the capture session changes its visual representation in the view.

## See Also

### Configuring the Capture Session

- [setSession(\_:showVideoPreview:showAudioPreview:)](setsession%28__showvideopreview_showaudiopreview_%29.md): Sets the view’s capture session.

# session (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The view’s associated capture session.

## Declaration

```objectivec
@property (readonly, nullable) AVCaptureSession * session;
```

<a id="Discussion"></a>

## Discussion

This property’s default value is a capture session configured for movie file recordings of audio and video data. Use the [setSession:showVideoPreview:showAudioPreview:](setsession%28__showvideopreview_showaudiopreview_%29.md) method to provide a custom capture session. Modifying the capture session changes its visual representation in the view.

## See Also

### Configuring the Capture Session

- [setSession:showVideoPreview:showAudioPreview:](setsession%28__showvideopreview_showaudiopreview_%29.md): Sets the view’s capture session.
