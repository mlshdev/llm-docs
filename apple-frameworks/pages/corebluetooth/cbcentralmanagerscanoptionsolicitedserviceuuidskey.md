> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerscanoptionsolicitedserviceuuidskey

# CBCentralManagerScanOptionSolicitedServiceUUIDsKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of service UUIDs that you want to scan for.

## Declaration

```swift
let CBCentralManagerScanOptionSolicitedServiceUUIDsKey: String
```

<a id="Discussion"></a>

## Discussion

The array is an instance of [NSArray](../foundation/nsarray.md), and uses [CBUUID](cbuuid.md) objects to represent the UUIDs to scan for.

Specifying this scan option causes the central manager to also scan for peripherals soliciting any of the services contained in the array.

## See Also

### Constants

- [CBCentralManagerScanOptionAllowDuplicatesKey](cbcentralmanagerscanoptionallowduplicateskey.md): A Boolean value that specifies whether the scan should run without duplicate filtering.

# CBCentralManagerScanOptionSolicitedServiceUUIDsKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of service UUIDs that you want to scan for.

## Declaration

```objectivec
extern NSString * const CBCentralManagerScanOptionSolicitedServiceUUIDsKey;
```

<a id="Discussion"></a>

## Discussion

The array is an instance of [NSArray](../foundation/nsarray.md), and uses [CBUUID](cbuuid.md) objects to represent the UUIDs to scan for.

Specifying this scan option causes the central manager to also scan for peripherals soliciting any of the services contained in the array.

## See Also

### Constants

- [CBCentralManagerScanOptionAllowDuplicatesKey](cbcentralmanagerscanoptionallowduplicateskey.md): A Boolean value that specifies whether the scan should run without duplicate filtering.
