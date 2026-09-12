> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axmfihearingdevice/paireddeviceidentifiers()](https://developer.apple.com/documentation/accessibility/axmfihearingdevice/paireddeviceidentifiers())

# pairedDeviceIdentifiers() (Swift)

**Framework:** Accessibility  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the UUIDs of the hearing device peripherals.

## Declaration

```swift
static func pairedDeviceIdentifiers() -> [UUID]
```

<a id="return-value"></a>

## Return Value

An array of [NSUUID](../../foundation/nsuuid.md) objects that represent the [Core Bluetooth](../../corebluetooth.md) UUIDs of the hearing device peripherals.

<a id="discussion"></a>

## Discussion

This function returns each [CBPeripheral](../../corebluetooth/cbperipheral.md) with a manufacturer that matches the manufacturer in your app’s `hearing.aid.app` entitlement. For bimodal hearing devices, specify an array of manufacturers for this entitlement.

Find and connect to the matching hearing device peripherals like this:

```swift
let uuids = AXMFiHearingDevice.pairedDeviceIdentifiers()
let peripherals = bluetoothManager.retrievePeripherals(withIdentifiers: uuids)
for peripheral in peripherals where peripheral.state == .connected {
    bluetoothManager.connect(peripheral)
}
```

## See Also

### Paired hearing devices

- [pairedUUIDsDidChangeNotification](paireduuidsdidchangenotification.md): A notification that the system posts when there’s a change to the UUIDs of the hearing device peripherals.

# AXMFiHearingDevicePairedUUIDs (Objective-C)

**Framework:** Accessibility  
**Kind:** Function  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the UUIDs of the hearing device peripherals.

## Declaration

```objectivec
extern NSArray<NSUUID *> *AXMFiHearingDevicePairedUUIDs();
```

<a id="return-value"></a>

## Return Value

An array of [NSUUID](../../foundation/nsuuid.md) objects that represent the [Core Bluetooth](../../corebluetooth.md) UUIDs of the hearing device peripherals.

<a id="discussion"></a>

## Discussion

This function returns each [CBPeripheral](../../corebluetooth/cbperipheral.md) with a manufacturer that matches the manufacturer in your app’s `hearing.aid.app` entitlement. For bimodal hearing devices, specify an array of manufacturers for this entitlement.

Find and connect to the matching hearing device peripherals like this:

```swift
let uuids = AXMFiHearingDevice.pairedDeviceIdentifiers()
let peripherals = bluetoothManager.retrievePeripherals(withIdentifiers: uuids)
for peripheral in peripherals where peripheral.state == .connected {
    bluetoothManager.connect(peripheral)
}
```

## See Also

### Paired hearing devices

- [AXMFiHearingDevicePairedUUIDsDidChangeNotification](paireduuidsdidchangenotification.md): A notification that the system posts when there’s a change to the UUIDs of the hearing device peripherals.
