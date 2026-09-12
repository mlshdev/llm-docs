> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpservicerecord/getl2cappsm(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/getl2cappsm(_:))

# getL2CAPPSM(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Allows the discovery of the L2CAP PSM assigned to the service.

## Declaration

```swift
func getL2CAPPSM(_ outPSM: UnsafeMutablePointer<BluetoothL2CAPPSM>!) -> IOReturn
```

## Parameters

- `outPSM`: A pointer to the location that will get the found L2CAP PSM.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the PSM is found.

<a id="Discussion"></a>

## Discussion

This method will search through the ProtoclDescriptorList attribute to find an entry with the L2CAP UUID (UUID16: 0x0100). If one is found, it gets the second element of the data element sequence and sets the outPSM pointer to it. The PSM value only gets set when kIOReturnSuccess is returned.

# getL2CAPPSM: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Allows the discovery of the L2CAP PSM assigned to the service.

## Declaration

```objectivec
- (IOReturn) getL2CAPPSM:(BluetoothL2CAPPSM *) outPSM;
```

## Parameters

- `outPSM`: A pointer to the location that will get the found L2CAP PSM.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the PSM is found.

<a id="Discussion"></a>

## Discussion

This method will search through the ProtoclDescriptorList attribute to find an entry with the L2CAP UUID (UUID16: 0x0100). If one is found, it gets the second element of the data element sequence and sets the outPSM pointer to it. The PSM value only gets set when kIOReturnSuccess is returned.
