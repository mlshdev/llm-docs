> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectionstart(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectionstart(_:_:_:))

# SCNetworkConnectionStart(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Starts the connection process for the specified network connection.

## Declaration

```swift
func SCNetworkConnectionStart(_ connection: SCNetworkConnection, _ userOptions: CFDictionary?, _ linger: Bool) -> Bool
```

## Parameters

- `connection`: The network connection to start.
- `userOptions`: The options with which to start the connection. If `userOptions` is `NULL`, the default settings are used. If `userOptions` are specified, they must be in the same format as network services stored in the system configuration preferences schema. The options override the default settings defined for the service.

  For security reasons, not all options can be overridden; the appropriate merging of all settings is done before the connection is established, and inappropriate options are ignored.
- `linger`: A Boolean value indicating whether the connection can persist when the application no longer has interest in it. A typical application should pass `FALSE`, in which case the connection is automatically stopped when the reference is released or the application quits. If the application passes `TRUE`, the application can release the reference or exit and the connection is maintained until a timeout event, until a specific stop request occurs, or until an error occurs.

<a id="return-value"></a>

## Return Value

`TRUE` if the connection was correctly started (the actual connection is not established yet, and the connection status needs to be periodically checked); `FALSE` if the connection request was not started (use the [SCError()](scerror%28%29.md) function to retrieve the specific error).

<a id="Discussion"></a>

## Discussion

The connection process is asynchronous and this function returns immediately. The connection status can be obtained by polling or by callback. The connection is made with the default settings from the administrator. Some of the settings can be overridden for the duration of the connection. These are specified in an options dictionary. The options dictionary uses the same format as a network service defined in the system configuration preferences schema.

> **Note**

>  Starting and stopping of connections is implicitly arbitrated. Calling `SCNetworkConnectionStart` on a connection already started indicates that the application has interest in the connection and it shouldn’t be stopped by anyone else.

## See Also

### Starting and Stopping a Connection

- [SCNetworkConnectionStop(\_:\_:)](scnetworkconnectionstop%28____%29.md): Stops the connection process for the specified network connection.

# SCNetworkConnectionStart (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Starts the connection process for the specified network connection.

## Declaration

```objectivec
Boolean SCNetworkConnectionStart(SCNetworkConnectionRef connection, CFDictionaryRef userOptions, Boolean linger);
```

## Parameters

- `connection`: The network connection to start.
- `userOptions`: The options with which to start the connection. If `userOptions` is `NULL`, the default settings are used. If `userOptions` are specified, they must be in the same format as network services stored in the system configuration preferences schema. The options override the default settings defined for the service.

  For security reasons, not all options can be overridden; the appropriate merging of all settings is done before the connection is established, and inappropriate options are ignored.
- `linger`: A Boolean value indicating whether the connection can persist when the application no longer has interest in it. A typical application should pass `FALSE`, in which case the connection is automatically stopped when the reference is released or the application quits. If the application passes `TRUE`, the application can release the reference or exit and the connection is maintained until a timeout event, until a specific stop request occurs, or until an error occurs.

<a id="return-value"></a>

## Return Value

`TRUE` if the connection was correctly started (the actual connection is not established yet, and the connection status needs to be periodically checked); `FALSE` if the connection request was not started (use the [SCError](scerror%28%29.md) function to retrieve the specific error).

<a id="Discussion"></a>

## Discussion

The connection process is asynchronous and this function returns immediately. The connection status can be obtained by polling or by callback. The connection is made with the default settings from the administrator. Some of the settings can be overridden for the duration of the connection. These are specified in an options dictionary. The options dictionary uses the same format as a network service defined in the system configuration preferences schema.

> **Note**

>  Starting and stopping of connections is implicitly arbitrated. Calling `SCNetworkConnectionStart` on a connection already started indicates that the application has interest in the connection and it shouldn’t be stopped by anyone else.

## See Also

### Starting and Stopping a Connection

- [SCNetworkConnectionStop](scnetworkconnectionstop%28____%29.md): Stops the connection process for the specified network connection.
