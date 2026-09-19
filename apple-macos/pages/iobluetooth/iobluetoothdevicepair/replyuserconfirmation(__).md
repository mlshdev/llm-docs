> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepair/replyuserconfirmation(_:)

# replyUserConfirmation(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

This is the required reply to the devicePairingUserConfirmationRequest delegate message.

## Declaration

```swift
func replyUserConfirmation(_ reply: Bool)
```

## Parameters

- `reply`: A yes/no answer provide by the user to the numeric comparison presented.

# replyUserConfirmation: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

This is the required reply to the devicePairingUserConfirmationRequest delegate message.

## Declaration

```objectivec
- (void) replyUserConfirmation:(BOOL) reply;
```

## Parameters

- `reply`: A yes/no answer provide by the user to the numeric comparison presented.
