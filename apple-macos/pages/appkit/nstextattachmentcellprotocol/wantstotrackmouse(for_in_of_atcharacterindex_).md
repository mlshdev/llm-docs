> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentcellprotocol/wantstotrackmouse(for:in:of:atcharacterindex:)](https://developer.apple.com/documentation/appkit/nstextattachmentcellprotocol/wantstotrackmouse(for:in:of:atcharacterindex:))

# wantsToTrackMouse(for:in:of:atCharacterIndex:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows an attachment to specify the events for which it tracks the mouse.

## Declaration

```swift
@MainActor func wantsToTrackMouse(for theEvent: NSEvent, in cellFrame: NSRect, of controlView: NSView?, atCharacterIndex charIndex: Int) -> Bool
```

<a id="Discussion"></a>

## Discussion

`theEvent` is the event in question that occurred in `cellFrame` inside `controlView`. `charIndex` is the index of the attachment character within the text. If [wantsToTrackMouse()](wantstotrackmouse%28%29.md) returns [true](https://developer.apple.com/documentation/swift/true), this method allows the attachment to decide whether it wishes to do so for particular events.

## See Also

### Responding to mouse events

- [wantsToTrackMouse()](wantstotrackmouse%28%29.md): Returns a Boolean value that indicates whether the attachment handles mouse events occurring over its image.
- [trackMouse(with:in:of:untilMouseUp:)](trackmouse%28with_in_of_untilmouseup_%29.md): Handles a mouse-down event on the cell’s image, and optionally waits until a mouse-up event
- [trackMouse(with:in:of:atCharacterIndex:untilMouseUp:)](trackmouse%28with_in_of_atcharacterindex_untilmouseup_%29.md): Handles a mouse-down event on the image at the specified character position.

# wantsToTrackMouseForEvent:inRect:ofView:atCharacterIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Allows an attachment to specify the events for which it tracks the mouse.

## Declaration

```objectivec
- (BOOL) wantsToTrackMouseForEvent:(NSEvent *) theEvent inRect:(NSRect) cellFrame ofView:(NSView *) controlView atCharacterIndex:(NSUInteger) charIndex;
```

<a id="Discussion"></a>

## Discussion

`theEvent` is the event in question that occurred in `cellFrame` inside `controlView`. `charIndex` is the index of the attachment character within the text. If [wantsToTrackMouse](wantstotrackmouse%28%29.md) returns [true](https://developer.apple.com/documentation/swift/true), this method allows the attachment to decide whether it wishes to do so for particular events.

## See Also

### Responding to mouse events

- [wantsToTrackMouse](wantstotrackmouse%28%29.md): Returns a Boolean value that indicates whether the attachment handles mouse events occurring over its image.
- [trackMouse:inRect:ofView:untilMouseUp:](trackmouse%28with_in_of_untilmouseup_%29.md): Handles a mouse-down event on the cell’s image, and optionally waits until a mouse-up event
- [trackMouse:inRect:ofView:atCharacterIndex:untilMouseUp:](trackmouse%28with_in_of_atcharacterindex_untilmouseup_%29.md): Handles a mouse-down event on the image at the specified character position.
