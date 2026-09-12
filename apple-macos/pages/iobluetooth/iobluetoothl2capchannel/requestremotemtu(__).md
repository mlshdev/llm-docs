> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothl2capchannel/requestremotemtu(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothl2capchannel/requestremotemtu(_:))

# requestRemoteMTU(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Initiates the process to reconfigure the L2CAP channel with a new outgoing MTU.

## Declaration

```swift
func requestRemoteMTU(_ remoteMTU: BluetoothL2CAPMTU) -> IOReturn
```

## Parameters

- `remoteMTU`: The desired outgoing MTU.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the channel re-configure process was successfully initiated.

<a id="Discussion"></a>

## Discussion

Currently, this API does not give an indication that the re-config process has completed. In the future additional API will be available to provide that information both synchronously and asynchronously.

# requestRemoteMTU: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Initiates the process to reconfigure the L2CAP channel with a new outgoing MTU.

## Declaration

```objectivec
- (IOReturn) requestRemoteMTU:(BluetoothL2CAPMTU) remoteMTU;
```

## Parameters

- `remoteMTU`: The desired outgoing MTU.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the channel re-configure process was successfully initiated.

<a id="Discussion"></a>

## Discussion

Currently, this API does not give an indication that the re-config process has completed. In the future additional API will be available to provide that information both synchronously and asynchronously.
