> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate/handsfree(_:redial:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeaudiogatewaydelegate/handsfree(_:redial:))

# handsFree(\_:redial:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the connected Bluetooth hands-free phone or headset is redialing the last phone number.

## Declaration

```swift
optional func handsFree(_ device: IOBluetoothHandsFreeAudioGateway!, redial: NSNumber!)
```

## Parameters

- `device`: The audio gateway for the remote hands-free Bluetooth device.
- `redial`: A number that indicates whether the device is attempting to redial. This value is always set to 1.

## See Also

### Receiving Status Change Information

- [handsFree(\_:hangup:)](handsfree%28__hangup_%29.md): Tells the delegate the connected Bluetooth hands-free phone or headset is sending a hang-up signal.

# handsFree:redial: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the connected Bluetooth hands-free phone or headset is redialing the last phone number.

## Declaration

```objectivec
- (void) handsFree:(IOBluetoothHandsFreeAudioGateway *) device redial:(NSNumber *) redial;
```

## Parameters

- `device`: The audio gateway for the remote hands-free Bluetooth device.
- `redial`: A number that indicates whether the device is attempting to redial. This value is always set to 1.

## See Also

### Receiving Status Change Information

- [handsFree:hangup:](handsfree%28__hangup_%29.md): Tells the delegate the connected Bluetooth hands-free phone or headset is sending a hang-up signal.
