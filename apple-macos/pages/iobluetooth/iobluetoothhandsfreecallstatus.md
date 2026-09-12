> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothhandsfreecallstatus](https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreecallstatus)

# IOBluetoothHandsFreeCallStatus (Swift)

**Framework:** IOBluetooth  
**Kind:** Global Variable  
**Availability:** macOS

The current state of the call.

## Declaration

```swift
let IOBluetoothHandsFreeCallStatus: String
```

<a id="Discussion"></a>

## Discussion

The string contains a single digit with one of the following values:

- **`“0”`**: An active call.
- **`“1”`**: An active call that’s on hold.
- **`“2”`**: An outgoing call that’s dialing.
- **`“3”`**: An outgoing call that’s alerting the receiver.
- **`“4”`**: An incoming call.
- **`“5”`**: A call that’s waiting.

## See Also

### Call Information

- [IOBluetoothHandsFreeCallDirection](iobluetoothhandsfreecalldirection.md): A value that indicates whether a call is incoming or outgoing.
- [IOBluetoothHandsFreeCallIndex](iobluetoothhandsfreecallindex.md): The index of the call, starting with `1`.
- [IOBluetoothHandsFreeCallMode](iobluetoothhandsfreecallmode.md): The type of call data.
- [IOBluetoothHandsFreeCallMultiparty](iobluetoothhandsfreecallmultiparty.md): A value that indicates whether the call is multiple-party.

# IOBluetoothHandsFreeCallStatus (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Global Variable  
**Availability:** macOS

The current state of the call.

## Declaration

```objectivec
extern NSString * const IOBluetoothHandsFreeCallStatus;
```

<a id="Discussion"></a>

## Discussion

The string contains a single digit with one of the following values:

- **`“0”`**: An active call.
- **`“1”`**: An active call that’s on hold.
- **`“2”`**: An outgoing call that’s dialing.
- **`“3”`**: An outgoing call that’s alerting the receiver.
- **`“4”`**: An incoming call.
- **`“5”`**: A call that’s waiting.

## See Also

### Call Information

- [IOBluetoothHandsFreeCallDirection](iobluetoothhandsfreecalldirection.md): A value that indicates whether a call is incoming or outgoing.
- [IOBluetoothHandsFreeCallIndex](iobluetoothhandsfreecallindex.md): The index of the call, starting with `1`.
- [IOBluetoothHandsFreeCallMode](iobluetoothhandsfreecallmode.md): The type of call data.
- [IOBluetoothHandsFreeCallMultiparty](iobluetoothhandsfreecallmultiparty.md): A value that indicates whether the call is multiple-party.
