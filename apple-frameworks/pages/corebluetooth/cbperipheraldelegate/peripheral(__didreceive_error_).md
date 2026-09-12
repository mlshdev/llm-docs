> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didreceive:error:)](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didreceive:error:))

# peripheral(\_:didReceive:error:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
optional func peripheral(_ peripheral: CBPeripheral, didReceive results: CBChannelSoundingProcedureResults?, error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral providing this update.
- `results`: An object containing the results of a channel sounding procedure.
- `error`: If an error occurred, the cause of the failure.

<a id="discussion"></a>

## Discussion

This method returns the results of a channel sounding procedure.

# peripheral:didReceiveChannelSoundingProcedureResults:error: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```objectivec
- (void) peripheral:(CBPeripheral *) peripheral didReceiveChannelSoundingProcedureResults:(CBChannelSoundingProcedureResults *) results error:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral providing this update.
- `results`: An object containing the results of a channel sounding procedure.
- `error`: If an error occurred, the cause of the failure.

<a id="discussion"></a>

## Discussion

This method returns the results of a channel sounding procedure.
