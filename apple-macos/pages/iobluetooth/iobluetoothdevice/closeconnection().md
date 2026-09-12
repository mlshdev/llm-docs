> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/closeconnection()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/closeconnection())

# closeConnection() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Close down the baseband connection to the device.

## Declaration

```swift
func closeConnection() -> IOReturn
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the connection has successfully been closed.

<a id="Discussion"></a>

## Discussion

This method is synchronous and will not return until the connection has been closed (or the command failed). In the future this API will be changed to allow asynchronous operation.

# closeConnection (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Close down the baseband connection to the device.

## Declaration

```objectivec
- (IOReturn) closeConnection;
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the connection has successfully been closed.

<a id="Discussion"></a>

## Discussion

This method is synchronous and will not return until the connection has been closed (or the command failed). In the future this API will be changed to allow asynchronous operation.
