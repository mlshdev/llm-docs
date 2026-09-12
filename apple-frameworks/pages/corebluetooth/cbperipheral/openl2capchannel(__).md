> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheral/openl2capchannel(_:)](https://developer.apple.com/documentation/corebluetooth/cbperipheral/openl2capchannel(_:))

# openL2CAPChannel(\_:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Attempts to open an L2CAP channel to the peripheral using the supplied Protocol/Service Multiplexer (PSM).

## Declaration

```swift
func openL2CAPChannel(_ PSM: CBL2CAPPSM)
```

## Parameters

- `PSM`: The PSM of the channel to open.

## See Also

### Working with L2CAP Channels

- [CBL2CAPChannel](../cbl2capchannel.md): A live L2CAP connection to a remote device.
- [CBL2CAPPSM](../cbl2cappsm.md): The type of PSM identifiers.

# openL2CAPChannel: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Attempts to open an L2CAP channel to the peripheral using the supplied Protocol/Service Multiplexer (PSM).

## Declaration

```objectivec
- (void) openL2CAPChannel:(CBL2CAPPSM) PSM;
```

## Parameters

- `PSM`: The PSM of the channel to open.

## See Also

### Working with L2CAP Channels

- [CBL2CAPChannel](../cbl2capchannel.md): A live L2CAP connection to a remote device.
- [CBL2CAPPSM](../cbl2cappsm.md): The type of PSM identifiers.
