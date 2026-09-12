> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/handleconfigchange()](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/handleconfigchange())

# handleConfigChange()

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Sets up an observer for the filter configuration change notification and models it as an asynchronous sequence.

## Declaration

```swift
func handleConfigChange() -> any AsyncSequence<Bool, Never>
```

<a id="discussion"></a>

## Discussion

The [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence) created by this method produces a Boolean `true` value every time the filter posts the [NEURLFilterConfigurationDidChange](../../foundation/nsnotification/name-swift.struct/neurlfilterconfigurationdidchange.md) notification.

Use this method to watch for the configuration change notification and react to it.

## See Also

### Working with the filter configuration

- [setConfiguration(pirServerURL:pirPrivacyPassIssuerURL:pirAuthenticationToken:controlProviderBundleIdentifier:)](setconfiguration%28pirserverurl_pirprivacypassissuerurl_pirauthenticationtoken_controlproviderbundleidentifier_%29.md): Sets a URL filter configuration with the required PIR server attributes and app extension information.
- [loadFromPreferences()](loadfrompreferences%28%29.md): Loads the current URL filter configuration from the caller’s URL filter preferences.
- [saveToPreferences()](savetopreferences%28%29.md): Saves the URL filter configuration in the caller’s URL filter preferences.
- [removeFromPreferences()](removefrompreferences%28%29.md): Removes the URL filter configuration from the caller’s URL filter preferences.
