> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothrfcommchannel/getmtu()](https://developer.apple.com/documentation/iobluetooth/iobluetoothrfcommchannel/getmtu())

# getMTU() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns the channel maximum transfer unit.

## Declaration

```swift
func getMTU() -> BluetoothRFCOMMMTU
```

<a id="return-value"></a>

## Return Value

Channel MTU size .

<a id="Discussion"></a>

## Discussion

Returns the length of the largest chunk of data that this channel can carry. If the caller wishes to use the write:length:sleep: api the length of the data can not be bigger than the channel MTU (maximum transfer unit).

# getMTU (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Returns the channel maximum transfer unit.

## Declaration

```objectivec
- (BluetoothRFCOMMMTU) getMTU;
```

<a id="return-value"></a>

## Return Value

Channel MTU size .

<a id="Discussion"></a>

## Discussion

Returns the length of the largest chunk of data that this channel can carry. If the caller wishes to use the write:length:sleep: api the length of the data can not be bigger than the channel MTU (maximum transfer unit).
