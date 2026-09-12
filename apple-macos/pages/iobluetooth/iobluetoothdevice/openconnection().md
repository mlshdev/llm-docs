> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/openconnection()](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/openconnection())

# openConnection() (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Create a baseband connection to the device.

## Declaration

```swift
func openConnection() -> IOReturn
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the connection was successfully created.

<a id="Discussion"></a>

## Discussion

This method is synchronous and will not return until either a connection has been established or the create connection has failed (perhaps timed out). This method does the same thing as calling -openConnection: with a nil target. This call with proceed without authentication required, and using the default page timeout value. If authentication or a non-default page timeout is required the method -openConnection:withPageTimeout:authenticationRequired: should be used instead.

As of OS X 10.7, this method will no longer mask out “Connection Exists” ‘errors’ with a success result code; your code must account for the cases where the baseband connection is already open.

# openConnection (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Create a baseband connection to the device.

## Declaration

```objectivec
- (IOReturn) openConnection;
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the connection was successfully created.

<a id="Discussion"></a>

## Discussion

This method is synchronous and will not return until either a connection has been established or the create connection has failed (perhaps timed out). This method does the same thing as calling -openConnection: with a nil target. This call with proceed without authentication required, and using the default page timeout value. If authentication or a non-default page timeout is required the method -openConnection:withPageTimeout:authenticationRequired: should be used instead.

As of OS X 10.7, this method will no longer mask out “Connection Exists” ‘errors’ with a success result code; your code must account for the cases where the baseband connection is already open.
