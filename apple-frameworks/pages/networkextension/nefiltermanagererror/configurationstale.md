> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltermanagererror/configurationstale](https://developer.apple.com/documentation/networkextension/nefiltermanagererror/configurationstale)

# NEFilterManagerError.configurationStale (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An error code that indicates another process modfied the filter configuration since the last time the app loaded the configuration.

## Declaration

```swift
case configurationStale
```

<a id="Discussion"></a>

## Discussion

This error also occurs if the app tries to save the filter configuration before loading it from the Network Extension preferences the first time after the app launches.

## See Also

### Error codes

- [NEFilterManagerError.configurationInvalid](configurationinvalid.md): An error code that indicates the filter configuration is invalid.
- [NEFilterManagerError.configurationDisabled](configurationdisabled.md): An error code that indicates the filter configuration isn’t enabled.
- [NEFilterManagerError.configurationCannotBeRemoved](configurationcannotberemoved.md): An error code that indicates removing the configuration isn’t allowed.
- [NEFilterManagerError.configurationPermissionDenied](configurationpermissiondenied.md): An error code that indicates the configuration lacks permission.
- [NEFilterManagerError.configurationInternalError](configurationinternalerror.md): An error code that indicates an internal configuration error occurred.

# NEFilterManagerErrorConfigurationStale (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An error code that indicates another process modfied the filter configuration since the last time the app loaded the configuration.

## Declaration

```objectivec
NEFilterManagerErrorConfigurationStale
```

<a id="Discussion"></a>

## Discussion

This error also occurs if the app tries to save the filter configuration before loading it from the Network Extension preferences the first time after the app launches.

## See Also

### Error codes

- [NEFilterManagerErrorConfigurationInvalid](configurationinvalid.md): An error code that indicates the filter configuration is invalid.
- [NEFilterManagerErrorConfigurationDisabled](configurationdisabled.md): An error code that indicates the filter configuration isn’t enabled.
- [NEFilterManagerErrorConfigurationCannotBeRemoved](configurationcannotberemoved.md): An error code that indicates removing the configuration isn’t allowed.
- [NEFilterManagerErrorConfigurationPermissionDenied](configurationpermissiondenied.md): An error code that indicates the configuration lacks permission.
- [NEFilterManagerErrorConfigurationInternalError](configurationinternalerror.md): An error code that indicates an internal configuration error occurred.
