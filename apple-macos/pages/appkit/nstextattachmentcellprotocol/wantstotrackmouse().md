> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextattachmentcellprotocol/wantstotrackmouse()](https://developer.apple.com/documentation/appkit/nstextattachmentcellprotocol/wantstotrackmouse())

# wantsToTrackMouse() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the attachment handles mouse events occurring over its image.

## Declaration

```swift
@MainActor func wantsToTrackMouse() -> Bool
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [true](https://developer.apple.com/documentation/swift/true). The [NSView](../nsview.md) containing the cell should invoke this method before sending a [trackMouse(with:in:of:untilMouseUp:)](trackmouse%28with_in_of_untilmouseup_%29.md) message.

For an attachment in an attributed string, if the attachment cell returns [false](https://developer.apple.com/documentation/swift/false), its attachment character should be selected rather than the cell being asked to track the mouse. This results in the attachment icon behaving as any regular glyph in text.

## See Also

### Responding to mouse events

- [wantsToTrackMouse(for:in:of:atCharacterIndex:)](wantstotrackmouse%28for_in_of_atcharacterindex_%29.md): Allows an attachment to specify the events for which it tracks the mouse.
- [trackMouse(with:in:of:untilMouseUp:)](trackmouse%28with_in_of_untilmouseup_%29.md): Handles a mouse-down event on the cell’s image, and optionally waits until a mouse-up event
- [trackMouse(with:in:of:atCharacterIndex:untilMouseUp:)](trackmouse%28with_in_of_atcharacterindex_untilmouseup_%29.md): Handles a mouse-down event on the image at the specified character position.

# wantsToTrackMouse (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the attachment handles mouse events occurring over its image.

## Declaration

```objectivec
- (BOOL) wantsToTrackMouse;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [true](https://developer.apple.com/documentation/swift/true). The [NSView](../nsview.md) containing the cell should invoke this method before sending a [trackMouse:inRect:ofView:untilMouseUp:](trackmouse%28with_in_of_untilmouseup_%29.md) message.

For an attachment in an attributed string, if the attachment cell returns [false](https://developer.apple.com/documentation/swift/false), its attachment character should be selected rather than the cell being asked to track the mouse. This results in the attachment icon behaving as any regular glyph in text.

## See Also

### Responding to mouse events

- [wantsToTrackMouseForEvent:inRect:ofView:atCharacterIndex:](wantstotrackmouse%28for_in_of_atcharacterindex_%29.md): Allows an attachment to specify the events for which it tracks the mouse.
- [trackMouse:inRect:ofView:untilMouseUp:](trackmouse%28with_in_of_untilmouseup_%29.md): Handles a mouse-down event on the cell’s image, and optionally waits until a mouse-up event
- [trackMouse:inRect:ofView:atCharacterIndex:untilMouseUp:](trackmouse%28with_in_of_atcharacterindex_untilmouseup_%29.md): Handles a mouse-down event on the image at the specified character position.
