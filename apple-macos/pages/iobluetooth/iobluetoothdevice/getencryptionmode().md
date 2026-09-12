> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/getencryptionmode()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/getencryptionmode())

# getEncryptionMode() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the encryption mode for the baseband connection.

## Declaration

```swift
func getEncryptionMode() -> BluetoothHCIEncryptionMode
```

<a id="return-value"></a>

## Return Value

Returns the encryption mode for the baseband connection. If no baseband connection is present, kEncryptionDisabled is returned.

<a id="Discussion"></a>

## Discussion

This method only returns a valid result if a baseband connection is present (-isConnected returns TRUE).

# getEncryptionMode (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Get the encryption mode for the baseband connection.

## Declaration

```objectivec
- (BluetoothHCIEncryptionMode) getEncryptionMode;
```

<a id="return-value"></a>

## Return Value

Returns the encryption mode for the baseband connection. If no baseband connection is present, kEncryptionDisabled is returned.

<a id="Discussion"></a>

## Discussion

This method only returns a valid result if a baseband connection is present (-isConnected returns TRUE).
