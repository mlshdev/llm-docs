> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getlinktype()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getlinktype())

# getLinkType() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the link type for the baseband connection.

## Declaration

```swift
func getLinkType() -> BluetoothLinkType
```

<a id="return-value"></a>

## Return Value

Returns the link type for the baseband connection. If no baseband connection is present, kBluetoothLinkTypeNone is returned.

<a id="Discussion"></a>

## Discussion

This method only returns a valid result if a baseband connection is present (-isConnected returns TRUE).

# getLinkType (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the link type for the baseband connection.

## Declaration

```objectivec
- (BluetoothLinkType) getLinkType;
```

<a id="return-value"></a>

## Return Value

Returns the link type for the baseband connection. If no baseband connection is present, kBluetoothLinkTypeNone is returned.

<a id="Discussion"></a>

## Discussion

This method only returns a valid result if a baseband connection is present (-isConnected returns TRUE).
