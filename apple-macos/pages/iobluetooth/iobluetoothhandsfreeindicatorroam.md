> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iobluetooth/iobluetoothhandsfreeindicatorroam

# IOBluetoothHandsFreeIndicatorRoam (Swift)

**Framework:** IOBluetooth  
**Kind:** Global Variable  
**Availability:** macOS

The command string you use to show a roaming status indicator on a phone.

## Declaration

```swift
let IOBluetoothHandsFreeIndicatorRoam: String
```

<a id="Discussion"></a>

## Discussion

The possible values for the roaming status indicator are:

- **`0`**: The phone is connected to the customer’s carrier network.
- **`1`**: The phone isn’t connected to the customer’s carrier network.

## See Also

### Phone Network Connection

- [IOBluetoothHandsFreeIndicatorSignal](iobluetoothhandsfreeindicatorsignal.md): The command string you use to show a signal strength indicator on a phone.
- [IOBluetoothHandsFreeIndicatorService](iobluetoothhandsfreeindicatorservice.md): The command string you use to show a carrier network connection indicator on a phone.

# IOBluetoothHandsFreeIndicatorRoam (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Global Variable  
**Availability:** macOS

The command string you use to show a roaming status indicator on a phone.

## Declaration

```objectivec
extern NSString * const IOBluetoothHandsFreeIndicatorRoam;
```

<a id="Discussion"></a>

## Discussion

The possible values for the roaming status indicator are:

- **`0`**: The phone is connected to the customer’s carrier network.
- **`1`**: The phone isn’t connected to the customer’s carrier network.

## See Also

### Phone Network Connection

- [IOBluetoothHandsFreeIndicatorSignal](iobluetoothhandsfreeindicatorsignal.md): The command string you use to show a signal strength indicator on a phone.
- [IOBluetoothHandsFreeIndicatorService](iobluetoothhandsfreeindicatorservice.md): The command string you use to show a carrier network connection indicator on a phone.
