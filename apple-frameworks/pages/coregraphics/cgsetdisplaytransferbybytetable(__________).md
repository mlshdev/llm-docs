> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgsetdisplaytransferbybytetable(_:_:_:_:_:)](https://developer.apple.com/documentation/coregraphics/cgsetdisplaytransferbybytetable(_:_:_:_:_:))

# CGSetDisplayTransferByByteTable(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.0+

Sets the byte values in the 8-bit RGB gamma tables for a display.

## Declaration

```swift
func CGSetDisplayTransferByByteTable(_ display: CGDirectDisplayID, _ tableSize: UInt32, _ redTable: UnsafePointer<UInt8>, _ greenTable: UnsafePointer<UInt8>, _ blueTable: UnsafePointer<UInt8>) -> CGError
```

## Parameters

- `display`: The identifier of the display to be accessed.
- `tableSize`: The number of entries in each table.
- `redTable`: An array of size `tableSize` containing the byte values of the red channel in the display’s gamma table.
- `greenTable`: An array of size `tableSize` containing the byte values of the green channel in the display’s gamma table.
- `blueTable`: An array of size `tableSize` containing the byte values of the blue channel in the display’s gamma table.

<a id="return-value"></a>

## Return Value

A result code. See `Core Graphics Data Types and Constants`.

<a id="Discussion"></a>

## Discussion

The same table may be passed in for the red, green, and blue channels. The tables are interpolated as needed to generate the number of samples required by the graphics hardware.

## See Also

### Functions

- [CGAcquireDisplayFadeReservation(\_:\_:)](cgacquiredisplayfadereservation%28____%29.md): Reserves the fade hardware for a specified time interval.
- [CGAssociateMouseAndMouseCursorPosition(\_:)](cgassociatemouseandmousecursorposition%28__%29.md): Connects or disconnects the mouse and cursor while an application is in the foreground.
- [CGBeginDisplayConfiguration(\_:)](cgbegindisplayconfiguration%28__%29.md): Begins a new set of display configuration changes.
- [CGCancelDisplayConfiguration(\_:)](cgcanceldisplayconfiguration%28__%29.md): Cancels a set of display configuration changes.
- [CGCaptureAllDisplays()](cgcapturealldisplays%28%29.md): Obtains exclusive use of all active displays, preventing other applications and system services from using the display or changing its configuration.
- [CGCaptureAllDisplaysWithOptions(\_:)](cgcapturealldisplayswithoptions%28__%29.md): Captures all attached displays, using the specified options.
- [CGCompleteDisplayConfiguration(\_:\_:)](cgcompletedisplayconfiguration%28____%29.md): Completes a set of display configuration changes.
- [CGConfigureDisplayFadeEffect(\_:\_:\_:\_:\_:\_:)](cgconfiguredisplayfadeeffect%28____________%29.md): Modifies the settings of the built-in fade effect that occurs during a display configuration.
- [CGConfigureDisplayMirrorOfDisplay(\_:\_:\_:)](cgconfiguredisplaymirrorofdisplay%28______%29.md): Changes the configuration of a mirroring set.
- [CGConfigureDisplayMode(\_:\_:\_:)](cgconfiguredisplaymode%28______%29.md): Deprecated. Configures the display mode of a display.
- [CGConfigureDisplayOrigin(\_:\_:\_:\_:)](cgconfiguredisplayorigin%28________%29.md): Configures the origin of a display relative to the global display coordinate space.
- [CGConfigureDisplayStereoOperation(\_:\_:\_:\_:)](cgconfiguredisplaystereooperation%28________%29.md): Enables or disables stereo operation for a display, as part of a display configuration.
- [CGConfigureDisplayWithDisplayMode(\_:\_:\_:\_:)](cgconfiguredisplaywithdisplaymode%28________%29.md): Configures the display mode of a display.
- [CGCursorIsDrawnInFramebuffer()](cgcursorisdrawninframebuffer%28%29.md): Deprecated. Returns a Boolean value indicating whether the mouse cursor is drawn in framebuffer memory.
- [CGCursorIsVisible()](cgcursorisvisible%28%29.md): Deprecated. Returns a Boolean value indicating whether the mouse cursor is visible.

# CGSetDisplayTransferByByteTable (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.0+

Sets the byte values in the 8-bit RGB gamma tables for a display.

## Declaration

```objectivec
extern CGError CGSetDisplayTransferByByteTable(CGDirectDisplayID display, uint32_t tableSize, const uint8_t *redTable, const uint8_t *greenTable, const uint8_t *blueTable);
```

## Parameters

- `display`: The identifier of the display to be accessed.
- `tableSize`: The number of entries in each table.
- `redTable`: An array of size `tableSize` containing the byte values of the red channel in the display’s gamma table.
- `greenTable`: An array of size `tableSize` containing the byte values of the green channel in the display’s gamma table.
- `blueTable`: An array of size `tableSize` containing the byte values of the blue channel in the display’s gamma table.

<a id="return-value"></a>

## Return Value

A result code. See `Core Graphics Data Types and Constants`.

<a id="Discussion"></a>

## Discussion

The same table may be passed in for the red, green, and blue channels. The tables are interpolated as needed to generate the number of samples required by the graphics hardware.

## See Also

### Functions

- [CGAcquireDisplayFadeReservation](cgacquiredisplayfadereservation%28____%29.md): Reserves the fade hardware for a specified time interval.
- [CGAssociateMouseAndMouseCursorPosition](cgassociatemouseandmousecursorposition%28__%29.md): Connects or disconnects the mouse and cursor while an application is in the foreground.
- [CGBeginDisplayConfiguration](cgbegindisplayconfiguration%28__%29.md): Begins a new set of display configuration changes.
- [CGCancelDisplayConfiguration](cgcanceldisplayconfiguration%28__%29.md): Cancels a set of display configuration changes.
- [CGCaptureAllDisplays](cgcapturealldisplays%28%29.md): Obtains exclusive use of all active displays, preventing other applications and system services from using the display or changing its configuration.
- [CGCaptureAllDisplaysWithOptions](cgcapturealldisplayswithoptions%28__%29.md): Captures all attached displays, using the specified options.
- [CGColorConversionInfoCreateFromList](cgcolorconversioninfocreatefromlist.md): Creates a conversion between an arbitrary number of specified color spaces.
- [CGCompleteDisplayConfiguration](cgcompletedisplayconfiguration%28____%29.md): Completes a set of display configuration changes.
- [CGConfigureDisplayFadeEffect](cgconfiguredisplayfadeeffect%28____________%29.md): Modifies the settings of the built-in fade effect that occurs during a display configuration.
- [CGConfigureDisplayMirrorOfDisplay](cgconfiguredisplaymirrorofdisplay%28______%29.md): Changes the configuration of a mirroring set.
- [CGConfigureDisplayMode](cgconfiguredisplaymode%28______%29.md): Deprecated. Configures the display mode of a display.
- [CGConfigureDisplayOrigin](cgconfiguredisplayorigin%28________%29.md): Configures the origin of a display relative to the global display coordinate space.
- [CGConfigureDisplayStereoOperation](cgconfiguredisplaystereooperation%28________%29.md): Enables or disables stereo operation for a display, as part of a display configuration.
- [CGConfigureDisplayWithDisplayMode](cgconfiguredisplaywithdisplaymode%28________%29.md): Configures the display mode of a display.
- [CGContextDrawPDFDocument](cgcontextdrawpdfdocument.md): Deprecated.
