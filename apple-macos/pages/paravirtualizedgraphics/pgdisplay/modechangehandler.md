> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplay/modechangehandler](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplay/modechangehandler)

# modeChangeHandler (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A handler that the framework calls to change the virtual display’s graphics mode.

## Declaration

```swift
var modeChangeHandler: PGDisplayModeChangeHandler? { get }
```

## See Also

### Inspecting the Display Handlers

- [queue](queue.md): The queue that the framework uses when dispatching messages to any of the display’s registered handlers.
- [cursorShowHandler](cursorshowhandler.md): A handler that the framework calls to change the cursor’s visibility.
- [newFrameEventHandler](newframeeventhandler.md): A handler that the framework calls when the guest environment has a new frame to display.

# modeChangeHandler (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A handler that the framework calls to change the virtual display’s graphics mode.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) PGDisplayModeChangeHandler modeChangeHandler;
```

## See Also

### Inspecting the Display Handlers

- [queue](queue.md): The queue that the framework uses when dispatching messages to any of the display’s registered handlers.
- [cursorGlyphHandler](cursorglyphhandler.md): A handler that the framework calls to change the cursor’s appearance.
- [cursorShowHandler](cursorshowhandler.md): A handler that the framework calls to change the cursor’s visibility.
- [newFrameEventHandler](newframeeventhandler.md): A handler that the framework calls when the guest environment has a new frame to display.
