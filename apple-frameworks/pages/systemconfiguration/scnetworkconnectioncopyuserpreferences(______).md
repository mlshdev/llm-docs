> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/scnetworkconnectioncopyuserpreferences(_:_:_:)](https://developer.apple.com/documentation/systemconfiguration/scnetworkconnectioncopyuserpreferences(_:_:_:))

# SCNetworkConnectionCopyUserPreferences(\_:\_:\_:) (Swift)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Provides the default service ID and a dictionary of user options for the specified connection.

## Declaration

```swift
func SCNetworkConnectionCopyUserPreferences(_ selectionOptions: CFDictionary?, _ serviceID: UnsafeMutablePointer<Unmanaged<CFString>?>, _ userOptions: UnsafeMutablePointer<Unmanaged<CFDictionary>?>) -> Bool
```

## Parameters

- `selectionOptions`: Currently unimplemented. Pass `NULL`.
- `serviceID`: On output, a reference to the default service ID for starting connections.
- `userOptions`: On output, a reference to the default user options dictionary for starting connections.

<a id="return-value"></a>

## Return Value

`TRUE` if there is a valid service to dial; `FALSE` if the function was unable to retrieve a service to dial.

<a id="Discussion"></a>

## Discussion

You can use the service ID and user options values returned by this function to open a connection on the fly.

## See Also

### Getting Connection-Status Information

- [SCNetworkConnectionGetTypeID()](scnetworkconnectiongettypeid%28%29.md): Returns the type identifier of all `SCNetworkConnection` instances.
- [SCNetworkConnectionCopyServiceID(\_:)](scnetworkconnectioncopyserviceid%28__%29.md): Returns the service ID associated with the specified network connection.
- [SCNetworkConnectionGetStatus(\_:)](scnetworkconnectiongetstatus%28__%29.md): Returns the status of the specified network connection.
- [SCNetworkConnectionCopyExtendedStatus(\_:)](scnetworkconnectioncopyextendedstatus%28__%29.md): Returns the extended status of the connection.
- [SCNetworkConnectionCopyStatistics(\_:)](scnetworkconnectioncopystatistics%28__%29.md): Returns the statistics of the specified connection.
- [SCNetworkConnectionCopyUserOptions(\_:)](scnetworkconnectioncopyuseroptions%28__%29.md): Gets the user options used to start the specified connection.

# SCNetworkConnectionCopyUserPreferences (Objective-C)

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** macOS 10.3+

Provides the default service ID and a dictionary of user options for the specified connection.

## Declaration

```objectivec
Boolean SCNetworkConnectionCopyUserPreferences(CFDictionaryRef selectionOptions, CFStringRef*serviceID, CFDictionaryRef*userOptions);
```

## Parameters

- `selectionOptions`: Currently unimplemented. Pass `NULL`.
- `serviceID`: On output, a reference to the default service ID for starting connections.
- `userOptions`: On output, a reference to the default user options dictionary for starting connections.

<a id="return-value"></a>

## Return Value

`TRUE` if there is a valid service to dial; `FALSE` if the function was unable to retrieve a service to dial.

<a id="Discussion"></a>

## Discussion

You can use the service ID and user options values returned by this function to open a connection on the fly.

## See Also

### Getting Connection-Status Information

- [SCNetworkConnectionGetTypeID](scnetworkconnectiongettypeid%28%29.md): Returns the type identifier of all `SCNetworkConnection` instances.
- [SCNetworkConnectionCopyServiceID](scnetworkconnectioncopyserviceid%28__%29.md): Returns the service ID associated with the specified network connection.
- [SCNetworkConnectionGetStatus](scnetworkconnectiongetstatus%28__%29.md): Returns the status of the specified network connection.
- [SCNetworkConnectionCopyExtendedStatus](scnetworkconnectioncopyextendedstatus%28__%29.md): Returns the extended status of the connection.
- [SCNetworkConnectionCopyStatistics](scnetworkconnectioncopystatistics%28__%29.md): Returns the statistics of the specified connection.
- [SCNetworkConnectionCopyUserOptions](scnetworkconnectioncopyuseroptions%28__%29.md): Gets the user options used to start the specified connection.
