> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgesturerecognizer/touchesended(with:)](https://developer.apple.com/documentation/appkit/nsgesturerecognizer/touchesended(with:))

# touchesEnded(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Called when one or more fingers are removed from contact with an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.

## Declaration

```swift
func touchesEnded(with event: NSEvent)
```

## See Also

### Handling touch and mouse events

- [touchesBegan(with:)](touchesbegan%28with_%29.md): Called when one or more fingers first make contact with an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.
- [touchesCancelled(with:)](touchescancelled%28with_%29.md): Called when a system event, such as a low-memory warning, cancels an in-progress touch event in an [NSTouchBar](../nstouchbar.md) object.
- [touchesMoved(with:)](touchesmoved%28with_%29.md): Called when one or more fingers, associated with an in-progress event, move within an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.
- [mouseCancelled(with:)](mousecancelled%28with_%29.md)

# touchesEndedWithEvent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+

Called when one or more fingers are removed from contact with an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.

## Declaration

```objectivec
- (void) touchesEndedWithEvent:(NSEvent *) event;
```

## See Also

### Handling touch and mouse events

- [touchesBeganWithEvent:](touchesbegan%28with_%29.md): Called when one or more fingers first make contact with an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.
- [touchesCancelledWithEvent:](touchescancelled%28with_%29.md): Called when a system event, such as a low-memory warning, cancels an in-progress touch event in an [NSTouchBar](../nstouchbar.md) object.
- [touchesMovedWithEvent:](touchesmoved%28with_%29.md): Called when one or more fingers, associated with an in-progress event, move within an [NSTouchBar](../nstouchbar.md) instance on the Touch Bar.
- [mouseCancelled:](mousecancelled%28with_%29.md)
