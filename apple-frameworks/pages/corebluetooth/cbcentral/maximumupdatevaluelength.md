> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corebluetooth/cbcentral/maximumupdatevaluelength

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
