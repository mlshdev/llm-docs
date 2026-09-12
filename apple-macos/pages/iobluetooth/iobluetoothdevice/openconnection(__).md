> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/openconnection(_:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/openconnection(_:))

# openConnection(\_:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Create a baseband connection to the device.

## Declaration

```swift
func openConnection(_ target: Any!) -> IOReturn
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the connection was successfully created (or if asynchronous, if the CREATE_CONNECTION command was successfully issued).

<a id="Discussion"></a>

## Discussion

If a target is specified, the open connection call is asynchronous and on completion of the CREATE_CONNECTION command, the method -connectionComplete:status: will be called on the specified target. If no target is specified, the call is synchronous and will not return until the connection is open or the CREATE_CONNECTION call has failed. This call with proceed without authentication required, and using the default page timeout value. If authentication or a non-default page timeout is required the method -openConnection:withPageTimeout:authenticationRequired: should be used instead.

As of OS X 10.7, this method will no longer mask out “Connection Exists” ‘errors’ with a success result code; your code must account for the cases where the baseband connection is already open.

# openConnection: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Create a baseband connection to the device.

## Declaration

```objectivec
- (IOReturn) openConnection:(id) target;
```

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the connection was successfully created (or if asynchronous, if the CREATE_CONNECTION command was successfully issued).

<a id="Discussion"></a>

## Discussion

If a target is specified, the open connection call is asynchronous and on completion of the CREATE_CONNECTION command, the method -connectionComplete:status: will be called on the specified target. If no target is specified, the call is synchronous and will not return until the connection is open or the CREATE_CONNECTION call has failed. This call with proceed without authentication required, and using the default page timeout value. If authentication or a non-default page timeout is required the method -openConnection:withPageTimeout:authenticationRequired: should be used instead.

As of OS X 10.7, this method will no longer mask out “Connection Exists” ‘errors’ with a success result code; your code must account for the cases where the baseband connection is already open.
