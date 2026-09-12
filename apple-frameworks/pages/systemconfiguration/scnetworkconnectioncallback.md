> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectioncallback](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectioncallback)

# SCNetworkConnectionCallBack (Swift)

**Framework:** System Configuration  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The type of callback function used when a status event is delivered.

## Declaration

```swift
typealias SCNetworkConnectionCallBack = (SCNetworkConnection, SCNetworkConnectionStatus, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `connection`: The network connection.
- `status`: The connection status.
- `info`: Application-specific information.

## Topics

### Fields

- [connection](1807883-connection.md): The network connection.
- [status](1807884-status.md): The connection status.

## See Also

### Data Types

- [SCNetworkConnection](scnetworkconnection.md): The handle to manage a connection-oriented service.
- [SCNetworkConnectionContext](scnetworkconnectioncontext.md): A structure containing user-specified data and callbacks for a network connection.

# SCNetworkConnectionCallBack (Objective-C)

**Framework:** System Configuration  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The type of callback function used when a status event is delivered.

## Declaration

```objectivec
typedef void (*)(const struct __SCNetworkConnection *, enum SCNetworkConnectionStatus, void *) SCNetworkConnectionCallBack;
```

## Parameters

- `connection`: The network connection.
- `status`: The connection status.
- `info`: Application-specific information.

## Topics

### Fields

- [connection](1807883-connection.md): The network connection.
- [status](1807884-status.md): The connection status.

## See Also

### Data Types

- [SCNetworkConnectionRef](scnetworkconnection.md): The handle to manage a connection-oriented service.
- [SCNetworkConnectionContext](scnetworkconnectioncontext.md): A structure containing user-specified data and callbacks for a network connection.
