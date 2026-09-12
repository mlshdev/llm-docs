> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrol_v4/keydown(atpositionx:positiony:keypressed:modifiers:forceupdate:didhandle:at:)](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrol_v4/keydown(atpositionx:positiony:keypressed:modifiers:forceupdate:didhandle:at:))

# keyDown(atPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Provides information when a key is pressed.

## Declaration

```swift
func keyDown(atPositionX mousePositionX: Double, positionY mousePositionY: Double, keyPressed asciiKey: UInt16, modifiers: FxModifierKeys, forceUpdate: UnsafeMutablePointer<ObjCBool>!, didHandle: UnsafeMutablePointer<ObjCBool>!, at time: CMTime)
```

## Parameters

- `mousePositionX`: X position of the pointer (in ‘drawingCoordinates’ space).
- `mousePositionY`: Y position of the pointer (in ‘drawingCoordinates’ space).
- `asciiKey`: The ASCII representation of the key pressed.
- `modifiers`: The keyboard modifiers currently pressed.
- `forceUpdate`: Set to `YES` if the filter/generator associated with this control needs to be re-calculated; `NO` otherwise.
- `didHandle`: Set to `YES` if the control performed an action because of this key press;  otherwise, the event is passed back up the object tree.
- `time`: The current time when the key press happened.

## Mentioned In

- [Adding onscreen controls to plug-ins](../../professional-video-applications/adding-onscreen-controls-to-plug-ins.md)

<a id="discussion"></a>

## Discussion

Depending on the host application, the time value may be relative to the start of the timeline or to the start of the clip. See the header file `FxPlug/FxHostCapabilities.h`.

## See Also

### Instance Methods

- [drawOSC(withWidth:height:activePart:destinationImage:at:)](drawosc%28withwidth_height_activepart_destinationimage_at_%29.md): Draws a control on an image. This is the main method the host application calls to draw a plug-in parameter control.
- [drawingCoordinates()](drawingcoordinates%28%29.md): Defines the coordinate space for an event.
- [hitTestOSC(atMousePositionX:mousePositionY:activePart:at:)](hittestosc%28atmousepositionx_mousepositiony_activepart_at_%29.md): Figures out which part of the onscreen control was hit.
- [keyUp(atPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:at:)](keyup%28atpositionx_positiony_keypressed_modifiers_forceupdate_didhandle_at_%29.md): Provides information when a key is released.
- [mouseDown(atPositionX:positionY:activePart:modifiers:forceUpdate:at:)](mousedown%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is on an image with an active plug-in control.
- [mouseDragged(atPositionX:positionY:activePart:modifiers:forceUpdate:at:)](mousedragged%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is moved with the mouse button still down.
- [mouseEntered(atPositionX:positionY:modifiers:forceUpdate:at:)](mouseentered%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer enters the view.
- [mouseExited(atPositionX:positionY:modifiers:forceUpdate:at:)](mouseexited%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer leaves the view.
- [mouseMoved(atPositionX:positionY:activePart:modifiers:forceUpdate:at:)](mousemoved%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer changes location.
- [mouseUp(atPositionX:positionY:activePart:modifiers:forceUpdate:at:)](mouseup%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is released.

# keyDownAtPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:atTime: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Provides information when a key is pressed.

## Declaration

```objectivec
- (void) keyDownAtPositionX:(double) mousePositionX positionY:(double) mousePositionY keyPressed:(unsigned short) asciiKey modifiers:(FxModifierKeys) modifiers forceUpdate:(BOOL *) forceUpdate didHandle:(BOOL *) didHandle atTime:(CMTime) time;
```

## Parameters

- `mousePositionX`: X position of the pointer (in ‘drawingCoordinates’ space).
- `mousePositionY`: Y position of the pointer (in ‘drawingCoordinates’ space).
- `asciiKey`: The ASCII representation of the key pressed.
- `modifiers`: The keyboard modifiers currently pressed.
- `forceUpdate`: Set to `YES` if the filter/generator associated with this control needs to be re-calculated; `NO` otherwise.
- `didHandle`: Set to `YES` if the control performed an action because of this key press;  otherwise, the event is passed back up the object tree.
- `time`: The current time when the key press happened.

## Mentioned In

- [Adding onscreen controls to plug-ins](../../professional-video-applications/adding-onscreen-controls-to-plug-ins.md)

<a id="discussion"></a>

## Discussion

Depending on the host application, the time value may be relative to the start of the timeline or to the start of the clip. See the header file `FxPlug/FxHostCapabilities.h`.

## See Also

### Instance Methods

- [drawOSCWithWidth:height:activePart:destinationImage:atTime:](drawosc%28withwidth_height_activepart_destinationimage_at_%29.md): Draws a control on an image. This is the main method the host application calls to draw a plug-in parameter control.
- [drawingCoordinates](drawingcoordinates%28%29.md): Defines the coordinate space for an event.
- [hitTestOSCAtMousePositionX:mousePositionY:activePart:atTime:](hittestosc%28atmousepositionx_mousepositiony_activepart_at_%29.md): Figures out which part of the onscreen control was hit.
- [keyUpAtPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:atTime:](keyup%28atpositionx_positiony_keypressed_modifiers_forceupdate_didhandle_at_%29.md): Provides information when a key is released.
- [mouseDownAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime:](mousedown%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is on an image with an active plug-in control.
- [mouseDraggedAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime:](mousedragged%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is moved with the mouse button still down.
- [mouseEnteredAtPositionX:positionY:modifiers:forceUpdate:atTime:](mouseentered%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer enters the view.
- [mouseExitedAtPositionX:positionY:modifiers:forceUpdate:atTime:](mouseexited%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer leaves the view.
- [mouseMovedAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime:](mousemoved%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer changes location.
- [mouseUpAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime:](mouseup%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is released.
