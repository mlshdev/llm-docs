> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrol_v4/hittestosc(atmousepositionx:mousepositiony:activepart:at:)](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrol_v4/hittestosc(atmousepositionx:mousepositiony:activepart:at:))

# hitTestOSC(atMousePositionX:mousePositionY:activePart:at:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Figures out which part of the onscreen control was hit.

## Declaration

```swift
func hitTestOSC(atMousePositionX mousePositionX: Double, mousePositionY: Double, activePart: UnsafeMutablePointer<Int>!, at time: CMTime)
```

## Parameters

- `mousePositionX`: The x position of the mouse
- `mousePositionY`: The y position of the mouse
- `activePart`: The part that was hit - set to `0` if no part was hit
- `time`: The time at which we are checking for a hit

<a id="discussion"></a>

## Discussion

This method is called by the host to determine which part of your controls were hit by the mouse. Return a constant that represents a part number for your onscreen control in the activePart parameter. It will be sent to you in the `-draw`, `-mouse`, and `-key` methods so you can handle those events properly.

## See Also

### Instance Methods

- [drawOSC(withWidth:height:activePart:destinationImage:at:)](drawosc%28withwidth_height_activepart_destinationimage_at_%29.md): Draws a control on an image. This is the main method the host application calls to draw a plug-in parameter control.
- [drawingCoordinates()](drawingcoordinates%28%29.md): Defines the coordinate space for an event.
- [keyDown(atPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:at:)](keydown%28atpositionx_positiony_keypressed_modifiers_forceupdate_didhandle_at_%29.md): Provides information when a key is pressed.
- [keyUp(atPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:at:)](keyup%28atpositionx_positiony_keypressed_modifiers_forceupdate_didhandle_at_%29.md): Provides information when a key is released.
- [mouseDown(atPositionX:positionY:activePart:modifiers:forceUpdate:at:)](mousedown%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is on an image with an active plug-in control.
- [mouseDragged(atPositionX:positionY:activePart:modifiers:forceUpdate:at:)](mousedragged%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is moved with the mouse button still down.
- [mouseEntered(atPositionX:positionY:modifiers:forceUpdate:at:)](mouseentered%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer enters the view.
- [mouseExited(atPositionX:positionY:modifiers:forceUpdate:at:)](mouseexited%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer leaves the view.
- [mouseMoved(atPositionX:positionY:activePart:modifiers:forceUpdate:at:)](mousemoved%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer changes location.
- [mouseUp(atPositionX:positionY:activePart:modifiers:forceUpdate:at:)](mouseup%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is released.

# hitTestOSCAtMousePositionX:mousePositionY:activePart:atTime: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Figures out which part of the onscreen control was hit.

## Declaration

```objectivec
- (void) hitTestOSCAtMousePositionX:(double) mousePositionX mousePositionY:(double) mousePositionY activePart:(NSInteger *) activePart atTime:(CMTime) time;
```

## Parameters

- `mousePositionX`: The x position of the mouse
- `mousePositionY`: The y position of the mouse
- `activePart`: The part that was hit - set to `0` if no part was hit
- `time`: The time at which we are checking for a hit

<a id="discussion"></a>

## Discussion

This method is called by the host to determine which part of your controls were hit by the mouse. Return a constant that represents a part number for your onscreen control in the activePart parameter. It will be sent to you in the `-draw`, `-mouse`, and `-key` methods so you can handle those events properly.

## See Also

### Instance Methods

- [drawOSCWithWidth:height:activePart:destinationImage:atTime:](drawosc%28withwidth_height_activepart_destinationimage_at_%29.md): Draws a control on an image. This is the main method the host application calls to draw a plug-in parameter control.
- [drawingCoordinates](drawingcoordinates%28%29.md): Defines the coordinate space for an event.
- [keyDownAtPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:atTime:](keydown%28atpositionx_positiony_keypressed_modifiers_forceupdate_didhandle_at_%29.md): Provides information when a key is pressed.
- [keyUpAtPositionX:positionY:keyPressed:modifiers:forceUpdate:didHandle:atTime:](keyup%28atpositionx_positiony_keypressed_modifiers_forceupdate_didhandle_at_%29.md): Provides information when a key is released.
- [mouseDownAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime:](mousedown%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is on an image with an active plug-in control.
- [mouseDraggedAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime:](mousedragged%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is pressed and the pointer is moved with the mouse button still down.
- [mouseEnteredAtPositionX:positionY:modifiers:forceUpdate:atTime:](mouseentered%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer enters the view.
- [mouseExitedAtPositionX:positionY:modifiers:forceUpdate:atTime:](mouseexited%28atpositionx_positiony_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer leaves the view.
- [mouseMovedAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime:](mousemoved%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the mouse pointer changes location.
- [mouseUpAtPositionX:positionY:activePart:modifiers:forceUpdate:atTime:](mouseup%28atpositionx_positiony_activepart_modifiers_forceupdate_at_%29.md): Provides information when the left mouse button is released.
