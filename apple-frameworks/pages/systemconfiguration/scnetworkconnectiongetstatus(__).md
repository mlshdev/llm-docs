> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectiongetstatus(_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectiongetstatus(_:))

# SCNetworkConnectionGetStatus(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Returns the status of the specified network connection.

## Declaration

```swift
func SCNetworkConnectionGetStatus(_ connection: SCNetworkConnection) -> SCNetworkConnectionStatus
```

## Parameters

- `connection`: The network connection.

<a id="return-value"></a>

## Return Value

The status of the network connection. See [SCNetworkConnectionStatus](scnetworkconnectionstatus.md) for a list of possible values.

## See Also

### Getting Connection-Status Information

- [SCNetworkConnectionGetTypeID()](scnetworkconnectiongettypeid%28%29.md): Returns the type identifier of all `SCNetworkConnection` instances.
- [SCNetworkConnectionCopyUserPreferences(\_:\_:\_:)](scnetworkconnectioncopyuserpreferences%28______%29.md): Provides the default service ID and a dictionary of user options for the specified connection.
- [SCNetworkConnectionCopyServiceID(\_:)](scnetworkconnectioncopyserviceid%28__%29.md): Returns the service ID associated with the specified network connection.
- [SCNetworkConnectionCopyExtendedStatus(\_:)](scnetworkconnectioncopyextendedstatus%28__%29.md): Returns the extended status of the connection.
- [SCNetworkConnectionCopyStatistics(\_:)](scnetworkconnectioncopystatistics%28__%29.md): Returns the statistics of the specified connection.
- [SCNetworkConnectionCopyUserOptions(\_:)](scnetworkconnectioncopyuseroptions%28__%29.md): Gets the user options used to start the specified connection.

# SCNetworkConnectionGetStatus (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Returns the status of the specified network connection.

## Declaration

```objectivec
SCNetworkConnectionStatus SCNetworkConnectionGetStatus(SCNetworkConnectionRef connection);
```

## Parameters

- `connection`: The network connection.

<a id="return-value"></a>

## Return Value

The status of the network connection. See [SCNetworkConnectionStatus](scnetworkconnectionstatus.md) for a list of possible values.

## See Also

### Getting Connection-Status Information

- [SCNetworkConnectionGetTypeID](scnetworkconnectiongettypeid%28%29.md): Returns the type identifier of all `SCNetworkConnection` instances.
- [SCNetworkConnectionCopyUserPreferences](scnetworkconnectioncopyuserpreferences%28______%29.md): Provides the default service ID and a dictionary of user options for the specified connection.
- [SCNetworkConnectionCopyServiceID](scnetworkconnectioncopyserviceid%28__%29.md): Returns the service ID associated with the specified network connection.
- [SCNetworkConnectionCopyExtendedStatus](scnetworkconnectioncopyextendedstatus%28__%29.md): Returns the extended status of the connection.
- [SCNetworkConnectionCopyStatistics](scnetworkconnectioncopystatistics%28__%29.md): Returns the statistics of the specified connection.
- [SCNetworkConnectionCopyUserOptions](scnetworkconnectioncopyuseroptions%28__%29.md): Gets the user options used to start the specified connection.
