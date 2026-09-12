> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectioncreatewithserviceid(_:_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectioncreatewithserviceid(_:_:_:_:))

# SCNetworkConnectionCreateWithServiceID(\_:\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Creates a new connection reference to use for getting the status or for connecting or disconnecting the associated service.

## Declaration

```swift
func SCNetworkConnectionCreateWithServiceID(_ allocator: CFAllocator?, _ serviceID: CFString, _ callout: SCNetworkConnectionCallBack?, _ context: UnsafeMutablePointer<SCNetworkConnectionContext>?) -> SCNetworkConnection?
```

## Parameters

- `allocator`: The allocator that should be used to allocate memory for the connection structure. This parameter may be `NULL`, in which case the current default allocator is used. If this reference is not a valid allocator, the behavior is undefined.
- `serviceID`: The service identifier of the connection. This value uniquely identifies service in the system configuration database.
- `callout`: The function to be called when the status of the connection changes. If this parameter is `NULL`, the application receives notifications of status change and will need to poll for updates.
- `context`: User-specified data associated with the connection.

<a id="return-value"></a>

## Return Value

A reference to a new network connection.

# SCNetworkConnectionCreateWithServiceID (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Creates a new connection reference to use for getting the status or for connecting or disconnecting the associated service.

## Declaration

```objectivec
SCNetworkConnectionRefSCNetworkConnectionCreateWithServiceID(CFAllocatorRef allocator, CFStringRef serviceID, SCNetworkConnectionCallBack callout, SCNetworkConnectionContext *context);
```

## Parameters

- `allocator`: The allocator that should be used to allocate memory for the connection structure. This parameter may be `NULL`, in which case the current default allocator is used. If this reference is not a valid allocator, the behavior is undefined.
- `serviceID`: The service identifier of the connection. This value uniquely identifies service in the system configuration database.
- `callout`: The function to be called when the status of the connection changes. If this parameter is `NULL`, the application receives notifications of status change and will need to poll for updates.
- `context`: User-specified data associated with the connection.

<a id="return-value"></a>

## Return Value

A reference to a new network connection.
