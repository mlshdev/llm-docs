> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalaccessory/eaaccessory/isconnected](https://developer.apple.com/documentation/externalaccessory/eaaccessory/isconnected)

# isConnected (Swift)

**Framework:** External Accessory  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the accessory is currently connected to the iOS-based device.

## Declaration

```swift
var isConnected: Bool { get }
```

## See Also

### Getting Connection Information

- [connectionID](connectionid.md): The accessory’s unique ID for connecting to the iOS-based device.
- [Null Connection ID](../null-connection-id.md): The ID for an unconnected accessory.

# connected (Objective-C)

**Framework:** External Accessory  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the accessory is currently connected to the iOS-based device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isConnected) BOOL connected;
```

## See Also

### Getting Connection Information

- [connectionID](connectionid.md): The accessory’s unique ID for connecting to the iOS-based device.
- [Null Connection ID](../null-connection-id.md): The ID for an unconnected accessory.
