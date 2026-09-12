> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheralmanageroptionrestoreidentifierkey](https://developer.apple.com/documentation/corebluetooth/cbperipheralmanageroptionrestoreidentifierkey)

# CBPeripheralManagerOptionRestoreIdentifierKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string containing a unique identifier (UID) for the peripheral manager to instantiate.

## Declaration

```swift
let CBPeripheralManagerOptionRestoreIdentifierKey: String
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSString](../foundation/nsstring.md). The system uses this UID to identify a specific [CBPeripheralManager](cbperipheralmanager.md), so the UID must be identical across executions of the app. If your app creates multiple [CBPeripheralManager](cbperipheralmanager.md) instances, assign each a distinct UID to prevent state from being mixed up between them.

In scene-based apps that adopt [UISceneDelegate](../uikit/uiscenedelegate.md), `launchOptions` is always `nil` on launch, so `UIApplicationLaunchOptionsBluetoothPeripheralsKey` is not available to deliver identifiers. Persist the UID yourself (for example, in [UserDefaults](../foundation/userdefaults.md)) and pass it to [init(delegate:queue:options:)](cbperipheralmanager/init%28delegate_queue_options_%29.md) on every launch.

Providing this key causes Core Bluetooth to call [peripheralManager(\_:willRestoreState:)](cbperipheralmanagerdelegate/peripheralmanager%28__willrestorestate_%29.md) with the preserved state when restoration is available. For a description of the state dictionary keys your delegate receives, see [Peripheral Manager State Restoration Options](peripheral-manager-state-restoration-options.md).

## See Also

### Initialization Options

- [CBPeripheralManagerOptionShowPowerAlertKey](cbperipheralmanageroptionshowpoweralertkey.md): A Boolean value specifying whether the system should warn if Bluetooth is in the powered-off state when instantiating the peripheral manager.

# CBPeripheralManagerOptionRestoreIdentifierKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string containing a unique identifier (UID) for the peripheral manager to instantiate.

## Declaration

```objectivec
extern NSString * const CBPeripheralManagerOptionRestoreIdentifierKey;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is an [NSString](../foundation/nsstring.md). The system uses this UID to identify a specific [CBPeripheralManager](cbperipheralmanager.md), so the UID must be identical across executions of the app. If your app creates multiple [CBPeripheralManager](cbperipheralmanager.md) instances, assign each a distinct UID to prevent state from being mixed up between them.

In scene-based apps that adopt [UISceneDelegate](../uikit/uiscenedelegate.md), `launchOptions` is always `nil` on launch, so `UIApplicationLaunchOptionsBluetoothPeripheralsKey` is not available to deliver identifiers. Persist the UID yourself (for example, in [NSUserDefaults](../foundation/userdefaults.md)) and pass it to [initWithDelegate:queue:options:](cbperipheralmanager/init%28delegate_queue_options_%29.md) on every launch.

Providing this key causes Core Bluetooth to call [peripheralManager:willRestoreState:](cbperipheralmanagerdelegate/peripheralmanager%28__willrestorestate_%29.md) with the preserved state when restoration is available. For a description of the state dictionary keys your delegate receives, see [Peripheral Manager State Restoration Options](peripheral-manager-state-restoration-options.md).

## See Also

### Initialization Options

- [CBPeripheralManagerOptionShowPowerAlertKey](cbperipheralmanageroptionshowpoweralertkey.md): A Boolean value specifying whether the system should warn if Bluetooth is in the powered-off state when instantiating the peripheral manager.
