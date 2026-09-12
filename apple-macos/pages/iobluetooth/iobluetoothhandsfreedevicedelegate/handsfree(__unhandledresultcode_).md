> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/handsfree(_:unhandledresultcode:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/handsfree(_:unhandledresultcode:))

# handsFree(\_:unhandledResultCode:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the phone sent an unknown code.

## Declaration

```swift
optional func handsFree(_ device: IOBluetoothHandsFreeDevice!, unhandledResultCode resultCode: String!)
```

## Parameters

- `device`: The connected Bluetooth hands-free phone or headset.
- `resultCode`: A string containing the result code. The `“/r/n”` strings are stripped from the beginning and end.

## See Also

### Receiving Other Information

- [handsFree(\_:subscriberNumber:)](handsfree%28__subscribernumber_%29.md): Tells the delegate the subscriber number of a call.
- [handsFree(\_:ringAttempt:)](handsfree%28__ringattempt_%29.md): Tells the delegate the phone is ringing.

# handsFree:unhandledResultCode: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the phone sent an unknown code.

## Declaration

```objectivec
- (void) handsFree:(IOBluetoothHandsFreeDevice *) device unhandledResultCode:(NSString *) resultCode;
```

## Parameters

- `device`: The connected Bluetooth hands-free phone or headset.
- `resultCode`: A string containing the result code. The `“/r/n”` strings are stripped from the beginning and end.

## See Also

### Receiving Other Information

- [handsFree:subscriberNumber:](handsfree%28__subscribernumber_%29.md): Tells the delegate the subscriber number of a call.
- [handsFree:ringAttempt:](handsfree%28__ringattempt_%29.md): Tells the delegate the phone is ringing.
