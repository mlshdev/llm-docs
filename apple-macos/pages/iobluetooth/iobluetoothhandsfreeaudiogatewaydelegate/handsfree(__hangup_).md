> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate/handsfree(_:hangup:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate/handsfree(_:hangup:))

# handsFree(\_:hangup:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the connected Bluetooth hands-free phone or headset is sending a hang-up signal.

## Declaration

```swift
optional func handsFree(_ device: IOBluetoothHandsFreeAudioGateway!, hangup: NSNumber!)
```

## Parameters

- `device`: The remote hands-free Bluetooth device that’s sending a hang-up signal.
- `hangup`: A number that indicates whether the device is sending a hang-up signal. This value is always set to 1.

## See Also

### Receiving Status Change Information

- [handsFree(\_:redial:)](handsfree%28__redial_%29.md): Tells the delegate the connected Bluetooth hands-free phone or headset is redialing the last phone number.

# handsFree:hangup: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the connected Bluetooth hands-free phone or headset is sending a hang-up signal.

## Declaration

```objectivec
- (void) handsFree:(IOBluetoothHandsFreeAudioGateway *) device hangup:(NSNumber *) hangup;
```

## Parameters

- `device`: The remote hands-free Bluetooth device that’s sending a hang-up signal.
- `hangup`: A number that indicates whether the device is sending a hang-up signal. This value is always set to 1.

## See Also

### Receiving Status Change Information

- [handsFree:redial:](handsfree%28__redial_%29.md): Tells the delegate the connected Bluetooth hands-free phone or headset is redialing the last phone number.
