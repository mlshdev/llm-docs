> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureview/setsession(_:showvideopreview:showaudiopreview:)](https://developer.apple.com/documentation/avkit/avcaptureview/setsession(_:showvideopreview:showaudiopreview:))

# setSession(\_:showVideoPreview:showAudioPreview:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Sets the view’s capture session.

## Declaration

```swift
func setSession(_ session: AVCaptureSession?, showVideoPreview: Bool, showAudioPreview: Bool)
```

## Parameters

- `session`: The capture session.
- `showVideoPreview`: A Boolean value that indicates whether the view displays a video preview. If `true`, the system adds, removes, or modifies capture inputs for video data based on device availability and user selection.
- `showAudioPreview`: A Boolean value that indicates whether the view shows an audio preview. If `true`, the system adds, removes, or modifies capture inputs for audio data based on device availability and user selection.

<a id="Discussion"></a>

## Discussion

The view must show audio preview, video preview, or both. Furthermore, the view may modify the capture session, for example, to access media data for preview or when the user select a new capture source.

The capture view automatically starts and stops the default session. If you set a custom capture session on the view, you need to manually manage the session’s life cycle events.

## See Also

### Configuring the Capture Session

- [session](session.md): The view’s associated capture session.

# setSession:showVideoPreview:showAudioPreview: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Sets the view’s capture session.

## Declaration

```objectivec
- (void) setSession:(AVCaptureSession *) session showVideoPreview:(BOOL) showVideoPreview showAudioPreview:(BOOL) showAudioPreview;
```

## Parameters

- `session`: The capture session.
- `showVideoPreview`: A Boolean value that indicates whether the view displays a video preview. If `true`, the system adds, removes, or modifies capture inputs for video data based on device availability and user selection.
- `showAudioPreview`: A Boolean value that indicates whether the view shows an audio preview. If `true`, the system adds, removes, or modifies capture inputs for audio data based on device availability and user selection.

<a id="Discussion"></a>

## Discussion

The view must show audio preview, video preview, or both. Furthermore, the view may modify the capture session, for example, to access media data for preview or when the user select a new capture source.

The capture view automatically starts and stops the default session. If you set a custom capture session on the view, you need to manually manage the session’s life cycle events.

## See Also

### Configuring the Capture Session

- [session](session.md): The view’s associated capture session.
