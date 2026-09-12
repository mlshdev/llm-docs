> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnerror-swift.struct/configurationdisabled](https://developer.apple.com/documentation/networkextension/nevpnerror-swift.struct/configurationdisabled)

# configurationDisabled

**Framework:** Network Extension  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An error code that indicates the VPN configuration associated with the VPN manager isn’t enabled.

## Declaration

```swift
static var configurationDisabled: NEVPNError.Code { get }
```

<a id="Discussion"></a>

## Discussion

This error can occur when trying to start the VPN connection.

## See Also

### Error codes

- [configurationInvalid](configurationinvalid.md): An error code that indicates the VPN configuration associated with the VPN manager object is invalid.
- [connectionFailed](connectionfailed.md): An error code that indicates the connection to the VPN server failed.
- [configurationStale](configurationstale.md): An error code that indicates another process modfied the VPN configuration since the last time the app loaded the configuration.
- [configurationReadWriteFailed](configurationreadwritefailed.md): An error code that indicates an error occurred while reading or writing the Network Extension preferences.
- [configurationUnknown](configurationunknown.md): An error code that indicates that unspecified error occurred.
