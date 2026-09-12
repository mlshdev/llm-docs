> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxymanager/savetopreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/nednsproxymanager/savetopreferences(completionhandler:))

# saveToPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Saves the DNS proxy configuration in the caller’s DNS proxy preferences.

## Declaration

```swift
func saveToPreferences(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func saveToPreferences() async throws
```

## Parameters

- `completionHandler`: A block called when the save operation completes. If the operation fails, an error instance passed to this block describes the problem. Otherwise, the error is `nil`. See [NEDNSProxyManagerError](../nednsproxymanagererror.md) for the list of possible errors.

<a id="Discussion"></a>

## Discussion

If you alter the DNS proxy configuration that you load into the proxy manager’s properties using a call to the [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md) method, you must then call the [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md) method to make the changes take effect. Saving also stores the modified configuration for the next time the proxy is started or the configuration loaded.

Trying to save preferences before loading them produces an error.

If the DNS proxy is enabled, it becomes active as a result of this call.

## See Also

### Managing the DNS proxy configuration

- [shared()](shared%28%29.md): Returns a singleton DNS proxy manager instance.
- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Loads the current DNS proxy configuration from the caller’s DNS proxy preferences.
- [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md): Removes the DNS proxy configuration from the caller’s DNS proxy preferences.

# saveToPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Saves the DNS proxy configuration in the caller’s DNS proxy preferences.

## Declaration

```objectivec
- (void) saveToPreferencesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block called when the save operation completes. If the operation fails, an error instance passed to this block describes the problem. Otherwise, the error is `nil`. See [NEDNSProxyManagerError](../nednsproxymanagererror.md) for the list of possible errors.

<a id="Discussion"></a>

## Discussion

If you alter the DNS proxy configuration that you load into the proxy manager’s properties using a call to the [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md) method, you must then call the [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md) method to make the changes take effect. Saving also stores the modified configuration for the next time the proxy is started or the configuration loaded.

Trying to save preferences before loading them produces an error.

If the DNS proxy is enabled, it becomes active as a result of this call.

## See Also

### Managing the DNS proxy configuration

- [sharedManager](shared%28%29.md): Returns a singleton DNS proxy manager instance.
- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Loads the current DNS proxy configuration from the caller’s DNS proxy preferences.
- [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md): Removes the DNS proxy configuration from the caller’s DNS proxy preferences.
