> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnerror-swift.struct/configurationstale](https://developer.apple.com/documentation/networkextension/nevpnerror-swift.struct/configurationstale)

# configurationStale

**Framework:** Network Extension  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An error code that indicates another process modfied the VPN configuration since the last time the app loaded the configuration.

## Declaration

```swift
static var configurationStale: NEVPNError.Code { get }
```

<a id="Discussion"></a>

## Discussion

This error also occurs if the app tries to save the VPN configuration before loading it from the Network Extension preferences the first time after the app launches.

## See Also

### Error codes

- [configurationDisabled](configurationdisabled.md): An error code that indicates the VPN configuration associated with the VPN manager isn’t enabled.
- [configurationInvalid](configurationinvalid.md): An error code that indicates the VPN configuration associated with the VPN manager object is invalid.
- [connectionFailed](connectionfailed.md): An error code that indicates the connection to the VPN server failed.
- [configurationReadWriteFailed](configurationreadwritefailed.md): An error code that indicates an error occurred while reading or writing the Network Extension preferences.
- [configurationUnknown](configurationunknown.md): An error code that indicates that unspecified error occurred.
