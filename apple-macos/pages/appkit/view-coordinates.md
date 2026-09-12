> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/view-coordinates](https://developer.apple.com/documentation/appkit/view-coordinates)

# View Coordinates (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Manage the frame and bounds rectangles that determine the size and position of the view in the view hierarchy.

## Topics

### Modifying the Frame Rectangle

- [frame](nsview/frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.
- [setFrameOrigin(\_:)](nsview/setframeorigin%28__%29.md): Sets the origin of the view’s frame rectangle to the specified point, effectively repositioning it within its superview.
- [setFrameSize(\_:)](nsview/setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.
- [frameRotation](nsview/framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [frameDidChangeNotification](nsview/framedidchangenotification.md): A notification that posts when the view’s frame rectangle changes to a new value.
- [NSView.FrameDidChangeMessage](nsview/framedidchangemessage.md)
- [postsFrameChangedNotifications](nsview/postsframechangednotifications.md): A Boolean value indicating whether the view posts notifications when its frame rectangle changes.

### Modifying the bounds rectangle

- [bounds](nsview/bounds.md): The view’s bounds rectangle, which expresses its location and size in its own coordinate system.
- [setBoundsOrigin(\_:)](nsview/setboundsorigin%28__%29.md): Sets the origin of the view’s bounds rectangle to a specified point.
- [setBoundsSize(\_:)](nsview/setboundssize%28__%29.md): Sets the size of the view’s bounds rectangle to specified dimensions, inversely scaling its coordinate system relative to its frame rectangle.
- [boundsRotation](nsview/boundsrotation.md): The angle of rotation, measured in degrees, applied to the view’s bounds rectangle relative to its frame rectangle.
- [boundsDidChangeNotification](nsview/boundsdidchangenotification.md): A notification that posts when the view’s bounds rectangle changes to a new value independently of the frame rectangle.
- [NSView.BoundsDidChangeMessage](nsview/boundsdidchangemessage.md)
- [postsBoundsChangedNotifications](nsview/postsboundschangednotifications.md): A Boolean value indicating whether the view posts notifications when its bounds rectangle changes.

### Examining Coordinate System Modifications

- [isFlipped](nsview/isflipped.md): A Boolean value indicating whether the view uses a flipped coordinate system.
- [isRotatedFromBase](nsview/isrotatedfrombase.md): A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds.
- [isRotatedOrScaledFromBase](nsview/isrotatedorscaledfrombase.md): A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds, or has been scaled from the window’s base coordinate system.

### Modifying the Coordinate System

- [translateOrigin(to:)](nsview/translateorigin%28to_%29.md): Translates the view’s coordinate system so that its origin moves to a new location.
- [scaleUnitSquare(to:)](nsview/scaleunitsquare%28to_%29.md): Scales the view’s coordinate system so that the unit square scales to the specified dimensions.
- [rotate(byDegrees:)](nsview/rotate%28bydegrees_%29.md): Rotates the view’s bounds rectangle by a specified degree value around the origin of the coordinate system, (0.0, 0.0).

### Converting Coordinate Values

- [backingAlignedRect(\_:options:)](nsview/backingalignedrect%28__options_%29.md): Returns a backing store pixel-aligned rectangle in local view coordinates.
- [convertFromBacking(\_:)](nsview/convertfrombacking%28__%29-229ps.md): Converts a point from its pixel aligned backing store coordinate system to the view’s interior coordinate system.
- [convertToBacking(\_:)](nsview/converttobacking%28__%29-2xx45.md): Converts a point from the view’s interior coordinate system to its pixel aligned backing store coordinate system.
- [convertFromLayer(\_:)](nsview/convertfromlayer%28__%29-3nsbu.md): Convert the point from the layer’s interior coordinate system to the view’s interior coordinate system.
- [convertToLayer(\_:)](nsview/converttolayer%28__%29-44u7d.md): Convert the size from the view’s interior coordinate system to the layer’s interior coordinate system.
- [convertFromBacking(\_:)](nsview/convertfrombacking%28__%29-2njpa.md): Converts a rectangle from its pixel aligned backing store coordinate system to the view’s interior coordinate system.
- [convertToBacking(\_:)](nsview/converttobacking%28__%29-3zors.md): Converts a rectangle from the view’s interior coordinate system to its pixel aligned backing store coordinate system.
- [convertFromLayer(\_:)](nsview/convertfromlayer%28__%29-8s5bi.md): Convert the rectangle from the layer’s interior coordinate system to the view’s interior coordinate system.
- [convertToLayer(\_:)](nsview/converttolayer%28__%29-160pw.md): Convert the size from the view’s interior coordinate system to the layer’s interior coordinate system.
- [convertFromBacking(\_:)](nsview/convertfrombacking%28__%29-4agf9.md): Converts a size from its pixel aligned backing store coordinate system to the view’s interior coordinate system.
- [convertToBacking(\_:)](nsview/converttobacking%28__%29-4ra9y.md): Converts a size from the view’s interior coordinate system to its pixel aligned backing store coordinate system.
- [convertFromLayer(\_:)](nsview/convertfromlayer%28__%29-3usqp.md): Convert the size from the layer’s interior coordinate system to the view’s interior coordinate system.
- [convertToLayer(\_:)](nsview/converttolayer%28__%29-2vozx.md): Convert the size from the view’s interior coordinate system to the layer’s interior coordinate system.
- [convert(\_:from:)](nsview/convert%28__from_%29-1dq9l.md): Converts a point from the coordinate system of a given view to that of the view.
- [convert(\_:to:)](nsview/convert%28__to_%29-6u9ir.md): Converts a point from the view’s coordinate system to that of a given view.
- [convert(\_:from:)](nsview/convert%28__from_%29-40x0w.md): Converts a size from another view’s coordinate system to that of the view.
- [convert(\_:to:)](nsview/convert%28__to_%29-5nptx.md): Converts a size from the view’s coordinate system to that of another view.
- [convert(\_:from:)](nsview/convert%28__from_%29-7fbb6.md): Converts a rectangle from the coordinate system of another view to that of the view.
- [convert(\_:to:)](nsview/convert%28__to_%29-3cqqt.md): Converts a rectangle from the view’s coordinate system to that of another view.
- [centerScanRect(\_:)](nsview/centerscanrect%28__%29.md): Converts the corners of a specified rectangle to lie on the center of device pixels, which is useful in compensating for rendering overscanning when the coordinate system has been scaled.

## See Also

### Configuring the view

- [View Hierarchy](view-hierarchy.md): Manage the subviews, superview, and window of a view and respond to notifications when the view hierarchy changes.
- [Appearance](nsview-appearance.md): Change the view’s visibility, vibrancy, and focus ring and respond to appearance-related changes.
- [Core Animation Support](core-animation-support.md): Manage the layer object that provides the view’s visual representation and accelerates drawing operations.
- [Related UI](related-ui.md): Manage contextual menus, cursors, tool tips, and other system-provided windows and content.

# View Coordinates (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Manage the frame and bounds rectangles that determine the size and position of the view in the view hierarchy.

## Topics

### Modifying the Frame Rectangle

- [frame](nsview/frame.md): The view’s frame rectangle, which defines its position and size in its superview’s coordinate system.
- [setFrameOrigin:](nsview/setframeorigin%28__%29.md): Sets the origin of the view’s frame rectangle to the specified point, effectively repositioning it within its superview.
- [setFrameSize:](nsview/setframesize%28__%29.md): Sets the size of the view’s frame rectangle to the specified dimensions, resizing it within its superview without affecting its coordinate system.
- [frameRotation](nsview/framerotation.md): The angle of rotation, measured in degrees, applied to the view’s frame rectangle relative to its superview’s coordinate system.
- [NSViewFrameDidChangeNotification](nsview/framedidchangenotification.md): A notification that posts when the view’s frame rectangle changes to a new value.
- [postsFrameChangedNotifications](nsview/postsframechangednotifications.md): A Boolean value indicating whether the view posts notifications when its frame rectangle changes.

### Modifying the bounds rectangle

- [bounds](nsview/bounds.md): The view’s bounds rectangle, which expresses its location and size in its own coordinate system.
- [setBoundsOrigin:](nsview/setboundsorigin%28__%29.md): Sets the origin of the view’s bounds rectangle to a specified point.
- [setBoundsSize:](nsview/setboundssize%28__%29.md): Sets the size of the view’s bounds rectangle to specified dimensions, inversely scaling its coordinate system relative to its frame rectangle.
- [boundsRotation](nsview/boundsrotation.md): The angle of rotation, measured in degrees, applied to the view’s bounds rectangle relative to its frame rectangle.
- [NSViewBoundsDidChangeNotification](nsview/boundsdidchangenotification.md): A notification that posts when the view’s bounds rectangle changes to a new value independently of the frame rectangle.
- [postsBoundsChangedNotifications](nsview/postsboundschangednotifications.md): A Boolean value indicating whether the view posts notifications when its bounds rectangle changes.

### Examining Coordinate System Modifications

- [flipped](nsview/isflipped.md): A Boolean value indicating whether the view uses a flipped coordinate system.
- [rotatedFromBase](nsview/isrotatedfrombase.md): A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds.
- [rotatedOrScaledFromBase](nsview/isrotatedorscaledfrombase.md): A Boolean value indicating whether the view or any of its ancestors has ever had a rotation factor applied to its frame or bounds, or has been scaled from the window’s base coordinate system.

### Modifying the Coordinate System

- [translateOriginToPoint:](nsview/translateorigin%28to_%29.md): Translates the view’s coordinate system so that its origin moves to a new location.
- [scaleUnitSquareToSize:](nsview/scaleunitsquare%28to_%29.md): Scales the view’s coordinate system so that the unit square scales to the specified dimensions.
- [rotateByAngle:](nsview/rotate%28bydegrees_%29.md): Rotates the view’s bounds rectangle by a specified degree value around the origin of the coordinate system, (0.0, 0.0).

### Converting Coordinate Values

- [backingAlignedRect:options:](nsview/backingalignedrect%28__options_%29.md): Returns a backing store pixel-aligned rectangle in local view coordinates.
- [convertPointFromBacking:](nsview/convertfrombacking%28__%29-229ps.md): Converts a point from its pixel aligned backing store coordinate system to the view’s interior coordinate system.
- [convertPointToBacking:](nsview/converttobacking%28__%29-2xx45.md): Converts a point from the view’s interior coordinate system to its pixel aligned backing store coordinate system.
- [convertPointFromLayer:](nsview/convertfromlayer%28__%29-3nsbu.md): Convert the point from the layer’s interior coordinate system to the view’s interior coordinate system.
- [convertPointToLayer:](nsview/converttolayer%28__%29-44u7d.md): Convert the size from the view’s interior coordinate system to the layer’s interior coordinate system.
- [convertRectFromBacking:](nsview/convertfrombacking%28__%29-2njpa.md): Converts a rectangle from its pixel aligned backing store coordinate system to the view’s interior coordinate system.
- [convertRectToBacking:](nsview/converttobacking%28__%29-3zors.md): Converts a rectangle from the view’s interior coordinate system to its pixel aligned backing store coordinate system.
- [convertRectFromLayer:](nsview/convertfromlayer%28__%29-8s5bi.md): Convert the rectangle from the layer’s interior coordinate system to the view’s interior coordinate system.
- [convertRectToLayer:](nsview/converttolayer%28__%29-160pw.md): Convert the size from the view’s interior coordinate system to the layer’s interior coordinate system.
- [convertSizeFromBacking:](nsview/convertfrombacking%28__%29-4agf9.md): Converts a size from its pixel aligned backing store coordinate system to the view’s interior coordinate system.
- [convertSizeToBacking:](nsview/converttobacking%28__%29-4ra9y.md): Converts a size from the view’s interior coordinate system to its pixel aligned backing store coordinate system.
- [convertSizeFromLayer:](nsview/convertfromlayer%28__%29-3usqp.md): Convert the size from the layer’s interior coordinate system to the view’s interior coordinate system.
- [convertSizeToLayer:](nsview/converttolayer%28__%29-2vozx.md): Convert the size from the view’s interior coordinate system to the layer’s interior coordinate system.
- [convertPoint:fromView:](nsview/convert%28__from_%29-1dq9l.md): Converts a point from the coordinate system of a given view to that of the view.
- [convertPoint:toView:](nsview/convert%28__to_%29-6u9ir.md): Converts a point from the view’s coordinate system to that of a given view.
- [convertSize:fromView:](nsview/convert%28__from_%29-40x0w.md): Converts a size from another view’s coordinate system to that of the view.
- [convertSize:toView:](nsview/convert%28__to_%29-5nptx.md): Converts a size from the view’s coordinate system to that of another view.
- [convertRect:fromView:](nsview/convert%28__from_%29-7fbb6.md): Converts a rectangle from the coordinate system of another view to that of the view.
- [convertRect:toView:](nsview/convert%28__to_%29-3cqqt.md): Converts a rectangle from the view’s coordinate system to that of another view.
- [centerScanRect:](nsview/centerscanrect%28__%29.md): Converts the corners of a specified rectangle to lie on the center of device pixels, which is useful in compensating for rendering overscanning when the coordinate system has been scaled.

## See Also

### Configuring the view

- [View Hierarchy](view-hierarchy.md): Manage the subviews, superview, and window of a view and respond to notifications when the view hierarchy changes.
- [Appearance](nsview-appearance.md): Change the view’s visibility, vibrancy, and focus ring and respond to appearance-related changes.
- [Core Animation Support](core-animation-support.md): Manage the layer object that provides the view’s visual representation and accelerates drawing operations.
- [Related UI](related-ui.md): Manage contextual menus, cursors, tool tips, and other system-provided windows and content.
