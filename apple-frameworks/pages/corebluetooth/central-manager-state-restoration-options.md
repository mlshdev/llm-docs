> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/central-manager-state-restoration-options](https://developer.apple.com/documentation/corebluetooth/central-manager-state-restoration-options)

# Central Manager State Restoration Options (Swift)

**Framework:** Core Bluetooth  
**Kind:** API Collection

Restore central manager state in scene-based apps.

<a id="Overview"></a>

## Overview

In scene-based apps that adopt [UISceneDelegate](../uikit/uiscenedelegate.md), the `launchOptions` dictionary is always `nil` on launch, and apps can no longer rely on the system to hand back central manager identifiers at launch.

Instead, generate a stable UID for each [CBCentralManager](cbcentralmanager.md), persist it (for example, in [UserDefaults](../foundation/userdefaults.md)) and pass it via [CBCentralManagerOptionRestoreIdentifierKey](cbcentralmanageroptionrestoreidentifierkey.md) when creating the manager on every launch. When restoration is available, Core Bluetooth calls [centralManager(\_:willRestoreState:)](cbcentralmanagerdelegate/centralmanager%28__willrestorestate_%29.md) and passes the preserved state in the `dict` parameter.

```swift
func makeCentralManager(
    delegate: any CBCentralManagerDelegate
) -> CBCentralManager {
    let defaults = UserDefaults.standard
    let key = "MyCentralManagerUID"
    let uid: String
    if let saved = defaults.string(forKey: key) {
        uid = saved
    } else {
        uid = UUID().uuidString
        defaults.set(uid, forKey: key)
    }
    return CBCentralManager(
        delegate: delegate,
        queue: nil,
        options: [CBCentralManagerOptionRestoreIdentifierKey: uid]
    )
}
```

[CBCentralManagerRestoredStatePeripheralsKey](cbcentralmanagerrestoredstateperipheralskey.md) contains peripherals that were connected or had a pending connection when the app stopped. [CBCentralManagerRestoredStateScanServicesKey](cbcentralmanagerrestoredstatescanserviceskey.md) contains the service UUIDs your app was scanning for. [CBCentralManagerRestoredStateScanOptionsKey](cbcentralmanagerrestoredstatescanoptionskey.md) contains the scan options that were active. If your app also acts as a peripheral, see [Peripheral Manager State Restoration Options](peripheral-manager-state-restoration-options.md) for the equivalent pattern using [CBPeripheralManagerOptionRestoreIdentifierKey](cbperipheralmanageroptionrestoreidentifierkey.md).

## Topics

### State Restoration Options

- [CBCentralManagerRestoredStatePeripheralsKey](cbcentralmanagerrestoredstateperipheralskey.md): An array of peripherals for use when restoring the state of a central manager.
- [CBCentralManagerRestoredStateScanServicesKey](cbcentralmanagerrestoredstatescanserviceskey.md): An array of service IDs for use when restoring state.
- [CBCentralManagerRestoredStateScanOptionsKey](cbcentralmanagerrestoredstatescanoptionskey.md): A dictionary of peripheral scan options for use when restoring state.

## See Also

### Initializing a Central Manager

- [init()](cbcentralmanager/init%28%29.md): Initializes the central manager without a delegate.
- [init(delegate:queue:)](cbcentralmanager/init%28delegate_queue_%29.md): Initializes the central manager with a specified delegate and dispatch queue.
- [init(delegate:queue:options:)](cbcentralmanager/init%28delegate_queue_options_%29.md): Initializes the central manager with specified delegate, dispatch queue, and initialization options.
- [Central Manager Initialization Options](central-manager-initialization-options.md): Keys used to pass options when initializing a central manager.

# Central Manager State Restoration Options (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** API Collection

Restore central manager state in scene-based apps.

<a id="Overview"></a>

## Overview

In scene-based apps that adopt [UISceneDelegate](../uikit/uiscenedelegate.md), the `launchOptions` dictionary is always `nil` on launch, and apps can no longer rely on the system to hand back central manager identifiers at launch.

Instead, generate a stable UID for each [CBCentralManager](cbcentralmanager.md), persist it (for example, in [NSUserDefaults](../foundation/userdefaults.md)) and pass it via [CBCentralManagerOptionRestoreIdentifierKey](cbcentralmanageroptionrestoreidentifierkey.md) when creating the manager on every launch. When restoration is available, Core Bluetooth calls [centralManager:willRestoreState:](cbcentralmanagerdelegate/centralmanager%28__willrestorestate_%29.md) and passes the preserved state in the `dict` parameter.

```swift
func makeCentralManager(
    delegate: any CBCentralManagerDelegate
) -> CBCentralManager {
    let defaults = UserDefaults.standard
    let key = "MyCentralManagerUID"
    let uid: String
    if let saved = defaults.string(forKey: key) {
        uid = saved
    } else {
        uid = UUID().uuidString
        defaults.set(uid, forKey: key)
    }
    return CBCentralManager(
        delegate: delegate,
        queue: nil,
        options: [CBCentralManagerOptionRestoreIdentifierKey: uid]
    )
}
```

[CBCentralManagerRestoredStatePeripheralsKey](cbcentralmanagerrestoredstateperipheralskey.md) contains peripherals that were connected or had a pending connection when the app stopped. [CBCentralManagerRestoredStateScanServicesKey](cbcentralmanagerrestoredstatescanserviceskey.md) contains the service UUIDs your app was scanning for. [CBCentralManagerRestoredStateScanOptionsKey](cbcentralmanagerrestoredstatescanoptionskey.md) contains the scan options that were active. If your app also acts as a peripheral, see [Peripheral Manager State Restoration Options](peripheral-manager-state-restoration-options.md) for the equivalent pattern using [CBPeripheralManagerOptionRestoreIdentifierKey](cbperipheralmanageroptionrestoreidentifierkey.md).

## Topics

### State Restoration Options

- [CBCentralManagerRestoredStatePeripheralsKey](cbcentralmanagerrestoredstateperipheralskey.md): An array of peripherals for use when restoring the state of a central manager.
- [CBCentralManagerRestoredStateScanServicesKey](cbcentralmanagerrestoredstatescanserviceskey.md): An array of service IDs for use when restoring state.
- [CBCentralManagerRestoredStateScanOptionsKey](cbcentralmanagerrestoredstatescanoptionskey.md): A dictionary of peripheral scan options for use when restoring state.

## See Also

### Initializing a Central Manager

- [init](cbcentralmanager/init%28%29.md): Initializes the central manager without a delegate.
- [initWithDelegate:queue:](cbcentralmanager/init%28delegate_queue_%29.md): Initializes the central manager with a specified delegate and dispatch queue.
- [initWithDelegate:queue:options:](cbcentralmanager/init%28delegate_queue_options_%29.md): Initializes the central manager with specified delegate, dispatch queue, and initialization options.
- [Central Manager Initialization Options](central-manager-initialization-options.md): Keys used to pass options when initializing a central manager.
