> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/handsfree(_:ringattempt:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/handsfree(_:ringattempt:))

# handsFree(\_:ringAttempt:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the phone is ringing.

## Declaration

```swift
optional func handsFree(_ device: IOBluetoothHandsFreeDevice!, ringAttempt: NSNumber!)
```

## Parameters

- `device`: The connected Bluetooth hands-free phone or headset.
- `ringAttempt`: The number of ring alerts received for the call.

## See Also

### Receiving Other Information

- [handsFree(\_:subscriberNumber:)](handsfree%28__subscribernumber_%29.md): Tells the delegate the subscriber number of a call.
- [handsFree(\_:unhandledResultCode:)](handsfree%28__unhandledresultcode_%29.md): Tells the delegate the phone sent an unknown code.

# handsFree:ringAttempt: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the phone is ringing.

## Declaration

```objectivec
- (void) handsFree:(IOBluetoothHandsFreeDevice *) device ringAttempt:(NSNumber *) ringAttempt;
```

## Parameters

- `device`: The connected Bluetooth hands-free phone or headset.
- `ringAttempt`: The number of ring alerts received for the call.

## See Also

### Receiving Other Information

- [handsFree:subscriberNumber:](handsfree%28__subscribernumber_%29.md): Tells the delegate the subscriber number of a call.
- [handsFree:unhandledResultCode:](handsfree%28__unhandledresultcode_%29.md): Tells the delegate the phone sent an unknown code.
