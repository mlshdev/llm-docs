> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchanneldelegate/l2capchannelwritecomplete(_:refcon:status:)

# l2capChannelWriteComplete(\_:refcon:status:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```swift
optional func l2capChannelWriteComplete(_ l2capChannel: IOBluetoothL2CAPChannel!, refcon: UnsafeMutableRawPointer!, status error: IOReturn)
```

# l2capChannelWriteComplete:refcon:status: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```objectivec
- (void) l2capChannelWriteComplete:(IOBluetoothL2CAPChannel *) l2capChannel refcon:(void *) refcon status:(IOReturn) error;
```
