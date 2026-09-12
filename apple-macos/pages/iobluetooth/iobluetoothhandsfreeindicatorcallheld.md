> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreeindicatorcallheld](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeindicatorcallheld)

# IOBluetoothHandsFreeIndicatorCallHeld (Swift)

**Framework:** IOBluetooth  
**Kind:** Global Variable  
**Availability:** macOS

The command string you use to show a call hold status indicator on a phone.

## Declaration

```swift
let IOBluetoothHandsFreeIndicatorCallHeld: String
```

<a id="Discussion"></a>

## Discussion

The possible values for the hold indicator are:

- **`0`**: No calls are on hold.
- **`1`**: A call is on hold and another is active.
- **`2`**: A call is on hold and no calls are active.

## See Also

### Call Status

- [IOBluetoothHandsFreeIndicatorCall](iobluetoothhandsfreeindicatorcall.md): The command string you use to show an active call indicator on a phone.
- [IOBluetoothHandsFreeIndicatorCallSetup](iobluetoothhandsfreeindicatorcallsetup.md): The command string you use to show a call setup status indicator on a phone.

# IOBluetoothHandsFreeIndicatorCallHeld (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Global Variable  
**Availability:** macOS

The command string you use to show a call hold status indicator on a phone.

## Declaration

```objectivec
extern NSString * const IOBluetoothHandsFreeIndicatorCallHeld;
```

<a id="Discussion"></a>

## Discussion

The possible values for the hold indicator are:

- **`0`**: No calls are on hold.
- **`1`**: A call is on hold and another is active.
- **`2`**: A call is on hold and no calls are active.

## See Also

### Call Status

- [IOBluetoothHandsFreeIndicatorCall](iobluetoothhandsfreeindicatorcall.md): The command string you use to show an active call indicator on a phone.
- [IOBluetoothHandsFreeIndicatorCallSetup](iobluetoothhandsfreeindicatorcallsetup.md): The command string you use to show a call setup status indicator on a phone.
