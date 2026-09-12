> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectioncopyextendedstatus(_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectioncopyextendedstatus(_:))

# SCNetworkConnectionCopyExtendedStatus(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Returns the extended status of the connection.

## Declaration

```swift
func SCNetworkConnectionCopyExtendedStatus(_ connection: SCNetworkConnection) -> CFDictionary?
```

## Parameters

- `connection`: The network connection.

<a id="return-value"></a>

## Return Value

The status dictionary, or `NULL` if an error occurred (use the [SCError()](scerror%28%29.md) function to retrieve the specific error).

<a id="Discussion"></a>

## Discussion

An extended status dictionary contains specific dictionaries describing the status for each subcomponent of the service. For example, a status dictionary contains the following sub-dictionaries, keys, and values:

| Sub-dictionary | Key | Value |
| --- | --- | --- |
| IPv4 | `Addresses` | The assigned IP address |
| PPP | `Status` | The PPP-specific status (see [SCNetworkConnectionPPPStatus](scnetworkconnectionpppstatus.md) for possible values) |
|  | `LastCause` | Available when the status is “Disconnected” and contains the last error associated with connecting or disconnecting. |
|  | `ConnectTime` | The time when the connection was established. |
| Modem | `ConnectSpeed` | The speed of the modem connection in bits per second. |

Other dictionaries can be present for PPoE, PPTP, and L2TP.

The status dictionary may be extended in the future to contain additional information.

## See Also

### Getting Connection-Status Information

- [SCNetworkConnectionGetTypeID()](scnetworkconnectiongettypeid%28%29.md): Returns the type identifier of all `SCNetworkConnection` instances.
- [SCNetworkConnectionCopyUserPreferences(\_:\_:\_:)](scnetworkconnectioncopyuserpreferences%28______%29.md): Provides the default service ID and a dictionary of user options for the specified connection.
- [SCNetworkConnectionCopyServiceID(\_:)](scnetworkconnectioncopyserviceid%28__%29.md): Returns the service ID associated with the specified network connection.
- [SCNetworkConnectionGetStatus(\_:)](scnetworkconnectiongetstatus%28__%29.md): Returns the status of the specified network connection.
- [SCNetworkConnectionCopyStatistics(\_:)](scnetworkconnectioncopystatistics%28__%29.md): Returns the statistics of the specified connection.
- [SCNetworkConnectionCopyUserOptions(\_:)](scnetworkconnectioncopyuseroptions%28__%29.md): Gets the user options used to start the specified connection.

# SCNetworkConnectionCopyExtendedStatus (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Returns the extended status of the connection.

## Declaration

```objectivec
CFDictionaryRefSCNetworkConnectionCopyExtendedStatus(SCNetworkConnectionRef connection);
```

## Parameters

- `connection`: The network connection.

<a id="return-value"></a>

## Return Value

The status dictionary, or `NULL` if an error occurred (use the [SCError](scerror%28%29.md) function to retrieve the specific error).

<a id="Discussion"></a>

## Discussion

An extended status dictionary contains specific dictionaries describing the status for each subcomponent of the service. For example, a status dictionary contains the following sub-dictionaries, keys, and values:

| Sub-dictionary | Key | Value |
| --- | --- | --- |
| IPv4 | `Addresses` | The assigned IP address |
| PPP | `Status` | The PPP-specific status (see [SCNetworkConnectionPPPStatus](scnetworkconnectionpppstatus.md) for possible values) |
|  | `LastCause` | Available when the status is “Disconnected” and contains the last error associated with connecting or disconnecting. |
|  | `ConnectTime` | The time when the connection was established. |
| Modem | `ConnectSpeed` | The speed of the modem connection in bits per second. |

Other dictionaries can be present for PPoE, PPTP, and L2TP.

The status dictionary may be extended in the future to contain additional information.

## See Also

### Getting Connection-Status Information

- [SCNetworkConnectionGetTypeID](scnetworkconnectiongettypeid%28%29.md): Returns the type identifier of all `SCNetworkConnection` instances.
- [SCNetworkConnectionCopyUserPreferences](scnetworkconnectioncopyuserpreferences%28______%29.md): Provides the default service ID and a dictionary of user options for the specified connection.
- [SCNetworkConnectionCopyServiceID](scnetworkconnectioncopyserviceid%28__%29.md): Returns the service ID associated with the specified network connection.
- [SCNetworkConnectionGetStatus](scnetworkconnectiongetstatus%28__%29.md): Returns the status of the specified network connection.
- [SCNetworkConnectionCopyStatistics](scnetworkconnectioncopystatistics%28__%29.md): Returns the statistics of the specified connection.
- [SCNetworkConnectionCopyUserOptions](scnetworkconnectioncopyuseroptions%28__%29.md): Gets the user options used to start the specified connection.
