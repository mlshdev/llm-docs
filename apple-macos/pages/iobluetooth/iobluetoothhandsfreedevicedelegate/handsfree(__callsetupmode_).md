> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/handsfree(_:callsetupmode:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/handsfree(_:callsetupmode:))

# handsFree(\_:callSetupMode:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the call setup indicator of the connected Bluetooth hands-free phone or headset has changed.

## Declaration

```swift
optional func handsFree(_ device: IOBluetoothHandsFreeDevice!, callSetupMode: NSNumber!)
```

## Parameters

- `device`: The connected Bluetooth hands-free phone or headset.
- `callSetupMode`: The new value of the call setup indicator. For possible values, see [IOBluetoothHandsFreeIndicatorCallSetup](../iobluetoothhandsfreeindicatorcallsetup.md).

## See Also

### Receiving Status Indicator Changes

- [handsFree(\_:isCallActive:)](handsfree%28__iscallactive_%29.md): Tells the delegate the active call indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree(\_:isServiceAvailable:)](handsfree%28__isserviceavailable_%29.md): Tells the delegate the service level indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree(\_:signalStrength:)](handsfree%28__signalstrength_%29.md): Tells the delegate the call setup signal strength indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree(\_:callHoldState:)](handsfree%28__callholdstate_%29.md): Tells the delegate the call held indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree(\_:isRoaming:)](handsfree%28__isroaming_%29.md): Tells the delegate the roaming indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree(\_:batteryCharge:)](handsfree%28__batterycharge_%29.md): Tells the delegate the battery level indicator of the connected Bluetooth hands-free phone or headset has changed.

# handsFree:callSetupMode: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the call setup indicator of the connected Bluetooth hands-free phone or headset has changed.

## Declaration

```objectivec
- (void) handsFree:(IOBluetoothHandsFreeDevice *) device callSetupMode:(NSNumber *) callSetupMode;
```

## Parameters

- `device`: The connected Bluetooth hands-free phone or headset.
- `callSetupMode`: The new value of the call setup indicator. For possible values, see [IOBluetoothHandsFreeIndicatorCallSetup](../iobluetoothhandsfreeindicatorcallsetup.md).

## See Also

### Receiving Status Indicator Changes

- [handsFree:isCallActive:](handsfree%28__iscallactive_%29.md): Tells the delegate the active call indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree:isServiceAvailable:](handsfree%28__isserviceavailable_%29.md): Tells the delegate the service level indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree:signalStrength:](handsfree%28__signalstrength_%29.md): Tells the delegate the call setup signal strength indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree:callHoldState:](handsfree%28__callholdstate_%29.md): Tells the delegate the call held indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree:isRoaming:](handsfree%28__isroaming_%29.md): Tells the delegate the roaming indicator of the connected Bluetooth hands-free phone or headset has changed.
- [handsFree:batteryCharge:](handsfree%28__batterycharge_%29.md): Tells the delegate the battery level indicator of the connected Bluetooth hands-free phone or headset has changed.
