> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgwindowlistcopywindowinfo(_:_:)](https://developer.apple.com/documentation/coregraphics/cgwindowlistcopywindowinfo(_:_:))

# CGWindowListCopyWindowInfo(\_:\_:) (Swift)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Generates and returns information about the selected windows in the current user session.

## Declaration

```swift
func CGWindowListCopyWindowInfo(_ option: CGWindowListOption, _ relativeToWindow: CGWindowID) -> CFArray?
```

## Parameters

- `option`: The options describing which window dictionaries to return. Typical options let you return dictionaries for all windows or for windows above or below the window specified in the `relativeToWindow` parameter. For more information, see [Window List Option Constants](window-list-option-constants.md).
- `relativeToWindow`: The ID of the window to use as a reference point when determining which other window dictionaries to return. For options that do not require a reference window, this parameter can be [kCGNullWindowID](kcgnullwindowid.md).

<a id="return-value"></a>

## Return Value

An array of [CFDictionary](../corefoundation/cfdictionary.md) types, each of which contains information about one of the windows in the current user session. If there are no windows matching the desired criteria, the function returns an empty array. If you call this function from outside of a GUI security session or when no window server is running, this function returns `NULL`.

<a id="Discussion"></a>

## Discussion

You can use this function to get detailed information about the configuration of one or more windows in the current user session. For example, you can use this function to get the bounds of the window, its window ID, and information about how it is managed by the window server. For the list of keys and values that may be present in the dictionary, see [Required Window List Keys](required-window-list-keys.md) and [Optional Window List Keys](optional-window-list-keys.md).

Generating the dictionaries for system windows is a relatively expensive operation. As always, you should profile your code and adjust your usage of this function appropriately for your needs.

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

# CGWindowListCopyWindowInfo (Objective-C)

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

Generates and returns information about the selected windows in the current user session.

## Declaration

```objectivec
extern CFArrayRefCGWindowListCopyWindowInfo(CGWindowListOption option, CGWindowID relativeToWindow);
```

## Parameters

- `option`: The options describing which window dictionaries to return. Typical options let you return dictionaries for all windows or for windows above or below the window specified in the `relativeToWindow` parameter. For more information, see [Window List Option Constants](window-list-option-constants.md).
- `relativeToWindow`: The ID of the window to use as a reference point when determining which other window dictionaries to return. For options that do not require a reference window, this parameter can be [kCGNullWindowID](kcgnullwindowid.md).

<a id="return-value"></a>

## Return Value

An array of [CFDictionaryRef](../corefoundation/cfdictionary.md) types, each of which contains information about one of the windows in the current user session. If there are no windows matching the desired criteria, the function returns an empty array. If you call this function from outside of a GUI security session or when no window server is running, this function returns `NULL`.

<a id="Discussion"></a>

## Discussion

You can use this function to get detailed information about the configuration of one or more windows in the current user session. For example, you can use this function to get the bounds of the window, its window ID, and information about how it is managed by the window server. For the list of keys and values that may be present in the dictionary, see [Required Window List Keys](required-window-list-keys.md) and [Optional Window List Keys](optional-window-list-keys.md).

Generating the dictionaries for system windows is a relatively expensive operation. As always, you should profile your code and adjust your usage of this function appropriately for your needs.

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
