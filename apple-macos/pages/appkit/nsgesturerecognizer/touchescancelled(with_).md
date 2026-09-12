> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/touchescancelled(with:)](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/touchescancelled(with:))

# touchesCancelled(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Called when a system event, such as a low-memory warning, cancels an in-progress touch event in an [NSTouchBar](../nstouchbar.md) object.

## Declaration

```swift
func touchesCancelled(with event: NSEvent)
```

## See Also

### Handling touch and mouse events

- [touchesBegan(with:)](touchesbegan%28with_%29.md): Called when one or more fingers first make contact with an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.
- [touchesEnded(with:)](touchesended%28with_%29.md): Called when one or more fingers are removed from contact with an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.
- [touchesMoved(with:)](touchesmoved%28with_%29.md): Called when one or more fingers, associated with an in-progress event, move within an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.
- [mouseCancelled(with:)](mousecancelled%28with_%29.md)

# touchesCancelledWithEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Called when a system event, such as a low-memory warning, cancels an in-progress touch event in an [NSTouchBar](../nstouchbar.md) object.

## Declaration

```objectivec
- (void) touchesCancelledWithEvent:(NSEvent *) event;
```

## See Also

### Handling touch and mouse events

- [touchesBeganWithEvent:](touchesbegan%28with_%29.md): Called when one or more fingers first make contact with an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.
- [touchesEndedWithEvent:](touchesended%28with_%29.md): Called when one or more fingers are removed from contact with an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.
- [touchesMovedWithEvent:](touchesmoved%28with_%29.md): Called when one or more fingers, associated with an in-progress event, move within an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.
- [mouseCancelled:](mousecancelled%28with_%29.md)
