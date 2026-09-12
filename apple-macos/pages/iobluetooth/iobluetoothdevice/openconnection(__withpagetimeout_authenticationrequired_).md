> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iobluetooth/iobluetoothdevice/openconnection(_:withpagetimeout:authenticationrequired:)](https://developer.apple.com/documentation/iobluetooth/iobluetoothdevice/openconnection(_:withpagetimeout:authenticationrequired:))

# openConnection(\_:withPageTimeout:authenticationRequired:) (Swift)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Create a baseband connection to the device.

## Declaration

```swift
func openConnection(_ target: Any!, withPageTimeout pageTimeoutValue: BluetoothHCIPageTimeout, authenticationRequired: Bool) -> IOReturn
```

## Parameters

- `target`: The target to message when the create connection call is complete
- `pageTimeoutValue`: The page timeout value to use for this call
- `authenticationRequired`: BOOL value to indicate whether authentication should be required for the connection

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the connection was successfully created (or if asynchronous, if the CREATE_CONNECTION command was successfully issued).

<a id="Discussion"></a>

## Discussion

If a target is specified, the open connection call is asynchronous and on completion of the CREATE_CONNECTION command, the method -connectionComplete:status: will be called on the specified target. If no target is specified, the call is synchronous and will not return until the connection is open or the CREATE_CONNECTION call has failed.

NOTE: This method is only available in macOS 10.2.7 (Bluetooth v1.3) or later.

As of OS X 10.7, this method will no longer mask out “Connection Exists” ‘errors’ with a success result code; your code must account for the cases where the baseband connection is already open.

# openConnection:withPageTimeout:authenticationRequired: (Objective-C)

**Framework:** IOBluetooth  
**Kind:** Instance Method  
**Availability:** macOS

Create a baseband connection to the device.

## Declaration

```objectivec
- (IOReturn) openConnection:(id) target withPageTimeout:(BluetoothHCIPageTimeout) pageTimeoutValue authenticationRequired:(BOOL) authenticationRequired;
```

## Parameters

- `target`: The target to message when the create connection call is complete
- `pageTimeoutValue`: The page timeout value to use for this call
- `authenticationRequired`: BOOL value to indicate whether authentication should be required for the connection

<a id="return-value"></a>

## Return Value

Returns kIOReturnSuccess if the connection was successfully created (or if asynchronous, if the CREATE_CONNECTION command was successfully issued).

<a id="Discussion"></a>

## Discussion

If a target is specified, the open connection call is asynchronous and on completion of the CREATE_CONNECTION command, the method -connectionComplete:status: will be called on the specified target. If no target is specified, the call is synchronous and will not return until the connection is open or the CREATE_CONNECTION call has failed.

NOTE: This method is only available in macOS 10.2.7 (Bluetooth v1.3) or later.

As of OS X 10.7, this method will no longer mask out “Connection Exists” ‘errors’ with a success result code; your code must account for the cases where the baseband connection is already open.
