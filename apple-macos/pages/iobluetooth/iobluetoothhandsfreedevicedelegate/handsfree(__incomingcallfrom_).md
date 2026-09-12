> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/handsfree(_:incomingcallfrom:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/handsfree(_:incomingcallfrom:))

# handsFree(\_:incomingCallFrom:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate there’s an incoming call on the connected Bluetooth hands-free phone or headset.

## Declaration

```swift
optional func handsFree(_ device: IOBluetoothHandsFreeDevice!, incomingCallFrom number: String!)
```

## Parameters

- `device`: The connected Bluetooth hands-free phone or headset.
- `number`: The phone number of the caller.

## See Also

### Receiving Call Status

- [handsFree(\_:currentCall:)](handsfree%28__currentcall_%29.md): Sends the delegate information about the current call.
- [Current Call Information Constants](../current-call-information-constants.md): Get information about a phone call on a hands-free Bluetooth device.

# handsFree:incomingCallFrom: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate there’s an incoming call on the connected Bluetooth hands-free phone or headset.

## Declaration

```objectivec
- (void) handsFree:(IOBluetoothHandsFreeDevice *) device incomingCallFrom:(NSString *) number;
```

## Parameters

- `device`: The connected Bluetooth hands-free phone or headset.
- `number`: The phone number of the caller.

## See Also

### Receiving Call Status

- [handsFree:currentCall:](handsfree%28__currentcall_%29.md): Sends the delegate information about the current call.
- [Current Call Information Constants](../current-call-information-constants.md): Get information about a phone call on a hands-free Bluetooth device.
