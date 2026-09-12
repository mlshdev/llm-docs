> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerview/videobounds](https://developer.apple.com/documentation/avkit/avplayerview/videobounds)

# videoBounds (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The current size and position of the video image that displays within the player view’s bounds.

## Declaration

```swift
var videoBounds: NSRect { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine the display dimensions of the video image within the player view’s bounds. The size and position of this rectangle depend on the aspect ratio of the media (like 16:9 or 4:3), the player view’s [bounds](https://developer.apple.com/documentation/appkit/nsview/bounds), and its [controlsStyle](controlsstyle.md).

## See Also

### Customizing the video presentation

- [isReadyForDisplay](isreadyfordisplay.md): A Boolean value that indicates whether the current player item’s first video frame is ready for display.
- [videoGravity](videogravity.md): A value that determines how the player view displays video content within its bounds.

# videoBounds (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The current size and position of the video image that displays within the player view’s bounds.

## Declaration

```objectivec
@property (readonly) NSRect videoBounds;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine the display dimensions of the video image within the player view’s bounds. The size and position of this rectangle depend on the aspect ratio of the media (like 16:9 or 4:3), the player view’s [bounds](https://developer.apple.com/documentation/appkit/nsview/bounds), and its [controlsStyle](controlsstyle.md).

## See Also

### Customizing the video presentation

- [readyForDisplay](isreadyfordisplay.md): A Boolean value that indicates whether the current player item’s first video frame is ready for display.
- [videoGravity](videogravity.md): A value that determines how the player view displays video content within its bounds.
