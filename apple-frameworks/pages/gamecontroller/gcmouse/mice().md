> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmouse/mice()](https://developer.apple.com/documentation/gamecontroller/gcmouse/mice())

# mice() (Swift)

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns any mice that the user connects to the device.

## Declaration

```swift
class func mice() -> [GCMouse]
```

<a id="return-value"></a>

## Return Value

The currently connected mouse devices.

## See Also

### Discovering mouse devices

- [GCMouseDidConnect](../../foundation/nsnotification/name-swift.struct/gcmousedidconnect.md): A notification that posts after a mouse connects to the device.
- [GCMouseDidDisconnect](../../foundation/nsnotification/name-swift.struct/gcmousediddisconnect.md): A notification that posts after a mouse disconnects from the device.

# mice (Objective-C)

**Framework:** Game Controller  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns any mice that the user connects to the device.

## Declaration

```objectivec
+ (NSArray<GCMouse *> *) mice;
```

<a id="return-value"></a>

## Return Value

The currently connected mouse devices.

## See Also

### Discovering mouse devices

- [GCMouseDidConnectNotification](../gcmousedidconnectnotification.md): A notification that posts after a mouse connects to the device.
- [GCMouseDidDisconnectNotification](../gcmousediddisconnectnotification.md): A notification that posts after a mouse disconnects from the device.
