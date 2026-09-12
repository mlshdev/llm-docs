> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxymanager/shared()](https://developer.apple.com/documentation/networkextension/nednsproxymanager/shared())

# shared() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns a singleton DNS proxy manager instance.

## Declaration

```swift
class func shared() -> NEDNSProxyManager
```

<a id="return-value"></a>

## Return Value

The [NEDNSProxyManager](../nednsproxymanager.md) instance for the app.

<a id="Discussion"></a>

## Discussion

Each app is allowed to create a single DNS proxy manager. The [shared()](shared%28%29.md) type method returns a singleton [NEDNSProxyManager](../nednsproxymanager.md) instance that your app can use to manage any DNS proxy instances that it creates.

## See Also

### Managing the DNS proxy configuration

- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Loads the current DNS proxy configuration from the caller’s DNS proxy preferences.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Saves the DNS proxy configuration in the caller’s DNS proxy preferences.
- [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md): Removes the DNS proxy configuration from the caller’s DNS proxy preferences.

# sharedManager (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Returns a singleton DNS proxy manager instance.

## Declaration

```objectivec
+ (NEDNSProxyManager *) sharedManager;
```

<a id="return-value"></a>

## Return Value

The [NEDNSProxyManager](../nednsproxymanager.md) instance for the app.

<a id="Discussion"></a>

## Discussion

Each app is allowed to create a single DNS proxy manager. The [sharedManager](shared%28%29.md) type method returns a singleton [NEDNSProxyManager](../nednsproxymanager.md) instance that your app can use to manage any DNS proxy instances that it creates.

## See Also

### Managing the DNS proxy configuration

- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Loads the current DNS proxy configuration from the caller’s DNS proxy preferences.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Saves the DNS proxy configuration in the caller’s DNS proxy preferences.
- [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md): Removes the DNS proxy configuration from the caller’s DNS proxy preferences.
