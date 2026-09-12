> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/touchesbegan(with:)](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/touchesbegan(with:))

# touchesBegan(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Called when one or more fingers first make contact with an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.

## Declaration

```swift
func touchesBegan(with event: NSEvent)
```

## See Also

### Handling touch and mouse events

- [touchesCancelled(with:)](touchescancelled%28with_%29.md): Called when a system event, such as a low-memory warning, cancels an in-progress touch event in an [NSTouchBar](../nstouchbar.md) object.
- [touchesEnded(with:)](touchesended%28with_%29.md): Called when one or more fingers are removed from contact with an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.
- [touchesMoved(with:)](touchesmoved%28with_%29.md): Called when one or more fingers, associated with an in-progress event, move within an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.
- [mouseCancelled(with:)](mousecancelled%28with_%29.md)

# touchesBeganWithEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Called when one or more fingers first make contact with an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.

## Declaration

```objectivec
- (void) touchesBeganWithEvent:(NSEvent *) event;
```

## See Also

### Handling touch and mouse events

- [touchesCancelledWithEvent:](touchescancelled%28with_%29.md): Called when a system event, such as a low-memory warning, cancels an in-progress touch event in an [NSTouchBar](../nstouchbar.md) object.
- [touchesEndedWithEvent:](touchesended%28with_%29.md): Called when one or more fingers are removed from contact with an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.
- [touchesMovedWithEvent:](touchesmoved%28with_%29.md): Called when one or more fingers, associated with an in-progress event, move within an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.
- [mouseCancelled:](mousecancelled%28with_%29.md)
