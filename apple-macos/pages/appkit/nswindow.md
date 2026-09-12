> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswindow](https://developer.apple.com/documentation/appkit/nswindow)

# NSWindow (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A window that an app displays on the screen.

## Declaration

```swift
@MainActor class NSWindow
```

<a id="overview"></a>

## Overview

A single [NSWindow](nswindow.md) object corresponds to, at most, one on-screen window. Windows perform two principal functions:

- To place views in a provided area
- To accept and distribute mouse and keyboard events the user generates to the appropriate views

> **Note**

>  Although the [NSWindow](nswindow.md) class inherits the [NSCoding](https://developer.apple.com/documentation/foundation/nscoding) protocol from [NSResponder](nsresponder.md), the class doesn’t support coding. Legacy support for archivers exists, but its use is deprecated and may not work. Any attempt to archive or unarchive a window object using a keyed coding object raises an [invalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) exception. For details about window restoration, see [restorationClass](nswindow/restorationclass.md).

## Topics

### Creating a Window

- [init(contentViewController:)](nswindow/init%28contentviewcontroller_%29.md): Creates a titled window that contains the specified content view controller.
- [init(contentRect:styleMask:backing:defer:)](nswindow/init%28contentrect_stylemask_backing_defer_%29.md): Initializes the window with the specified values.
- [init(contentRect:styleMask:backing:defer:screen:)](nswindow/init%28contentrect_stylemask_backing_defer_screen_%29.md): Initializes an allocated window with the specified values.

### Managing the Window’s Behavior

- [delegate](nswindow/delegate.md): The window’s delegate.
- [NSWindowDelegate](nswindowdelegate.md): A set of optional methods that a window’s delegate can implement to respond to events, such as window resizing, moving, exposing, and minimizing.

### Configuring the Window’s Content

- [contentViewController](nswindow/contentviewcontroller.md): The main content view controller for the window.
- [contentView](nswindow/contentview.md): The window’s content view, the highest accessible view object in the window’s view hierarchy.

### Configuring the Window’s Appearance

- [styleMask](nswindow/stylemask-swift.property.md): Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.
- [NSWindow.StyleMask](nswindow/stylemask-swift.struct.md): Constants that specify the style of a window, and that you can combine with the C bitwise OR operator.
- [toggleFullScreen(\_:)](nswindow/togglefullscreen%28__%29.md): Takes the window into or out of fullscreen mode,
- [worksWhenModal](nswindow/workswhenmodal.md): A Boolean value that indicates whether the window is able to receive keyboard and mouse events even when some other window is being run modally.
- [alphaValue](nswindow/alphavalue.md): The window’s alpha value.
- [backgroundColor](nswindow/backgroundcolor.md): The color of the window’s background.
- [colorSpace](nswindow/colorspace.md): The window’s color space.
- [setDynamicDepthLimit(\_:)](nswindow/setdynamicdepthlimit%28__%29.md): Sets a Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [canHide](nswindow/canhide.md): A Boolean value that indicates whether the window can hide when its application becomes hidden.
- [isOnActiveSpace](nswindow/isonactivespace.md): A Boolean value that indicates whether the window is on the currently active space.
- [hidesOnDeactivate](nswindow/hidesondeactivate.md): A Boolean value that indicates whether the window is removed from the screen when its application becomes inactive.
- [collectionBehavior](nswindow/collectionbehavior-swift.property.md): A value that identifies the window’s behavior in window collections.
- [isOpaque](nswindow/isopaque.md): A Boolean value that indicates whether the window is opaque.
- [hasShadow](nswindow/hasshadow.md): A Boolean value that indicates whether the window has a shadow.
- [invalidateShadow()](nswindow/invalidateshadow%28%29.md): Invalidates the window shadow so that it is recomputed based on the current window shape.
- [autorecalculatesContentBorderThickness(for:)](nswindow/autorecalculatescontentborderthickness%28for_%29.md): Indicates whether the window calculates the thickness of a given border automatically.
- [setAutorecalculatesContentBorderThickness(\_:for:)](nswindow/setautorecalculatescontentborderthickness%28__for_%29.md): Specifies whether the window calculates the thickness of a given border automatically.
- [contentBorderThickness(for:)](nswindow/contentborderthickness%28for_%29.md): Indicates the thickness of a given border of the window.
- [setContentBorderThickness(\_:for:)](nswindow/setcontentborderthickness%28__for_%29.md): Specifies the thickness of a given border of the window.
- [preventsApplicationTerminationWhenModal](nswindow/preventsapplicationterminationwhenmodal.md): A Boolean value that indicates whether the window prevents application termination when modal.
- [appearanceSource](nswindow/appearancesource.md): An object that the window inherits its appearance from.

### Accessing Window Information

- [depthLimit](nswindow/depthlimit.md): The depth limit of the window.
- [hasDynamicDepthLimit](nswindow/hasdynamicdepthlimit.md): A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [defaultDepthLimit](nswindow/defaultdepthlimit.md): Returns the default depth limit for instances of `NSWindow`.
- [windowNumber](nswindow/windownumber.md): The window number of the window’s window device.
- [windowNumbers(options:)](nswindow/windownumbers%28options_%29.md): Returns the window numbers for all visible windows satisfying the specified options.
- [deviceDescription](nswindow/devicedescription.md): A dictionary containing information about the window’s resolution, such as color, depth, and so on.
- [NSDeviceDescriptionKey](nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](nswindow/canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](nswindow/sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [backingType](nswindow/backingtype.md): The window’s backing store type.
- [displayLink(target:selector:)](nswindow/displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.

### Getting Layout Information

- [contentRect(forFrameRect:styleMask:)](nswindow/contentrect%28forframerect_stylemask_%29.md): Returns the content rectangle used by a window with a given frame rectangle and window style.
- [frameRect(forContentRect:styleMask:)](nswindow/framerect%28forcontentrect_stylemask_%29.md): Returns the frame rectangle used by a window with a given content rectangle and window style.
- [minFrameWidth(withTitle:styleMask:)](nswindow/minframewidth%28withtitle_stylemask_%29.md): Returns the minimum width a window’s frame rectangle must have for it to display a title, with a given window style.
- [contentRect(forFrameRect:)](nswindow/contentrect%28forframerect_%29.md): Returns the window’s content rectangle with a given frame rectangle.
- [frameRect(forContentRect:)](nswindow/framerect%28forcontentrect_%29.md): Returns the window’s frame rectangle with a given content rectangle.

### Managing Windows

- [windowController](nswindow/windowcontroller.md): The window’s window controller.

### Managing Sheets

- [attachedSheet](nswindow/attachedsheet.md): The sheet attached to the window.
- [isSheet](nswindow/issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginSheet(\_:completionHandler:)](nswindow/beginsheet%28__completionhandler_%29.md): Starts a document-modal session and presents—or queues for presentation—a sheet.
- [beginCriticalSheet(\_:completionHandler:)](nswindow/begincriticalsheet%28__completionhandler_%29.md): Starts a document-modal session and presents the specified critical sheet.
- [endSheet(\_:)](nswindow/endsheet%28__%29-4dmmq.md): Ends a document-modal session and dismisses the specified sheet.
- [endSheet(\_:returnCode:)](nswindow/endsheet%28__returncode_%29.md): Ends a document-modal session and dismisses the specified sheet.
- [sheetParent](nswindow/sheetparent.md): The window to which the sheet is attached.
- [sheets](nswindow/sheets.md): An array of the sheets currently attached to the window.

### Sizing Windows

- [frame](nswindow/frame.md): The window’s frame rectangle in screen coordinates, including the title bar.
- [setFrameOrigin(\_:)](nswindow/setframeorigin%28__%29.md): Positions the bottom-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [setFrameTopLeftPoint(\_:)](nswindow/setframetopleftpoint%28__%29.md): Positions the top-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [constrainFrameRect(\_:to:)](nswindow/constrainframerect%28__to_%29.md): Modifies and returns a frame rectangle so that its top edge lies on a specific screen.
- [cascadeTopLeft(from:)](nswindow/cascadetopleft%28from_%29.md): Positions the window’s top-left to a given point.
- [setFrame(\_:display:)](nswindow/setframe%28__display_%29.md): Sets the origin and size of the window’s frame rectangle according to a given frame rectangle, thereby setting its position and size onscreen.
- [setFrame(\_:display:animate:)](nswindow/setframe%28__display_animate_%29.md): Sets the origin and size of the window’s frame rectangle, with optional animation, according to a given frame rectangle, thereby setting its position and size onscreen.
- [animationResizeTime(\_:)](nswindow/animationresizetime%28__%29.md): Specifies the duration of a smooth frame-size change.
- [aspectRatio](nswindow/aspectratio.md): The window’s aspect ratio, which constrains the size of its frame rectangle to integral multiples of this ratio when the user resizes it.
- [minSize](nswindow/minsize.md): The minimum size to which the window’s frame (including its title bar) can be sized.
- [maxSize](nswindow/maxsize.md): The maximum size to which the window’s frame (including its title bar) can be sized.
- [isZoomed](nswindow/iszoomed.md): A Boolean value that indicates whether the window is in a zoomed state.
- [performZoom(\_:)](nswindow/performzoom%28__%29.md): This action method simulates the user clicking the zoom box by momentarily highlighting the button and then zooming the window.
- [zoom(\_:)](nswindow/zoom%28__%29.md): Toggles the size and location of the window between its standard state (which the application provides as the best size to display the window’s data) and its user state (a new size and location the user may have set by moving or resizing the window).
- [resizeFlags](nswindow/resizeflags.md): The flags field of the event record for the mouse-down event that initiated the resizing session.
- [resizeIncrements](nswindow/resizeincrements.md): The window’s resizing increments.
- [preservesContentDuringLiveResize](nswindow/preservescontentduringliveresize.md): A Boolean value that indicates whether the window tries to optimize user-initiated resize operations by preserving the content of views that have not changed.
- [inLiveResize](nswindow/inliveresize.md): A Boolean value that indicates whether the window is being resized by the user.

### Sizing Content

- [contentAspectRatio](nswindow/contentaspectratio.md): The window’s content aspect ratio.
- [contentMinSize](nswindow/contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [setContentSize(\_:)](nswindow/setcontentsize%28__%29.md): Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.
- [contentMaxSize](nswindow/contentmaxsize.md): The maximum size of the window’s content view in the window’s base coordinate system.
- [contentResizeIncrements](nswindow/contentresizeincrements.md): The window’s content-view resizing increments.
- [contentLayoutGuide](nswindow/contentlayoutguide.md): A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](nswindow/contentlayoutrect.md).
- [contentLayoutRect](nswindow/contentlayoutrect.md): The area inside the window that is for non-obscured content, in window coordinates.
- [maxFullScreenContentSize](nswindow/maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.
- [minFullScreenContentSize](nswindow/minfullscreencontentsize.md): A minimum size that is used to determine if a window can fit when it is in full screen in a tile.

### Managing Window Layers

- [orderOut(\_:)](nswindow/orderout%28__%29.md): Removes the window from the screen list, which hides the window.
- [orderBack(\_:)](nswindow/orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFront(\_:)](nswindow/orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [orderFrontRegardless()](nswindow/orderfrontregardless%28%29.md): Moves the window to the front of its level, even if its application isn’t active, without changing either the key window or the main window.
- [order(\_:relativeTo:)](nswindow/order%28__relativeto_%29.md): Repositions the window’s window device in the window server’s screen list.
- [level](nswindow/level-swift.property.md): The window level of the window.
- [NSWindow.Level](nswindow/level-swift.struct.md): The standard window levels in macOS.

### Managing Window Visibility and Occlusion State

- [isVisible](nswindow/isvisible.md): A Boolean value that indicates whether the window is visible onscreen (even when it’s obscured by other windows).
- [occlusionState](nswindow/occlusionstate-swift.property.md): The occlusion state of the window.

### Managing Window Frames in User Defaults

- [removeFrame(usingName:)](nswindow/removeframe%28usingname_%29.md): Removes the frame data stored under a given name from the application’s user defaults.
- [setFrameUsingName(\_:)](nswindow/setframeusingname%28__%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system.
- [setFrameUsingName(\_:force:)](nswindow/setframeusingname%28__force_%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system. Can operate on non-resizable windows.
- [saveFrame(usingName:)](nswindow/saveframe%28usingname_%29.md): Saves the window’s frame rectangle in the user defaults system under a given name.
- [setFrameAutosaveName(\_:)](nswindow/setframeautosavename%28__%29.md): Sets the name AppKit uses to automatically save the window’s frame rectangle data in the defaults system.
- [frameAutosaveName](nswindow/frameautosavename-swift.property.md): The name used to automatically save the window’s frame rectangle data in the defaults system.
- [NSWindow.FrameAutosaveName](nswindow/frameautosavename-swift.typealias.md): The type of a window’s frame autosave name.
- [frameDescriptor](nswindow/framedescriptor.md): A string representation of the window’s frame rectangle.
- [setFrame(from:)](nswindow/setframe%28from_%29.md): Sets the window’s frame rectangle from a given string representation.
- [NSWindow.PersistableFrameDescriptor](nswindow/persistableframedescriptor.md): The type of a window’s frame descriptor.

### Managing Key Status

- [isKeyWindow](nswindow/iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.
- [canBecomeKey](nswindow/canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKey()](nswindow/makekey%28%29.md): Makes the window the key window.
- [makeKeyAndOrderFront(\_:)](nswindow/makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.
- [becomeKey()](nswindow/becomekey%28%29.md): Informs the window that it has become the key window.
- [resignKey()](nswindow/resignkey%28%29.md): Resigns the window’s key window status.

### Managing Main Status

- [isMainWindow](nswindow/ismainwindow.md): A Boolean value that indicates whether the window is the application’s main window.
- [canBecomeMain](nswindow/canbecomemain.md): A Boolean value that indicates whether the window can become the application’s main window.
- [makeMain()](nswindow/makemain%28%29.md): Makes the window the main window.
- [becomeMain()](nswindow/becomemain%28%29.md): Informs the window that it has become the main window.
- [resignMain()](nswindow/resignmain%28%29.md): Resigns the window’s main window status.

### Managing Toolbars

- [toolbar](nswindow/toolbar.md): The window’s toolbar.
- [toggleToolbarShown(\_:)](nswindow/toggletoolbarshown%28__%29.md): Toggles the visibility of the window’s toolbar.
- [runToolbarCustomizationPalette(\_:)](nswindow/runtoolbarcustomizationpalette%28__%29.md): Presents the toolbar customization user interface.

### Managing Attached Windows

- [childWindows](nswindow/childwindows.md): An array of the window’s attached child windows.
- [addChildWindow(\_:ordered:)](nswindow/addchildwindow%28__ordered_%29.md): Adds a given window as a child window of the window.
- [removeChildWindow(\_:)](nswindow/removechildwindow%28__%29.md): Detaches a given child window from the window.
- [parent](nswindow/parent.md): The parent window to which the window is attached as a child.

### Managing Default Buttons

- [defaultButtonCell](nswindow/defaultbuttoncell.md): The button cell that performs as if clicked when the window receives a Return (or Enter) key event.
- [enableKeyEquivalentForDefaultButtonCell()](nswindow/enablekeyequivalentfordefaultbuttoncell%28%29.md): Reenables the default button cell’s key equivalent, so it performs a click when the user presses Return (or Enter).
- [disableKeyEquivalentForDefaultButtonCell()](nswindow/disablekeyequivalentfordefaultbuttoncell%28%29.md): Disables the default button cell’s key equivalent, so it doesn’t perform a click when the user presses Return (or Enter).

### Managing Field Editors

- [fieldEditor(\_:for:)](nswindow/fieldeditor%28__for_%29.md): Returns the window’s field editor, creating it if requested.
- [endEditing(for:)](nswindow/endediting%28for_%29.md): Forces the field editor to give up its first responder status and prepares it for its next assignment.

### Managing the Window Menu

- [isExcludedFromWindowsMenu](nswindow/isexcludedfromwindowsmenu.md): A Boolean value that indicates whether the window is excluded from the application’s Windows menu.

### Managing Cursor Rectangles

- [areCursorRectsEnabled](nswindow/arecursorrectsenabled.md): A Boolean value that indicates whether the window’s cursor rectangles are enabled.
- [enableCursorRects()](nswindow/enablecursorrects%28%29.md): Reenables cursor rectangle management within the window after a [disableCursorRects()](nswindow/disablecursorrects%28%29.md) message.
- [disableCursorRects()](nswindow/disablecursorrects%28%29.md): Disables all cursor rectangle management within the window.
- [discardCursorRects()](nswindow/discardcursorrects%28%29.md): Invalidates all cursor rectangles in the window.
- [invalidateCursorRects(for:)](nswindow/invalidatecursorrects%28for_%29.md): Marks as invalid the cursor rectangles of a given view object in the window, so they’ll be set up again when the window becomes key.
- [resetCursorRects()](nswindow/resetcursorrects%28%29.md): Clears the window’s cursor rectangles and the cursor rectangles of the [NSView](nsview.md) objects in its view hierarchy.

### Managing Title Bars

- [standardWindowButton(\_:for:)](nswindow/standardwindowbutton%28__for_%29.md): Returns a new instance of a given standard window button, sized appropriately for a given window style.
- [standardWindowButton(\_:)](nswindow/standardwindowbutton%28__%29.md): Returns the window button of a given window button kind in the window’s view hierarchy.
- [showsToolbarButton](nswindow/showstoolbarbutton.md): Deprecated. A Boolean value that indicates whether the toolbar control button is currently displayed.
- [titlebarAppearsTransparent](nswindow/titlebarappearstransparent.md): A Boolean value that indicates whether the title bar draws its background.
- [toolbarStyle](nswindow/toolbarstyle-swift.property.md): The style that determines the appearance and location of the toolbar in relation to the title bar.
- [NSWindow.ToolbarStyle](nswindow/toolbarstyle-swift.enum.md): Styles that determine the appearance and location of the toolbar in relation to the title bar.
- [titlebarSeparatorStyle](nswindow/titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [windowTitlebarLayoutDirection](nswindow/windowtitlebarlayoutdirection.md): The direction the window’s title bar lays text out, either left to right or right to left.

### Managing Title Bar Accessories

- [addTitlebarAccessoryViewController(\_:)](nswindow/addtitlebaraccessoryviewcontroller%28__%29.md): Adds the specified title bar accessory view controller to the window.
- [insertTitlebarAccessoryViewController(\_:at:)](nswindow/inserttitlebaraccessoryviewcontroller%28__at_%29.md): Inserts the view controller into the window’s array of title bar accessory view controllers at the specified index.
- [removeTitlebarAccessoryViewController(at:)](nswindow/removetitlebaraccessoryviewcontroller%28at_%29.md): Removes the view controller at the specified index from the window’s array of title bar accessory view controllers.
- [titlebarAccessoryViewControllers](nswindow/titlebaraccessoryviewcontrollers.md): An array of title bar accessory view controllers that are currently added to the window.

### Managing Window Tabs

- [allowsAutomaticWindowTabbing](nswindow/allowsautomaticwindowtabbing.md): A Boolean value that indicates whether the app can automatically organize windows into tabs.
- [userTabbingPreference](nswindow/usertabbingpreference-swift.type.property.md): A value that indicates the user’s preference for window tabbing.
- [tab](nswindow/tab.md): An object that represents information about a window when it displays as a tab.
- [tabbingIdentifier](nswindow/tabbingidentifier-swift.property.md): A value that allows a group of related windows.
- [NSWindow.TabbingIdentifier](nswindow/tabbingidentifier-swift.typealias.md): A value that allows a group of related windows.
- [addTabbedWindow(\_:ordered:)](nswindow/addtabbedwindow%28__ordered_%29.md): Adds the provided window as a new tab in a tabbed window using the specified ordering instruction.
- [tabbingMode](nswindow/tabbingmode-swift.property.md): A value that indicates when a window displays tabs.
- [tabbedWindows](nswindow/tabbedwindows.md): An array of windows that display as tabs.
- [mergeAllWindows(\_:)](nswindow/mergeallwindows%28__%29.md): Merges all open windows into a single tabbed window.
- [selectNextTab(\_:)](nswindow/selectnexttab%28__%29.md): Selects the next tab in the tab group in the trailing direction.
- [selectPreviousTab(\_:)](nswindow/selectprevioustab%28__%29.md): Selects the previous tab in the tab group in the leading direction.
- [moveTabToNewWindow(\_:)](nswindow/movetabtonewwindow%28__%29.md): Moves the tab to a new containing window.
- [toggleTabBar(\_:)](nswindow/toggletabbar%28__%29.md): Shows or hides the tab bar.
- [toggleTabOverview(\_:)](nswindow/toggletaboverview%28__%29.md): Shows or hides the tab overview.
- [tabGroup](nswindow/tabgroup.md): A group of windows that display together as a tab group.

### Managing Tooltips

- [allowsToolTipsWhenApplicationIsInactive](nswindow/allowstooltipswhenapplicationisinactive.md): A Boolean value that indicates whether the window can display tooltips even when the application is in the background.

### Handling Events

- [currentEvent](nswindow/currentevent.md): The event currently being processed by the application.
- [nextEvent(matching:)](nswindow/nextevent%28matching_%29.md): Returns the next event matching a given mask.
- [nextEvent(matching:until:inMode:dequeue:)](nswindow/nextevent%28matching_until_inmode_dequeue_%29.md): Forwards the message to the global application object.
- [discardEvents(matching:before:)](nswindow/discardevents%28matching_before_%29.md): Forwards the message to the global application object.
- [postEvent(\_:atStart:)](nswindow/postevent%28__atstart_%29.md): Forwards the message to the global application object.
- [sendEvent(\_:)](nswindow/sendevent%28__%29.md): This action method dispatches mouse and keyboard events the global application object sends to the window.
- [tryToPerform(\_:with:)](nswindow/trytoperform%28__with_%29.md): Dispatches action messages with a given argument.

### Managing Responders

- [initialFirstResponder](nswindow/initialfirstresponder.md): The view that’s made first responder (also called the key view) the first time the window is placed onscreen.
- [firstResponder](nswindow/firstresponder.md): The window’s first responder.
- [makeFirstResponder(\_:)](nswindow/makefirstresponder%28__%29.md): Attempts to make a given responder the first responder for the window.

### Managing the Key View Loop

- [selectKeyView(preceding:)](nswindow/selectkeyview%28preceding_%29.md): Gives key view status to the view that precedes the given view.
- [selectKeyView(following:)](nswindow/selectkeyview%28following_%29.md): Gives key view status to the view that follows the given view.
- [selectPreviousKeyView(\_:)](nswindow/selectpreviouskeyview%28__%29.md): Searches for a candidate previous key view and, if it finds one, tries to make it the first responder.
- [selectNextKeyView(\_:)](nswindow/selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.
- [keyViewSelectionDirection](nswindow/keyviewselectiondirection.md): The direction the window is currently using to change the key view.
- [autorecalculatesKeyViewLoop](nswindow/autorecalculateskeyviewloop.md): A Boolean value that indicates whether the window automatically recalculates the key view loop when views are added.
- [recalculateKeyViewLoop()](nswindow/recalculatekeyviewloop%28%29.md): Marks the key view loop as “dirty” and in need of recalculation.

### Managing Window Sharing

- [transferWindowSharing(to:completionHandler:)](nswindow/transferwindowsharing%28to_completionhandler_%29.md): Attempts to move window sharing (within a SharePlay session) from this window to another window.
- [hasActiveWindowSharingSession](nswindow/hasactivewindowsharingsession.md): Indicates whether the receiver is the subject of an active SharePlay sharing session.

### Handling Mouse Events

- [acceptsMouseMovedEvents](nswindow/acceptsmousemovedevents.md): A Boolean value that indicates whether the window accepts mouse-moved events.
- [ignoresMouseEvents](nswindow/ignoresmouseevents.md): A Boolean value that indicates whether the window is transparent to mouse events.
- [mouseLocationOutsideOfEventStream](nswindow/mouselocationoutsideofeventstream.md): The current location of the pointer reckoned in the window’s base coordinate system, regardless of the current event being handled or of any events pending.
- [windowNumber(at:belowWindowWithWindowNumber:)](nswindow/windownumber%28at_belowwindowwithwindownumber_%29.md): Returns the number of the frontmost window that would be hit by a mouse-down at the specified screen location.
- [trackEvents(matching:timeout:mode:handler:)](nswindow/trackevents%28matching_timeout_mode_handler_%29.md): Tracks events that match the specified mask using the specified tracking handler until the tracking handler explicitly terminates tracking.
- [performDrag(with:)](nswindow/performdrag%28with_%29.md): Starts a window drag based on the specified mouse-down event.
- [foreverDuration](nsevent/foreverduration.md): The longest time duration possible.

### Handling Window Restoration

- [isRestorable](nswindow/isrestorable.md): A Boolean value indicating whether the window configuration is preserved between application launches.
- [restorationClass](nswindow/restorationclass.md): The restoration class associated with the window.
- [disableSnapshotRestoration()](nswindow/disablesnapshotrestoration%28%29.md): Disables snapshot restoration.
- [enableSnapshotRestoration()](nswindow/enablesnapshotrestoration%28%29.md): Enables snapshot restoration.

### Drawing Windows

- [display()](nswindow/display%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views within the window.
- [displayIfNeeded()](nswindow/displayifneeded%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views that need displaying.
- [viewsNeedDisplay](nswindow/viewsneeddisplay.md): A Boolean value that indicates whether any of the window’s views need to be displayed.
- [allowsConcurrentViewDrawing](nswindow/allowsconcurrentviewdrawing.md): A Boolean value that indicates whether the window allows multithreaded view drawing.

### Window Animation

- [animationBehavior](nswindow/animationbehavior-swift.property.md): The window’s automatic animation behavior.

### Updating Windows

- [disableScreenUpdatesUntilFlush()](nswindow/disablescreenupdatesuntilflush%28%29.md): Deprecated. Disables the window’s screen updates until the window is flushed.
- [update()](nswindow/update%28%29.md): Updates the window.

### Dragging Items

- [drag(\_:at:offset:event:pasteboard:source:slideBack:)](nswindow/drag%28__at_offset_event_pasteboard_source_slideback_%29.md): Deprecated. Begins a dragging session.
- [registerForDraggedTypes(\_:)](nswindow/registerfordraggedtypes%28__%29.md): Registers a set of pasteboard types that the window accepts as the destination of an image-dragging session.
- [unregisterDraggedTypes()](nswindow/unregisterdraggedtypes%28%29.md): Unregisters the window as a possible destination for dragging operations.

### Accessing Edited Status

- [isDocumentEdited](nswindow/isdocumentedited.md): A Boolean value that indicates whether the window’s document has been edited.

### Converting Coordinates

- [backingScaleFactor](nswindow/backingscalefactor.md): The backing scale factor.
- [backingAlignedRect(\_:options:)](nswindow/backingalignedrect%28__options_%29.md): Returns a backing store pixel-aligned rectangle in window coordinates.
- [convertFromBacking(\_:)](nswindow/convertfrombacking%28__%29.md): Converts a rectangle from its pixel-aligned backing store coordinate system to the window’s coordinate system.
- [convertFromScreen(\_:)](nswindow/convertfromscreen%28__%29.md): Converts a rectangle from the screen coordinate system to the window’s coordinate system.
- [convertPointFromBacking(\_:)](nswindow/convertpointfrombacking%28__%29.md): Converts a point from its pixel-aligned backing store coordinate system to the window’s coordinate system.
- [convertPoint(fromScreen:)](nswindow/convertpoint%28fromscreen_%29.md): Converts a point from the screen coordinate system to the window’s coordinate system.
- [convertToBacking(\_:)](nswindow/converttobacking%28__%29.md): Converts a rectangle from the window’s coordinate system to its pixel-aligned backing store coordinate system.
- [convertToScreen(\_:)](nswindow/converttoscreen%28__%29.md): Converts a rectangle to the screen coordinate system from the window’s coordinate system.
- [convertPointToBacking(\_:)](nswindow/convertpointtobacking%28__%29.md): Converts a point from the window’s coordinate system to its pixel-aligned backing store coordinate system.
- [convertPoint(toScreen:)](nswindow/convertpoint%28toscreen_%29.md): Converts a point to the screen coordinate system from the window’s coordinate system.

### Managing Titles

- [title](nswindow/title.md): The string that appears in the title bar of the window or the path to the represented file.
- [subtitle](nswindow/subtitle.md): A secondary line of text that appears in the title bar of the window.
- [titleVisibility](nswindow/titlevisibility-swift.property.md): A value that indicates the visibility of the window’s title and title bar buttons.
- [setTitleWithRepresentedFilename(\_:)](nswindow/settitlewithrepresentedfilename%28__%29.md): Sets a given path as the window’s title, formatting it as a file-system path, and records this path as the window’s associated file.
- [representedFilename](nswindow/representedfilename.md): The path to the file of the window’s represented file.
- [representedURL](nswindow/representedurl.md): The URL of the file the window represents.

### Accessing Screen Information

- [screen](nswindow/screen.md): The screen the window is on.
- [deepestScreen](nswindow/deepestscreen.md): The deepest screen the window is on (it may be split over several screens).
- [displaysWhenScreenProfileChanges](nswindow/displayswhenscreenprofilechanges.md): A Boolean value that indicates whether the window context should be updated when the screen profile changes or when the window moves to a different screen.

### Moving Windows

- [isMovableByWindowBackground](nswindow/ismovablebywindowbackground.md): A Boolean value that indicates whether the window is movable by clicking and dragging anywhere in its background.
- [isMovable](nswindow/ismovable.md): A Boolean value that indicates whether the window can be dragged by clicking in its title bar or background.
- [center()](nswindow/center%28%29.md): Sets the window’s location to the center of the screen.

### Closing Windows

- [performClose(\_:)](nswindow/performclose%28__%29.md): Simulates the user clicking the close button by momentarily highlighting the button and then closing the window.
- [close()](nswindow/close%28%29.md): Removes the window from the screen.
- [isReleasedWhenClosed](nswindow/isreleasedwhenclosed.md): A Boolean value that indicates whether the window is released when it receives the `close` message.

### Minimizing Windows

- [isMiniaturized](nswindow/isminiaturized.md): A Boolean value that indicates whether the window is minimized.
- [performMiniaturize(\_:)](nswindow/performminiaturize%28__%29.md): Simulates the user clicking the minimize button by momentarily highlighting the button, then minimizing the window.
- [miniaturize(\_:)](nswindow/miniaturize%28__%29.md): Removes the window from the screen list and displays the minimized window in the Dock.
- [deminiaturize(\_:)](nswindow/deminiaturize%28__%29.md): De-minimizes the window.
- [miniwindowImage](nswindow/miniwindowimage.md): The custom miniaturized window image of the window.
- [miniwindowTitle](nswindow/miniwindowtitle.md): The title displayed in the window’s minimized window.

### Getting the Dock Tile

- [dockTile](nswindow/docktile.md): The application’s Dock tile.

### Printing Windows

- [printWindow(\_:)](nswindow/printwindow%28__%29.md): Runs the Print panel, and if the user chooses an option other than canceling, prints the window (its frame view and all subviews).
- [dataWithEPS(inside:)](nswindow/datawitheps%28inside_%29.md): Returns EPS data that draws the region of the window within a given rectangle.
- [dataWithPDF(inside:)](nswindow/datawithpdf%28inside_%29.md): Returns PDF data that draws the region of the window within a given rectangle.

### Providing Services

- [validRequestor(forSendType:returnType:)](nswindow/validrequestor%28forsendtype_returntype_%29.md): Searches for an object that responds to a Services request.

### Triggering Constraint-Based Layout

- [updateConstraintsIfNeeded()](nswindow/updateconstraintsifneeded%28%29.md): Updates the constraints based on changes to views in the window since the last layout.
- [layoutIfNeeded()](nswindow/layoutifneeded%28%29.md): Updates the layout of views in the window based on the current views and constraints.

### Debugging Constraint-Based Layout

See https://developer.apple.com/library/archive/releasenotes/UserExperience/RNAutomaticLayout/index.html#//apple_ref/doc/uid/TP40010631 for more details on debugging constraint-based layout.

- [visualizeConstraints(\_:)](nswindow/visualizeconstraints%28__%29.md): Displays a visual representation of the supplied constraints in the window.

### Constraint-Based Layouts

- [anchorAttribute(for:)](nswindow/anchorattribute%28for_%29.md): Returns the part of the window that stays stationary during constraint-based layout.
- [setAnchorAttribute(\_:for:)](nswindow/setanchorattribute%28__for_%29.md): Sets the part of the window that stays stationary during constraint-based layout.

### Working with Window Depths

- [bitsPerPixel](nswindow/depth/bitsperpixel.md): Returns the bits per pixel for the specified window depth.
- [bitsPerSample](nswindow/depth/bitspersample.md): Returns the bits per sample for the specified window depth.
- [colorSpaceName](nswindow/depth/colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [numberOfColorComponents](nscolorspacename/numberofcolorcomponents.md): Returns the number of color components in the specified color space.
- [isPlanar](nswindow/depth/isplanar.md): Returns whether the specified window depth is planar.
- [canRepresent(\_:)](nswindow/canrepresent%28__%29.md): A Boolean value that indicates if the window and its screen use a color space that can represent the specified display gamut.

### Getting Information About Scripting Attributes

- [hasCloseBox](nswindow/hasclosebox.md): A Boolean value that indicates if the window has a close box.
- [hasTitleBar](nswindow/hastitlebar.md): A Boolean value that indicates if the window has a title bar.
- [isModalPanel](nswindow/ismodalpanel.md): A Boolean value that indicates whether the window is a modal panel.
- [isFloatingPanel](nswindow/isfloatingpanel.md): A Boolean value that indicates whether the window is a floating panel.
- [isZoomable](nswindow/iszoomable.md): A Boolean value that indicates whether the window allows zooming.
- [isResizable](nswindow/isresizable.md): A Boolean value that indicates if the user can resize the window.
- [isMiniaturizable](nswindow/isminiaturizable.md): A Boolean value that indicates whether the window can minimize.
- [orderedIndex](nswindow/orderedindex.md): The zero-based position of the window, based on its order from front to back among all visible application windows.

### Setting Scripting Attributes

- [setIsMiniaturized(\_:)](nswindow/setisminiaturized%28__%29.md): Sets the window’s miniaturized state to the value you specify.
- [setIsVisible(\_:)](nswindow/setisvisible%28__%29.md): Sets the window’s visible state to the value you specify.
- [setIsZoomed(\_:)](nswindow/setiszoomed%28__%29.md): Sets the window’s zoomed state to the value you specify.

### Handling Script Commands

- [handleClose(\_:)](nswindow/handleclose%28__%29.md): Handles the AppleScript command to close the window (and its associated document, if any).
- [handlePrint(\_:)](nswindow/handleprint%28__%29.md): Handles the AppleScript command to print the contents of the window (or its associated document, if any).
- [handleSave(\_:)](nswindow/handlesave%28__%29.md): Handles the AppleScript command to save the window (and its associated document, if any).

### Constants

- [NSWindow.SelectionDirection](nswindow/selectiondirection.md): Constants that specify the direction a window is currently using to change the key view.
- [NSWindow.ButtonType](nswindow/buttontype.md): Constants that provide a way to access standard title bar buttons.
- [NSRunLoop—Ordering Modes for NSWindow](nsrunloop-ordering-modes-for-nsw.md): Constants that specify the priority for runloop messages.
- [NSWindow.Depth](nswindow/depth.md): A type that represents the depth, or amount of memory, for a single pixel in a window or screen.
- [NSWindow.BackingStoreType](nswindow/backingstoretype.md): Constants that specify how the window device buffers the drawing done in a window.
- [NSWindow.OrderingMode](nswindow/orderingmode.md): Constants that let you specify how a window is ordered relative to another window.
- [NSWindow.SharingType](nswindow/sharingtype-swift.enum.md): Constants that represent the access levels other processes can have to a window’s content.
- [NSWindow.NumberListOptions](nswindow/numberlistoptions.md): Options to use when retrieving window numbers from the system.
- [NSWindow.AnimationBehavior](nswindow/animationbehavior-swift.enum.md): Constants that control the automatic window animation behavior windows use when ordering to the front or out of view.
- [NSWindow.CollectionBehavior](nswindow/collectionbehavior-swift.struct.md): Window collection behaviors related to Mission Control, Spaces, and Stage Manager.
- [NSWindow.OcclusionState](nswindow/occlusionstate-swift.struct.md): Specifies whether the window is occluded.
- [NSWindow.TitleVisibility](nswindow/titlevisibility-swift.enum.md): Specifies the appearance of the window’s title bar area.
- [NSWindow.UserTabbingPreference](nswindow/usertabbingpreference-swift.enum.md): A value that indicates the user’s preference for window tabbing.
- [NSWindow.TabbingMode](nswindow/tabbingmode-swift.enum.md): The preferred tabbing behavior of a window.
- [Application Kit Version for Deferred Window Display Support](application-kit-version-for-deferred-window-display-support.md): The version of the AppKit.framework containing a specific bug fix or capability.
- [Application Kit Version for Custom Sheet Position](application-kit-version-for-custom-sheet-position.md): The version of the AppKit.framework containing a specific bug fix or capability.
- [NSWindowDidChangeBackingPropertiesNotification User Info Properties](nswindowdidchangebackingpropertiesnotification-user-info-properties.md): Constants that represent values in the user info dictionary of the `didChangeBackingPropertiesNotification` notification.

### Notifications

- [didBecomeKeyNotification](nswindow/didbecomekeynotification.md): A notification that the window object became the key window.
- [didBecomeMainNotification](nswindow/didbecomemainnotification.md): A notification that the window object became the main window.
- [didChangeScreenNotification](nswindow/didchangescreennotification.md): A notification that a portion of the window object’s frame moved onto or off of a screen.
- [didChangeScreenProfileNotification](nswindow/didchangescreenprofilenotification.md): A notification that the screen containing the window changed.
- [didDeminiaturizeNotification](nswindow/diddeminiaturizenotification.md): A notification that the window is no longer minimized.
- [didEndSheetNotification](nswindow/didendsheetnotification.md): A notification that the window object closed an attached sheet.
- [didEndLiveResizeNotification](nswindow/didendliveresizenotification.md): A notification that the user resized the window object.
- [didExposeNotification](nswindow/didexposenotification.md): A notification that a window exposed a portion of its nonretained content.
- [didMiniaturizeNotification](nswindow/didminiaturizenotification.md): A notification that the window object minimized.
- [didMoveNotification](nswindow/didmovenotification.md): A notification that the window object moved.
- [didResignKeyNotification](nswindow/didresignkeynotification.md): A notification that the window object resigned its status as key window.
- [didResignMainNotification](nswindow/didresignmainnotification.md): A notification that the window object resigned its status as main window.
- [didResizeNotification](nswindow/didresizenotification.md): A notification that the window object size changed.
- [didUpdateNotification](nswindow/didupdatenotification.md): A notification that the window object received an update message.
- [willBeginSheetNotification](nswindow/willbeginsheetnotification.md): A notification that the window object is about to open a sheet.
- [willCloseNotification](nswindow/willclosenotification.md): A notification that the window object is about to close.
- [willMiniaturizeNotification](nswindow/willminiaturizenotification.md): A notification that the window object is about to minimize.
- [willMoveNotification](nswindow/willmovenotification.md): A notification that the window object is about to move.
- [willStartLiveResizeNotification](nswindow/willstartliveresizenotification.md): A notification that the user is about to resize the window.
- [willEnterFullScreenNotification](nswindow/willenterfullscreennotification.md): A notification that the window will enter full-screen mode.
- [didEnterFullScreenNotification](nswindow/didenterfullscreennotification.md): A notification that the window entered full-screen mode.
- [willExitFullScreenNotification](nswindow/willexitfullscreennotification.md): A notification that the window object will exit full-screen mode.
- [didExitFullScreenNotification](nswindow/didexitfullscreennotification.md): A notification that the window object exited full-screen mode.
- [willEnterVersionBrowserNotification](nswindow/willenterversionbrowsernotification.md): A notification that the window object will enter version browser mode.
- [didEnterVersionBrowserNotification](nswindow/didenterversionbrowsernotification.md): A notification that the window object entered version browser mode.
- [willExitVersionBrowserNotification](nswindow/willexitversionbrowsernotification.md): A notification that the window object will exit version browser mode.
- [didExitVersionBrowserNotification](nswindow/didexitversionbrowsernotification.md): A notification that the window object exited version browser mode.
- [didChangeBackingPropertiesNotification](nswindow/didchangebackingpropertiesnotification.md): A notification that the window object backing properties changed.
- [didChangeOcclusionStateNotification](nswindow/didchangeocclusionstatenotification.md): A notification that the window object’s occlusion state changed.

### Deprecated

- [Deprecated Symbols](nswindow-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Classes

- [NSWindow.HostingSheetRepresentation](nswindow/hostingsheetrepresentation.md): A class representing a SwiftUI view hosted in an AppKit sheet.

### Structures

- [NSWindow.DidBecomeKeyMessage](nswindow/didbecomekeymessage.md)
- [NSWindow.DidBecomeMainMessage](nswindow/didbecomemainmessage.md)
- [NSWindow.DidChangeBackingPropertiesMessage](nswindow/didchangebackingpropertiesmessage.md)
- [NSWindow.DidChangeOcclusionStateMessage](nswindow/didchangeocclusionstatemessage.md)
- [NSWindow.DidChangeScreenMessage](nswindow/didchangescreenmessage.md)
- [NSWindow.DidChangeScreenProfileMessage](nswindow/didchangescreenprofilemessage.md)
- [NSWindow.DidDeminiaturizeMessage](nswindow/diddeminiaturizemessage.md)
- [NSWindow.DidEndLiveResizeMessage](nswindow/didendliveresizemessage.md)
- [NSWindow.DidEndSheetMessage](nswindow/didendsheetmessage.md)
- [NSWindow.DidEnterFullScreenMessage](nswindow/didenterfullscreenmessage.md)
- [NSWindow.DidEnterVersionBrowserMessage](nswindow/didenterversionbrowsermessage.md)
- [NSWindow.DidExitFullScreenMessage](nswindow/didexitfullscreenmessage.md)
- [NSWindow.DidExitVersionBrowserMessage](nswindow/didexitversionbrowsermessage.md)
- [NSWindow.DidExposeMessage](nswindow/didexposemessage.md)
- [NSWindow.DidMiniaturizeMessage](nswindow/didminiaturizemessage.md)
- [NSWindow.DidMoveMessage](nswindow/didmovemessage.md)
- [NSWindow.DidResignKeyMessage](nswindow/didresignkeymessage.md)
- [NSWindow.DidResignMainMessage](nswindow/didresignmainmessage.md)
- [NSWindow.DidResizeMessage](nswindow/didresizemessage.md)
- [NSWindow.DidUpdateMessage](nswindow/didupdatemessage.md)
- [NSWindow.WillBeginSheetMessage](nswindow/willbeginsheetmessage.md)
- [NSWindow.WillCloseMessage](nswindow/willclosemessage.md)
- [NSWindow.WillEnterFullScreenMessage](nswindow/willenterfullscreenmessage.md)
- [NSWindow.WillEnterVersionBrowserMessage](nswindow/willenterversionbrowsermessage.md)
- [NSWindow.WillExitFullScreenMessage](nswindow/willexitfullscreenmessage.md)
- [NSWindow.WillExitVersionBrowserMessage](nswindow/willexitversionbrowsermessage.md)
- [NSWindow.WillMiniaturizeMessage](nswindow/willminiaturizemessage.md)
- [NSWindow.WillMoveMessage](nswindow/willmovemessage.md)
- [NSWindow.WillStartLiveResizeMessage](nswindow/willstartliveresizemessage.md)

### Instance Properties

- [cascadingReferenceFrame](nswindow/cascadingreferenceframe.md)

### Instance Methods

- [beginDraggingSession(items:event:source:)](nswindow/begindraggingsession%28items_event_source_%29.md)
- [beginSheet(content:completionHandler:)](nswindow/beginsheet%28content_completionhandler_%29.md): Presents a SwiftUI view as a sheet on the receiving NSWindow.
- [endSheet(\_:)](nswindow/endsheet%28__%29-6af2u.md): Ends a SwiftUI hosted sheet presentation.
- [requestSharingOfWindow(\_:completionHandler:)](nswindow/requestsharingofwindow%28__completionhandler_%29.md)
- [requestSharingOfWindow(usingPreview:title:completionHandler:)](nswindow/requestsharingofwindow%28usingpreview_title_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSResponder](nsresponder.md)

### Inherited By

- [NSPanel](nspanel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](nstouchbarprovider.md)
- [NSUserActivityRestoring](nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)

## See Also

### Windows

- [NSPanel](nspanel.md): A special kind of window that typically performs a function that is auxiliary to the main window.
- [NSWindowDelegate](nswindowdelegate.md): A set of optional methods that a window’s delegate can implement to respond to events, such as window resizing, moving, exposing, and minimizing.
- [NSWindowTab](nswindowtab.md): A tab associated with a window that is part of a tabbing group.
- [NSWindowTabGroup](nswindowtabgroup.md): A group of windows that display together as a single tabbed window.

# NSWindow (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS

A window that an app displays on the screen.

## Declaration

```objectivec
@interface NSWindow : NSResponder
```

<a id="overview"></a>

## Overview

A single [NSWindow](nswindow.md) object corresponds to, at most, one on-screen window. Windows perform two principal functions:

- To place views in a provided area
- To accept and distribute mouse and keyboard events the user generates to the appropriate views

> **Note**

>  Although the [NSWindow](nswindow.md) class inherits the [NSCoding](https://developer.apple.com/documentation/foundation/nscoding) protocol from [NSResponder](nsresponder.md), the class doesn’t support coding. Legacy support for archivers exists, but its use is deprecated and may not work. Any attempt to archive or unarchive a window object using a keyed coding object raises an [NSInvalidArgumentException](https://developer.apple.com/documentation/foundation/nsexceptionname/invalidargumentexception) exception. For details about window restoration, see [restorationClass](nswindow/restorationclass.md).

## Topics

### Creating a Window

- [windowWithContentViewController:](nswindow/init%28contentviewcontroller_%29.md): Creates a titled window that contains the specified content view controller.
- [initWithContentRect:styleMask:backing:defer:](nswindow/init%28contentrect_stylemask_backing_defer_%29.md): Initializes the window with the specified values.
- [initWithContentRect:styleMask:backing:defer:screen:](nswindow/init%28contentrect_stylemask_backing_defer_screen_%29.md): Initializes an allocated window with the specified values.

### Managing the Window’s Behavior

- [delegate](nswindow/delegate.md): The window’s delegate.
- [NSWindowDelegate](nswindowdelegate.md): A set of optional methods that a window’s delegate can implement to respond to events, such as window resizing, moving, exposing, and minimizing.

### Configuring the Window’s Content

- [contentViewController](nswindow/contentviewcontroller.md): The main content view controller for the window.
- [contentView](nswindow/contentview.md): The window’s content view, the highest accessible view object in the window’s view hierarchy.

### Configuring the Window’s Appearance

- [styleMask](nswindow/stylemask-swift.property.md): Flags that describe the window’s current style, such as if it’s resizable or in full-screen mode.
- [NSWindowStyleMask](nswindow/stylemask-swift.struct.md): Constants that specify the style of a window, and that you can combine with the C bitwise OR operator.
- [toggleFullScreen:](nswindow/togglefullscreen%28__%29.md): Takes the window into or out of fullscreen mode,
- [worksWhenModal](nswindow/workswhenmodal.md): A Boolean value that indicates whether the window is able to receive keyboard and mouse events even when some other window is being run modally.
- [alphaValue](nswindow/alphavalue.md): The window’s alpha value.
- [backgroundColor](nswindow/backgroundcolor.md): The color of the window’s background.
- [colorSpace](nswindow/colorspace.md): The window’s color space.
- [setDynamicDepthLimit:](nswindow/setdynamicdepthlimit%28__%29.md): Sets a Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [canHide](nswindow/canhide.md): A Boolean value that indicates whether the window can hide when its application becomes hidden.
- [onActiveSpace](nswindow/isonactivespace.md): A Boolean value that indicates whether the window is on the currently active space.
- [hidesOnDeactivate](nswindow/hidesondeactivate.md): A Boolean value that indicates whether the window is removed from the screen when its application becomes inactive.
- [collectionBehavior](nswindow/collectionbehavior-swift.property.md): A value that identifies the window’s behavior in window collections.
- [opaque](nswindow/isopaque.md): A Boolean value that indicates whether the window is opaque.
- [hasShadow](nswindow/hasshadow.md): A Boolean value that indicates whether the window has a shadow.
- [invalidateShadow](nswindow/invalidateshadow%28%29.md): Invalidates the window shadow so that it is recomputed based on the current window shape.
- [autorecalculatesContentBorderThicknessForEdge:](nswindow/autorecalculatescontentborderthickness%28for_%29.md): Indicates whether the window calculates the thickness of a given border automatically.
- [setAutorecalculatesContentBorderThickness:forEdge:](nswindow/setautorecalculatescontentborderthickness%28__for_%29.md): Specifies whether the window calculates the thickness of a given border automatically.
- [contentBorderThicknessForEdge:](nswindow/contentborderthickness%28for_%29.md): Indicates the thickness of a given border of the window.
- [setContentBorderThickness:forEdge:](nswindow/setcontentborderthickness%28__for_%29.md): Specifies the thickness of a given border of the window.
- [preventsApplicationTerminationWhenModal](nswindow/preventsapplicationterminationwhenmodal.md): A Boolean value that indicates whether the window prevents application termination when modal.
- [appearanceSource](nswindow/appearancesource.md): An object that the window inherits its appearance from.

### Accessing Window Information

- [depthLimit](nswindow/depthlimit.md): The depth limit of the window.
- [hasDynamicDepthLimit](nswindow/hasdynamicdepthlimit.md): A Boolean value that indicates whether the window’s depth limit can change to match the depth of the screen it’s on.
- [defaultDepthLimit](nswindow/defaultdepthlimit.md): Returns the default depth limit for instances of `NSWindow`.
- [windowNumber](nswindow/windownumber.md): The window number of the window’s window device.
- [windowNumbersWithOptions:](nswindow/windownumbers%28options_%29.md): Returns the window numbers for all visible windows satisfying the specified options.
- [deviceDescription](nswindow/devicedescription.md): A dictionary containing information about the window’s resolution, such as color, depth, and so on.
- [NSDeviceDescriptionKey](nsdevicedescriptionkey.md): These constants are the keys for device description dictionaries.
- [canBecomeVisibleWithoutLogin](nswindow/canbecomevisiblewithoutlogin.md): A Boolean value that indicates whether the window can be displayed at the login window.
- [sharingType](nswindow/sharingtype-swift.property.md): A Boolean value that indicates the level of access other processes have to the window’s content.
- [backingType](nswindow/backingtype.md): The window’s backing store type.
- [displayLinkWithTarget:selector:](nswindow/displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the window is on.

### Getting Layout Information

- [contentRectForFrameRect:styleMask:](nswindow/contentrect%28forframerect_stylemask_%29.md): Returns the content rectangle used by a window with a given frame rectangle and window style.
- [frameRectForContentRect:styleMask:](nswindow/framerect%28forcontentrect_stylemask_%29.md): Returns the frame rectangle used by a window with a given content rectangle and window style.
- [minFrameWidthWithTitle:styleMask:](nswindow/minframewidth%28withtitle_stylemask_%29.md): Returns the minimum width a window’s frame rectangle must have for it to display a title, with a given window style.
- [contentRectForFrameRect:](nswindow/contentrect%28forframerect_%29.md): Returns the window’s content rectangle with a given frame rectangle.
- [frameRectForContentRect:](nswindow/framerect%28forcontentrect_%29.md): Returns the window’s frame rectangle with a given content rectangle.

### Managing Windows

- [windowController](nswindow/windowcontroller.md): The window’s window controller.

### Managing Sheets

- [attachedSheet](nswindow/attachedsheet.md): The sheet attached to the window.
- [sheet](nswindow/issheet.md): A Boolean value that indicates whether the window has ever run as a modal sheet.
- [beginSheet:completionHandler:](nswindow/beginsheet%28__completionhandler_%29.md): Starts a document-modal session and presents—or queues for presentation—a sheet.
- [beginCriticalSheet:completionHandler:](nswindow/begincriticalsheet%28__completionhandler_%29.md): Starts a document-modal session and presents the specified critical sheet.
- [endSheet:](nswindow/endsheet%28__%29-4dmmq.md): Ends a document-modal session and dismisses the specified sheet.
- [endSheet:returnCode:](nswindow/endsheet%28__returncode_%29.md): Ends a document-modal session and dismisses the specified sheet.
- [sheetParent](nswindow/sheetparent.md): The window to which the sheet is attached.
- [sheets](nswindow/sheets.md): An array of the sheets currently attached to the window.

### Sizing Windows

- [frame](nswindow/frame.md): The window’s frame rectangle in screen coordinates, including the title bar.
- [setFrameOrigin:](nswindow/setframeorigin%28__%29.md): Positions the bottom-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [setFrameTopLeftPoint:](nswindow/setframetopleftpoint%28__%29.md): Positions the top-left corner of the window’s frame rectangle at a given point in screen coordinates.
- [constrainFrameRect:toScreen:](nswindow/constrainframerect%28__to_%29.md): Modifies and returns a frame rectangle so that its top edge lies on a specific screen.
- [cascadeTopLeftFromPoint:](nswindow/cascadetopleft%28from_%29.md): Positions the window’s top-left to a given point.
- [setFrame:display:](nswindow/setframe%28__display_%29.md): Sets the origin and size of the window’s frame rectangle according to a given frame rectangle, thereby setting its position and size onscreen.
- [setFrame:display:animate:](nswindow/setframe%28__display_animate_%29.md): Sets the origin and size of the window’s frame rectangle, with optional animation, according to a given frame rectangle, thereby setting its position and size onscreen.
- [animationResizeTime:](nswindow/animationresizetime%28__%29.md): Specifies the duration of a smooth frame-size change.
- [aspectRatio](nswindow/aspectratio.md): The window’s aspect ratio, which constrains the size of its frame rectangle to integral multiples of this ratio when the user resizes it.
- [minSize](nswindow/minsize.md): The minimum size to which the window’s frame (including its title bar) can be sized.
- [maxSize](nswindow/maxsize.md): The maximum size to which the window’s frame (including its title bar) can be sized.
- [zoomed](nswindow/iszoomed.md): A Boolean value that indicates whether the window is in a zoomed state.
- [performZoom:](nswindow/performzoom%28__%29.md): This action method simulates the user clicking the zoom box by momentarily highlighting the button and then zooming the window.
- [zoom:](nswindow/zoom%28__%29.md): Toggles the size and location of the window between its standard state (which the application provides as the best size to display the window’s data) and its user state (a new size and location the user may have set by moving or resizing the window).
- [resizeFlags](nswindow/resizeflags.md): The flags field of the event record for the mouse-down event that initiated the resizing session.
- [resizeIncrements](nswindow/resizeincrements.md): The window’s resizing increments.
- [preservesContentDuringLiveResize](nswindow/preservescontentduringliveresize.md): A Boolean value that indicates whether the window tries to optimize user-initiated resize operations by preserving the content of views that have not changed.
- [inLiveResize](nswindow/inliveresize.md): A Boolean value that indicates whether the window is being resized by the user.

### Sizing Content

- [contentAspectRatio](nswindow/contentaspectratio.md): The window’s content aspect ratio.
- [contentMinSize](nswindow/contentminsize.md): The minimum size of the window’s content view in the window’s base coordinate system.
- [setContentSize:](nswindow/setcontentsize%28__%29.md): Sets the size of the window’s content view to a given size, which is expressed in the window’s base coordinate system.
- [contentMaxSize](nswindow/contentmaxsize.md): The maximum size of the window’s content view in the window’s base coordinate system.
- [contentResizeIncrements](nswindow/contentresizeincrements.md): The window’s content-view resizing increments.
- [contentLayoutGuide](nswindow/contentlayoutguide.md): A value used by Auto Layout constraints to automatically bind to the value of [contentLayoutRect](nswindow/contentlayoutrect.md).
- [contentLayoutRect](nswindow/contentlayoutrect.md): The area inside the window that is for non-obscured content, in window coordinates.
- [maxFullScreenContentSize](nswindow/maxfullscreencontentsize.md): A maximum size that is used to determine if a window can fit when it is in full screen in a tile.
- [minFullScreenContentSize](nswindow/minfullscreencontentsize.md): A minimum size that is used to determine if a window can fit when it is in full screen in a tile.

### Managing Window Layers

- [orderOut:](nswindow/orderout%28__%29.md): Removes the window from the screen list, which hides the window.
- [orderBack:](nswindow/orderback%28__%29.md): Moves the window to the back of its level in the screen list, without changing either the key window or the main window.
- [orderFront:](nswindow/orderfront%28__%29.md): Moves the window to the front of its level in the screen list, without changing either the key window or the main window.
- [orderFrontRegardless](nswindow/orderfrontregardless%28%29.md): Moves the window to the front of its level, even if its application isn’t active, without changing either the key window or the main window.
- [orderWindow:relativeTo:](nswindow/order%28__relativeto_%29.md): Repositions the window’s window device in the window server’s screen list.
- [level](nswindow/level-swift.property.md): The window level of the window.
- [NSWindowLevel](nswindow/level-swift.struct.md): The standard window levels in macOS.

### Managing Window Visibility and Occlusion State

- [visible](nswindow/isvisible.md): A Boolean value that indicates whether the window is visible onscreen (even when it’s obscured by other windows).
- [occlusionState](nswindow/occlusionstate-swift.property.md): The occlusion state of the window.

### Managing Window Frames in User Defaults

- [removeFrameUsingName:](nswindow/removeframe%28usingname_%29.md): Removes the frame data stored under a given name from the application’s user defaults.
- [setFrameUsingName:](nswindow/setframeusingname%28__%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system.
- [setFrameUsingName:force:](nswindow/setframeusingname%28__force_%29.md): Sets the window’s frame rectangle by reading the rectangle data stored under a given name from the defaults system. Can operate on non-resizable windows.
- [saveFrameUsingName:](nswindow/saveframe%28usingname_%29.md): Saves the window’s frame rectangle in the user defaults system under a given name.
- [setFrameAutosaveName:](nswindow/setframeautosavename%28__%29.md): Sets the name AppKit uses to automatically save the window’s frame rectangle data in the defaults system.
- [frameAutosaveName](nswindow/frameautosavename-swift.property.md): The name used to automatically save the window’s frame rectangle data in the defaults system.
- [NSWindowFrameAutosaveName](nswindow/frameautosavename-swift.typealias.md): The type of a window’s frame autosave name.
- [stringWithSavedFrame](nswindow/framedescriptor.md): A string representation of the window’s frame rectangle.
- [setFrameFromString:](nswindow/setframe%28from_%29.md): Sets the window’s frame rectangle from a given string representation.
- [NSWindowPersistableFrameDescriptor](nswindow/persistableframedescriptor.md): The type of a window’s frame descriptor.

### Managing Key Status

- [keyWindow](nswindow/iskeywindow.md): A Boolean value that indicates whether the window is the key window for the application.
- [canBecomeKeyWindow](nswindow/canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyWindow](nswindow/makekey%28%29.md): Makes the window the key window.
- [makeKeyAndOrderFront:](nswindow/makekeyandorderfront%28__%29.md): Moves the window to the front of the screen list, within its level, and makes it the key window; that is, it shows the window.
- [becomeKeyWindow](nswindow/becomekey%28%29.md): Informs the window that it has become the key window.
- [resignKeyWindow](nswindow/resignkey%28%29.md): Resigns the window’s key window status.

### Managing Main Status

- [mainWindow](nswindow/ismainwindow.md): A Boolean value that indicates whether the window is the application’s main window.
- [canBecomeMainWindow](nswindow/canbecomemain.md): A Boolean value that indicates whether the window can become the application’s main window.
- [makeMainWindow](nswindow/makemain%28%29.md): Makes the window the main window.
- [becomeMainWindow](nswindow/becomemain%28%29.md): Informs the window that it has become the main window.
- [resignMainWindow](nswindow/resignmain%28%29.md): Resigns the window’s main window status.

### Managing Toolbars

- [toolbar](nswindow/toolbar.md): The window’s toolbar.
- [toggleToolbarShown:](nswindow/toggletoolbarshown%28__%29.md): Toggles the visibility of the window’s toolbar.
- [runToolbarCustomizationPalette:](nswindow/runtoolbarcustomizationpalette%28__%29.md): Presents the toolbar customization user interface.

### Managing Attached Windows

- [childWindows](nswindow/childwindows.md): An array of the window’s attached child windows.
- [addChildWindow:ordered:](nswindow/addchildwindow%28__ordered_%29.md): Adds a given window as a child window of the window.
- [removeChildWindow:](nswindow/removechildwindow%28__%29.md): Detaches a given child window from the window.
- [parentWindow](nswindow/parent.md): The parent window to which the window is attached as a child.

### Managing Default Buttons

- [defaultButtonCell](nswindow/defaultbuttoncell.md): The button cell that performs as if clicked when the window receives a Return (or Enter) key event.
- [enableKeyEquivalentForDefaultButtonCell](nswindow/enablekeyequivalentfordefaultbuttoncell%28%29.md): Reenables the default button cell’s key equivalent, so it performs a click when the user presses Return (or Enter).
- [disableKeyEquivalentForDefaultButtonCell](nswindow/disablekeyequivalentfordefaultbuttoncell%28%29.md): Disables the default button cell’s key equivalent, so it doesn’t perform a click when the user presses Return (or Enter).

### Managing Field Editors

- [fieldEditor:forObject:](nswindow/fieldeditor%28__for_%29.md): Returns the window’s field editor, creating it if requested.
- [endEditingFor:](nswindow/endediting%28for_%29.md): Forces the field editor to give up its first responder status and prepares it for its next assignment.

### Managing the Window Menu

- [excludedFromWindowsMenu](nswindow/isexcludedfromwindowsmenu.md): A Boolean value that indicates whether the window is excluded from the application’s Windows menu.

### Managing Cursor Rectangles

- [areCursorRectsEnabled](nswindow/arecursorrectsenabled.md): A Boolean value that indicates whether the window’s cursor rectangles are enabled.
- [enableCursorRects](nswindow/enablecursorrects%28%29.md): Reenables cursor rectangle management within the window after a [disableCursorRects](nswindow/disablecursorrects%28%29.md) message.
- [disableCursorRects](nswindow/disablecursorrects%28%29.md): Disables all cursor rectangle management within the window.
- [discardCursorRects](nswindow/discardcursorrects%28%29.md): Invalidates all cursor rectangles in the window.
- [invalidateCursorRectsForView:](nswindow/invalidatecursorrects%28for_%29.md): Marks as invalid the cursor rectangles of a given view object in the window, so they’ll be set up again when the window becomes key.
- [resetCursorRects](nswindow/resetcursorrects%28%29.md): Clears the window’s cursor rectangles and the cursor rectangles of the [NSView](nsview.md) objects in its view hierarchy.

### Managing Title Bars

- [standardWindowButton:forStyleMask:](nswindow/standardwindowbutton%28__for_%29.md): Returns a new instance of a given standard window button, sized appropriately for a given window style.
- [standardWindowButton:](nswindow/standardwindowbutton%28__%29.md): Returns the window button of a given window button kind in the window’s view hierarchy.
- [showsToolbarButton](nswindow/showstoolbarbutton.md): Deprecated. A Boolean value that indicates whether the toolbar control button is currently displayed.
- [titlebarAppearsTransparent](nswindow/titlebarappearstransparent.md): A Boolean value that indicates whether the title bar draws its background.
- [toolbarStyle](nswindow/toolbarstyle-swift.property.md): The style that determines the appearance and location of the toolbar in relation to the title bar.
- [NSWindowToolbarStyle](nswindow/toolbarstyle-swift.enum.md): Styles that determine the appearance and location of the toolbar in relation to the title bar.
- [titlebarSeparatorStyle](nswindow/titlebarseparatorstyle.md): The type of separator that the app displays between the title bar and content of a window.
- [NSTitlebarSeparatorStyle](nstitlebarseparatorstyle.md): Styles that determine the type of separator displayed between the title bar and content of a window.
- [windowTitlebarLayoutDirection](nswindow/windowtitlebarlayoutdirection.md): The direction the window’s title bar lays text out, either left to right or right to left.

### Managing Title Bar Accessories

- [addTitlebarAccessoryViewController:](nswindow/addtitlebaraccessoryviewcontroller%28__%29.md): Adds the specified title bar accessory view controller to the window.
- [insertTitlebarAccessoryViewController:atIndex:](nswindow/inserttitlebaraccessoryviewcontroller%28__at_%29.md): Inserts the view controller into the window’s array of title bar accessory view controllers at the specified index.
- [removeTitlebarAccessoryViewControllerAtIndex:](nswindow/removetitlebaraccessoryviewcontroller%28at_%29.md): Removes the view controller at the specified index from the window’s array of title bar accessory view controllers.
- [titlebarAccessoryViewControllers](nswindow/titlebaraccessoryviewcontrollers.md): An array of title bar accessory view controllers that are currently added to the window.

### Managing Window Tabs

- [allowsAutomaticWindowTabbing](nswindow/allowsautomaticwindowtabbing.md): A Boolean value that indicates whether the app can automatically organize windows into tabs.
- [userTabbingPreference](nswindow/usertabbingpreference-swift.type.property.md): A value that indicates the user’s preference for window tabbing.
- [tab](nswindow/tab.md): An object that represents information about a window when it displays as a tab.
- [tabbingIdentifier](nswindow/tabbingidentifier-swift.property.md): A value that allows a group of related windows.
- [NSWindowTabbingIdentifier](nswindow/tabbingidentifier-swift.typealias.md): A value that allows a group of related windows.
- [addTabbedWindow:ordered:](nswindow/addtabbedwindow%28__ordered_%29.md): Adds the provided window as a new tab in a tabbed window using the specified ordering instruction.
- [tabbingMode](nswindow/tabbingmode-swift.property.md): A value that indicates when a window displays tabs.
- [tabbedWindows](nswindow/tabbedwindows.md): An array of windows that display as tabs.
- [mergeAllWindows:](nswindow/mergeallwindows%28__%29.md): Merges all open windows into a single tabbed window.
- [selectNextTab:](nswindow/selectnexttab%28__%29.md): Selects the next tab in the tab group in the trailing direction.
- [selectPreviousTab:](nswindow/selectprevioustab%28__%29.md): Selects the previous tab in the tab group in the leading direction.
- [moveTabToNewWindow:](nswindow/movetabtonewwindow%28__%29.md): Moves the tab to a new containing window.
- [toggleTabBar:](nswindow/toggletabbar%28__%29.md): Shows or hides the tab bar.
- [toggleTabOverview:](nswindow/toggletaboverview%28__%29.md): Shows or hides the tab overview.
- [tabGroup](nswindow/tabgroup.md): A group of windows that display together as a tab group.

### Managing Tooltips

- [allowsToolTipsWhenApplicationIsInactive](nswindow/allowstooltipswhenapplicationisinactive.md): A Boolean value that indicates whether the window can display tooltips even when the application is in the background.

### Handling Events

- [currentEvent](nswindow/currentevent.md): The event currently being processed by the application.
- [nextEventMatchingMask:](nswindow/nextevent%28matching_%29.md): Returns the next event matching a given mask.
- [nextEventMatchingMask:untilDate:inMode:dequeue:](nswindow/nextevent%28matching_until_inmode_dequeue_%29.md): Forwards the message to the global application object.
- [discardEventsMatchingMask:beforeEvent:](nswindow/discardevents%28matching_before_%29.md): Forwards the message to the global application object.
- [postEvent:atStart:](nswindow/postevent%28__atstart_%29.md): Forwards the message to the global application object.
- [sendEvent:](nswindow/sendevent%28__%29.md): This action method dispatches mouse and keyboard events the global application object sends to the window.
- [tryToPerform:with:](nswindow/trytoperform%28__with_%29.md): Dispatches action messages with a given argument.

### Managing Responders

- [initialFirstResponder](nswindow/initialfirstresponder.md): The view that’s made first responder (also called the key view) the first time the window is placed onscreen.
- [firstResponder](nswindow/firstresponder.md): The window’s first responder.
- [makeFirstResponder:](nswindow/makefirstresponder%28__%29.md): Attempts to make a given responder the first responder for the window.

### Managing the Key View Loop

- [selectKeyViewPrecedingView:](nswindow/selectkeyview%28preceding_%29.md): Gives key view status to the view that precedes the given view.
- [selectKeyViewFollowingView:](nswindow/selectkeyview%28following_%29.md): Gives key view status to the view that follows the given view.
- [selectPreviousKeyView:](nswindow/selectpreviouskeyview%28__%29.md): Searches for a candidate previous key view and, if it finds one, tries to make it the first responder.
- [selectNextKeyView:](nswindow/selectnextkeyview%28__%29.md): Searches for a candidate next key view and, if it finds one, tries to make it the first responder.
- [keyViewSelectionDirection](nswindow/keyviewselectiondirection.md): The direction the window is currently using to change the key view.
- [autorecalculatesKeyViewLoop](nswindow/autorecalculateskeyviewloop.md): A Boolean value that indicates whether the window automatically recalculates the key view loop when views are added.
- [recalculateKeyViewLoop](nswindow/recalculatekeyviewloop%28%29.md): Marks the key view loop as “dirty” and in need of recalculation.

### Managing Window Sharing

- [transferWindowSharingToWindow:completionHandler:](nswindow/transferwindowsharing%28to_completionhandler_%29.md): Attempts to move window sharing (within a SharePlay session) from this window to another window.
- [hasActiveWindowSharingSession](nswindow/hasactivewindowsharingsession.md): Indicates whether the receiver is the subject of an active SharePlay sharing session.

### Handling Mouse Events

- [acceptsMouseMovedEvents](nswindow/acceptsmousemovedevents.md): A Boolean value that indicates whether the window accepts mouse-moved events.
- [ignoresMouseEvents](nswindow/ignoresmouseevents.md): A Boolean value that indicates whether the window is transparent to mouse events.
- [mouseLocationOutsideOfEventStream](nswindow/mouselocationoutsideofeventstream.md): The current location of the pointer reckoned in the window’s base coordinate system, regardless of the current event being handled or of any events pending.
- [windowNumberAtPoint:belowWindowWithWindowNumber:](nswindow/windownumber%28at_belowwindowwithwindownumber_%29.md): Returns the number of the frontmost window that would be hit by a mouse-down at the specified screen location.
- [trackEventsMatchingMask:timeout:mode:handler:](nswindow/trackevents%28matching_timeout_mode_handler_%29.md): Tracks events that match the specified mask using the specified tracking handler until the tracking handler explicitly terminates tracking.
- [performWindowDragWithEvent:](nswindow/performdrag%28with_%29.md): Starts a window drag based on the specified mouse-down event.
- [NSEventDurationForever](nsevent/foreverduration.md): The longest time duration possible.

### Handling Window Restoration

- [restorable](nswindow/isrestorable.md): A Boolean value indicating whether the window configuration is preserved between application launches.
- [restorationClass](nswindow/restorationclass.md): The restoration class associated with the window.
- [disableSnapshotRestoration](nswindow/disablesnapshotrestoration%28%29.md): Disables snapshot restoration.
- [enableSnapshotRestoration](nswindow/enablesnapshotrestoration%28%29.md): Enables snapshot restoration.

### Drawing Windows

- [display](nswindow/display%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views within the window.
- [displayIfNeeded](nswindow/displayifneeded%28%29.md): Passes a display message down the window’s view hierarchy, thus redrawing all views that need displaying.
- [viewsNeedDisplay](nswindow/viewsneeddisplay.md): A Boolean value that indicates whether any of the window’s views need to be displayed.
- [allowsConcurrentViewDrawing](nswindow/allowsconcurrentviewdrawing.md): A Boolean value that indicates whether the window allows multithreaded view drawing.

### Window Animation

- [animationBehavior](nswindow/animationbehavior-swift.property.md): The window’s automatic animation behavior.

### Updating Windows

- [disableScreenUpdatesUntilFlush](nswindow/disablescreenupdatesuntilflush%28%29.md): Deprecated. Disables the window’s screen updates until the window is flushed.
- [update](nswindow/update%28%29.md): Updates the window.

### Dragging Items

- [dragImage:at:offset:event:pasteboard:source:slideBack:](nswindow/drag%28__at_offset_event_pasteboard_source_slideback_%29.md): Deprecated. Begins a dragging session.
- [registerForDraggedTypes:](nswindow/registerfordraggedtypes%28__%29.md): Registers a set of pasteboard types that the window accepts as the destination of an image-dragging session.
- [unregisterDraggedTypes](nswindow/unregisterdraggedtypes%28%29.md): Unregisters the window as a possible destination for dragging operations.

### Accessing Edited Status

- [documentEdited](nswindow/isdocumentedited.md): A Boolean value that indicates whether the window’s document has been edited.

### Converting Coordinates

- [backingScaleFactor](nswindow/backingscalefactor.md): The backing scale factor.
- [backingAlignedRect:options:](nswindow/backingalignedrect%28__options_%29.md): Returns a backing store pixel-aligned rectangle in window coordinates.
- [convertRectFromBacking:](nswindow/convertfrombacking%28__%29.md): Converts a rectangle from its pixel-aligned backing store coordinate system to the window’s coordinate system.
- [convertRectFromScreen:](nswindow/convertfromscreen%28__%29.md): Converts a rectangle from the screen coordinate system to the window’s coordinate system.
- [convertPointFromBacking:](nswindow/convertpointfrombacking%28__%29.md): Converts a point from its pixel-aligned backing store coordinate system to the window’s coordinate system.
- [convertPointFromScreen:](nswindow/convertpoint%28fromscreen_%29.md): Converts a point from the screen coordinate system to the window’s coordinate system.
- [convertRectToBacking:](nswindow/converttobacking%28__%29.md): Converts a rectangle from the window’s coordinate system to its pixel-aligned backing store coordinate system.
- [convertRectToScreen:](nswindow/converttoscreen%28__%29.md): Converts a rectangle to the screen coordinate system from the window’s coordinate system.
- [convertPointToBacking:](nswindow/convertpointtobacking%28__%29.md): Converts a point from the window’s coordinate system to its pixel-aligned backing store coordinate system.
- [convertPointToScreen:](nswindow/convertpoint%28toscreen_%29.md): Converts a point to the screen coordinate system from the window’s coordinate system.

### Managing Titles

- [title](nswindow/title.md): The string that appears in the title bar of the window or the path to the represented file.
- [subtitle](nswindow/subtitle.md): A secondary line of text that appears in the title bar of the window.
- [titleVisibility](nswindow/titlevisibility-swift.property.md): A value that indicates the visibility of the window’s title and title bar buttons.
- [setTitleWithRepresentedFilename:](nswindow/settitlewithrepresentedfilename%28__%29.md): Sets a given path as the window’s title, formatting it as a file-system path, and records this path as the window’s associated file.
- [representedFilename](nswindow/representedfilename.md): The path to the file of the window’s represented file.
- [representedURL](nswindow/representedurl.md): The URL of the file the window represents.

### Accessing Screen Information

- [screen](nswindow/screen.md): The screen the window is on.
- [deepestScreen](nswindow/deepestscreen.md): The deepest screen the window is on (it may be split over several screens).
- [displaysWhenScreenProfileChanges](nswindow/displayswhenscreenprofilechanges.md): A Boolean value that indicates whether the window context should be updated when the screen profile changes or when the window moves to a different screen.

### Moving Windows

- [movableByWindowBackground](nswindow/ismovablebywindowbackground.md): A Boolean value that indicates whether the window is movable by clicking and dragging anywhere in its background.
- [movable](nswindow/ismovable.md): A Boolean value that indicates whether the window can be dragged by clicking in its title bar or background.
- [center](nswindow/center%28%29.md): Sets the window’s location to the center of the screen.

### Closing Windows

- [performClose:](nswindow/performclose%28__%29.md): Simulates the user clicking the close button by momentarily highlighting the button and then closing the window.
- [close](nswindow/close%28%29.md): Removes the window from the screen.
- [releasedWhenClosed](nswindow/isreleasedwhenclosed.md): A Boolean value that indicates whether the window is released when it receives the `close` message.

### Minimizing Windows

- [miniaturized](nswindow/isminiaturized.md): A Boolean value that indicates whether the window is minimized.
- [performMiniaturize:](nswindow/performminiaturize%28__%29.md): Simulates the user clicking the minimize button by momentarily highlighting the button, then minimizing the window.
- [miniaturize:](nswindow/miniaturize%28__%29.md): Removes the window from the screen list and displays the minimized window in the Dock.
- [deminiaturize:](nswindow/deminiaturize%28__%29.md): De-minimizes the window.
- [miniwindowImage](nswindow/miniwindowimage.md): The custom miniaturized window image of the window.
- [miniwindowTitle](nswindow/miniwindowtitle.md): The title displayed in the window’s minimized window.

### Getting the Dock Tile

- [dockTile](nswindow/docktile.md): The application’s Dock tile.

### Printing Windows

- [print:](nswindow/printwindow%28__%29.md): Runs the Print panel, and if the user chooses an option other than canceling, prints the window (its frame view and all subviews).
- [dataWithEPSInsideRect:](nswindow/datawitheps%28inside_%29.md): Returns EPS data that draws the region of the window within a given rectangle.
- [dataWithPDFInsideRect:](nswindow/datawithpdf%28inside_%29.md): Returns PDF data that draws the region of the window within a given rectangle.

### Providing Services

- [validRequestorForSendType:returnType:](nswindow/validrequestor%28forsendtype_returntype_%29.md): Searches for an object that responds to a Services request.

### Triggering Constraint-Based Layout

- [updateConstraintsIfNeeded](nswindow/updateconstraintsifneeded%28%29.md): Updates the constraints based on changes to views in the window since the last layout.
- [layoutIfNeeded](nswindow/layoutifneeded%28%29.md): Updates the layout of views in the window based on the current views and constraints.

### Debugging Constraint-Based Layout

See https://developer.apple.com/library/archive/releasenotes/UserExperience/RNAutomaticLayout/index.html#//apple_ref/doc/uid/TP40010631 for more details on debugging constraint-based layout.

- [visualizeConstraints:](nswindow/visualizeconstraints%28__%29.md): Displays a visual representation of the supplied constraints in the window.

### Constraint-Based Layouts

- [anchorAttributeForOrientation:](nswindow/anchorattribute%28for_%29.md): Returns the part of the window that stays stationary during constraint-based layout.
- [setAnchorAttribute:forOrientation:](nswindow/setanchorattribute%28__for_%29.md): Sets the part of the window that stays stationary during constraint-based layout.

### Working with Window Depths

- [NSAvailableWindowDepths](nsavailablewindowdepths.md): Returns the available window depth values.
- [NSBestDepth](nsbestdepth.md): Attempts to return a window depth adequate for the specified parameters.
- [NSBitsPerPixelFromDepth](nswindow/depth/bitsperpixel.md): Returns the bits per pixel for the specified window depth.
- [NSBitsPerSampleFromDepth](nswindow/depth/bitspersample.md): Returns the bits per sample for the specified window depth.
- [NSColorSpaceFromDepth](nswindow/depth/colorspacename.md): Returns the name of the color space corresponding to the passed window depth.
- [NSNumberOfColorComponents](nscolorspacename/numberofcolorcomponents.md): Returns the number of color components in the specified color space.
- [NSPlanarFromDepth](nswindow/depth/isplanar.md): Returns whether the specified window depth is planar.
- [canRepresentDisplayGamut:](nswindow/canrepresent%28__%29.md): A Boolean value that indicates if the window and its screen use a color space that can represent the specified display gamut.

### Getting Information About Scripting Attributes

- [hasCloseBox](nswindow/hasclosebox.md): A Boolean value that indicates if the window has a close box.
- [hasTitleBar](nswindow/hastitlebar.md): A Boolean value that indicates if the window has a title bar.
- [modalPanel](nswindow/ismodalpanel.md): A Boolean value that indicates whether the window is a modal panel.
- [floatingPanel](nswindow/isfloatingpanel.md): A Boolean value that indicates whether the window is a floating panel.
- [zoomable](nswindow/iszoomable.md): A Boolean value that indicates whether the window allows zooming.
- [resizable](nswindow/isresizable.md): A Boolean value that indicates if the user can resize the window.
- [miniaturizable](nswindow/isminiaturizable.md): A Boolean value that indicates whether the window can minimize.
- [orderedIndex](nswindow/orderedindex.md): The zero-based position of the window, based on its order from front to back among all visible application windows.

### Setting Scripting Attributes

- [setIsMiniaturized:](nswindow/setisminiaturized%28__%29.md): Sets the window’s miniaturized state to the value you specify.
- [setIsVisible:](nswindow/setisvisible%28__%29.md): Sets the window’s visible state to the value you specify.
- [setIsZoomed:](nswindow/setiszoomed%28__%29.md): Sets the window’s zoomed state to the value you specify.

### Handling Script Commands

- [handleCloseScriptCommand:](nswindow/handleclose%28__%29.md): Handles the AppleScript command to close the window (and its associated document, if any).
- [handlePrintScriptCommand:](nswindow/handleprint%28__%29.md): Handles the AppleScript command to print the contents of the window (or its associated document, if any).
- [handleSaveScriptCommand:](nswindow/handlesave%28__%29.md): Handles the AppleScript command to save the window (and its associated document, if any).

### Constants

- [NSSelectionDirection](nswindow/selectiondirection.md): Constants that specify the direction a window is currently using to change the key view.
- [NSWindowButton](nswindow/buttontype.md): Constants that provide a way to access standard title bar buttons.
- [NSRunLoop—Ordering Modes for NSWindow](nsrunloop-ordering-modes-for-nsw.md): Constants that specify the priority for runloop messages.
- [NSWindowDepth](nswindow/depth.md): A type that represents the depth, or amount of memory, for a single pixel in a window or screen.
- [NSBackingStoreType](nswindow/backingstoretype.md): Constants that specify how the window device buffers the drawing done in a window.
- [NSWindowOrderingMode](nswindow/orderingmode.md): Constants that let you specify how a window is ordered relative to another window.
- [NSWindowSharingType](nswindow/sharingtype-swift.enum.md): Constants that represent the access levels other processes can have to a window’s content.
- [NSWindowNumberListOptions](nswindow/numberlistoptions.md): Options to use when retrieving window numbers from the system.
- [NSWindowAnimationBehavior](nswindow/animationbehavior-swift.enum.md): Constants that control the automatic window animation behavior windows use when ordering to the front or out of view.
- [NSWindowCollectionBehavior](nswindow/collectionbehavior-swift.struct.md): Window collection behaviors related to Mission Control, Spaces, and Stage Manager.
- [NSWindowOcclusionState](nswindow/occlusionstate-swift.struct.md): Specifies whether the window is occluded.
- [NSWindowTitleVisibility](nswindow/titlevisibility-swift.enum.md): Specifies the appearance of the window’s title bar area.
- [NSWindowUserTabbingPreference](nswindow/usertabbingpreference-swift.enum.md): A value that indicates the user’s preference for window tabbing.
- [NSWindowTabbingMode](nswindow/tabbingmode-swift.enum.md): The preferred tabbing behavior of a window.
- [Application Kit Version for Deferred Window Display Support](application-kit-version-for-deferred-window-display-support.md): The version of the AppKit.framework containing a specific bug fix or capability.
- [Application Kit Version for Custom Sheet Position](application-kit-version-for-custom-sheet-position.md): The version of the AppKit.framework containing a specific bug fix or capability.
- [NSWindowDidChangeBackingPropertiesNotification User Info Properties](nswindowdidchangebackingpropertiesnotification-user-info-properties.md): Constants that represent values in the user info dictionary of the `didChangeBackingPropertiesNotification` notification.

### Notifications

- [NSWindowDidBecomeKeyNotification](nswindow/didbecomekeynotification.md): A notification that the window object became the key window.
- [NSWindowDidBecomeMainNotification](nswindow/didbecomemainnotification.md): A notification that the window object became the main window.
- [NSWindowDidChangeScreenNotification](nswindow/didchangescreennotification.md): A notification that a portion of the window object’s frame moved onto or off of a screen.
- [NSWindowDidChangeScreenProfileNotification](nswindow/didchangescreenprofilenotification.md): A notification that the screen containing the window changed.
- [NSWindowDidDeminiaturizeNotification](nswindow/diddeminiaturizenotification.md): A notification that the window is no longer minimized.
- [NSWindowDidEndSheetNotification](nswindow/didendsheetnotification.md): A notification that the window object closed an attached sheet.
- [NSWindowDidEndLiveResizeNotification](nswindow/didendliveresizenotification.md): A notification that the user resized the window object.
- [NSWindowDidExposeNotification](nswindow/didexposenotification.md): A notification that a window exposed a portion of its nonretained content.
- [NSWindowDidMiniaturizeNotification](nswindow/didminiaturizenotification.md): A notification that the window object minimized.
- [NSWindowDidMoveNotification](nswindow/didmovenotification.md): A notification that the window object moved.
- [NSWindowDidResignKeyNotification](nswindow/didresignkeynotification.md): A notification that the window object resigned its status as key window.
- [NSWindowDidResignMainNotification](nswindow/didresignmainnotification.md): A notification that the window object resigned its status as main window.
- [NSWindowDidResizeNotification](nswindow/didresizenotification.md): A notification that the window object size changed.
- [NSWindowDidUpdateNotification](nswindow/didupdatenotification.md): A notification that the window object received an update message.
- [NSWindowWillBeginSheetNotification](nswindow/willbeginsheetnotification.md): A notification that the window object is about to open a sheet.
- [NSWindowWillCloseNotification](nswindow/willclosenotification.md): A notification that the window object is about to close.
- [NSWindowWillMiniaturizeNotification](nswindow/willminiaturizenotification.md): A notification that the window object is about to minimize.
- [NSWindowWillMoveNotification](nswindow/willmovenotification.md): A notification that the window object is about to move.
- [NSWindowWillStartLiveResizeNotification](nswindow/willstartliveresizenotification.md): A notification that the user is about to resize the window.
- [NSWindowWillEnterFullScreenNotification](nswindow/willenterfullscreennotification.md): A notification that the window will enter full-screen mode.
- [NSWindowDidEnterFullScreenNotification](nswindow/didenterfullscreennotification.md): A notification that the window entered full-screen mode.
- [NSWindowWillExitFullScreenNotification](nswindow/willexitfullscreennotification.md): A notification that the window object will exit full-screen mode.
- [NSWindowDidExitFullScreenNotification](nswindow/didexitfullscreennotification.md): A notification that the window object exited full-screen mode.
- [NSWindowWillEnterVersionBrowserNotification](nswindow/willenterversionbrowsernotification.md): A notification that the window object will enter version browser mode.
- [NSWindowDidEnterVersionBrowserNotification](nswindow/didenterversionbrowsernotification.md): A notification that the window object entered version browser mode.
- [NSWindowWillExitVersionBrowserNotification](nswindow/willexitversionbrowsernotification.md): A notification that the window object will exit version browser mode.
- [NSWindowDidExitVersionBrowserNotification](nswindow/didexitversionbrowsernotification.md): A notification that the window object exited version browser mode.
- [NSWindowDidChangeBackingPropertiesNotification](nswindow/didchangebackingpropertiesnotification.md): A notification that the window object backing properties changed.
- [NSWindowDidChangeOcclusionStateNotification](nswindow/didchangeocclusionstatenotification.md): A notification that the window object’s occlusion state changed.

### Deprecated

- [Deprecated Symbols](nswindow-deprecated-symbols.md): Review unsupported symbols and their replacements.

### Instance Properties

- [cascadingReferenceFrame](nswindow/cascadingreferenceframe.md)

### Instance Methods

- [beginDraggingSessionWithItems:event:source:](nswindow/begindraggingsession%28items_event_source_%29.md)
- [requestSharingOfWindow:completionHandler:](nswindow/requestsharingofwindow%28__completionhandler_%29.md)
- [requestSharingOfWindowUsingPreview:title:completionHandler:](nswindow/requestsharingofwindow%28usingpreview_title_completionhandler_%29.md)

## Relationships

### Inherits From

- [NSResponder](nsresponder.md)

### Inherited By

- [NSPanel](nspanel.md)

### Conforms To

- [NSAccessibility](nsaccessibilityprotocol.md)
- [NSAccessibilityElement](nsaccessibilityelementprotocol.md)
- [NSAnimatablePropertyContainer](nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](nsappearancecustomization.md)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSUserInterfaceItemIdentification](nsuserinterfaceitemidentification.md)
- [NSUserInterfaceValidations](nsuserinterfacevalidations.md)

## See Also

### Windows

- [NSPanel](nspanel.md): A special kind of window that typically performs a function that is auxiliary to the main window.
- [NSWindowDelegate](nswindowdelegate.md): A set of optional methods that a window’s delegate can implement to respond to events, such as window resizing, moving, exposing, and minimizing.
- [NSWindowTab](nswindowtab.md): A tab associated with a window that is part of a tabbing group.
- [NSWindowTabGroup](nswindowtabgroup.md): A group of windows that display together as a single tabbed window.
