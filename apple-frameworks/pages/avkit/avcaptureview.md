> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureview](https://developer.apple.com/documentation/avkit/avcaptureview)

# AVCaptureView (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A view that displays standard user interface controls for capturing media data.

## Declaration

```swift
class AVCaptureView
```

## Topics

### Configuring the Capture Session

- [session](avcaptureview/session.md): The view’s associated capture session.
- [setSession(\_:showVideoPreview:showAudioPreview:)](avcaptureview/setsession%28__showvideopreview_showaudiopreview_%29.md): Sets the view’s capture session.

### Customizing the View

- [controlsStyle](avcaptureview/controlsstyle.md): The style of the capture controls presented by the view.
- [AVCaptureViewControlsStyle](avcaptureviewcontrolsstyle.md): Constants that describe the capture view’s supported controls styles.
- [videoGravity](avcaptureview/videogravity.md): A string value that defines how the capture view displays video within its bounds.

### Configuring the Delegate

- [delegate](avcaptureview/delegate.md): The capture view’s delegate object.
- [AVCaptureViewDelegate](avcaptureviewdelegate.md): The protocol that defines the methods you can implement to respond to capture view events.

### Recording Media

- [fileOutput](avcaptureview/fileoutput.md): The capture file output used to record media data.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### macOS playback and capture

- [Implementing Trimming in a macOS Player](implementing-trimming-in-a-macos-player.md): Provide a QuickTime media-trimming experience in your macOS app.
- [AVPlayerView](avplayerview.md): A view that displays content from a player and presents a native user interface to control playback.

# AVCaptureView (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** macOS 10.10+

A view that displays standard user interface controls for capturing media data.

## Declaration

```objectivec
@interface AVCaptureView : NSView
```

## Topics

### Configuring the Capture Session

- [session](avcaptureview/session.md): The view’s associated capture session.
- [setSession:showVideoPreview:showAudioPreview:](avcaptureview/setsession%28__showvideopreview_showaudiopreview_%29.md): Sets the view’s capture session.

### Customizing the View

- [controlsStyle](avcaptureview/controlsstyle.md): The style of the capture controls presented by the view.
- [AVCaptureViewControlsStyle](avcaptureviewcontrolsstyle.md): Constants that describe the capture view’s supported controls styles.
- [videoGravity](avcaptureview/videogravity.md): A string value that defines how the capture view displays video within its bounds.

### Configuring the Delegate

- [delegate](avcaptureview/delegate.md): The capture view’s delegate object.
- [AVCaptureViewDelegate](avcaptureviewdelegate.md): The protocol that defines the methods you can implement to respond to capture view events.

### Recording Media

- [fileOutput](avcaptureview/fileoutput.md): The capture file output used to record media data.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)

## See Also

### macOS playback and capture

- [Implementing Trimming in a macOS Player](implementing-trimming-in-a-macos-player.md): Provide a QuickTime media-trimming experience in your macOS app.
- [AVPlayerView](avplayerview.md): A view that displays content from a player and presents a native user interface to control playback.
