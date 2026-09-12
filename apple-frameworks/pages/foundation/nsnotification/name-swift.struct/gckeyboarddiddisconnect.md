> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/gckeyboarddiddisconnect](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/gckeyboarddiddisconnect)

# GCKeyboardDidDisconnect

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A notification that posts after a single keyboard, or the last of multiple keyboards, disconnects from the device.

## Declaration

```swift
static let GCKeyboardDidDisconnect: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is a [GCKeyboard](../../../gamecontroller/gckeyboard.md) object that represents one or more keyboards. If the user connects multiple keyboards, the framework posts this notification only after the last keyboard disconnects from the device.

The system posts this notification on the main actor.

## See Also

### Game Controller

- [GCControllerDidConnect](gccontrollerdidconnect.md): A notification that posts after a controller connects to the device.
- [GCControllerDidDisconnect](gccontrollerdiddisconnect.md): A notification that posts after a controller disconnects from the device.
- [GCControllerDidBecomeCurrent](gccontrollerdidbecomecurrent.md): A notification that posts when a controller becomes the current controller.
- [GCControllerDidStopBeingCurrent](gccontrollerdidstopbeingcurrent.md): A notification that posts when a controller stops being the current controller.
- [GCControllerUserCustomizationsDidChange](gccontrollerusercustomizationsdidchange.md): A notification that posts when the user customizes the button mappings or other settings of a controller.
- [GCKeyboardDidConnect](gckeyboarddidconnect.md): A notification that posts after a keyboard connects to the device.
- [GCMouseDidBecomeCurrent](gcmousedidbecomecurrent.md): A notification that posts when a mouse becomes the most recent mouse that the user connects.
- [GCMouseDidConnect](gcmousedidconnect.md): A notification that posts after a mouse connects to the device.
- [GCMouseDidDisconnect](gcmousediddisconnect.md): A notification that posts after a mouse disconnects from the device.
- [GCMouseDidStopBeingCurrent](gcmousedidstopbeingcurrent.md): A notification that posts when a mouse stops being the most recent mouse that the user connects.
- [GCRacingWheelDidConnect](gcracingwheeldidconnect.md): A notification that posts after a racing wheel controller connects to the device.
- [GCRacingWheelDidDisconnect](gcracingwheeldiddisconnect.md): A notification that posts after a racing wheel controller disconnects from the device.
