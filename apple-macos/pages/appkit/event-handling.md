> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/event-handling](https://developer.apple.com/documentation/appkit/event-handling)

# Event Handling (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Respond to mouse, keyboard, touch, and tablet events and gestures that originate inside your view.

## Topics

### Handling Events in the View

- [acceptsFirstMouse(for:)](nsview/acceptsfirstmouse%28for_%29.md): Returns a Boolean value that indicates whether the view accepts the initial mouse-down event.
- [hitTest(\_:)](nsview/hittest%28__%29.md): Returns the farthest descendant of the view in the view hierarchy (including itself) that contains a specified point, or `nil` if that point lies completely outside the view.
- [isMousePoint(\_:in:)](nsview/ismousepoint%28__in_%29.md): Returns whether a region of the view contains a specified point, accounting for whether the view is flipped or not.
- [performKeyEquivalent(with:)](nsview/performkeyequivalent%28with_%29.md): Implemented by subclasses to respond to key equivalents (also known as keyboard shortcuts).
- [rightMouseDown(with:)](nsresponder/rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [mouseDownCanMoveWindow](nsview/mousedowncanmovewindow.md): A Boolean value indicating whether the view can pass mouse down events through to its superviews.
- [inputContext](nsview/inputcontext.md): The text input context object for the view.

### Handling Touch Events

- [allowedTouchTypes](nsview/allowedtouchtypes.md): The types of touch interactions the view allows.
- [wantsRestingTouches](nsview/wantsrestingtouches.md): A Boolean value indicating whether the view wants resting touches.
- [candidateListTouchBarItem](nsview/candidatelisttouchbaritem.md)

### Managing gesture recognizers

- [gestureRecognizers](nsview/gesturerecognizers.md): The gesture recognize objects currently attached to the view.
- [addGestureRecognizer(\_:)](nsview/addgesturerecognizer%28__%29.md): Attaches a gesture recognizer to the view.
- [removeGestureRecognizer(\_:)](nsview/removegesturerecognizer%28__%29.md): Detaches a gesture recognizer from the view.
- [exclusiveGestureBehavior](nsview/exclusivegesturebehavior-swift.property.md): Declares whether gesture recognizers should be exclusive in this view and its subviews.
- [NSView.ExclusiveGestureBehavior](nsview/exclusivegesturebehavior-swift.enum.md): Exclusive gesture behavior

### Managing the Key-View Loop

- [canBecomeKeyView](nsview/canbecomekeyview.md): A Boolean value indicating whether the view can become key view.
- [needsPanelToBecomeKey](nsview/needspaneltobecomekey.md): A Boolean value indicating whether the view needs its panel to become the key window before it can handle keyboard input and navigation.
- [nextKeyView](nsview/nextkeyview.md): The view object that follows the current view in the key view loop.
- [nextValidKeyView](nsview/nextvalidkeyview.md): The closest view object in the key view loop that follows the current view in the key view loop and accepts first responder status.
- [previousKeyView](nsview/previouskeyview.md): The view object preceding the current view in the key view loop.
- [previousValidKeyView](nsview/previousvalidkeyview.md): The closest view object in the key view loop that precedes the current view and accepts first responder status.

### Handling Smart Magnification

- [rectForSmartMagnification(at:in:)](nsview/rectforsmartmagnification%28at_in_%29.md): Returns the appropriate rectangle to use when magnifying around the specified point.

### Managing Tracking Areas

- [addTrackingArea(\_:)](nsview/addtrackingarea%28__%29.md): Adds a given tracking area to the view.
- [removeTrackingArea(\_:)](nsview/removetrackingarea%28__%29.md): Removes a given tracking area from the view.
- [trackingAreas](nsview/trackingareas.md): An array of the view’s tracking areas.
- [updateTrackingAreas()](nsview/updatetrackingareas%28%29.md): Invoked automatically when the view’s geometry changes such that its tracking areas need to be recalculated.
- [didUpdateTrackingAreasNotification](nsview/didupdatetrackingareasnotification.md): Posted whenever a view recalculates its tracking areas.

### Managing Tracking Rectangles

- [addTrackingRect(\_:owner:userData:assumeInside:)](nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md): Establishes an area for tracking mouse-entered and mouse-exited events within the view and returns a tag that identifies the tracking rectangle.
- [removeTrackingRect(\_:)](nsview/removetrackingrect%28__%29.md): Removes the tracking rectangle identified by a tag.
- [NSView.TrackingRectTag](nsview/trackingrecttag.md): This type describes the rectangle used to track the mouse.

### Scrolling the View

- [prepareContent(in:)](nsview/preparecontent%28in_%29.md): Prepares the overdraw region for drawing.
- [preparedContentRect](nsview/preparedcontentrect.md): The portion of the view that has been rendered and is available for responsive scrolling.
- [scroll(\_:)](nsview/scroll%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](nsclipview.md) object so a point in the view lies at the origin of the clip view’s bounds rectangle.
- [scrollToVisible(\_:)](nsview/scrolltovisible%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.
- [autoscroll(with:)](nsview/autoscroll%28with_%29.md): Scrolls the view’s closest ancestor [NSClipView](nsclipview.md) object proportionally to the distance of an event that occurs outside of it.
- [adjustScroll(\_:)](nsview/adjustscroll%28__%29.md): Overridden by subclasses to modify a given rectangle, returning the altered rectangle.
- [enclosingScrollView](nsview/enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.
- [scroll(\_:to:)](nsview/scroll%28__to_%29.md): Notifies the superview of a clip view that the clip view needs to reset the origin of its bounds rectangle.
- [reflectScrolledClipView(\_:)](nsview/reflectscrolledclipview%28__%29.md): Notifies a clip view’s superview that either the clip view’s bounds rectangle or the document view’s frame rectangle has changed, and that any indicators of the scroll position need to be adjusted.
- [isCompatibleWithResponsiveScrolling](nsview/iscompatiblewithresponsivescrolling.md): A Boolean value that indicates whether views support responsive scrolling.

### Configuring Pressure

- [pressureConfiguration](nsview/pressureconfiguration.md): Configures the behavior and progression of the Force Touch trackpad when responding to touch input produced by the user when the cursor is over the view.

### Dragging Operations

- [registerForDraggedTypes(\_:)](nsview/registerfordraggedtypes%28__%29.md): Registers the pasteboard types that the view will accept as the destination of an image-dragging session.
- [unregisterDraggedTypes()](nsview/unregisterdraggedtypes%28%29.md): Unregisters the view as a possible destination in a dragging session.
- [registeredDraggedTypes](nsview/registereddraggedtypes.md): The array of pasteboard drag types that the view can accept.
- [beginDraggingSession(with:event:source:)](nsview/begindraggingsession%28with_event_source_%29.md): Initiates a dragging session with a group of dragging items.
- [beginDraggingSession(items:gesture:source:)](nsview/begindraggingsession%28items_gesture_source_%29.md): Initiates a drag operation using a gesture recognizer.
- [shouldDelayWindowOrdering(for:)](nsview/shoulddelaywindowordering%28for_%29.md): Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.

# Event Handling (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Respond to mouse, keyboard, touch, and tablet events and gestures that originate inside your view.

## Topics

### Handling Events in the View

- [acceptsFirstMouse:](nsview/acceptsfirstmouse%28for_%29.md): Returns a Boolean value that indicates whether the view accepts the initial mouse-down event.
- [hitTest:](nsview/hittest%28__%29.md): Returns the farthest descendant of the view in the view hierarchy (including itself) that contains a specified point, or `nil` if that point lies completely outside the view.
- [mouse:inRect:](nsview/ismousepoint%28__in_%29.md): Returns whether a region of the view contains a specified point, accounting for whether the view is flipped or not.
- [performKeyEquivalent:](nsview/performkeyequivalent%28with_%29.md): Implemented by subclasses to respond to key equivalents (also known as keyboard shortcuts).
- [rightMouseDown:](nsresponder/rightmousedown%28with_%29.md): Informs the receiver that the user has pressed the right mouse button.
- [mouseDownCanMoveWindow](nsview/mousedowncanmovewindow.md): A Boolean value indicating whether the view can pass mouse down events through to its superviews.
- [inputContext](nsview/inputcontext.md): The text input context object for the view.

### Handling Touch Events

- [allowedTouchTypes](nsview/allowedtouchtypes.md): The types of touch interactions the view allows.
- [wantsRestingTouches](nsview/wantsrestingtouches.md): A Boolean value indicating whether the view wants resting touches.
- [candidateListTouchBarItem](nsview/candidatelisttouchbaritem.md)

### Managing gesture recognizers

- [gestureRecognizers](nsview/gesturerecognizers.md): The gesture recognize objects currently attached to the view.
- [addGestureRecognizer:](nsview/addgesturerecognizer%28__%29.md): Attaches a gesture recognizer to the view.
- [removeGestureRecognizer:](nsview/removegesturerecognizer%28__%29.md): Detaches a gesture recognizer from the view.
- [exclusiveGestureBehavior](nsview/exclusivegesturebehavior-swift.property.md): Declares whether gesture recognizers should be exclusive in this view and its subviews.
- [NSViewExclusiveGestureBehavior](nsview/exclusivegesturebehavior-swift.enum.md): Exclusive gesture behavior

### Managing the Key-View Loop

- [canBecomeKeyView](nsview/canbecomekeyview.md): A Boolean value indicating whether the view can become key view.
- [needsPanelToBecomeKey](nsview/needspaneltobecomekey.md): A Boolean value indicating whether the view needs its panel to become the key window before it can handle keyboard input and navigation.
- [nextKeyView](nsview/nextkeyview.md): The view object that follows the current view in the key view loop.
- [nextValidKeyView](nsview/nextvalidkeyview.md): The closest view object in the key view loop that follows the current view in the key view loop and accepts first responder status.
- [previousKeyView](nsview/previouskeyview.md): The view object preceding the current view in the key view loop.
- [previousValidKeyView](nsview/previousvalidkeyview.md): The closest view object in the key view loop that precedes the current view and accepts first responder status.

### Handling Smart Magnification

- [rectForSmartMagnificationAtPoint:inRect:](nsview/rectforsmartmagnification%28at_in_%29.md): Returns the appropriate rectangle to use when magnifying around the specified point.

### Managing Tracking Areas

- [addTrackingArea:](nsview/addtrackingarea%28__%29.md): Adds a given tracking area to the view.
- [removeTrackingArea:](nsview/removetrackingarea%28__%29.md): Removes a given tracking area from the view.
- [trackingAreas](nsview/trackingareas.md): An array of the view’s tracking areas.
- [updateTrackingAreas](nsview/updatetrackingareas%28%29.md): Invoked automatically when the view’s geometry changes such that its tracking areas need to be recalculated.
- [NSViewDidUpdateTrackingAreasNotification](nsview/didupdatetrackingareasnotification.md): Posted whenever a view recalculates its tracking areas.

### Managing Tracking Rectangles

- [addTrackingRect:owner:userData:assumeInside:](nsview/addtrackingrect%28__owner_userdata_assumeinside_%29.md): Establishes an area for tracking mouse-entered and mouse-exited events within the view and returns a tag that identifies the tracking rectangle.
- [removeTrackingRect:](nsview/removetrackingrect%28__%29.md): Removes the tracking rectangle identified by a tag.
- [NSTrackingRectTag](nsview/trackingrecttag.md): This type describes the rectangle used to track the mouse.

### Scrolling the View

- [prepareContentInRect:](nsview/preparecontent%28in_%29.md): Prepares the overdraw region for drawing.
- [preparedContentRect](nsview/preparedcontentrect.md): The portion of the view that has been rendered and is available for responsive scrolling.
- [scrollPoint:](nsview/scroll%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](nsclipview.md) object so a point in the view lies at the origin of the clip view’s bounds rectangle.
- [scrollRectToVisible:](nsview/scrolltovisible%28__%29.md): Scrolls the view’s closest ancestor [NSClipView](nsclipview.md) object the minimum distance needed so a specified region of the view becomes visible in the clip view.
- [autoscroll:](nsview/autoscroll%28with_%29.md): Scrolls the view’s closest ancestor [NSClipView](nsclipview.md) object proportionally to the distance of an event that occurs outside of it.
- [adjustScroll:](nsview/adjustscroll%28__%29.md): Overridden by subclasses to modify a given rectangle, returning the altered rectangle.
- [enclosingScrollView](nsview/enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.
- [scrollClipView:toPoint:](nsview/scroll%28__to_%29.md): Notifies the superview of a clip view that the clip view needs to reset the origin of its bounds rectangle.
- [reflectScrolledClipView:](nsview/reflectscrolledclipview%28__%29.md): Notifies a clip view’s superview that either the clip view’s bounds rectangle or the document view’s frame rectangle has changed, and that any indicators of the scroll position need to be adjusted.
- [compatibleWithResponsiveScrolling](nsview/iscompatiblewithresponsivescrolling.md): A Boolean value that indicates whether views support responsive scrolling.

### Configuring Pressure

- [pressureConfiguration](nsview/pressureconfiguration.md): Configures the behavior and progression of the Force Touch trackpad when responding to touch input produced by the user when the cursor is over the view.

### Dragging Operations

- [registerForDraggedTypes:](nsview/registerfordraggedtypes%28__%29.md): Registers the pasteboard types that the view will accept as the destination of an image-dragging session.
- [unregisterDraggedTypes](nsview/unregisterdraggedtypes%28%29.md): Unregisters the view as a possible destination in a dragging session.
- [registeredDraggedTypes](nsview/registereddraggedtypes.md): The array of pasteboard drag types that the view can accept.
- [beginDraggingSessionWithItems:event:source:](nsview/begindraggingsession%28with_event_source_%29.md): Initiates a dragging session with a group of dragging items.
- [beginDraggingSessionWithItems:gesture:source:](nsview/begindraggingsession%28items_gesture_source_%29.md): Initiates a drag operation using a gesture recognizer.
- [shouldDelayWindowOrderingForEvent:](nsview/shoulddelaywindowordering%28for_%29.md): Allows the user to drag objects from the view without activating the app or moving the window of the view forward, possibly obscuring the destination.
