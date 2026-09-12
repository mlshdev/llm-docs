> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevicepair/replypincode(_:pincode:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevicepair/replypincode(_:pincode:))

# replyPINCode(\_:pinCode:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

This is the required reply to the devicePairingPINCodeRequest delegate message. Set the PIN code to use during pairing if required.

## Declaration

```swift
func replyPINCode(_ PINCodeSize: Int, pinCode PINCode: UnsafeMutablePointer<BluetoothPINCode>!)
```

## Parameters

- `PINCodeSize`: The PIN code length in octets (8 bits).
- `PINCode`: PIN code for the device. Can be up to a maximum of 128 bits.

# replyPINCode:PINCode: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

This is the required reply to the devicePairingPINCodeRequest delegate message. Set the PIN code to use during pairing if required.

## Declaration

```objectivec
- (void) replyPINCode:(ByteCount) PINCodeSize PINCode:(BluetoothPINCode *) PINCode;
```

## Parameters

- `PINCodeSize`: The PIN code length in octets (8 bits).
- `PINCode`: PIN code for the device. Can be up to a maximum of 128 bits.
