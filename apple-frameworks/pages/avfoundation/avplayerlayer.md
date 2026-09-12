> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerlayer](https://developer.apple.com/documentation/avfoundation/avplayerlayer)

# AVPlayerLayer (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object that presents the visual contents of a player object.

## Declaration

```swift
class AVPlayerLayer
```

## Mentioned In

- [Selecting subtitles and alternative audio tracks](selecting-subtitles-and-alternative-audio-tracks.md)

<a id="overview"></a>

## Overview

A common way to use this object in iOS or tvOS is as the backing layer for a [UIView](../uikit/uiview.md), as the following example shows:

```swift
/// A view that displays the visual contents of a player object.
class PlayerView: UIView {

    // Override the property to make AVPlayerLayer the view's backing layer.
    override static var layerClass: AnyClass { AVPlayerLayer.self }
    
    // The associated player object.
    var player: AVPlayer? {
        get { playerLayer.player }
        set { playerLayer.player = newValue }
    }
    
    private var playerLayer: AVPlayerLayer { layer as! AVPlayerLayer }
}
```

> **Important**

>  The value of a player layer’s inherited [contents](../quartzcore/calayer/contents.md) property is opaque and you can’t change it.

## Topics

### Creating a player layer

- [init(player:)](avplayerlayer/init%28player_%29.md): Creates a layer object to present the visual contents of a player’s current item.

### Configuring the presentation

- [videoRect](avplayerlayer/videorect.md): The current size and position of the video image that displays within the layer’s bounds.
- [videoGravity](avplayerlayer/videogravity.md): A value that specifies how the layer displays the player’s visual content within the layer’s bounds.
- [AVLayerVideoGravity](avlayervideogravity.md): A structure that defines how a layer displays a player’s visual content within the layer’s bounds.

### Determining display readiness

- [isReadyForDisplay](avplayerlayer/isreadyfordisplay.md): A Boolean value that indicates whether the first video frame of the player’s current item is ready for display.

### Accessing the player

- [player](avplayerlayer/player.md): The player whose visual content the layer displays.

### Processing pixel buffers

- [pixelBufferAttributes](avplayerlayer/pixelbufferattributes.md): The attributes of the visual output that displays in the player layer during playback.
- [displayedPixelBuffer()](avplayerlayer/displayedpixelbuffer%28%29.md): Deprecated. Returns the pixel buffer that the player layer currently displays.
- [displayedReadOnlyPixelBuffer()](avplayerlayer/displayedreadonlypixelbuffer%28%29.md): Returns the pixel buffer which is currently being displayed.

### Instance Methods

- [setCaptionPreviewProfileID(\_:position:text:)](avplayerlayer/setcaptionpreviewprofileid%28__position_text_%29.md): Starts displaying a caption preview with the specified accessibility profile.
- [stopShowingCaptionPreview()](avplayerlayer/stopshowingcaptionpreview%28%29.md): Stops showing the caption preview.

## Relationships

### Inherits From

- [CALayer](../quartzcore/calayer.md)

### Conforms To

- [CAMediaTiming](../quartzcore/camediatiming.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Presentation

- [Monitoring playback progress in your app](monitoring-playback-progress-in-your-app.md): Observe the playback of a media asset to update your app’s user-interface state.
- [Using HEVC video with alpha](using-hevc-video-with-alpha.md): Play, write, and export HEVC video with an alpha channel to add overlay effects to your video processing.
- [AVSynchronizedLayer](avsynchronizedlayer.md): A Core Animation layer that derives its timing from a player item so that you can synchronize layer animations with media playback.

# AVPlayerLayer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

An object that presents the visual contents of a player object.

## Declaration

```objectivec
@interface AVPlayerLayer : CALayer
```

## Mentioned In

- [Selecting subtitles and alternative audio tracks](selecting-subtitles-and-alternative-audio-tracks.md)

<a id="overview"></a>

## Overview

A common way to use this object in iOS or tvOS is as the backing layer for a [UIView](../uikit/uiview.md), as the following example shows:

```swift
/// A view that displays the visual contents of a player object.
class PlayerView: UIView {

    // Override the property to make AVPlayerLayer the view's backing layer.
    override static var layerClass: AnyClass { AVPlayerLayer.self }
    
    // The associated player object.
    var player: AVPlayer? {
        get { playerLayer.player }
        set { playerLayer.player = newValue }
    }
    
    private var playerLayer: AVPlayerLayer { layer as! AVPlayerLayer }
}
```

> **Important**

>  The value of a player layer’s inherited [contents](../quartzcore/calayer/contents.md) property is opaque and you can’t change it.

## Topics

### Creating a player layer

- [playerLayerWithPlayer:](avplayerlayer/init%28player_%29.md): Creates a layer object to present the visual contents of a player’s current item.

### Configuring the presentation

- [videoRect](avplayerlayer/videorect.md): The current size and position of the video image that displays within the layer’s bounds.
- [videoGravity](avplayerlayer/videogravity.md): A value that specifies how the layer displays the player’s visual content within the layer’s bounds.
- [AVLayerVideoGravity](avlayervideogravity.md): A structure that defines how a layer displays a player’s visual content within the layer’s bounds.

### Determining display readiness

- [readyForDisplay](avplayerlayer/isreadyfordisplay.md): A Boolean value that indicates whether the first video frame of the player’s current item is ready for display.

### Accessing the player

- [player](avplayerlayer/player.md): The player whose visual content the layer displays.

### Processing pixel buffers

- [pixelBufferAttributes](avplayerlayer/pixelbufferattributes.md): The attributes of the visual output that displays in the player layer during playback.
- [copyDisplayedPixelBuffer](avplayerlayer/displayedpixelbuffer%28%29.md): Deprecated. Returns the pixel buffer that the player layer currently displays.

### Instance Methods

- [setCaptionPreviewProfileID:position:text:](avplayerlayer/setcaptionpreviewprofileid%28__position_text_%29.md): Starts displaying a caption preview with the specified accessibility profile.
- [stopShowingCaptionPreview](avplayerlayer/stopshowingcaptionpreview%28%29.md): Stops showing the caption preview.

## Relationships

### Inherits From

- [CALayer](../quartzcore/calayer.md)

## See Also

### Presentation

- [Monitoring playback progress in your app](monitoring-playback-progress-in-your-app.md): Observe the playback of a media asset to update your app’s user-interface state.
- [AVSynchronizedLayer](avsynchronizedlayer.md): A Core Animation layer that derives its timing from a player item so that you can synchronize layer animations with media playback.
