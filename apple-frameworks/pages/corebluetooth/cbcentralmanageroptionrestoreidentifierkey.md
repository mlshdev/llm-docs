> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbcentralmanageroptionrestoreidentifierkey](https://developer.apple.com/documentation/corebluetooth/cbcentralmanageroptionrestoreidentifierkey)

# CBCentralManagerOptionRestoreIdentifierKey (Swift)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string containing a unique identifier (UID) for the central manager to instantiate.

## Declaration

```swift
let CBCentralManagerOptionRestoreIdentifierKey: String
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSString](../foundation/nsstring.md). The system uses this UID to identify a specific [CBCentralManager](cbcentralmanager.md), so the UID must be identical across executions of the app.

In scene-based apps that adopt [UISceneDelegate](../uikit/uiscenedelegate.md), `launchOptions` is always `nil` on launch, so `UIApplicationLaunchOptionsBluetoothCentralsKey` is not available to deliver identifiers. Persist the UID yourself (for example, in [UserDefaults](../foundation/userdefaults.md)) and pass it to [init(delegate:queue:options:)](cbcentralmanager/init%28delegate_queue_options_%29.md) on every launch.

Providing this key causes Core Bluetooth to call [centralManager(\_:willRestoreState:)](cbcentralmanagerdelegate/centralmanager%28__willrestorestate_%29.md) with the preserved state when restoration is available. For a description of the state dictionary keys your delegate receives, see [Central Manager State Restoration Options](central-manager-state-restoration-options.md).

## See Also

### Constants

- [CBCentralManagerOptionShowPowerAlertKey](cbcentralmanageroptionshowpoweralertkey.md): A Boolean value that specifies whether the system warns the user if the app instantiates the central manager when Bluetooth service isn’t available.

# CBCentralManagerOptionRestoreIdentifierKey (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A string containing a unique identifier (UID) for the central manager to instantiate.

## Declaration

```objectivec
extern NSString * const CBCentralManagerOptionRestoreIdentifierKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSString](../foundation/nsstring.md). The system uses this UID to identify a specific [CBCentralManager](cbcentralmanager.md), so the UID must be identical across executions of the app.

In scene-based apps that adopt [UISceneDelegate](../uikit/uiscenedelegate.md), `launchOptions` is always `nil` on launch, so `UIApplicationLaunchOptionsBluetoothCentralsKey` is not available to deliver identifiers. Persist the UID yourself (for example, in [NSUserDefaults](../foundation/userdefaults.md)) and pass it to [initWithDelegate:queue:options:](cbcentralmanager/init%28delegate_queue_options_%29.md) on every launch.

Providing this key causes Core Bluetooth to call [centralManager:willRestoreState:](cbcentralmanagerdelegate/centralmanager%28__willrestorestate_%29.md) with the preserved state when restoration is available. For a description of the state dictionary keys your delegate receives, see [Central Manager State Restoration Options](central-manager-state-restoration-options.md).

## See Also

### Constants

- [CBCentralManagerOptionShowPowerAlertKey](cbcentralmanageroptionshowpoweralertkey.md): A Boolean value that specifies whether the system warns the user if the app instantiates the central manager when Bluetooth service isn’t available.
