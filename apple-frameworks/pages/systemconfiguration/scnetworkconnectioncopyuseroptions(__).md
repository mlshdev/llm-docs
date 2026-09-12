> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectioncopyuseroptions(_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectioncopyuseroptions(_:))

# SCNetworkConnectionCopyUserOptions(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Gets the user options used to start the specified connection.

## Declaration

```swift
func SCNetworkConnectionCopyUserOptions(_ connection: SCNetworkConnection) -> CFDictionary?
```

## Parameters

- `connection`: The network connection.

<a id="return-value"></a>

## Return Value

The service dictionary containing the connection options (the dictionary can be empty if no user options were used), or `NULL` if an error occurred (use the [SCError()](scerror%28%29.md) function to retrieve the specific error).

<a id="Discussion"></a>

## Discussion

A client can call this function to retrieve the user options previously passed to the [SCNetworkConnectionStart(\_:\_:\_:)](scnetworkconnectionstart%28______%29.md) function.

## See Also

### Getting Connection-Status Information

- [SCNetworkConnectionGetTypeID()](scnetworkconnectiongettypeid%28%29.md): Returns the type identifier of all `SCNetworkConnection` instances.
- [SCNetworkConnectionCopyUserPreferences(\_:\_:\_:)](scnetworkconnectioncopyuserpreferences%28______%29.md): Provides the default service ID and a dictionary of user options for the specified connection.
- [SCNetworkConnectionCopyServiceID(\_:)](scnetworkconnectioncopyserviceid%28__%29.md): Returns the service ID associated with the specified network connection.
- [SCNetworkConnectionGetStatus(\_:)](scnetworkconnectiongetstatus%28__%29.md): Returns the status of the specified network connection.
- [SCNetworkConnectionCopyExtendedStatus(\_:)](scnetworkconnectioncopyextendedstatus%28__%29.md): Returns the extended status of the connection.
- [SCNetworkConnectionCopyStatistics(\_:)](scnetworkconnectioncopystatistics%28__%29.md): Returns the statistics of the specified connection.

# SCNetworkConnectionCopyUserOptions (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Gets the user options used to start the specified connection.

## Declaration

```objectivec
CFDictionaryRefSCNetworkConnectionCopyUserOptions(SCNetworkConnectionRef connection);
```

## Parameters

- `connection`: The network connection.

<a id="return-value"></a>

## Return Value

The service dictionary containing the connection options (the dictionary can be empty if no user options were used), or `NULL` if an error occurred (use the [SCError](scerror%28%29.md) function to retrieve the specific error).

<a id="Discussion"></a>

## Discussion

A client can call this function to retrieve the user options previously passed to the [SCNetworkConnectionStart](scnetworkconnectionstart%28______%29.md) function.

## See Also

### Getting Connection-Status Information

- [SCNetworkConnectionGetTypeID](scnetworkconnectiongettypeid%28%29.md): Returns the type identifier of all `SCNetworkConnection` instances.
- [SCNetworkConnectionCopyUserPreferences](scnetworkconnectioncopyuserpreferences%28______%29.md): Provides the default service ID and a dictionary of user options for the specified connection.
- [SCNetworkConnectionCopyServiceID](scnetworkconnectioncopyserviceid%28__%29.md): Returns the service ID associated with the specified network connection.
- [SCNetworkConnectionGetStatus](scnetworkconnectiongetstatus%28__%29.md): Returns the status of the specified network connection.
- [SCNetworkConnectionCopyExtendedStatus](scnetworkconnectioncopyextendedstatus%28__%29.md): Returns the extended status of the connection.
- [SCNetworkConnectionCopyStatistics](scnetworkconnectioncopystatistics%28__%29.md): Returns the statistics of the specified connection.
