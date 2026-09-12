> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothrfcommchannel/setserialparameters(_:databits:parity:stopbits:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/setserialparameters(_:databits:parity:stopbits:))

# setSerialParameters(\_:dataBits:parity:stopBits:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Changes the parameters of the serial connection.

## Declaration

```swift
func setSerialParameters(_ speed: UInt32, dataBits nBits: UInt8, parity: BluetoothRFCOMMParityType, stopBits bitStop: UInt8) -> IOReturn
```

## Parameters

- `speed`: The baudrate.
- `nBits`: Number of data bits.
- `parity`: The type of parity can be NoParity, OddParity, EvenParity or MaxParity.
- `bitStop`: Number of stop bits.

<a id="return-value"></a>

## Return Value

An error code value. 0 if successful.

# setSerialParameters:dataBits:parity:stopBits: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Changes the parameters of the serial connection.

## Declaration

```objectivec
- (IOReturn) setSerialParameters:(UInt32) speed dataBits:(UInt8) nBits parity:(BluetoothRFCOMMParityType) parity stopBits:(UInt8) bitStop;
```

## Parameters

- `speed`: The baudrate.
- `nBits`: Number of data bits.
- `parity`: The type of parity can be NoParity, OddParity, EvenParity or MaxParity.
- `bitStop`: Number of stop bits.

<a id="return-value"></a>

## Return Value

An error code value. 0 if successful.
