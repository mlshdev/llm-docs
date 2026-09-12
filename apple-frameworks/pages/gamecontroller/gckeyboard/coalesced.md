> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gckeyboard/coalesced](https://developer.apple.com/documentation/gamecontroller/gckeyboard/coalesced)

# coalesced (Swift)

**Framework:** Game Controller  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The keyboard currently connected to the device.

## Declaration

```swift
class var coalesced: GCKeyboard? { get }
```

<a id="Discussion"></a>

## Discussion

Get the keyboard input values from the keyboard’s [keyboardInput](keyboardinput.md) controller profile. If the user connects more than one keyboard, the framework represents the combined keyboards with one coalesced keyboard object.

## See Also

### Discovering keyboards

- [GCKeyboardDidConnect](../../foundation/nsnotification/name-swift.struct/gckeyboarddidconnect.md): A notification that posts after a keyboard connects to the device.
- [GCKeyboardDidDisconnect](../../foundation/nsnotification/name-swift.struct/gckeyboarddiddisconnect.md): A notification that posts after a single keyboard, or the last of multiple keyboards, disconnects from the device.

# coalescedKeyboard (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The keyboard currently connected to the device.

## Declaration

```objectivec
@property (class, atomic, strong, readonly, nullable) GCKeyboard * coalescedKeyboard;
```

<a id="Discussion"></a>

## Discussion

Get the keyboard input values from the keyboard’s [keyboardInput](keyboardinput.md) controller profile. If the user connects more than one keyboard, the framework represents the combined keyboards with one coalesced keyboard object.

## See Also

### Discovering keyboards

- [GCKeyboardDidConnectNotification](../gckeyboarddidconnectnotification.md): A notification that posts after a keyboard connects to the device.
- [GCKeyboardDidDisconnectNotification](../gckeyboarddiddisconnectnotification.md): A notification that posts after a single keyboard, or the last of multiple keyboards, disconnects from the device.
