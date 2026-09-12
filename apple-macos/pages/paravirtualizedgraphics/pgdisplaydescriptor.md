> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplaydescriptor](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaydescriptor)

# PGDisplayDescriptor (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A descriptor for a virtual display.

## Declaration

```swift
class PGDisplayDescriptor
```

## Topics

### Specifying the Display Properties

- [name](pgdisplaydescriptor/name.md): The display’s name as seen in the guest operating environment.
- [sizeInMillimeters](pgdisplaydescriptor/sizeinmillimeters.md): The size in millimeters of the virtual display.

### Setting the Dispatch Queue

- [queue](pgdisplaydescriptor/queue.md): The queue that the framework uses when dispatching messages to any of the display’s registered handlers.

### Managing Cursor Events

- [cursorShowHandler](pgdisplaydescriptor/cursorshowhandler.md): A handler that the framework calls to change the cursor’s visibility.
- [PGDisplayCursorShowHandler](pgdisplaycursorshowhandler.md): The block signature for a routine that handles changes to the cursor’s visibility.

### Handling Mode Changes

- [modeChangeHandler](pgdisplaydescriptor/modechangehandler.md): A handler that the framework calls to change the virtual display’s graphics mode.
- [PGDisplayModeChangeHandler](pgdisplaymodechangehandler.md): The block signature for a routine that handles changes to the display’s graphics mode.

### Handling Frame Events

- [newFrameEventHandler](pgdisplaydescriptor/newframeeventhandler.md): A handler that the framework calls when the guest environment has a new frame to display.
- [PGDisplayNewFrameEventHandler](pgdisplaynewframeeventhandler.md): The block signature for a routine that handles frame updates from the guest.

### Instance Properties

- [cursorMoveHandler](pgdisplaydescriptor/cursormovehandler.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Displays

- [PGDisplay](pgdisplay.md): An object that provides display functionality to the guest operating system in a way that the host-side virtual machine app can intercept.
- [PGDisplayMode](pgdisplaymode.md): A description of a supported display mode.
- [PGDisplayCoord_t](pgdisplaycoord_t.md): Coordinates that describe sizes or offsets within a 2D array of pixels.

# PGDisplayDescriptor (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A descriptor for a virtual display.

## Declaration

```objectivec
@interface PGDisplayDescriptor : NSObject
```

## Topics

### Specifying the Display Properties

- [name](pgdisplaydescriptor/name.md): The display’s name as seen in the guest operating environment.
- [sizeInMillimeters](pgdisplaydescriptor/sizeinmillimeters.md): The size in millimeters of the virtual display.

### Setting the Dispatch Queue

- [queue](pgdisplaydescriptor/queue.md): The queue that the framework uses when dispatching messages to any of the display’s registered handlers.

### Managing Cursor Events

- [cursorGlyphHandler](pgdisplaydescriptor/cursorglyphhandler.md): A handler that the framework calls to change the cursor’s appearance.
- [cursorShowHandler](pgdisplaydescriptor/cursorshowhandler.md): A handler that the framework calls to change the cursor’s visibility.
- [PGDisplayCursorGlyphHandler](pgdisplaycursorglyphhandler.md): The block signature for a routine that handles changes to the cursor’s appearance.
- [PGDisplayCursorShowHandler](pgdisplaycursorshowhandler.md): The block signature for a routine that handles changes to the cursor’s visibility.

### Handling Mode Changes

- [modeChangeHandler](pgdisplaydescriptor/modechangehandler.md): A handler that the framework calls to change the virtual display’s graphics mode.
- [PGDisplayModeChangeHandler](pgdisplaymodechangehandler.md): The block signature for a routine that handles changes to the display’s graphics mode.

### Handling Frame Events

- [newFrameEventHandler](pgdisplaydescriptor/newframeeventhandler.md): A handler that the framework calls when the guest environment has a new frame to display.
- [PGDisplayNewFrameEventHandler](pgdisplaynewframeeventhandler.md): The block signature for a routine that handles frame updates from the guest.

### Instance Properties

- [cursorMoveHandler](pgdisplaydescriptor/cursormovehandler.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Displays

- [PGDisplay](pgdisplay.md): An object that provides display functionality to the guest operating system in a way that the host-side virtual machine app can intercept.
- [PGDisplayMode](pgdisplaymode.md): A description of a supported display mode.
- [PGDisplayCoord_t](pgdisplaycoord_t.md): Coordinates that describe sizes or offsets within a 2D array of pixels.
