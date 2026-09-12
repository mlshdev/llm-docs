> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectionstop(_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectionstop(_:_:))

# SCNetworkConnectionStop(\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Stops the connection process for the specified network connection.

## Declaration

```swift
func SCNetworkConnectionStop(_ connection: SCNetworkConnection, _ forceDisconnect: Bool) -> Bool
```

## Parameters

- `connection`: The network connection to stop.
- `forceDisconnect`: Pass `TRUE` to stop the connection regardless of other applications that might have interest in it.

<a id="return-value"></a>

## Return Value

`TRUE` if the disconnection request succeeded; `FALSE` (use the [SCError()](scerror%28%29.md) function to retrieve the specific error).

## See Also

### Starting and Stopping a Connection

- [SCNetworkConnectionStart(\_:\_:\_:)](scnetworkconnectionstart%28______%29.md): Starts the connection process for the specified network connection.

# SCNetworkConnectionStop (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Stops the connection process for the specified network connection.

## Declaration

```objectivec
Boolean SCNetworkConnectionStop(SCNetworkConnectionRef connection, Boolean forceDisconnect);
```

## Parameters

- `connection`: The network connection to stop.
- `forceDisconnect`: Pass `TRUE` to stop the connection regardless of other applications that might have interest in it.

<a id="return-value"></a>

## Return Value

`TRUE` if the disconnection request succeeded; `FALSE` (use the [SCError](scerror%28%29.md) function to retrieve the specific error).

## See Also

### Starting and Stopping a Connection

- [SCNetworkConnectionStart](scnetworkconnectionstart%28______%29.md): Starts the connection process for the specified network connection.
