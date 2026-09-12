> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrol_v4/mousemoved(atpositionx:positiony:activepart:modifiers:forceupdate:at:)](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrol_v4/mousemoved(atpositionx:positiony:activepart:modifiers:forceupdate:at:))

# mouseMoved(atPositionX:positionY:activePart:modifiers:forceUpdate:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Provides information when the mouse pointer changes location.

## Declaration

```swift
optional func mouseMoved(atPositionX mousePositionX: Double, positionY mousePositionY: Double, activePart: Int, modifiers: FxModifierKeys, forceUpdate: UnsafeMutablePointer<ObjCBool>!, at time: CMTime)
```

## Parameters

- `mousePositionX`: X position of the pointer (in `drawingCoordinates` space).
- `mousePositionY`: Y position of the pointer (in `drawingCoordinates` space).
- `activePart`: The active part of the control that currently contains the pointer.
- `modifiers`: The keyboard modifiers currently pressed.
- `forceUpdate`: Set to `YES` if the filter/generator associated with this control needs to be re-calculated; `NO` otherwise.
- `time`: The current time when the mouse moved.

## Mentioned In

- [Adding onscreen controls to plug-ins](../../professional-video-applications/adding-onscreen-controls-to-plug-ins.md)

## See Also

### Instance Methods

- [drawOSC(withWidth:height:activePart:destinationImage:at:)](drawosc%28withwidth_height_activepart_destinationimage_at_%29.md): Draws a control on an image. This is the main method the host application calls to draw a plug-in parameter control.
- [drawingCoordinates()](drawingcoordinates%28%29.md): Defines the coordinate space for an event.
- [hitTestOSC(atMousePositionX:mousePositionY:activePart:at:)](hittestosc%28atmousepositionx_mousepositiony_activepart_at_%29.md): Figures out which part of the onscreen control was hit.
- [keyDown(atPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:at:)](keydown%28atpositionx_positiony_keypressed_modifiers_forceupdate_didhandle_at_%29.md): Provides information when a key is pressed.
- [keyUp(atPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:at:)](keyup%28atpositionx_positiony_keypressed_modifiers_forceupdate_didhandle_at_%29.md): Provides information when a key is released.
- [mouseDown(atPositionX:positionY:activePart:modifiers:forceUpdate:at:)](mousedown%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is on an image with an active plug-in control.
- [mouseDragged(atPositionX:positionY:activePart:modifiers:forceUpdate:at:)](mousedragged%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is moved with the mouse button still down.
- [mouseEntered(atPositionX:positionY:modifiers:forceUpdate:at:)](mouseentered%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer enters the view.
- [mouseExited(atPositionX:positionY:modifiers:forceUpdate:at:)](mouseexited%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer leaves the view.
- [mouseUp(atPositionX:positionY:activePart:modifiers:forceUpdate:at:)](mouseup%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is released.

# mouseMovedAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Provides information when the mouse pointer changes location.

## Declaration

```objectivec
- (void) mouseMovedAtPositionX:(double) mousePositionX positionY:(double) mousePositionY activePart:(NSInteger) activePart modifiers:(FxModifierKeys) modifiers forceUpdate:(BOOL *) forceUpdate atTime:(CMTime) time;
```

## Parameters

- `mousePositionX`: X position of the pointer (in `drawingCoordinates` space).
- `mousePositionY`: Y position of the pointer (in `drawingCoordinates` space).
- `activePart`: The active part of the control that currently contains the pointer.
- `modifiers`: The keyboard modifiers currently pressed.
- `forceUpdate`: Set to `YES` if the filter/generator associated with this control needs to be re-calculated; `NO` otherwise.
- `time`: The current time when the mouse moved.

## Mentioned In

- [Adding onscreen controls to plug-ins](../../professional-video-applications/adding-onscreen-controls-to-plug-ins.md)

## See Also

### Instance Methods

- [drawOSCWithWidth:height:activePart:destinationImage:atTime:](drawosc%28withwidth_height_activepart_destinationimage_at_%29.md): Draws a control on an image. This is the main method the host application calls to draw a plug-in parameter control.
- [drawingCoordinates](drawingcoordinates%28%29.md): Defines the coordinate space for an event.
- [hitTestOSCAtMousePositionX:mousePositionY:activePart:atTime:](hittestosc%28atmousepositionx_mousepositiony_activepart_at_%29.md): Figures out which part of the onscreen control was hit.
- [keyDownAtPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:atTime:](keydown%28atpositionx_positiony_keypressed_modifiers_forceupdate_didhandle_at_%29.md): Provides information when a key is pressed.
- [keyUpAtPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:atTime:](keyup%28atpositionx_positiony_keypressed_modifiers_forceupdate_didhandle_at_%29.md): Provides information when a key is released.
- [mouseDownAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime:](mousedown%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is on an image with an active plug-in control.
- [mouseDraggedAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime:](mousedragged%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is moved with the mouse button still down.
- [mouseEnteredAtPositionX:positionY:modifiers:forceUpdate:atTime:](mouseentered%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer enters the view.
- [mouseExitedAtPositionX:positionY:modifiers:forceUpdate:atTime:](mouseexited%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer leaves the view.
- [mouseUpAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime:](mouseup%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is released.
