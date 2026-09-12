> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplay](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplay)

# PGDisplay (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Protocol  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

An object that provides display functionality to the guest operating system in a way that the host-side virtual machine app can intercept.

## Declaration

```swift
protocol PGDisplay : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The framework emulates hot-plugging to the display. After you create the display object, set the [modeList](pgdisplay/modelist.md) property to a list of modes you want the display to use. The first time you set the mode list, the framework connects the display to the virtualized graphics card. When you release the display object, the device simulates unplugging the display.

## Topics

### Setting Display Modes

- [modeList](pgdisplay/modelist.md): The list of display modes that the virtual display supports.

### Getting the Guest Cursor Position

- [cursorPosition](pgdisplay/cursorposition.md): The current cursor location in the guest environment.

### Handling Frame Updates

- [guestPresentCount](pgdisplay/guestpresentcount.md): The number of frame presents that the guest has generated since object creation.
- [hostPresentCount](pgdisplay/hostpresentcount.md): The number of unique frames that the host has encoded since object creation.
- [minimumTextureUsage](pgdisplay/minimumtextureusage.md): The Metal texture usage flags necessary for any texture that can be a destination for frame data.
- [encodeCurrentFrame(to:texture:region:)](pgdisplay/encodecurrentframe%28to_texture_region_%29.md): Encodes Metal commands to process the current frame and write it to a texture.

### Inspecting Display Properties

- [name](pgdisplay/name.md): The display’s name that you specified at creation time.
- [serialNum](pgdisplay/serialnum.md): The display’s serial number that you specified at creation time.
- [port](pgdisplay/port.md): The display’s accelerator port that you specified at creation time.
- [sizeInMillimeters](pgdisplay/sizeinmillimeters.md): The display’s virtual dimensions, in millimeters, that you specified at creation time.

### Inspecting the Display Handlers

- [queue](pgdisplay/queue.md): The queue that the framework uses when dispatching messages to any of the display’s registered handlers.
- [cursorShowHandler](pgdisplay/cursorshowhandler.md): A handler that the framework calls to change the cursor’s visibility.
- [modeChangeHandler](pgdisplay/modechangehandler.md): A handler that the framework calls to change the virtual display’s graphics mode.
- [newFrameEventHandler](pgdisplay/newframeeventhandler.md): A handler that the framework calls when the guest environment has a new frame to display.

### Instance Properties

- [cursorMoveHandler](pgdisplay/cursormovehandler.md)

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Displays

- [PGDisplayDescriptor](pgdisplaydescriptor.md): A descriptor for a virtual display.
- [PGDisplayMode](pgdisplaymode.md): A description of a supported display mode.
- [PGDisplayCoord_t](pgdisplaycoord_t.md): Coordinates that describe sizes or offsets within a 2D array of pixels.

# PGDisplay (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Protocol  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

An object that provides display functionality to the guest operating system in a way that the host-side virtual machine app can intercept.

## Declaration

```objectivec
@protocol PGDisplay <NSObject>
```

<a id="overview"></a>

## Overview

The framework emulates hot-plugging to the display. After you create the display object, set the [modeList](pgdisplay/modelist.md) property to a list of modes you want the display to use. The first time you set the mode list, the framework connects the display to the virtualized graphics card. When you release the display object, the device simulates unplugging the display.

## Topics

### Setting Display Modes

- [modeList](pgdisplay/modelist.md): The list of display modes that the virtual display supports.

### Getting the Guest Cursor Position

- [cursorPosition](pgdisplay/cursorposition.md): The current cursor location in the guest environment.

### Handling Frame Updates

- [guestPresentCount](pgdisplay/guestpresentcount.md): The number of frame presents that the guest has generated since object creation.
- [hostPresentCount](pgdisplay/hostpresentcount.md): The number of unique frames that the host has encoded since object creation.
- [minimumTextureUsage](pgdisplay/minimumtextureusage.md): The Metal texture usage flags necessary for any texture that can be a destination for frame data.
- [encodeCurrentFrameToCommandBuffer:texture:region:](pgdisplay/encodecurrentframe%28to_texture_region_%29.md): Encodes Metal commands to process the current frame and write it to a texture.

### Inspecting Display Properties

- [name](pgdisplay/name.md): The display’s name that you specified at creation time.
- [serialNum](pgdisplay/serialnum.md): The display’s serial number that you specified at creation time.
- [port](pgdisplay/port.md): The display’s accelerator port that you specified at creation time.
- [sizeInMillimeters](pgdisplay/sizeinmillimeters.md): The display’s virtual dimensions, in millimeters, that you specified at creation time.

### Inspecting the Display Handlers

- [queue](pgdisplay/queue.md): The queue that the framework uses when dispatching messages to any of the display’s registered handlers.
- [cursorGlyphHandler](pgdisplay/cursorglyphhandler.md): A handler that the framework calls to change the cursor’s appearance.
- [cursorShowHandler](pgdisplay/cursorshowhandler.md): A handler that the framework calls to change the cursor’s visibility.
- [modeChangeHandler](pgdisplay/modechangehandler.md): A handler that the framework calls to change the virtual display’s graphics mode.
- [newFrameEventHandler](pgdisplay/newframeeventhandler.md): A handler that the framework calls when the guest environment has a new frame to display.

### Instance Properties

- [cursorMoveHandler](pgdisplay/cursormovehandler.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Displays

- [PGDisplayDescriptor](pgdisplaydescriptor.md): A descriptor for a virtual display.
- [PGDisplayMode](pgdisplaymode.md): A description of a supported display mode.
- [PGDisplayCoord_t](pgdisplaycoord_t.md): Coordinates that describe sizes or offsets within a 2D array of pixels.
