> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/handsfree(_:currentcall:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/handsfree(_:currentcall:))

# handsFree(\_:currentCall:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sends the delegate information about the current call.

## Declaration

```swift
optional func handsFree(_ device: IOBluetoothHandsFreeDevice!, currentCall: [AnyHashable : Any]!)
```

## Parameters

- `device`: The connected Bluetooth hands-free phone or headset.
- `currentCall`: A dictionary with the incoming SMS message. For dictionary keys, see [Current Call Information Constants](../current-call-information-constants.md).

## See Also

### Receiving Call Status

- [handsFree(\_:incomingCallFrom:)](handsfree%28__incomingcallfrom_%29.md): Tells the delegate there’s an incoming call on the connected Bluetooth hands-free phone or headset.
- [Current Call Information Constants](../current-call-information-constants.md): Get information about a phone call on a hands-free Bluetooth device.

# handsFree:currentCall: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sends the delegate information about the current call.

## Declaration

```objectivec
- (void) handsFree:(IOBluetoothHandsFreeDevice *) device currentCall:(NSDictionary *) currentCall;
```

## Parameters

- `device`: The connected Bluetooth hands-free phone or headset.
- `currentCall`: A dictionary with the incoming SMS message. For dictionary keys, see [Current Call Information Constants](../current-call-information-constants.md).

## See Also

### Receiving Call Status

- [handsFree:incomingCallFrom:](handsfree%28__incomingcallfrom_%29.md): Tells the delegate there’s an incoming call on the connected Bluetooth hands-free phone or headset.
- [Current Call Information Constants](../current-call-information-constants.md): Get information about a phone call on a hands-free Bluetooth device.
