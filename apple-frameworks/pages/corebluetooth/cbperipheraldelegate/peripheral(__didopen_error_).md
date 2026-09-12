> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didopen:error:)](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didopen:error:))

# peripheral(\_:didOpen:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Delivers the result of an attempt to open an L2CAP channel.

## Declaration

```swift
optional func peripheral(_ peripheral: CBPeripheral, didOpen channel: CBL2CAPChannel?, error: (any Error)?)
```

<a id="Discussion"></a>

## Discussion

This method delivers the result of a previous call to [openL2CAPChannel(\_:)](../cbperipheral/openl2capchannel%28__%29.md).

# peripheral:didOpenL2CAPChannel:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Delivers the result of an attempt to open an L2CAP channel.

## Declaration

```objectivec
- (void) peripheral:(CBPeripheral *) peripheral didOpenL2CAPChannel:(CBL2CAPChannel *) channel error:(NSError *) error;
```

<a id="Discussion"></a>

## Discussion

This method delivers the result of a previous call to [openL2CAPChannel:](../cbperipheral/openl2capchannel%28__%29.md).
