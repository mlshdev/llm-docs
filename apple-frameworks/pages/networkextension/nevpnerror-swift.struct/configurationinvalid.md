> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnerror-swift.struct/configurationinvalid](https://developer.apple.com/documentation/networkextension/nevpnerror-swift.struct/configurationinvalid)

# configurationInvalid

**Framework:** Network Extension  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An error code that indicates the VPN configuration associated with the VPN manager object is invalid.

## Declaration

```swift
static var configurationInvalid: NEVPNError.Code { get }
```

<a id="Discussion"></a>

## Discussion

This error can occur in the following situations:

- The app or extension tried to save the configuration, but the configuration has missing or invalid configuration properties.
- The app or extension tried to use the configuration before being successfully saved to the Network Extension preferences.
- The app or extension tried to use the configuration before being successfully loaded from the Network Extension preferences.

## See Also

### Error codes

- [configurationDisabled](configurationdisabled.md): An error code that indicates the VPN configuration associated with the VPN manager isn’t enabled.
- [connectionFailed](connectionfailed.md): An error code that indicates the connection to the VPN server failed.
- [configurationStale](configurationstale.md): An error code that indicates another process modfied the VPN configuration since the last time the app loaded the configuration.
- [configurationReadWriteFailed](configurationreadwritefailed.md): An error code that indicates an error occurred while reading or writing the Network Extension preferences.
- [configurationUnknown](configurationunknown.md): An error code that indicates that unspecified error occurred.
