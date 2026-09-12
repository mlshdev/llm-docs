> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxymanager/loadfrompreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/nednsproxymanager/loadfrompreferences(completionhandler:))

# loadFromPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Loads the current DNS proxy configuration from the caller’s DNS proxy preferences.

## Declaration

```swift
func loadFromPreferences(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func loadFromPreferences() async throws
```

## Parameters

- `completionHandler`: A block called when the load operation completes. If the operation fails, an error instance passed to this block describes the problem. Otherwise, the error is `nil`. See [NEDNSProxyManagerError](../nednsproxymanagererror.md) for the list of possible errors.

<a id="Discussion"></a>

## Discussion

Initially, the DNS proxy configuration comes from a configuration profile stored on the device in a managed environment, as described in [Configuration Profile Reference](https://developer.apple.com/library/archive/featuredarticles/iPhoneConfigurationProfileRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010206).

When you want to inspect or make changes to the configuration, you call the proxy manager’s [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md) method. This causes the system to load the configuration into the manager’s [providerProtocol](providerprotocol.md) and [isEnabled](isenabled.md) properties.

If you modify the configuration stored in these properties, you must then call the [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md) method to make the changes take effect. Saving the preferences also stores the modified configuration on disk for use the next time the proxy is started or the configuration is loaded.

## See Also

### Managing the DNS proxy configuration

- [shared()](shared%28%29.md): Returns a singleton DNS proxy manager instance.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Saves the DNS proxy configuration in the caller’s DNS proxy preferences.
- [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md): Removes the DNS proxy configuration from the caller’s DNS proxy preferences.

# loadFromPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Loads the current DNS proxy configuration from the caller’s DNS proxy preferences.

## Declaration

```objectivec
- (void) loadFromPreferencesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block called when the load operation completes. If the operation fails, an error instance passed to this block describes the problem. Otherwise, the error is `nil`. See [NEDNSProxyManagerError](../nednsproxymanagererror.md) for the list of possible errors.

<a id="Discussion"></a>

## Discussion

Initially, the DNS proxy configuration comes from a configuration profile stored on the device in a managed environment, as described in [Configuration Profile Reference](https://developer.apple.com/library/archive/featuredarticles/iPhoneConfigurationProfileRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010206).

When you want to inspect or make changes to the configuration, you call the proxy manager’s [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md) method. This causes the system to load the configuration into the manager’s [providerProtocol](providerprotocol.md) and [enabled](isenabled.md) properties.

If you modify the configuration stored in these properties, you must then call the [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md) method to make the changes take effect. Saving the preferences also stores the modified configuration on disk for use the next time the proxy is started or the configuration is loaded.

## See Also

### Managing the DNS proxy configuration

- [sharedManager](shared%28%29.md): Returns a singleton DNS proxy manager instance.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Saves the DNS proxy configuration in the caller’s DNS proxy preferences.
- [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md): Removes the DNS proxy configuration from the caller’s DNS proxy preferences.
