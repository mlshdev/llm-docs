> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrol_v4/drawosc(withwidth:height:activepart:destinationimage:at:)](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrol_v4/drawosc(withwidth:height:activepart:destinationimage:at:))

# drawOSC(withWidth:height:activePart:destinationImage:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Draws a control on an image. This is the main method the host application calls to draw a plug-in parameter control.

## Declaration

```swift
func drawOSC(withWidth width: Int, height: Int, activePart: Int, destinationImage: FxImageTile!, at time: CMTime)
```

## Parameters

- `width`: Width of the current image where the control will be drawn.
- `height`: Height of the current image where the control will be drawn.
- `activePart`: The active part of the control to draw.
- `destinationImage`: An [ioSurface](../fximagetile/iosurface.md) into which you should draw your OSCs.
- `time`: The time at which to draw the control.

<a id="discussion"></a>

## Discussion

This method is called when the host application wants you to draw your onscreen controls. You should draw them into the destination image. The `activePart` parameter tells which part of the control is currently selected so you can draw that control with proper highlighting.

## See Also

### Instance Methods

- [drawingCoordinates()](drawingcoordinates%28%29.md): Defines the coordinate space for an event.
- [hitTestOSC(atMousePositionX:mousePositionY:activePart:at:)](hittestosc%28atmousepositionx_mousepositiony_activepart_at_%29.md): Figures out which part of the onscreen control was hit.
- [keyDown(atPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:at:)](keydown%28atpositionx_positiony_keypressed_modifiers_forceupdate_didhandle_at_%29.md): Provides information when a key is pressed.
- [keyUp(atPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:at:)](keyup%28atpositionx_positiony_keypressed_modifiers_forceupdate_didhandle_at_%29.md): Provides information when a key is released.
- [mouseDown(atPositionX:positionY:activePart:modifiers:forceUpdate:at:)](mousedown%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is on an image with an active plug-in control.
- [mouseDragged(atPositionX:positionY:activePart:modifiers:forceUpdate:at:)](mousedragged%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is moved with the mouse button still down.
- [mouseEntered(atPositionX:positionY:modifiers:forceUpdate:at:)](mouseentered%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer enters the view.
- [mouseExited(atPositionX:positionY:modifiers:forceUpdate:at:)](mouseexited%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer leaves the view.
- [mouseMoved(atPositionX:positionY:activePart:modifiers:forceUpdate:at:)](mousemoved%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer changes location.
- [mouseUp(atPositionX:positionY:activePart:modifiers:forceUpdate:at:)](mouseup%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is released.

# drawOSCWithWidth:height:activePart:destinationImage:atTime: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Draws a control on an image. This is the main method the host application calls to draw a plug-in parameter control.

## Declaration

```objectivec
- (void) drawOSCWithWidth:(NSInteger) width height:(NSInteger) height activePart:(NSInteger) activePart destinationImage:(FxImageTile *) destinationImage atTime:(CMTime) time;
```

## Parameters

- `width`: Width of the current image where the control will be drawn.
- `height`: Height of the current image where the control will be drawn.
- `activePart`: The active part of the control to draw.
- `destinationImage`: An [ioSurface](../fximagetile/iosurface.md) into which you should draw your OSCs.
- `time`: The time at which to draw the control.

<a id="discussion"></a>

## Discussion

This method is called when the host application wants you to draw your onscreen controls. You should draw them into the destination image. The `activePart` parameter tells which part of the control is currently selected so you can draw that control with proper highlighting.

## See Also

### Instance Methods

- [drawingCoordinates](drawingcoordinates%28%29.md): Defines the coordinate space for an event.
- [hitTestOSCAtMousePositionX:mousePositionY:activePart:atTime:](hittestosc%28atmousepositionx_mousepositiony_activepart_at_%29.md): Figures out which part of the onscreen control was hit.
- [keyDownAtPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:atTime:](keydown%28atpositionx_positiony_keypressed_modifiers_forceupdate_didhandle_at_%29.md): Provides information when a key is pressed.
- [keyUpAtPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:atTime:](keyup%28atpositionx_positiony_keypressed_modifiers_forceupdate_didhandle_at_%29.md): Provides information when a key is released.
- [mouseDownAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime:](mousedown%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is on an image with an active plug-in control.
- [mouseDraggedAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime:](mousedragged%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is moved with the mouse button still down.
- [mouseEnteredAtPositionX:positionY:modifiers:forceUpdate:atTime:](mouseentered%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer enters the view.
- [mouseExitedAtPositionX:positionY:modifiers:forceUpdate:atTime:](mouseexited%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer leaves the view.
- [mouseMovedAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime:](mousemoved%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer changes location.
- [mouseUpAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime:](mouseup%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is released.
