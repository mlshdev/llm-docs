> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbdescriptor/value](https://developer.apple.com/documentation/corebluetooth/cbdescriptor/value)

# value (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value of the descriptor.

## Declaration

```swift
var value: Any? { get }
```

<a id="Discussion"></a>

## Discussion

The documentation for [CBUUID](../cbuuid.md) details the value types for the various descriptor types.

You can read the value of a descriptor by calling the [readValue(for:)](../cbperipheral/readvalue%28for_%29-91hhp.md) method of the [CBPeripheral](../cbperipheral.md) class. You can write the value of a descriptor by calling the [writeValue(\_:for:)](../cbperipheral/writevalue%28__for_%29.md) method of the [CBPeripheral](../cbperipheral.md) class. You can’t, however, use the [writeValue(\_:for:)](../cbperipheral/writevalue%28__for_%29.md) method to write the value of a client configuration descriptor ([CBUUIDClientCharacteristicConfigurationString](../cbuuidclientcharacteristicconfigurationstring.md)). Instead, you use the [setNotifyValue(\_:for:)](../cbperipheral/setnotifyvalue%28__for_%29.md) method of the [CBPeripheral](../cbperipheral.md) class to configure client indications or notifications of a characteristic’s value on a server.

# value (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value of the descriptor.

## Declaration

```objectivec
@property (retain, readonly, nullable) id value;
```

<a id="Discussion"></a>

## Discussion

The documentation for [CBUUID](../cbuuid.md) details the value types for the various descriptor types.

You can read the value of a descriptor by calling the [readValueForDescriptor:](../cbperipheral/readvalue%28for_%29-91hhp.md) method of the [CBPeripheral](../cbperipheral.md) class. You can write the value of a descriptor by calling the [writeValue:forDescriptor:](../cbperipheral/writevalue%28__for_%29.md) method of the [CBPeripheral](../cbperipheral.md) class. You can’t, however, use the [writeValue:forDescriptor:](../cbperipheral/writevalue%28__for_%29.md) method to write the value of a client configuration descriptor ([CBUUIDClientCharacteristicConfigurationString](../cbuuidclientcharacteristicconfigurationstring.md)). Instead, you use the [setNotifyValue:forCharacteristic:](../cbperipheral/setnotifyvalue%28__for_%29.md) method of the [CBPeripheral](../cbperipheral.md) class to configure client indications or notifications of a characteristic’s value on a server.
