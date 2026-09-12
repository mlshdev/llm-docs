> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothsdpservicerecord/getrfcommchannelid(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothsdpservicerecord/getrfcommchannelid(_:))

# getRFCOMMChannelID(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Allows the discovery of the RFCOMM channel ID assigned to the service.

## Declaration

```swift
func getRFCOMMChannelID(_ rfcommChannelID: UnsafeMutablePointer<BluetoothRFCOMMChannelID>!) -> IOReturn
```

## Parameters

- `rfcommChannelID`: A pointer to the location that will get the found RFCOMM channel ID.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the channel ID is found.

<a id="Discussion"></a>

## Discussion

This method will search through the ProtoclDescriptorList attribute to find an entry with the RFCOMM UUID (UUID16: 0x0003). If one is found, it gets the second element of the data element sequence and sets the rfcommChannelID pointer to it. The channel ID only gets set when kIOReturnSuccess is returned.

# getRFCOMMChannelID: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Allows the discovery of the RFCOMM channel ID assigned to the service.

## Declaration

```objectivec
- (IOReturn) getRFCOMMChannelID:(BluetoothRFCOMMChannelID *) rfcommChannelID;
```

## Parameters

- `rfcommChannelID`: A pointer to the location that will get the found RFCOMM channel ID.

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the channel ID is found.

<a id="Discussion"></a>

## Discussion

This method will search through the ProtoclDescriptorList attribute to find an entry with the RFCOMM UUID (UUID16: 0x0003). If one is found, it gets the second element of the data element sequence and sets the rfcommChannelID pointer to it. The channel ID only gets set when kIOReturnSuccess is returned.
