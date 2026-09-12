> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eaaccessory/connectionid](https://developer.apple.com/documentation/externalaccessory/eaaccessory/connectionid)

# connectionID (Swift)

**Framework:** External Accessory  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The accessory’s unique ID for connecting to the iOS-based device.

## Declaration

```swift
var connectionID: Int { get }
```

<a id="Discussion"></a>

## Discussion

The connection ID uniquely identifies this accessory to the device. If multiple accessories of the same type are connected to the device, you can use this information to distinguish between them.

The connection ID for an accessory persists only for the duration of the current connection. If the accessory is disconnected and reconnected, a new connection ID is assigned.

## See Also

### Getting Connection Information

- [isConnected](isconnected.md): A Boolean value indicating whether the accessory is currently connected to the iOS-based device.
- [Null Connection ID](../null-connection-id.md): The ID for an unconnected accessory.

# connectionID (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

The accessory’s unique ID for connecting to the iOS-based device.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger connectionID;
```

<a id="Discussion"></a>

## Discussion

The connection ID uniquely identifies this accessory to the device. If multiple accessories of the same type are connected to the device, you can use this information to distinguish between them.

The connection ID for an accessory persists only for the duration of the current connection. If the accessory is disconnected and reconnected, a new connection ID is assigned.

## See Also

### Getting Connection Information

- [connected](isconnected.md): A Boolean value indicating whether the accessory is currently connected to the iOS-based device.
- [Null Connection ID](../null-connection-id.md): The ID for an unconnected accessory.
