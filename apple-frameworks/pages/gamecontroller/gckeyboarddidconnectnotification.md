> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gckeyboarddidconnectnotification](https://developer.apple.com/documentation/gamecontroller/gckeyboarddidconnectnotification)

# GCKeyboardDidConnectNotification

**Interface language:** Objective-C

**Framework:** Game Controller  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

A notification that posts after a keyboard connects to the device.

## Declaration

```objectivec
extern NSString * const GCKeyboardDidConnectNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is a [GCKeyboard](gckeyboard.md) object that represents the keyboard. If the user connects multiple keyboards, the framework posts this notification only after the first keyboard connects to the device.

The system posts this notification on the main thread.

## See Also

### Discovering keyboards

- [coalescedKeyboard](gckeyboard/coalesced.md): The keyboard currently connected to the device.
- [GCKeyboardDidDisconnectNotification](gckeyboarddiddisconnectnotification.md): A notification that posts after a single keyboard, or the last of multiple keyboards, disconnects from the device.
