> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/handsfree(_:subscribernumber:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/handsfree(_:subscribernumber:))

# handsFree(\_:subscriberNumber:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the subscriber number of a call.

## Declaration

```swift
optional func handsFree(_ device: IOBluetoothHandsFreeDevice!, subscriberNumber: String!)
```

## Parameters

- `device`: The connected Bluetooth hands-free phone or headset.
- `subscriberNumber`: The subscriber number.

<a id="Discussion"></a>

## Discussion

If multiple subscriber numbers are on the gateway, this function is called once for each subscriber number.

## See Also

### Receiving Other Information

- [handsFree(\_:ringAttempt:)](handsfree%28__ringattempt_%29.md): Tells the delegate the phone is ringing.
- [handsFree(\_:unhandledResultCode:)](handsfree%28__unhandledresultcode_%29.md): Tells the delegate the phone sent an unknown code.

# handsFree:subscriberNumber: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate the subscriber number of a call.

## Declaration

```objectivec
- (void) handsFree:(IOBluetoothHandsFreeDevice *) device subscriberNumber:(NSString *) subscriberNumber;
```

## Parameters

- `device`: The connected Bluetooth hands-free phone or headset.
- `subscriberNumber`: The subscriber number.

<a id="Discussion"></a>

## Discussion

If multiple subscriber numbers are on the gateway, this function is called once for each subscriber number.

## See Also

### Receiving Other Information

- [handsFree:ringAttempt:](handsfree%28__ringattempt_%29.md): Tells the delegate the phone is ringing.
- [handsFree:unhandledResultCode:](handsfree%28__unhandledresultcode_%29.md): Tells the delegate the phone sent an unknown code.
