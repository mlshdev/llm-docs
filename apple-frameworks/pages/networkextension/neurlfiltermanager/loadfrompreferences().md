> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neurlfiltermanager/loadfrompreferences()

# loadFromPreferences()

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Loads the current URL filter configuration from the caller’s URL filter preferences.

## Declaration

```swift
func loadFromPreferences() async throws
```

## See Also

### Working with the filter configuration

- [setConfiguration(pirServerURL:pirPrivacyPassIssuerURL:pirAuthenticationToken:controlProviderBundleIdentifier:)](setconfiguration%28pirserverurl_pirprivacypassissuerurl_pirauthenticationtoken_controlproviderbundleidentifier_%29.md): Sets a URL filter configuration with the required PIR server attributes and app extension information.
- [saveToPreferences()](savetopreferences%28%29.md): Saves the URL filter configuration in the caller’s URL filter preferences.
- [removeFromPreferences()](removefrompreferences%28%29.md): Removes the URL filter configuration from the caller’s URL filter preferences.
- [handleConfigChange()](handleconfigchange%28%29.md): Sets up an observer for the filter configuration change notification and models it as an asynchronous sequence.
