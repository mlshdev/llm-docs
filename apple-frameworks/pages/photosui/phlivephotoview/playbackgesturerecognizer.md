> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phlivephotoview/playbackgesturerecognizer](https://developer.apple.com/documentation/photosui/phlivephotoview/playbackgesturerecognizer)

# playbackGestureRecognizer (Swift)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A gesture recognizer that controls playback of the Live Photo in the view.

## Declaration

```swift
var playbackGestureRecognizer: UIGestureRecognizer { get }
```

## Mentioned In

- [Displaying Live Photos](../../photokit/displaying-live-photos.md)

<a id="Discussion"></a>

## Discussion

The Live Photo view automatically creates and installs this gesture recognizer. Use this property to customize the gesture recognizer’s behavior. For example, you might use it in delegate methods that affect how it interacts with other gesture recognizers, or install it on a different view to ensure proper event handling in your app’s view hierarchy.

## See Also

### Managing Playback

- [isMuted](ismuted.md): A Boolean value that determines whether the view plays the audio content of its Live Photo.
- [audioVolume](audiovolume.md): The audio gain to apply to the Live Photo’s movie content during playback.

# playbackGestureRecognizer (Objective-C)

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A gesture recognizer that controls playback of the Live Photo in the view.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) UIGestureRecognizer * playbackGestureRecognizer;
```

## Mentioned In

- [Displaying Live Photos](../../photokit/displaying-live-photos.md)

<a id="Discussion"></a>

## Discussion

The Live Photo view automatically creates and installs this gesture recognizer. Use this property to customize the gesture recognizer’s behavior. For example, you might use it in delegate methods that affect how it interacts with other gesture recognizers, or install it on a different view to ensure proper event handling in your app’s view hierarchy.

## See Also

### Managing Playback

- [muted](ismuted.md): A Boolean value that determines whether the view plays the audio content of its Live Photo.
- [audioVolume](audiovolume.md): The audio gain to apply to the Live Photo’s movie content during playback.
