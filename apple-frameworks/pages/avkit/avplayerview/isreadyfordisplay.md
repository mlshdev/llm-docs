> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerview/isreadyfordisplay](https://developer.apple.com/documentation/avkit/avplayerview/isreadyfordisplay)

# isReadyForDisplay (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the current player item’s first video frame is ready for display.

## Declaration

```swift
var isReadyForDisplay: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property value is key-value observable.

## See Also

### Customizing the video presentation

- [videoBounds](videobounds.md): The current size and position of the video image that displays within the player view’s bounds.
- [videoGravity](videogravity.md): A value that determines how the player view displays video content within its bounds.

# readyForDisplay (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A Boolean value that indicates whether the current player item’s first video frame is ready for display.

## Declaration

```objectivec
@property (readonly, getter=isReadyForDisplay) BOOL readyForDisplay;
```

<a id="Discussion"></a>

## Discussion

This property value is key-value observable.

## See Also

### Customizing the video presentation

- [videoBounds](videobounds.md): The current size and position of the video image that displays within the player view’s bounds.
- [videoGravity](videogravity.md): A value that determines how the player view displays video content within its bounds.
