> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxymanagererror/configurationcannotberemoved](https://developer.apple.com/documentation/networkextension/nednsproxymanagererror/configurationcannotberemoved)

# NEDNSProxyManagerError.configurationCannotBeRemoved (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Unremovable DNS proxy configuration.

## Declaration

```swift
case configurationCannotBeRemoved
```

<a id="Discussion"></a>

## Discussion

This error occurs if you attempt to use a call to the [removeFromPreferences(completionHandler:)](../nednsproxymanager/removefrompreferences%28completionhandler_%29.md) method to remove the DNS proxy configuration when an installed configuration profile specifies a baseline DNS proxy configuration. You can only call the removal method in a development environment where no configuration profile exists.

## See Also

### Enumeration Cases

- [NEDNSProxyManagerError.configurationInvalid](configurationinvalid.md): Invalid DNS proxy configuration that cannot be stored.
- [NEDNSProxyManagerError.configurationDisabled](configurationdisabled.md): Disabled DNS proxy configuration.
- [NEDNSProxyManagerError.configurationStale](configurationstale.md): Outdated DNS proxy configuration that needs to be loaded.

# NEDNSProxyManagerErrorConfigurationCannotBeRemoved (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Unremovable DNS proxy configuration.

## Declaration

```objectivec
NEDNSProxyManagerErrorConfigurationCannotBeRemoved
```

<a id="Discussion"></a>

## Discussion

This error occurs if you attempt to use a call to the [removeFromPreferencesWithCompletionHandler:](../nednsproxymanager/removefrompreferences%28completionhandler_%29.md) method to remove the DNS proxy configuration when an installed configuration profile specifies a baseline DNS proxy configuration. You can only call the removal method in a development environment where no configuration profile exists.

## See Also

### Enumeration Cases

- [NEDNSProxyManagerErrorConfigurationInvalid](configurationinvalid.md): Invalid DNS proxy configuration that cannot be stored.
- [NEDNSProxyManagerErrorConfigurationDisabled](configurationdisabled.md): Disabled DNS proxy configuration.
- [NEDNSProxyManagerErrorConfigurationStale](configurationstale.md): Outdated DNS proxy configuration that needs to be loaded.
