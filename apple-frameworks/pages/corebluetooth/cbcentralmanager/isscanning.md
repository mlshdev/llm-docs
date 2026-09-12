> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanager/isscanning](https://developer.apple.com/documentation/corebluetooth/cbcentralmanager/isscanning)

# isScanning (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the central is currently scanning.

## Declaration

```swift
var isScanning: Bool { get }
```

## See Also

### Scanning or Stopping Scans of Peripherals

- [scanForPeripherals(withServices:options:)](scanforperipherals%28withservices_options_%29.md): Scans for peripherals that are advertising services.
- [Peripheral Scanning Options](../peripheral-scanning-options.md): Keys used to pass options when scanning for peripherals.
- [stopScan()](stopscan%28%29.md): Asks the central manager to stop scanning for peripherals.

# isScanning (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the central is currently scanning.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL isScanning;
```

## See Also

### Scanning or Stopping Scans of Peripherals

- [scanForPeripheralsWithServices:options:](scanforperipherals%28withservices_options_%29.md): Scans for peripherals that are advertising services.
- [Peripheral Scanning Options](../peripheral-scanning-options.md): Keys used to pass options when scanning for peripherals.
- [stopScan](stopscan%28%29.md): Asks the central manager to stop scanning for peripherals.
