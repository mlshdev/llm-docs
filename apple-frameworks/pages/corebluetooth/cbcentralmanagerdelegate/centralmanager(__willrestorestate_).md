> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanagerdelegate/centralmanager(_:willrestorestate:)](https://developer.apple.com/documentation/corebluetooth/cbcentralmanagerdelegate/centralmanager(_:willrestorestate:))

# centralManager(\_:willRestoreState:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Tells the delegate the system is about to restore the central manager.

## Declaration

```swift
optional func centralManager(_ central: CBCentralManager, willRestoreState dict: [String : Any])
```

## Parameters

- `central`: The central manager that provides this information.
- `dict`: A dictionary that contains information about the central manager that the system preserved when your app stopped. For the available keys, see [Central Manager State Restoration Options](../central-manager-state-restoration-options.md).

<a id="Discussion"></a>

## Discussion

This method only applies to your app if it opts in to state restoration by providing [CBCentralManagerOptionRestoreIdentifierKey](../cbcentralmanageroptionrestoreidentifierkey.md) when initializing a [CBCentralManager](../cbcentralmanager.md). The system invokes this method when relaunching your app to service active or pending connections and scans that were in progress when your app stopped.

If the system calls this method but the parameters are missing (for example, if your app stopped before establishing peripherals and services), your app is responsible for restoring its previous state. Initialize any peripherals and services your app requires, and resume any activities from where they stopped.

```swift
func centralManager(_ central: CBCentralManager, willRestoreState dict: [String : Any]) {
    if let peripherals = dict[CBCentralManagerRestoredStatePeripheralsKey] as? [CBPeripheral] {
        // Use the restored peripherals.
    } else {
        // Reconnect to known devices, for example from `UserDefaults`.
    }

    if let services = dict[CBCentralManagerRestoredStateScanServicesKey] as? [CBUUID] {
        // Resume scanning for the restored services.
    } else {
        // Start scanning with your default services.
        let heartRateService = CBUUID(string: "180D")
        central.scanForPeripherals(withServices: [heartRateService])
    }
}
```

## See Also

### Monitoring the Central Manager’s State

- [centralManagerDidUpdateState(\_:)](centralmanagerdidupdatestate%28__%29.md): Tells the delegate the central manager’s state updated.

# centralManager:willRestoreState: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Tells the delegate the system is about to restore the central manager.

## Declaration

```objectivec
- (void) centralManager:(CBCentralManager *) central willRestoreState:(NSDictionary<NSString *,id> *) dict;
```

## Parameters

- `central`: The central manager that provides this information.
- `dict`: A dictionary that contains information about the central manager that the system preserved when your app stopped. For the available keys, see [Central Manager State Restoration Options](../central-manager-state-restoration-options.md).

<a id="Discussion"></a>

## Discussion

This method only applies to your app if it opts in to state restoration by providing [CBCentralManagerOptionRestoreIdentifierKey](../cbcentralmanageroptionrestoreidentifierkey.md) when initializing a [CBCentralManager](../cbcentralmanager.md). The system invokes this method when relaunching your app to service active or pending connections and scans that were in progress when your app stopped.

If the system calls this method but the parameters are missing (for example, if your app stopped before establishing peripherals and services), your app is responsible for restoring its previous state. Initialize any peripherals and services your app requires, and resume any activities from where they stopped.

```swift
func centralManager(_ central: CBCentralManager, willRestoreState dict: [String : Any]) {
    if let peripherals = dict[CBCentralManagerRestoredStatePeripheralsKey] as? [CBPeripheral] {
        // Use the restored peripherals.
    } else {
        // Reconnect to known devices, for example from `UserDefaults`.
    }

    if let services = dict[CBCentralManagerRestoredStateScanServicesKey] as? [CBUUID] {
        // Resume scanning for the restored services.
    } else {
        // Start scanning with your default services.
        let heartRateService = CBUUID(string: "180D")
        central.scanForPeripherals(withServices: [heartRateService])
    }
}
```

## See Also

### Monitoring the Central Manager’s State

- [centralManagerDidUpdateState:](centralmanagerdidupdatestate%28__%29.md): Tells the delegate the central manager’s state updated.
