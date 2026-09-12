> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentral/maximumupdatevaluelength](https://developer.apple.com/documentation/corebluetooth/cbcentral/maximumupdatevaluelength)

# maximumUpdateValueLength (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum amount of data, in bytes, that the central can receive in a single notification or indication.

## Declaration

```swift
var maximumUpdateValueLength: Int { get }
```

## Topics

### Related Documentation

- [updateValue(\_:for:onSubscribedCentrals:)](../cbperipheralmanager/updatevalue%28__for_onsubscribedcentrals_%29.md): Send an updated characteristic value to one or more subscribed centrals, using a notification or indication.

# maximumUpdateValueLength (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The maximum amount of data, in bytes, that the central can receive in a single notification or indication.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger maximumUpdateValueLength;
```

## Topics

### Related Documentation

- [updateValue:forCharacteristic:onSubscribedCentrals:](../cbperipheralmanager/updatevalue%28__for_onsubscribedcentrals_%29.md): Send an updated characteristic value to one or more subscribed centrals, using a notification or indication.
