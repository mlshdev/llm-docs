> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnmanager/savetopreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/nevpnmanager/savetopreferences(completionhandler:))

# saveToPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Save the VPN configuration in the Network Extension preferences.

## Declaration

```swift
func saveToPreferences(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func saveToPreferences() async throws
```

## Parameters

- `completionHandler`: An optional block that takes an [NSError](../../foundation/nserror.md) object. If specified, this block will be executed on the caller’s main thread after the save operation is complete. If the configuration could not be saved to the preferences, the error parameter will be set to an `NSError` object containing details about the error. See `NEVPN Errors` for a list of possible errors. If the configuration is saved successfully then the error parameter will be set to nil.

<a id="Discussion"></a>

## Discussion

You must call [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): at least once before calling this method the first time after your app launches.

## See Also

### Related Documentation

- [NEVPNManager](../nevpnmanager.md): An object to create and manage a Personal VPN configuration.

### Managing VPN configurations

- [shared()](shared%28%29.md): Access the single instance of `NEVPNManager`.
- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Load the VPN configuration from the Network Extension preferences.
- [setAuthorization(\_:)](setauthorization%28__%29.md)
- [removeFromPreferences(completionHandler:)](removefrompreferences%28completionhandler_%29.md): Remove the VPN configuration from the Network Extension preferences.

# saveToPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Save the VPN configuration in the Network Extension preferences.

## Declaration

```objectivec
- (void) saveToPreferencesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: An optional block that takes an [NSError](../../foundation/nserror.md) object. If specified, this block will be executed on the caller’s main thread after the save operation is complete. If the configuration could not be saved to the preferences, the error parameter will be set to an `NSError` object containing details about the error. See `NEVPN Errors` for a list of possible errors. If the configuration is saved successfully then the error parameter will be set to nil.

<a id="Discussion"></a>

## Discussion

You must call [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): at least once before calling this method the first time after your app launches.

## See Also

### Related Documentation

- [NEVPNManager](../nevpnmanager.md): An object to create and manage a Personal VPN configuration.

### Managing VPN configurations

- [sharedManager](shared%28%29.md): Access the single instance of `NEVPNManager`.
- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Load the VPN configuration from the Network Extension preferences.
- [setAuthorization:](setauthorization%28__%29.md)
- [removeFromPreferencesWithCompletionHandler:](removefrompreferences%28completionhandler_%29.md): Remove the VPN configuration from the Network Extension preferences.
