> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnerror-swift.struct/code/configurationstale](https://developer.apple.com/documentation/networkextension/nevpnerror-swift.struct/code/configurationstale)

# NEVPNError.Code.configurationStale (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An error code that indicates another process modfied the VPN configuration since the last time the app loaded the configuration.

## Declaration

```swift
case configurationStale
```

<a id="Discussion"></a>

## Discussion

This error also occurs if the app tries to save the VPN configuration before loading it from the Network Extension preferences the first time after the app launches.

## See Also

### Error codes

- [NEVPNError.Code.configurationDisabled](configurationdisabled.md): An error code indicating the VPN configuration associated with the VPN manager isn’t enabled.
- [NEVPNError.Code.configurationInvalid](configurationinvalid.md): An error code indicating the VPN configuration associated with the VPN manager object is invalid.
- [NEVPNError.Code.connectionFailed](connectionfailed.md): The connection to the VPN server failed.
- [NEVPNError.Code.configurationReadWriteFailed](configurationreadwritefailed.md): An error code that indicates an error occurred while reading or writing the Network Extension preferences.
- [NEVPNError.Code.configurationUnknown](configurationunknown.md): An error code that indicates that unspecified error occurred.

# NEVPNErrorConfigurationStale (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An error code that indicates another process modfied the VPN configuration since the last time the app loaded the configuration.

## Declaration

```objectivec
NEVPNErrorConfigurationStale
```

<a id="Discussion"></a>

## Discussion

This error also occurs if the app tries to save the VPN configuration before loading it from the Network Extension preferences the first time after the app launches.

## See Also

### Error codes

- [NEVPNErrorConfigurationDisabled](configurationdisabled.md): An error code indicating the VPN configuration associated with the VPN manager isn’t enabled.
- [NEVPNErrorConfigurationInvalid](configurationinvalid.md): An error code indicating the VPN configuration associated with the VPN manager object is invalid.
- [NEVPNErrorConnectionFailed](connectionfailed.md): The connection to the VPN server failed.
- [NEVPNErrorConfigurationReadWriteFailed](configurationreadwritefailed.md): An error code that indicates an error occurred while reading or writing the Network Extension preferences.
- [NEVPNErrorConfigurationUnknown](configurationunknown.md): An error code that indicates that unspecified error occurred.
