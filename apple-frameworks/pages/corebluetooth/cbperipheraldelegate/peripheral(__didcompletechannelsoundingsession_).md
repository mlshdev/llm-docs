> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didcompletechannelsoundingsession:)](https://developer.apple.com/documentation/corebluetooth/cbperipheraldelegate/peripheral(_:didcompletechannelsoundingsession:))

# peripheral(\_:didCompleteChannelSoundingSession:) (Swift)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
optional func peripheral(_ peripheral: CBPeripheral, didCompleteChannelSoundingSession error: (any Error)?)
```

## Parameters

- `peripheral`: The peripheral providing this update.
- `error`: If an error occurred, the cause of the failure.

<a id="discussion"></a>

## Discussion

This method is called when a channel sounding session completes.

# peripheral:didCompleteChannelSoundingSession: (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```objectivec
- (void) peripheral:(CBPeripheral *) peripheral didCompleteChannelSoundingSession:(NSError *) error;
```

## Parameters

- `peripheral`: The peripheral providing this update.
- `error`: If an error occurred, the cause of the failure.

<a id="discussion"></a>

## Discussion

This method is called when a channel sounding session completes.
