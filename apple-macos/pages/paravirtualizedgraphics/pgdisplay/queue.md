> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplay/queue](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplay/queue)

# queue (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The queue that the framework uses when dispatching messages to any of the display’s registered handlers.

## Declaration

```swift
var queue: dispatch_queue_t? { get }
```

## See Also

### Inspecting the Display Handlers

- [cursorShowHandler](cursorshowhandler.md): A handler that the framework calls to change the cursor’s visibility.
- [modeChangeHandler](modechangehandler.md): A handler that the framework calls to change the virtual display’s graphics mode.
- [newFrameEventHandler](newframeeventhandler.md): A handler that the framework calls when the guest environment has a new frame to display.

# queue (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The queue that the framework uses when dispatching messages to any of the display’s registered handlers.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) dispatch_queue_t queue;
```

## See Also

### Inspecting the Display Handlers

- [cursorGlyphHandler](cursorglyphhandler.md): A handler that the framework calls to change the cursor’s appearance.
- [cursorShowHandler](cursorshowhandler.md): A handler that the framework calls to change the cursor’s visibility.
- [modeChangeHandler](modechangehandler.md): A handler that the framework calls to change the virtual display’s graphics mode.
- [newFrameEventHandler](newframeeventhandler.md): A handler that the framework calls when the guest environment has a new frame to display.
