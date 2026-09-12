> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplay/cursorshowhandler](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplay/cursorshowhandler)

# cursorShowHandler (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A handler that the framework calls to change the cursor’s visibility.

## Declaration

```swift
var cursorShowHandler: PGDisplayCursorShowHandler? { get }
```

## See Also

### Inspecting the Display Handlers

- [queue](queue.md): The queue that the framework uses when dispatching messages to any of the display’s registered handlers.
- [modeChangeHandler](modechangehandler.md): A handler that the framework calls to change the virtual display’s graphics mode.
- [newFrameEventHandler](newframeeventhandler.md): A handler that the framework calls when the guest environment has a new frame to display.

# cursorShowHandler (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A handler that the framework calls to change the cursor’s visibility.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) PGDisplayCursorShowHandler cursorShowHandler;
```

## See Also

### Inspecting the Display Handlers

- [queue](queue.md): The queue that the framework uses when dispatching messages to any of the display’s registered handlers.
- [cursorGlyphHandler](cursorglyphhandler.md): A handler that the framework calls to change the cursor’s appearance.
- [modeChangeHandler](modechangehandler.md): A handler that the framework calls to change the virtual display’s graphics mode.
- [newFrameEventHandler](newframeeventhandler.md): A handler that the framework calls when the guest environment has a new frame to display.
