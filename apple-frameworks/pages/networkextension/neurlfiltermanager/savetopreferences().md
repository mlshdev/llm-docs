> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/savetopreferences()](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/savetopreferences())

# saveToPreferences()

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Saves the URL filter configuration in the caller’s URL filter preferences.

## Declaration

```swift
func saveToPreferences() async throws
```

<a id="discussion"></a>

## Discussion

If the URL filter is enabled, this call causes it to become active.

## See Also

### Working with the filter configuration

- [setConfiguration(pirServerURL:pirPrivacyPassIssuerURL:pirAuthenticationToken:controlProviderBundleIdentifier:)](setconfiguration%28pirserverurl_pirprivacypassissuerurl_pirauthenticationtoken_controlproviderbundleidentifier_%29.md): Sets a URL filter configuration with the required PIR server attributes and app extension information.
- [loadFromPreferences()](loadfrompreferences%28%29.md): Loads the current URL filter configuration from the caller’s URL filter preferences.
- [removeFromPreferences()](removefrompreferences%28%29.md): Removes the URL filter configuration from the caller’s URL filter preferences.
- [handleConfigChange()](handleconfigchange%28%29.md): Sets up an observer for the filter configuration change notification and models it as an asynchronous sequence.
