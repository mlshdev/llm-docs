> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxymanager/removefrompreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/nednsproxymanager/removefrompreferences(completionhandler:))

# removeFromPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Removes the DNS proxy configuration from the caller’s DNS proxy preferences.

## Declaration

```swift
func removeFromPreferences(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeFromPreferences() async throws
```

## Parameters

- `completionHandler`: A block called when the remove operation completes. If the operation fails, an error instance passed to this block describes the problem. Otherwise, the error is `nil`. See [NEDNSProxyManagerError](../nednsproxymanagererror.md) for the list of possible errors.

<a id="Discussion"></a>

## Discussion

If you use a device without an installed configuration profile during development, your app can create the DNS proxy configuration from scratch. You first call the [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md) method to retrieve the empty configuration. You then make updates and call the [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md) method to store them. To remove the configuration, call the [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md) method. This allows you to restore the device to a clean, unconfigured state.

In a production environment, however, a configuration profile placed in the system by an external process typically provides the baseline DNS proxy configuration. Your app can modify this configuration at runtime using the same load-modify-save steps, but cannot remove the configuration entirely. An attempt to remove the configuration when a configuration profile is present on the device results in a [NEDNSProxyManagerError.configurationCannotBeRemoved](../nednsproxymanagererror/configurationcannotberemoved.md) error.

If the DNS proxy is enabled, it becomes disabled as a result of this call.

## See Also

### Managing the DNS proxy configuration

- [shared()](shared%28%29.md): Returns a singleton DNS proxy manager instance.
- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Loads the current DNS proxy configuration from the caller’s DNS proxy preferences.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Saves the DNS proxy configuration in the caller’s DNS proxy preferences.

# removeFromPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Removes the DNS proxy configuration from the caller’s DNS proxy preferences.

## Declaration

```objectivec
- (void) removeFromPreferencesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block called when the remove operation completes. If the operation fails, an error instance passed to this block describes the problem. Otherwise, the error is `nil`. See [NEDNSProxyManagerError](../nednsproxymanagererror.md) for the list of possible errors.

<a id="Discussion"></a>

## Discussion

If you use a device without an installed configuration profile during development, your app can create the DNS proxy configuration from scratch. You first call the [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md) method to retrieve the empty configuration. You then make updates and call the [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md) method to store them. To remove the configuration, call the [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md) method. This allows you to restore the device to a clean, unconfigured state.

In a production environment, however, a configuration profile placed in the system by an external process typically provides the baseline DNS proxy configuration. Your app can modify this configuration at runtime using the same load-modify-save steps, but cannot remove the configuration entirely. An attempt to remove the configuration when a configuration profile is present on the device results in a [NEDNSProxyManagerErrorConfigurationCannotBeRemoved](../nednsproxymanagererror/configurationcannotberemoved.md) error.

If the DNS proxy is enabled, it becomes disabled as a result of this call.

## See Also

### Managing the DNS proxy configuration

- [sharedManager](shared%28%29.md): Returns a singleton DNS proxy manager instance.
- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Loads the current DNS proxy configuration from the caller’s DNS proxy preferences.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Saves the DNS proxy configuration in the caller’s DNS proxy preferences.
