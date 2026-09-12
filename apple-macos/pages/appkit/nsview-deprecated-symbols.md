> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview-deprecated-symbols](https://developer.apple.com/documentation/appkit/nsview-deprecated-symbols)

# Deprecated Symbols (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Methods

- [lockFocus()](nsview/lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.
- [lockFocusIfCanDraw()](nsview/lockfocusifcandraw%28%29.md): Deprecated. Locks the focus to the view atomically if the `canDraw` method returns `true` and returns the value of `canDraw`.
- [lockFocusIfCanDraw(in:)](nsview/lockfocusifcandraw%28in_%29.md): Deprecated. Locks the focus to the view atomically if drawing can occur in the specified graphics context.
- [unlockFocus()](nsview/unlockfocus%28%29.md): Deprecated. Unlocks focus from the current view.
- [scroll(\_:by:)](nsview/scroll%28__by_%29.md): Deprecated. Copies the visible portion of the view’s rendered image within a region and lays that portion down again at a specified offset .
- [shouldDrawColor()](nsview/shoulddrawcolor%28%29.md): Deprecated. Returns a Boolean value indicating whether the view is being drawn to an environment that supports color.
- [allocateGState()](nsview/allocategstate%28%29.md): Deprecated. Causes the view to maintain a private graphics state object, which encapsulates all parameters of the graphics environment.
- [gState()](nsview/gstate%28%29.md): Deprecated. Returns the identifier for the view’s graphics state object, or 0 if the view doesn’t have a graphics state object.
- [setUpGState()](nsview/setupgstate%28%29.md): Deprecated. Overridden by subclasses to (re)initialize the view’s graphics state object.
- [renewGState()](nsview/renewgstate%28%29.md): Deprecated. Invalidates the view’s graphics state object, if it has one.
- [releaseGState()](nsview/releasegstate%28%29.md): Deprecated. Frees the view’s graphics state object, if it has one.
- [dragFile(\_:from:slideBack:event:)](nsview/dragfile%28__from_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag a file icon to any application that has window or view objects that accept files.
- [dragPromisedFiles(ofTypes:from:source:slideBack:event:)](nsview/dragpromisedfiles%28oftypes_from_source_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag one or more promised files (or directories) into any application that has window or view objects that accept promised file data.

### Properties

- [wantsExtendedDynamicRangeOpenGLSurface](nsview/wantsextendeddynamicrangeopenglsurface.md): Deprecated.
- [acceptsTouchEvents](nsview/acceptstouchevents.md): Deprecated. A Boolean value indicating whether the view accepts touch events.
- [canDraw](nsview/candraw.md): Deprecated. A Boolean value indicating whether drawing commands will produce any results.
- [wantsBestResolutionOpenGLSurface](nsview/wantsbestresolutionopenglsurface.md): Deprecated. A Boolean value indicating whether the view wants an OpenGL backing surface with a resolution greater than 1 pixel per point.

### Notifications

- [globalFrameDidChangeNotification](nsview/globalframedidchangenotification.md): Deprecated. Posted whenever an `NSView` object that has attached surfaces (that is, `NSOpenGLContext` objects) moves to a different screen, or other cases where the `NSOpenGLContext` object needs to be updated.

# Deprecated Symbols (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Review unsupported symbols and their replacements.

## Topics

### Methods

- [lockFocus](nsview/lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.
- [lockFocusIfCanDraw](nsview/lockfocusifcandraw%28%29.md): Deprecated. Locks the focus to the view atomically if the `canDraw` method returns `true` and returns the value of `canDraw`.
- [lockFocusIfCanDrawInContext:](nsview/lockfocusifcandraw%28in_%29.md): Deprecated. Locks the focus to the view atomically if drawing can occur in the specified graphics context.
- [unlockFocus](nsview/unlockfocus%28%29.md): Deprecated. Unlocks focus from the current view.
- [scrollRect:by:](nsview/scroll%28__by_%29.md): Deprecated. Copies the visible portion of the view’s rendered image within a region and lays that portion down again at a specified offset .
- [convertPointToBase:](nsview/convertpointtobase_.md): Deprecated. Converts the point from the view’s coordinate system to the base coordinate system.
- [convertPointFromBase:](nsview/convertpointfrombase_.md): Deprecated. Converts the point from the base coordinate system to the view’s coordinate system.
- [convertSizeToBase:](nsview/convertsizetobase_.md): Deprecated. Converts the size from the view’s coordinate system to the base coordinate system.
- [convertSizeFromBase:](nsview/convertsizefrombase_.md): Deprecated. Converts the size from the base coordinate system to the view’s coordinate system.
- [convertRectToBase:](nsview/convertrecttobase_.md): Deprecated. Converts the rectangle from the view’s coordinate system to the base coordinate system.
- [convertRectFromBase:](nsview/convertrectfrombase_.md): Deprecated. Converts the rectangle from the base coordinate system to the view’s coordinate system.
- [performMnemonic:](nsview/performmnemonic_.md): Deprecated. Implemented by subclasses to respond to mnemonics.
- [shouldDrawColor](nsview/shoulddrawcolor%28%29.md): Deprecated. Returns a Boolean value indicating whether the view is being drawn to an environment that supports color.
- [allocateGState](nsview/allocategstate%28%29.md): Deprecated. Causes the view to maintain a private graphics state object, which encapsulates all parameters of the graphics environment.
- [gState](nsview/gstate%28%29.md): Deprecated. Returns the identifier for the view’s graphics state object, or 0 if the view doesn’t have a graphics state object.
- [setUpGState](nsview/setupgstate%28%29.md): Deprecated. Overridden by subclasses to (re)initialize the view’s graphics state object.
- [renewGState](nsview/renewgstate%28%29.md): Deprecated. Invalidates the view’s graphics state object, if it has one.
- [releaseGState](nsview/releasegstate%28%29.md): Deprecated. Frees the view’s graphics state object, if it has one.
- [dragImage:at:offset:event:pasteboard:source:slideBack:](nsview/dragimage_at_offset_event_pasteboard_source_slideback_.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag arbitrary data with a specified icon into any application that has window or view objects that accept dragged data.
- [dragFile:fromRect:slideBack:event:](nsview/dragfile%28__from_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag a file icon to any application that has window or view objects that accept files.
- [dragPromisedFilesOfTypes:fromRect:source:slideBack:event:](nsview/dragpromisedfiles%28oftypes_from_source_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag one or more promised files (or directories) into any application that has window or view objects that accept promised file data.

### Properties

- [wantsExtendedDynamicRangeOpenGLSurface](nsview/wantsextendeddynamicrangeopenglsurface.md): Deprecated.
- [acceptsTouchEvents](nsview/acceptstouchevents.md): Deprecated. A Boolean value indicating whether the view accepts touch events.
- [canDraw](nsview/candraw.md): Deprecated. A Boolean value indicating whether drawing commands will produce any results.
- [wantsBestResolutionOpenGLSurface](nsview/wantsbestresolutionopenglsurface.md): Deprecated. A Boolean value indicating whether the view wants an OpenGL backing surface with a resolution greater than 1 pixel per point.

### Notifications

- [NSViewNoInstrinsicMetric](nsviewnoinstrinsicmetric.md): Deprecated. Used to indicate that a view has no intrinsic metric for a given numeric property.
- [NSViewFocusDidChangeNotification](nsviewfocusdidchangenotification.md): Deprecated. Deprecated in macOS 10.4 and later. Posted for an `NSView` object and each of its descendants (recursively) whenever the frame or bounds geometry of the view changed.
- [NSViewGlobalFrameDidChangeNotification](nsview/globalframedidchangenotification.md): Deprecated. Posted whenever an `NSView` object that has attached surfaces (that is, `NSOpenGLContext` objects) moves to a different screen, or other cases where the `NSOpenGLContext` object needs to be updated.
