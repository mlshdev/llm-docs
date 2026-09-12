> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreedevice/memorydial(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreedevice/memorydial(_:))

# memoryDial(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Calls the phone number stored in a speed dial or memory slot of the hands-free phone or headset.

## Declaration

```swift
func memoryDial(_ memoryLocation: Int32)
```

## Parameters

- `memoryLocation`: The speed dial or other memory index of a phone number.

## See Also

### Dialing Calls

- [dialNumber(\_:)](dialnumber%28__%29.md): Calls the phone number on a hands-free phone or headset.
- [redial()](redial%28%29.md): Calls the number stored on the hands-free phone or headset again.

# memoryDial: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Calls the phone number stored in a speed dial or memory slot of the hands-free phone or headset.

## Declaration

```objectivec
- (void) memoryDial:(int) memoryLocation;
```

## Parameters

- `memoryLocation`: The speed dial or other memory index of a phone number.

## See Also

### Dialing Calls

- [dialNumber:](dialnumber%28__%29.md): Calls the phone number on a hands-free phone or headset.
- [redial](redial%28%29.md): Calls the number stored on the hands-free phone or headset again.
