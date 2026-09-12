> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectioncopystatistics(_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectioncopystatistics(_:))

# SCNetworkConnectionCopyStatistics(\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Returns the statistics of the specified connection.

## Declaration

```swift
func SCNetworkConnectionCopyStatistics(_ connection: SCNetworkConnection) -> CFDictionary?
```

## Parameters

- `connection`: The network connection.

<a id="return-value"></a>

## Return Value

The statistics dictionary, or `NULL` if an error occurred (use the [SCError()](scerror%28%29.md) function to retrieve the specific error).

<a id="Discussion"></a>

## Discussion

A statistics dictionary contains specific dictionaries with statistics for each subcomponent of the service. For example, a statistics dictionary for PPP contains the following sub-dictionaries, keys, and values:

| Sub-dictionary | Key | Value |
| --- | --- | --- |
| PPP | `BytesIn` | The number of bytes going up into the network stack for any networking protocol without the PPP headers and trailers. |
| PPP | `BytesOut` | The number of bytes coming out of the network stack for any networking protocol without the PPP headers and trailers. |
| PPP | `PacketsIn` | The number of packets going up into the network stack for any networking protocol without the PPP headers and trailers. |
| PPP | `PacketsOut` | The number of packets coming out of the network stack for any networking protocol without the PPP headers and trailers. |
| PPP | `ErrorsIn` | The number of errors going up into the network stack for any networking protocol without the PPP headers and trailers. |
| PPP | `ErrorsOut` | The number of errors coming out of the network stack for any networking protocol without the PPP headers and trailers. |

See [Statistics Dictionary Keys](statistics-dictionary-keys.md) for the keys to use in the statistics dictionary.

## See Also

### Getting Connection-Status Information

- [SCNetworkConnectionGetTypeID()](scnetworkconnectiongettypeid%28%29.md): Returns the type identifier of all `SCNetworkConnection` instances.
- [SCNetworkConnectionCopyUserPreferences(\_:\_:\_:)](scnetworkconnectioncopyuserpreferences%28______%29.md): Provides the default service ID and a dictionary of user options for the specified connection.
- [SCNetworkConnectionCopyServiceID(\_:)](scnetworkconnectioncopyserviceid%28__%29.md): Returns the service ID associated with the specified network connection.
- [SCNetworkConnectionGetStatus(\_:)](scnetworkconnectiongetstatus%28__%29.md): Returns the status of the specified network connection.
- [SCNetworkConnectionCopyExtendedStatus(\_:)](scnetworkconnectioncopyextendedstatus%28__%29.md): Returns the extended status of the connection.
- [SCNetworkConnectionCopyUserOptions(\_:)](scnetworkconnectioncopyuseroptions%28__%29.md): Gets the user options used to start the specified connection.

# SCNetworkConnectionCopyStatistics (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Returns the statistics of the specified connection.

## Declaration

```objectivec
CFDictionaryRefSCNetworkConnectionCopyStatistics(SCNetworkConnectionRef connection);
```

## Parameters

- `connection`: The network connection.

<a id="return-value"></a>

## Return Value

The statistics dictionary, or `NULL` if an error occurred (use the [SCError](scerror%28%29.md) function to retrieve the specific error).

<a id="Discussion"></a>

## Discussion

A statistics dictionary contains specific dictionaries with statistics for each subcomponent of the service. For example, a statistics dictionary for PPP contains the following sub-dictionaries, keys, and values:

| Sub-dictionary | Key | Value |
| --- | --- | --- |
| PPP | `BytesIn` | The number of bytes going up into the network stack for any networking protocol without the PPP headers and trailers. |
| PPP | `BytesOut` | The number of bytes coming out of the network stack for any networking protocol without the PPP headers and trailers. |
| PPP | `PacketsIn` | The number of packets going up into the network stack for any networking protocol without the PPP headers and trailers. |
| PPP | `PacketsOut` | The number of packets coming out of the network stack for any networking protocol without the PPP headers and trailers. |
| PPP | `ErrorsIn` | The number of errors going up into the network stack for any networking protocol without the PPP headers and trailers. |
| PPP | `ErrorsOut` | The number of errors coming out of the network stack for any networking protocol without the PPP headers and trailers. |

See [Statistics Dictionary Keys](statistics-dictionary-keys.md) for the keys to use in the statistics dictionary.

## See Also

### Getting Connection-Status Information

- [SCNetworkConnectionGetTypeID](scnetworkconnectiongettypeid%28%29.md): Returns the type identifier of all `SCNetworkConnection` instances.
- [SCNetworkConnectionCopyUserPreferences](scnetworkconnectioncopyuserpreferences%28______%29.md): Provides the default service ID and a dictionary of user options for the specified connection.
- [SCNetworkConnectionCopyServiceID](scnetworkconnectioncopyserviceid%28__%29.md): Returns the service ID associated with the specified network connection.
- [SCNetworkConnectionGetStatus](scnetworkconnectiongetstatus%28__%29.md): Returns the status of the specified network connection.
- [SCNetworkConnectionCopyExtendedStatus](scnetworkconnectioncopyextendedstatus%28__%29.md): Returns the extended status of the connection.
- [SCNetworkConnectionCopyUserOptions](scnetworkconnectioncopyuseroptions%28__%29.md): Gets the user options used to start the specified connection.
