> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nednsproxymanagererror/configurationstale

# NEDNSProxyManagerError.configurationStale (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Outdated DNS proxy configuration that needs to be loaded.

## Declaration

```swift
case configurationStale
```

<a id="Discussion"></a>

## Discussion

You must load the configuration with a call to [loadFromPreferences(completionHandler:)](../nednsproxymanager/loadfrompreferences%28completionhandler_%29.md) before you can save it.

## See Also

### Enumeration Cases

- [NEDNSProxyManagerError.configurationInvalid](configurationinvalid.md): Invalid DNS proxy configuration that cannot be stored.
- [NEDNSProxyManagerError.configurationDisabled](configurationdisabled.md): Disabled DNS proxy configuration.
- [NEDNSProxyManagerError.configurationCannotBeRemoved](configurationcannotberemoved.md): Unremovable DNS proxy configuration.

# NEDNSProxyManagerErrorConfigurationStale (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Outdated DNS proxy configuration that needs to be loaded.

## Declaration

```objectivec
NEDNSProxyManagerErrorConfigurationStale
```

<a id="Discussion"></a>

## Discussion

You must load the configuration with a call to [loadFromPreferencesWithCompletionHandler:](../nednsproxymanager/loadfrompreferences%28completionhandler_%29.md) before you can save it.

## See Also

### Enumeration Cases

- [NEDNSProxyManagerErrorConfigurationInvalid](configurationinvalid.md): Invalid DNS proxy configuration that cannot be stored.
- [NEDNSProxyManagerErrorConfigurationDisabled](configurationdisabled.md): Disabled DNS proxy configuration.
- [NEDNSProxyManagerErrorConfigurationCannotBeRemoved](configurationcannotberemoved.md): Unremovable DNS proxy configuration.
