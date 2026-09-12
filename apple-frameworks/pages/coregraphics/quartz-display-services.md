> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/quartz-display-services](https://developer.apple.com/documentation/coregraphics/quartz-display-services)

# Quartz Display Services (Swift)

**Framework:** Core Graphics  
**Kind:** API Collection

Provides direct access to features in the macOS window server for configuring and controlling display hardware.

<a id="overview"></a>

## Overview

You can use Quartz Display Services to:

- Examine and change display mode properties such as width, height, and pixel depth
- Configure a set of displays in a single operation
- Capture one or more displays for exclusive use
- Stream the contents of a display
- Perform fade effects
- Activate display mirroring
- Configure gamma color correction tables
- Receive notification of screen update operations

## Topics

### Finding Displays

- [CGMainDisplayID()](cgmaindisplayid%28%29.md): Returns the display ID of the main display.
- [CGGetOnlineDisplayList(\_:\_:\_:)](cggetonlinedisplaylist%28______%29.md): Provides a list of displays that are online (active, mirrored, or sleeping).
- [CGGetActiveDisplayList(\_:\_:\_:)](cggetactivedisplaylist%28______%29.md): Provides a list of displays that are active for drawing.
- [CGGetDisplaysWithOpenGLDisplayMask(\_:\_:\_:\_:)](cggetdisplayswithopengldisplaymask%28________%29.md): Provides a list of displays that corresponds to the bits set in an OpenGL display mask.
- [CGGetDisplaysWithPoint(\_:\_:\_:\_:)](cggetdisplayswithpoint%28________%29.md): Provides a list of online displays with bounds that include the specified point.
- [CGGetDisplaysWithRect(\_:\_:\_:\_:)](cggetdisplayswithrect%28________%29.md): Gets a list of online displays with bounds that intersect the specified rectangle.
- [CGOpenGLDisplayMaskToDisplayID(\_:)](cgopengldisplaymasktodisplayid%28__%29.md): Maps an OpenGL display mask to a display ID.
- [CGDisplayIDToOpenGLDisplayMask(\_:)](cgdisplayidtoopengldisplaymask%28__%29.md): Maps a display ID to an OpenGL display mask.

### Capturing and Releasing Displays

- [CGDisplayCapture(\_:)](cgdisplaycapture%28__%29.md): Obtains exclusive use of a display, preventing other applications and system services from using the display or changing its configuration.
- [CGDisplayCaptureWithOptions(\_:\_:)](cgdisplaycapturewithoptions%28____%29.md): Obtains exclusive use of a display for an application using the options you specify.
- [CGDisplayRelease(\_:)](cgdisplayrelease%28__%29.md): Releases a captured display.
- [CGDisplayIsCaptured(\_:)](cgdisplayiscaptured%28__%29.md): Deprecated. Returns a Boolean value indicating whether a display is captured.
- [CGCaptureAllDisplays()](cgcapturealldisplays%28%29.md): Obtains exclusive use of all active displays, preventing other applications and system services from using the display or changing its configuration.
- [CGCaptureAllDisplaysWithOptions(\_:)](cgcapturealldisplayswithoptions%28__%29.md): Captures all attached displays, using the specified options.
- [CGReleaseAllDisplays()](cgreleasealldisplays%28%29.md): Releases all captured displays.
- [CGShieldingWindowID(\_:)](cgshieldingwindowid%28__%29.md): Returns the window ID of the shield window for a captured display.
- [CGShieldingWindowLevel()](cgshieldingwindowlevel%28%29.md): Returns the window level of the shield window for a captured display.
- [CGDisplayGetDrawingContext(\_:)](cgdisplaygetdrawingcontext%28__%29.md): Returns a graphics context suitable for drawing to a captured display.

### Configuring Displays

- [CGBeginDisplayConfiguration(\_:)](cgbegindisplayconfiguration%28__%29.md): Begins a new set of display configuration changes.
- [CGCancelDisplayConfiguration(\_:)](cgcanceldisplayconfiguration%28__%29.md): Cancels a set of display configuration changes.
- [CGCompleteDisplayConfiguration(\_:\_:)](cgcompletedisplayconfiguration%28____%29.md): Completes a set of display configuration changes.
- [CGConfigureDisplayMirrorOfDisplay(\_:\_:\_:)](cgconfiguredisplaymirrorofdisplay%28______%29.md): Changes the configuration of a mirroring set.
- [CGConfigureDisplayMode(\_:\_:\_:)](cgconfiguredisplaymode%28______%29.md): Deprecated. Configures the display mode of a display.
- [CGConfigureDisplayOrigin(\_:\_:\_:\_:)](cgconfiguredisplayorigin%28________%29.md): Configures the origin of a display relative to the global display coordinate space.
- [CGRestorePermanentDisplayConfiguration()](cgrestorepermanentdisplayconfiguration%28%29.md): Restores the permanent display configuration settings for the current user.
- [CGConfigureDisplayStereoOperation(\_:\_:\_:\_:)](cgconfiguredisplaystereooperation%28________%29.md): Enables or disables stereo operation for a display, as part of a display configuration.
- [CGDisplaySetStereoOperation(\_:\_:\_:\_:)](cgdisplaysetstereooperation%28________%29.md): Immediately enables or disables stereo operation for a display.
- [CGConfigureDisplayWithDisplayMode(\_:\_:\_:\_:)](cgconfiguredisplaywithdisplaymode%28________%29.md): Configures the display mode of a display.

### Getting the Display Configuration

- [CGDisplayCopyColorSpace(\_:)](cgdisplaycopycolorspace%28__%29.md): Returns the color space for a display.
- [CGDisplayIOServicePort(\_:)](cgdisplayioserviceport%28__%29.md): Deprecated. Returns the I/O Kit service port of the specified display.
- [CGDisplayIsActive(\_:)](cgdisplayisactive%28__%29.md): Returns a Boolean value indicating whether a display is active.
- [CGDisplayIsAlwaysInMirrorSet(\_:)](cgdisplayisalwaysinmirrorset%28__%29.md): Returns a Boolean value indicating whether a display is always in a mirroring set.
- [CGDisplayIsAsleep(\_:)](cgdisplayisasleep%28__%29.md): Returns a Boolean value indicating whether a display is sleeping (and is therefore not drawable).
- [CGDisplayIsBuiltin(\_:)](cgdisplayisbuiltin%28__%29.md): Returns a Boolean value indicating whether a display is built-in, such as the internal display in portable systems.
- [CGDisplayIsInHWMirrorSet(\_:)](cgdisplayisinhwmirrorset%28__%29.md): Returns a Boolean value indicating whether a display is in a hardware mirroring set.
- [CGDisplayIsInMirrorSet(\_:)](cgdisplayisinmirrorset%28__%29.md): Returns a Boolean value indicating whether a display is in a mirroring set.
- [CGDisplayIsMain(\_:)](cgdisplayismain%28__%29.md): Returns a Boolean value indicating whether a display is the main display.
- [CGDisplayIsOnline(\_:)](cgdisplayisonline%28__%29.md): Returns a Boolean value indicating whether a display is connected or online.
- [CGDisplayIsStereo(\_:)](cgdisplayisstereo%28__%29.md): Returns a Boolean value indicating whether a display is running in a stereo graphics mode.
- [CGDisplayMirrorsDisplay(\_:)](cgdisplaymirrorsdisplay%28__%29.md): For a secondary display in a mirroring set, returns the primary display.
- [CGDisplayModelNumber(\_:)](cgdisplaymodelnumber%28__%29.md): Returns the model number of a display monitor.
- [CGDisplayPrimaryDisplay(\_:)](cgdisplayprimarydisplay%28__%29.md): Returns the primary display in a hardware mirroring set.
- [CGDisplayRotation(\_:)](cgdisplayrotation%28__%29.md): Returns the rotation angle of a display in degrees.
- [CGDisplayScreenSize(\_:)](cgdisplayscreensize%28__%29.md): Returns the width and height of a display in millimeters.
- [CGDisplaySerialNumber(\_:)](cgdisplayserialnumber%28__%29.md): Returns the serial number of a display monitor.
- [CGDisplayUnitNumber(\_:)](cgdisplayunitnumber%28__%29.md): Returns the logical unit number of a display.
- [CGDisplayUsesOpenGLAcceleration(\_:)](cgdisplayusesopenglacceleration%28__%29.md): Returns a Boolean value indicating whether Quartz is using OpenGL-based window acceleration (Quartz Extreme) to render in a display.
- [CGDisplayVendorNumber(\_:)](cgdisplayvendornumber%28__%29.md): Returns the vendor number of the specified display’s monitor.

### Registering for Notification of Display Configuration Changes

These functions are used to register and unregister a callback function for notification of display configuration changes.

- [CGDisplayRegisterReconfigurationCallback(\_:\_:)](cgdisplayregisterreconfigurationcallback%28____%29.md): Registers a callback function to be invoked whenever a local display is reconfigured.
- [CGDisplayRemoveReconfigurationCallback(\_:\_:)](cgdisplayremovereconfigurationcallback%28____%29.md): Removes the registration of a callback function that’s invoked whenever a local display is reconfigured.

### Retrieving Display Parameters

- [CGDisplayBounds(\_:)](cgdisplaybounds%28__%29.md): Returns the bounds of a display in the global display coordinate space.
- [CGDisplayPixelsHigh(\_:)](cgdisplaypixelshigh%28__%29.md): Returns the display height in pixel units.
- [CGDisplayPixelsWide(\_:)](cgdisplaypixelswide%28__%29.md): Returns the display width in pixel units.

### Creating and Managing Display Modes

- [CGDisplayAvailableModes(\_:)](cgdisplayavailablemodes%28__%29.md): Deprecated. Returns information about the currently available display modes.
- [CGDisplayBestModeForParameters(\_:\_:\_:\_:\_:)](cgdisplaybestmodeforparameters%28__________%29.md): Deprecated. Returns information about the display mode closest to a specified depth and screen size.
- [CGDisplayBestModeForParametersAndRefreshRate(\_:\_:\_:\_:\_:\_:)](cgdisplaybestmodeforparametersandrefreshrate%28____________%29.md): Deprecated. Returns information about the display mode closest to a specified depth, screen size, and refresh rate.
- [CGDisplayCurrentMode(\_:)](cgdisplaycurrentmode%28__%29.md): Deprecated. Returns information about the current display mode.
- [CGDisplaySwitchToMode(\_:\_:)](cgdisplayswitchtomode%28____%29.md): Deprecated. Switches a display to a different mode.
- [CGDisplayCopyDisplayMode(\_:)](cgdisplaycopydisplaymode%28__%29.md): Returns information about a display’s current configuration.
- [CGDisplayCopyAllDisplayModes(\_:\_:)](cgdisplaycopyalldisplaymodes%28____%29.md): Returns information about the currently available display modes.
- [CGDisplaySetDisplayMode(\_:\_:\_:)](cgdisplaysetdisplaymode%28______%29.md): Switches a display to a different mode.

### Getting Information About a Display Mode

- [width](cgdisplaymode/width.md): Returns the width of the specified display mode.
- [height](cgdisplaymode/height.md): Returns the height of the specified display mode.
- [pixelEncoding](cgdisplaymode/pixelencoding.md): Deprecated. Returns the pixel encoding of the specified display mode.
- [refreshRate](cgdisplaymode/refreshrate.md): Returns the refresh rate of the specified display mode.
- [ioFlags](cgdisplaymode/ioflags.md): Returns the I/O Kit flags of the specified display mode.
- [ioDisplayModeID](cgdisplaymode/iodisplaymodeid.md): Returns the I/O Kit display mode ID of the specified display mode.
- [isUsableForDesktopGUI()](cgdisplaymode/isusablefordesktopgui%28%29.md): Returns a Boolean value indicating whether the specified display mode is usable for a desktop graphical user interface.
- [typeID](cgdisplaymode/typeid.md): Returns the type identifier of Quartz display modes.

### Adjusting the Display Gamma

- [CGSetDisplayTransferByFormula(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cgsetdisplaytransferbyformula%28____________________%29.md): Sets the gamma function for a display by specifying the coefficients of the gamma transfer formula.
- [CGGetDisplayTransferByFormula(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](cggetdisplaytransferbyformula%28____________________%29.md): Gets the coefficients of the gamma transfer formula for a display.
- [CGSetDisplayTransferByTable(\_:\_:\_:\_:\_:)](cgsetdisplaytransferbytable%28__________%29.md): Sets the color gamma function for a display by specifying the values in the RGB gamma tables.
- [CGGetDisplayTransferByTable(\_:\_:\_:\_:\_:\_:)](cggetdisplaytransferbytable%28____________%29.md): Gets the values in the RGB gamma tables for a display.
- [CGSetDisplayTransferByByteTable(\_:\_:\_:\_:\_:)](cgsetdisplaytransferbybytetable%28__________%29.md): Sets the byte values in the 8-bit RGB gamma tables for a display.
- [CGDisplayRestoreColorSyncSettings()](cgdisplayrestorecolorsyncsettings%28%29.md): Restores the gamma tables to the values in the user’s ColorSync display profile.
- [CGDisplayGammaTableCapacity(\_:)](cgdisplaygammatablecapacity%28__%29.md): Returns the capacity, or number of entries, in the gamma table for a display.

### Display Fade Effects

- [CGConfigureDisplayFadeEffect(\_:\_:\_:\_:\_:\_:)](cgconfiguredisplayfadeeffect%28____________%29.md): Modifies the settings of the built-in fade effect that occurs during a display configuration.
- [CGAcquireDisplayFadeReservation(\_:\_:)](cgacquiredisplayfadereservation%28____%29.md): Reserves the fade hardware for a specified time interval.
- [CGDisplayFade(\_:\_:\_:\_:\_:\_:\_:\_:)](cgdisplayfade%28________________%29.md): Performs a single fade operation.
- [CGDisplayFadeOperationInProgress()](cgdisplayfadeoperationinprogress%28%29.md): Deprecated. Returns a Boolean value indicating whether a fade operation is currently in progress.
- [CGReleaseDisplayFadeReservation(\_:)](cgreleasedisplayfadereservation%28__%29.md): Releases a display fade reservation, and unfades the display if needed.

### Controlling the Mouse Cursor

- [CGDisplayHideCursor(\_:)](cgdisplayhidecursor%28__%29.md): Hides the mouse cursor, and increments the hide cursor count.
- [CGDisplayShowCursor(\_:)](cgdisplayshowcursor%28__%29.md): Decrements the hide cursor count, and shows the mouse cursor if the count is `0`.
- [CGDisplayMoveCursorToPoint(\_:\_:)](cgdisplaymovecursortopoint%28____%29.md): Moves the mouse cursor to a specified point relative to the upper-left corner of the display.
- [CGCursorIsVisible()](cgcursorisvisible%28%29.md): Deprecated. Returns a Boolean value indicating whether the mouse cursor is visible.
- [CGCursorIsDrawnInFramebuffer()](cgcursorisdrawninframebuffer%28%29.md): Deprecated. Returns a Boolean value indicating whether the mouse cursor is drawn in framebuffer memory.
- [CGAssociateMouseAndMouseCursorPosition(\_:)](cgassociatemouseandmousecursorposition%28__%29.md): Connects or disconnects the mouse and cursor while an application is in the foreground.
- [CGWarpMouseCursorPosition(\_:)](cgwarpmousecursorposition%28__%29.md): Moves the mouse cursor without generating events.
- [CGGetLastMouseDelta()](cggetlastmousedelta%28%29.md): Reports the change in mouse position since the last mouse movement event received by the application.

### Getting Window Server Information

- [CGSessionCopyCurrentDictionary()](cgsessioncopycurrentdictionary%28%29.md): Returns information about the caller’s window server session.
- [CGWindowServerCFMachPort()](cgwindowservercfmachport%28%29.md): Deprecated. Returns a Core Foundation Mach port (CFMachPort) that corresponds to the macOS window server.
- [CGWindowLevelForKey(\_:)](cgwindowlevelforkey%28__%29.md): Returns the window level that corresponds to one of the standard window types.

### Getting Information About Refresh and Move Operations

You can use these functions to find out what areas on local displays are changing their appearance as the result of operations such as drawing, window movement or scrolling, and display reconfiguration.

- [CGRegisterScreenRefreshCallback(\_:\_:)](cgregisterscreenrefreshcallback%28____%29.md): Deprecated. Registers a callback function to be invoked when local displays are refreshed or modified.
- [CGUnregisterScreenRefreshCallback(\_:\_:)](cgunregisterscreenrefreshcallback%28____%29.md): Deprecated. Removes a previously registered callback function invoked when local displays are refreshed or modified.
- [CGWaitForScreenRefreshRects(\_:\_:)](cgwaitforscreenrefreshrects%28____%29.md): Deprecated. Waits for screen refresh operations.
- [CGScreenRegisterMoveCallback(\_:\_:)](cgscreenregistermovecallback%28____%29.md): Deprecated. Registers a callback function to be invoked when an area of the display is moved.
- [CGScreenUnregisterMoveCallback(\_:\_:)](cgscreenunregistermovecallback%28____%29.md): Deprecated. Removes a previously registered callback function invoked when an area of the display is moved.
- [CGWaitForScreenUpdateRects(\_:\_:\_:\_:\_:)](cgwaitforscreenupdaterects%28__________%29.md): Deprecated. Waits for screen update operations.
- [CGReleaseScreenRefreshRects(\_:)](cgreleasescreenrefreshrects%28__%29.md): Deprecated. Deallocates a list of rectangles that represent changed areas on local displays.

### Callbacks

- [CGDisplayReconfigurationCallBack](cgdisplayreconfigurationcallback.md): A client-supplied callback function that’s invoked whenever the configuration of a local display is changed.
- [CGScreenRefreshCallback](cgscreenrefreshcallback.md): A client-supplied callback function that’s invoked when an area of the display is modified or refreshed.
- [CGScreenUpdateMoveCallback](cgscreenupdatemovecallback.md): A client-supplied callback function invoked when an area of the display is moved.

### Data Types

- [CGDirectDisplayID](cgdirectdisplayid.md): A unique identifier for an attached display.
- [CGDisplayBlendFraction](cgdisplayblendfraction.md): The percentage of blend color used in a fade operation.
- [CGDisplayConfigRef](cgdisplayconfigref.md): A reference to a display configuration transaction.
- [CGDisplayCount](cgdisplaycount.md): Deprecated. The number of displays in various lists.
- [CGDisplayErr](cgdisplayerr.md): Deprecated. A uniform type for result codes returned by functions in Quartz Display Services.
- [CGDisplayFadeInterval](cgdisplayfadeinterval.md): The duration in seconds of a fade operation or a fade hardware reservation.
- [CGDisplayFadeReservationToken](cgdisplayfadereservationtoken.md): A token issued by Quartz when reserving one or more displays for a fade operation during a specified interval.
- [CGDisplayMode](cgdisplaymode.md): A reference to a display mode object.
- [CGDisplayReservationInterval](cgdisplayreservationinterval.md): The time interval for a fade reservation.
- [CGGammaValue](cggammavalue.md): A value used to map a color generated in software to a color supported by the display hardware.
- [CGOpenGLDisplayMask](cgopengldisplaymask.md): A bitmask used in OpenGL to specify a set of attached displays.
- [CGRectCount](cgrectcount.md): The size of an array of Quartz rectangles.
- [CGRefreshRate](cgrefreshrate.md): A display’s refresh rate in frames per second.
- [CGScreenUpdateMoveDelta](cgscreenupdatemovedelta.md): The distance, in pixel units, that an onscreen region moves.
- [CGWindowLevel](cgwindowlevel.md): A level assigned to a window by an application framework.
- [CGDisplayStream](cgdisplaystream.md): A reference to a display stream object.
- [CGDisplayStreamUpdate](cgdisplaystreamupdate.md): A reference to frame update’s metadata.
- [CGDisplayStreamFrameAvailableHandler](cgdisplaystreamframeavailablehandler.md): A block called when a data stream has a new frame event to process.

### Constants

- [CGCaptureOptions](cgcaptureoptions.md): Configuration parameters that are used when capturing displays.
- [CGDisplayChangeSummaryFlags](cgdisplaychangesummaryflags.md): The configuration parameters that are passed to a display reconfiguration callback function.
- [CGConfigureOption](cgconfigureoption.md): The scope of the changes in a display configuration transaction.
- [Display Fade Blend Fractions](display-fade-blend-fractions.md): The lower and upper bounds for blend color fractions during a display fade operation.
- [Display Fade Constants](display-fade-constants.md): Values relating to fade operations.
- [Display ID Defaults](display-id-defaults.md): Default values for a display ID.
- [Display Mode Standard Properties](display-mode-standard-properties.md): Keys for the standard properties in a display mode dictionary.
- [Display Mode Optional Properties](display-mode-optional-properties.md): Keys for optional properties in a display mode dictionary.
- [Reserved Window Levels](reserved-window-levels.md): Window level constants.
- [CGScreenUpdateOperation](cgscreenupdateoperation.md): Types of screen-update operations.
- [CGWindowLevelKey](cgwindowlevelkey.md): Keys that represent the standard window levels in macOS. Quartz includes these keys to support application frameworks like Cocoa. Applications do not need to use them directly.
- [Window Server Session Properties](window-server-session-properties.md): The keys for the standard properties in a window server session dictionary.
- [CGDisplayStreamUpdateRectType](cgdisplaystreamupdaterecttype.md): Use these constants to determine which rectangles your app is interested in.
- [CGDisplayStreamFrameStatus](cgdisplaystreamframestatus.md): Describes a frame update event.
- [Display Stream Optional Property Keys](display-stream-optional-property-keys.md): These keys are used to populate the `properties` dictionary used when creating a new display stream.
- [Display Stream YCbCr to RGB conversion Matrix Options](display-stream-ycbcr-to-rgb-conversion-matrix-options.md): These strings are used to specify a matrix for the `CGDisplayStream/yCbCrMatrix` option.

## See Also

### Related Documentation

- [Quartz Display Services Programming Topics](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/QuartzDisplayServicesConceptual/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004316)

### Services

- [Quartz Event Services](quartz-event-services.md): Provides features for managing *event taps*—filters for observing and altering the stream of low-level user input events in macOS.
- [Quartz Window Services](quartz-window-services.md): Provides information about the windows managed by the macOS window server.

# Quartz Display Services (Objective-C)

**Framework:** Core Graphics  
**Kind:** API Collection

Provides direct access to features in the macOS window server for configuring and controlling display hardware.

<a id="overview"></a>

## Overview

You can use Quartz Display Services to:

- Examine and change display mode properties such as width, height, and pixel depth
- Configure a set of displays in a single operation
- Capture one or more displays for exclusive use
- Stream the contents of a display
- Perform fade effects
- Activate display mirroring
- Configure gamma color correction tables
- Receive notification of screen update operations

## Topics

### Finding Displays

- [CGMainDisplayID](cgmaindisplayid%28%29.md): Returns the display ID of the main display.
- [CGGetOnlineDisplayList](cggetonlinedisplaylist%28______%29.md): Provides a list of displays that are online (active, mirrored, or sleeping).
- [CGGetActiveDisplayList](cggetactivedisplaylist%28______%29.md): Provides a list of displays that are active for drawing.
- [CGGetDisplaysWithOpenGLDisplayMask](cggetdisplayswithopengldisplaymask%28________%29.md): Provides a list of displays that corresponds to the bits set in an OpenGL display mask.
- [CGGetDisplaysWithPoint](cggetdisplayswithpoint%28________%29.md): Provides a list of online displays with bounds that include the specified point.
- [CGGetDisplaysWithRect](cggetdisplayswithrect%28________%29.md): Gets a list of online displays with bounds that intersect the specified rectangle.
- [CGOpenGLDisplayMaskToDisplayID](cgopengldisplaymasktodisplayid%28__%29.md): Maps an OpenGL display mask to a display ID.
- [CGDisplayIDToOpenGLDisplayMask](cgdisplayidtoopengldisplaymask%28__%29.md): Maps a display ID to an OpenGL display mask.

### Capturing and Releasing Displays

- [CGDisplayCapture](cgdisplaycapture%28__%29.md): Obtains exclusive use of a display, preventing other applications and system services from using the display or changing its configuration.
- [CGDisplayCaptureWithOptions](cgdisplaycapturewithoptions%28____%29.md): Obtains exclusive use of a display for an application using the options you specify.
- [CGDisplayRelease](cgdisplayrelease%28__%29.md): Releases a captured display.
- [CGDisplayIsCaptured](cgdisplayiscaptured%28__%29.md): Deprecated. Returns a Boolean value indicating whether a display is captured.
- [CGCaptureAllDisplays](cgcapturealldisplays%28%29.md): Obtains exclusive use of all active displays, preventing other applications and system services from using the display or changing its configuration.
- [CGCaptureAllDisplaysWithOptions](cgcapturealldisplayswithoptions%28__%29.md): Captures all attached displays, using the specified options.
- [CGReleaseAllDisplays](cgreleasealldisplays%28%29.md): Releases all captured displays.
- [CGShieldingWindowID](cgshieldingwindowid%28__%29.md): Returns the window ID of the shield window for a captured display.
- [CGShieldingWindowLevel](cgshieldingwindowlevel%28%29.md): Returns the window level of the shield window for a captured display.
- [CGDisplayGetDrawingContext](cgdisplaygetdrawingcontext%28__%29.md): Returns a graphics context suitable for drawing to a captured display.

### Configuring Displays

- [CGBeginDisplayConfiguration](cgbegindisplayconfiguration%28__%29.md): Begins a new set of display configuration changes.
- [CGCancelDisplayConfiguration](cgcanceldisplayconfiguration%28__%29.md): Cancels a set of display configuration changes.
- [CGCompleteDisplayConfiguration](cgcompletedisplayconfiguration%28____%29.md): Completes a set of display configuration changes.
- [CGConfigureDisplayMirrorOfDisplay](cgconfiguredisplaymirrorofdisplay%28______%29.md): Changes the configuration of a mirroring set.
- [CGConfigureDisplayMode](cgconfiguredisplaymode%28______%29.md): Deprecated. Configures the display mode of a display.
- [CGConfigureDisplayOrigin](cgconfiguredisplayorigin%28________%29.md): Configures the origin of a display relative to the global display coordinate space.
- [CGRestorePermanentDisplayConfiguration](cgrestorepermanentdisplayconfiguration%28%29.md): Restores the permanent display configuration settings for the current user.
- [CGConfigureDisplayStereoOperation](cgconfiguredisplaystereooperation%28________%29.md): Enables or disables stereo operation for a display, as part of a display configuration.
- [CGDisplaySetStereoOperation](cgdisplaysetstereooperation%28________%29.md): Immediately enables or disables stereo operation for a display.
- [CGConfigureDisplayWithDisplayMode](cgconfiguredisplaywithdisplaymode%28________%29.md): Configures the display mode of a display.

### Getting the Display Configuration

- [CGDisplayCopyColorSpace](cgdisplaycopycolorspace%28__%29.md): Returns the color space for a display.
- [CGDisplayIOServicePort](cgdisplayioserviceport%28__%29.md): Deprecated. Returns the I/O Kit service port of the specified display.
- [CGDisplayIsActive](cgdisplayisactive%28__%29.md): Returns a Boolean value indicating whether a display is active.
- [CGDisplayIsAlwaysInMirrorSet](cgdisplayisalwaysinmirrorset%28__%29.md): Returns a Boolean value indicating whether a display is always in a mirroring set.
- [CGDisplayIsAsleep](cgdisplayisasleep%28__%29.md): Returns a Boolean value indicating whether a display is sleeping (and is therefore not drawable).
- [CGDisplayIsBuiltin](cgdisplayisbuiltin%28__%29.md): Returns a Boolean value indicating whether a display is built-in, such as the internal display in portable systems.
- [CGDisplayIsInHWMirrorSet](cgdisplayisinhwmirrorset%28__%29.md): Returns a Boolean value indicating whether a display is in a hardware mirroring set.
- [CGDisplayIsInMirrorSet](cgdisplayisinmirrorset%28__%29.md): Returns a Boolean value indicating whether a display is in a mirroring set.
- [CGDisplayIsMain](cgdisplayismain%28__%29.md): Returns a Boolean value indicating whether a display is the main display.
- [CGDisplayIsOnline](cgdisplayisonline%28__%29.md): Returns a Boolean value indicating whether a display is connected or online.
- [CGDisplayIsStereo](cgdisplayisstereo%28__%29.md): Returns a Boolean value indicating whether a display is running in a stereo graphics mode.
- [CGDisplayMirrorsDisplay](cgdisplaymirrorsdisplay%28__%29.md): For a secondary display in a mirroring set, returns the primary display.
- [CGDisplayModelNumber](cgdisplaymodelnumber%28__%29.md): Returns the model number of a display monitor.
- [CGDisplayPrimaryDisplay](cgdisplayprimarydisplay%28__%29.md): Returns the primary display in a hardware mirroring set.
- [CGDisplayRotation](cgdisplayrotation%28__%29.md): Returns the rotation angle of a display in degrees.
- [CGDisplayScreenSize](cgdisplayscreensize%28__%29.md): Returns the width and height of a display in millimeters.
- [CGDisplaySerialNumber](cgdisplayserialnumber%28__%29.md): Returns the serial number of a display monitor.
- [CGDisplayUnitNumber](cgdisplayunitnumber%28__%29.md): Returns the logical unit number of a display.
- [CGDisplayUsesOpenGLAcceleration](cgdisplayusesopenglacceleration%28__%29.md): Returns a Boolean value indicating whether Quartz is using OpenGL-based window acceleration (Quartz Extreme) to render in a display.
- [CGDisplayVendorNumber](cgdisplayvendornumber%28__%29.md): Returns the vendor number of the specified display’s monitor.

### Registering for Notification of Display Configuration Changes

These functions are used to register and unregister a callback function for notification of display configuration changes.

- [CGDisplayRegisterReconfigurationCallback](cgdisplayregisterreconfigurationcallback%28____%29.md): Registers a callback function to be invoked whenever a local display is reconfigured.
- [CGDisplayRemoveReconfigurationCallback](cgdisplayremovereconfigurationcallback%28____%29.md): Removes the registration of a callback function that’s invoked whenever a local display is reconfigured.

### Retrieving Display Parameters

- [CGDisplayBounds](cgdisplaybounds%28__%29.md): Returns the bounds of a display in the global display coordinate space.
- [CGDisplayPixelsHigh](cgdisplaypixelshigh%28__%29.md): Returns the display height in pixel units.
- [CGDisplayPixelsWide](cgdisplaypixelswide%28__%29.md): Returns the display width in pixel units.

### Creating and Managing Display Modes

- [CGDisplayAvailableModes](cgdisplayavailablemodes%28__%29.md): Deprecated. Returns information about the currently available display modes.
- [CGDisplayBestModeForParameters](cgdisplaybestmodeforparameters%28__________%29.md): Deprecated. Returns information about the display mode closest to a specified depth and screen size.
- [CGDisplayBestModeForParametersAndRefreshRate](cgdisplaybestmodeforparametersandrefreshrate%28____________%29.md): Deprecated. Returns information about the display mode closest to a specified depth, screen size, and refresh rate.
- [CGDisplayCurrentMode](cgdisplaycurrentmode%28__%29.md): Deprecated. Returns information about the current display mode.
- [CGDisplaySwitchToMode](cgdisplayswitchtomode%28____%29.md): Deprecated. Switches a display to a different mode.
- [CGDisplayCopyDisplayMode](cgdisplaycopydisplaymode%28__%29.md): Returns information about a display’s current configuration.
- [CGDisplayCopyAllDisplayModes](cgdisplaycopyalldisplaymodes%28____%29.md): Returns information about the currently available display modes.
- [CGDisplaySetDisplayMode](cgdisplaysetdisplaymode%28______%29.md): Switches a display to a different mode.
- [CGDisplayModeRetain](cgdisplaymoderetain.md): Retains a Core Graphics display mode.
- [CGDisplayModeRelease](cgdisplaymoderelease.md): Releases a Core Graphics display mode.

### Getting Information About a Display Mode

- [CGDisplayModeGetWidth](cgdisplaymode/width.md): Returns the width of the specified display mode.
- [CGDisplayModeGetHeight](cgdisplaymode/height.md): Returns the height of the specified display mode.
- [CGDisplayModeCopyPixelEncoding](cgdisplaymode/pixelencoding.md): Deprecated. Returns the pixel encoding of the specified display mode.
- [CGDisplayModeGetRefreshRate](cgdisplaymode/refreshrate.md): Returns the refresh rate of the specified display mode.
- [CGDisplayModeGetIOFlags](cgdisplaymode/ioflags.md): Returns the I/O Kit flags of the specified display mode.
- [CGDisplayModeGetIODisplayModeID](cgdisplaymode/iodisplaymodeid.md): Returns the I/O Kit display mode ID of the specified display mode.
- [CGDisplayModeIsUsableForDesktopGUI](cgdisplaymode/isusablefordesktopgui%28%29.md): Returns a Boolean value indicating whether the specified display mode is usable for a desktop graphical user interface.
- [CGDisplayModeGetTypeID](cgdisplaymode/typeid.md): Returns the type identifier of Quartz display modes.

### Adjusting the Display Gamma

- [CGSetDisplayTransferByFormula](cgsetdisplaytransferbyformula%28____________________%29.md): Sets the gamma function for a display by specifying the coefficients of the gamma transfer formula.
- [CGGetDisplayTransferByFormula](cggetdisplaytransferbyformula%28____________________%29.md): Gets the coefficients of the gamma transfer formula for a display.
- [CGSetDisplayTransferByTable](cgsetdisplaytransferbytable%28__________%29.md): Sets the color gamma function for a display by specifying the values in the RGB gamma tables.
- [CGGetDisplayTransferByTable](cggetdisplaytransferbytable%28____________%29.md): Gets the values in the RGB gamma tables for a display.
- [CGSetDisplayTransferByByteTable](cgsetdisplaytransferbybytetable%28__________%29.md): Sets the byte values in the 8-bit RGB gamma tables for a display.
- [CGDisplayRestoreColorSyncSettings](cgdisplayrestorecolorsyncsettings%28%29.md): Restores the gamma tables to the values in the user’s ColorSync display profile.
- [CGDisplayGammaTableCapacity](cgdisplaygammatablecapacity%28__%29.md): Returns the capacity, or number of entries, in the gamma table for a display.

### Display Fade Effects

- [CGConfigureDisplayFadeEffect](cgconfiguredisplayfadeeffect%28____________%29.md): Modifies the settings of the built-in fade effect that occurs during a display configuration.
- [CGAcquireDisplayFadeReservation](cgacquiredisplayfadereservation%28____%29.md): Reserves the fade hardware for a specified time interval.
- [CGDisplayFade](cgdisplayfade%28________________%29.md): Performs a single fade operation.
- [CGDisplayFadeOperationInProgress](cgdisplayfadeoperationinprogress%28%29.md): Deprecated. Returns a Boolean value indicating whether a fade operation is currently in progress.
- [CGReleaseDisplayFadeReservation](cgreleasedisplayfadereservation%28__%29.md): Releases a display fade reservation, and unfades the display if needed.

### Controlling the Mouse Cursor

- [CGDisplayHideCursor](cgdisplayhidecursor%28__%29.md): Hides the mouse cursor, and increments the hide cursor count.
- [CGDisplayShowCursor](cgdisplayshowcursor%28__%29.md): Decrements the hide cursor count, and shows the mouse cursor if the count is `0`.
- [CGDisplayMoveCursorToPoint](cgdisplaymovecursortopoint%28____%29.md): Moves the mouse cursor to a specified point relative to the upper-left corner of the display.
- [CGCursorIsVisible](cgcursorisvisible%28%29.md): Deprecated. Returns a Boolean value indicating whether the mouse cursor is visible.
- [CGCursorIsDrawnInFramebuffer](cgcursorisdrawninframebuffer%28%29.md): Deprecated. Returns a Boolean value indicating whether the mouse cursor is drawn in framebuffer memory.
- [CGAssociateMouseAndMouseCursorPosition](cgassociatemouseandmousecursorposition%28__%29.md): Connects or disconnects the mouse and cursor while an application is in the foreground.
- [CGWarpMouseCursorPosition](cgwarpmousecursorposition%28__%29.md): Moves the mouse cursor without generating events.
- [CGGetLastMouseDelta](cggetlastmousedelta.md): Reports the change in mouse position since the last mouse movement event received by the application.

### Getting Window Server Information

- [CGSessionCopyCurrentDictionary](cgsessioncopycurrentdictionary%28%29.md): Returns information about the caller’s window server session.
- [CGWindowServerCFMachPort](cgwindowservercfmachport%28%29.md): Deprecated. Returns a Core Foundation Mach port (CFMachPort) that corresponds to the macOS window server.
- [CGWindowLevelForKey](cgwindowlevelforkey%28__%29.md): Returns the window level that corresponds to one of the standard window types.

### Getting Information About Refresh and Move Operations

You can use these functions to find out what areas on local displays are changing their appearance as the result of operations such as drawing, window movement or scrolling, and display reconfiguration.

- [CGRegisterScreenRefreshCallback](cgregisterscreenrefreshcallback%28____%29.md): Deprecated. Registers a callback function to be invoked when local displays are refreshed or modified.
- [CGUnregisterScreenRefreshCallback](cgunregisterscreenrefreshcallback%28____%29.md): Deprecated. Removes a previously registered callback function invoked when local displays are refreshed or modified.
- [CGWaitForScreenRefreshRects](cgwaitforscreenrefreshrects%28____%29.md): Deprecated. Waits for screen refresh operations.
- [CGScreenRegisterMoveCallback](cgscreenregistermovecallback%28____%29.md): Deprecated. Registers a callback function to be invoked when an area of the display is moved.
- [CGScreenUnregisterMoveCallback](cgscreenunregistermovecallback%28____%29.md): Deprecated. Removes a previously registered callback function invoked when an area of the display is moved.
- [CGWaitForScreenUpdateRects](cgwaitforscreenupdaterects%28__________%29.md): Deprecated. Waits for screen update operations.
- [CGReleaseScreenRefreshRects](cgreleasescreenrefreshrects%28__%29.md): Deprecated. Deallocates a list of rectangles that represent changed areas on local displays.

### Callbacks

- [CGDisplayReconfigurationCallBack](cgdisplayreconfigurationcallback.md): A client-supplied callback function that’s invoked whenever the configuration of a local display is changed.
- [CGScreenRefreshCallback](cgscreenrefreshcallback.md): A client-supplied callback function that’s invoked when an area of the display is modified or refreshed.
- [CGScreenUpdateMoveCallback](cgscreenupdatemovecallback.md): A client-supplied callback function invoked when an area of the display is moved.

### Data Types

- [CGDirectDisplayID](cgdirectdisplayid.md): A unique identifier for an attached display.
- [CGDisplayBlendFraction](cgdisplayblendfraction.md): The percentage of blend color used in a fade operation.
- [CGDisplayConfigRef](cgdisplayconfigref.md): A reference to a display configuration transaction.
- [CGDisplayCount](cgdisplaycount.md): Deprecated. The number of displays in various lists.
- [CGDisplayErr](cgdisplayerr.md): Deprecated. A uniform type for result codes returned by functions in Quartz Display Services.
- [CGDisplayFadeInterval](cgdisplayfadeinterval.md): The duration in seconds of a fade operation or a fade hardware reservation.
- [CGDisplayFadeReservationToken](cgdisplayfadereservationtoken.md): A token issued by Quartz when reserving one or more displays for a fade operation during a specified interval.
- [CGDisplayModeRef](cgdisplaymode.md): A reference to a display mode object.
- [CGDisplayReservationInterval](cgdisplayreservationinterval.md): The time interval for a fade reservation.
- [CGGammaValue](cggammavalue.md): A value used to map a color generated in software to a color supported by the display hardware.
- [CGOpenGLDisplayMask](cgopengldisplaymask.md): A bitmask used in OpenGL to specify a set of attached displays.
- [CGRectCount](cgrectcount.md): The size of an array of Quartz rectangles.
- [CGRefreshRate](cgrefreshrate.md): A display’s refresh rate in frames per second.
- [CGScreenUpdateMoveDelta](cgscreenupdatemovedelta.md): The distance, in pixel units, that an onscreen region moves.
- [CGWindowLevel](cgwindowlevel.md): A level assigned to a window by an application framework.
- [CGDisplayStreamRef](cgdisplaystream.md): A reference to a display stream object.
- [CGDisplayStreamUpdateRef](cgdisplaystreamupdate.md): A reference to frame update’s metadata.
- [CGDisplayStreamFrameAvailableHandler](cgdisplaystreamframeavailablehandler.md): A block called when a data stream has a new frame event to process.

### Constants

- [CGCaptureOptions](cgcaptureoptions.md): Configuration parameters that are used when capturing displays.
- [CGDisplayChangeSummaryFlags](cgdisplaychangesummaryflags.md): The configuration parameters that are passed to a display reconfiguration callback function.
- [CGConfigureOption](cgconfigureoption.md): The scope of the changes in a display configuration transaction.
- [Display Fade Blend Fractions](display-fade-blend-fractions.md): The lower and upper bounds for blend color fractions during a display fade operation.
- [Display Fade Constants](display-fade-constants.md): Values relating to fade operations.
- [Display ID Defaults](display-id-defaults.md): Default values for a display ID.
- [Display Mode Standard Properties](display-mode-standard-properties.md): Keys for the standard properties in a display mode dictionary.
- [Display Mode Optional Properties](display-mode-optional-properties.md): Keys for optional properties in a display mode dictionary.
- [Reserved Window Levels](reserved-window-levels.md): Window level constants.
- [CGScreenUpdateOperation](cgscreenupdateoperation.md): Types of screen-update operations.
- [CGWindowLevelKey](cgwindowlevelkey.md): Keys that represent the standard window levels in macOS. Quartz includes these keys to support application frameworks like Cocoa. Applications do not need to use them directly.
- [Window Server Session Properties](window-server-session-properties.md): The keys for the standard properties in a window server session dictionary.
- [CGDisplayStreamUpdateRectType](cgdisplaystreamupdaterecttype.md): Use these constants to determine which rectangles your app is interested in.
- [CGDisplayStreamFrameStatus](cgdisplaystreamframestatus.md): Describes a frame update event.
- [Display Stream Optional Property Keys](display-stream-optional-property-keys.md): These keys are used to populate the `properties` dictionary used when creating a new display stream.
- [Display Stream YCbCr to RGB conversion Matrix Options](display-stream-ycbcr-to-rgb-conversion-matrix-options.md): These strings are used to specify a matrix for the `CGDisplayStream/yCbCrMatrix` option.

## See Also

### Related Documentation

- [Quartz Display Services Programming Topics](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/QuartzDisplayServicesConceptual/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004316)

### Services

- [Quartz Event Services](quartz-event-services.md): Provides features for managing *event taps*—filters for observing and altering the stream of low-level user input events in macOS.
- [Quartz Window Services](quartz-window-services.md): Provides information about the windows managed by the macOS window server.
