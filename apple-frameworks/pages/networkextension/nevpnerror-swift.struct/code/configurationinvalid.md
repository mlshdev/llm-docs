> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnerror-swift.struct/code/configurationinvalid](https://developer.apple.com/documentation/networkextension/nevpnerror-swift.struct/code/configurationinvalid)

# NEVPNError.Code.configurationInvalid (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An error code indicating the VPN configuration associated with the VPN manager object is invalid.

## Declaration

```swift
case configurationInvalid
```

<a id="Discussion"></a>

## Discussion

This error can occur in the following situations:

- The app or extension tried to save the configuration, but the configuration has missing or invalid configuration properties.
- The app or extension tried to use the configuration before being successfully saved to the Network Extension preferences.
- The app or extension tried to use the configuration before being successfully loaded from the Network Extension preferences.

## See Also

### Error codes

- [NEVPNError.Code.configurationDisabled](configurationdisabled.md): An error code indicating the VPN configuration associated with the VPN manager isn’t enabled.
- [NEVPNError.Code.connectionFailed](connectionfailed.md): The connection to the VPN server failed.
- [NEVPNError.Code.configurationStale](configurationstale.md): An error code that indicates another process modfied the VPN configuration since the last time the app loaded the configuration.
- [NEVPNError.Code.configurationReadWriteFailed](configurationreadwritefailed.md): An error code that indicates an error occurred while reading or writing the Network Extension preferences.
- [NEVPNError.Code.configurationUnknown](configurationunknown.md): An error code that indicates that unspecified error occurred.

# NEVPNErrorConfigurationInvalid (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An error code indicating the VPN configuration associated with the VPN manager object is invalid.

## Declaration

```objectivec
NEVPNErrorConfigurationInvalid
```

<a id="Discussion"></a>

## Discussion

This error can occur in the following situations:

- The app or extension tried to save the configuration, but the configuration has missing or invalid configuration properties.
- The app or extension tried to use the configuration before being successfully saved to the Network Extension preferences.
- The app or extension tried to use the configuration before being successfully loaded from the Network Extension preferences.

## See Also

### Error codes

- [NEVPNErrorConfigurationDisabled](configurationdisabled.md): An error code indicating the VPN configuration associated with the VPN manager isn’t enabled.
- [NEVPNErrorConnectionFailed](connectionfailed.md): The connection to the VPN server failed.
- [NEVPNErrorConfigurationStale](configurationstale.md): An error code that indicates another process modfied the VPN configuration since the last time the app loaded the configuration.
- [NEVPNErrorConfigurationReadWriteFailed](configurationreadwritefailed.md): An error code that indicates an error occurred while reading or writing the Network Extension preferences.
- [NEVPNErrorConfigurationUnknown](configurationunknown.md): An error code that indicates that unspecified error occurred.
