> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchanneldelegate/rfcommchannelwritecomplete(_:refcon:status:)

# rfcommChannelWriteComplete(\_:refcon:status:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```swift
optional func rfcommChannelWriteComplete(_ rfcommChannel: IOBluetoothRFCOMMChannel!, refcon: UnsafeMutableRawPointer!, status error: IOReturn)
```

# rfcommChannelWriteComplete:refcon:status: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

## Declaration

```objectivec
- (void) rfcommChannelWriteComplete:(IOBluetoothRFCOMMChannel *) rfcommChannel refcon:(void *) refcon status:(IOReturn) error;
```
