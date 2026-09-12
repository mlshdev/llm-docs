> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/handsfree(_:incomingsms:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevicedelegate/handsfree(_:incomingsms:))

# handsFree(\_:incomingSMS:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate there’s an incoming text message.

## Declaration

```swift
optional func handsFree(_ device: IOBluetoothHandsFreeDevice!, incomingSMS sms: [AnyHashable : Any]!)
```

## Parameters

- `device`: The connected Bluetooth hands-free phone or headset.
- `sms`: A dictionary containing the incoming SMS message. For dictionary keys, see [SMS Dictionary Key Constants](../sms-dictionary-key-constants.md).

## See Also

### Receiving SMS Information

- [SMS Dictionary Key Constants](../sms-dictionary-key-constants.md): Read the parts of an SMS message.

# handsFree:incomingSMS: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Tells the delegate there’s an incoming text message.

## Declaration

```objectivec
- (void) handsFree:(IOBluetoothHandsFreeDevice *) device incomingSMS:(NSDictionary *) sms;
```

## Parameters

- `device`: The connected Bluetooth hands-free phone or headset.
- `sms`: A dictionary containing the incoming SMS message. For dictionary keys, see [SMS Dictionary Key Constants](../sms-dictionary-key-constants.md).

## See Also

### Receiving SMS Information

- [SMS Dictionary Key Constants](../sms-dictionary-key-constants.md): Read the parts of an SMS message.
