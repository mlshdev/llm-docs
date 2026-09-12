> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectioncopyserviceid(_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectioncopyserviceid(_:))

# SCNetworkConnectionCopyServiceID(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Returns the service ID associated with the specified network connection.

## Declaration

```swift
func SCNetworkConnectionCopyServiceID(_ connection: SCNetworkConnection) -> CFString?
```

## Parameters

- `connection`: The network connection.

<a id="return-value"></a>

## Return Value

The service ID associated with the network connection.

## See Also

### Getting Connection-Status Information

- [SCNetworkConnectionGetTypeID()](scnetworkconnectiongettypeid%28%29.md): Returns the type identifier of all `SCNetworkConnection` instances.
- [SCNetworkConnectionCopyUserPreferences(\_:\_:\_:)](scnetworkconnectioncopyuserpreferences%28______%29.md): Provides the default service ID and a dictionary of user options for the specified connection.
- [SCNetworkConnectionGetStatus(\_:)](scnetworkconnectiongetstatus%28__%29.md): Returns the status of the specified network connection.
- [SCNetworkConnectionCopyExtendedStatus(\_:)](scnetworkconnectioncopyextendedstatus%28__%29.md): Returns the extended status of the connection.
- [SCNetworkConnectionCopyStatistics(\_:)](scnetworkconnectioncopystatistics%28__%29.md): Returns the statistics of the specified connection.
- [SCNetworkConnectionCopyUserOptions(\_:)](scnetworkconnectioncopyuseroptions%28__%29.md): Gets the user options used to start the specified connection.

# SCNetworkConnectionCopyServiceID (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Returns the service ID associated with the specified network connection.

## Declaration

```objectivec
CFStringRefSCNetworkConnectionCopyServiceID(SCNetworkConnectionRef connection);
```

## Parameters

- `connection`: The network connection.

<a id="return-value"></a>

## Return Value

The service ID associated with the network connection.

## See Also

### Getting Connection-Status Information

- [SCNetworkConnectionGetTypeID](scnetworkconnectiongettypeid%28%29.md): Returns the type identifier of all `SCNetworkConnection` instances.
- [SCNetworkConnectionCopyUserPreferences](scnetworkconnectioncopyuserpreferences%28______%29.md): Provides the default service ID and a dictionary of user options for the specified connection.
- [SCNetworkConnectionGetStatus](scnetworkconnectiongetstatus%28__%29.md): Returns the status of the specified network connection.
- [SCNetworkConnectionCopyExtendedStatus](scnetworkconnectioncopyextendedstatus%28__%29.md): Returns the extended status of the connection.
- [SCNetworkConnectionCopyStatistics](scnetworkconnectioncopystatistics%28__%29.md): Returns the statistics of the specified connection.
- [SCNetworkConnectionCopyUserOptions](scnetworkconnectioncopyuseroptions%28__%29.md): Gets the user options used to start the specified connection.
