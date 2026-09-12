> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnmanager/removefrompreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/nevpnmanager/removefrompreferences(completionhandler:))

# removeFromPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Remove the VPN configuration from the Network Extension preferences.

## Declaration

```swift
func removeFromPreferences(completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func removeFromPreferences() async throws
```

## Parameters

- `completionHandler`: An optional block that takes an [NSError](../../foundation/nserror.md) object. If specified, this block will be executed on the caller’s main thread after the removal operation is complete. If the configuration does not exist or an error occurs while removing it, the error parameter will be set to an `NSError` object containing details about the error. See `NEVPN Errors` for a list of possible errors. If the configuration is removed successfully then the error parameter will be set to nil.

<a id="Discussion"></a>

## Discussion

After the configuration is removed from the preferences the `NEVPNManager` object will still contain the configuration parameters. Calling [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): will clear out the configuration parameters from the `NEVPNManager` object.

## See Also

### Managing VPN configurations

- [shared()](shared%28%29.md): Access the single instance of `NEVPNManager`.
- [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md): Load the VPN configuration from the Network Extension preferences.
- [saveToPreferences(completionHandler:)](savetopreferences%28completionhandler_%29.md): Save the VPN configuration in the Network Extension preferences.
- [setAuthorization(\_:)](setauthorization%28__%29.md)

# removeFromPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Remove the VPN configuration from the Network Extension preferences.

## Declaration

```objectivec
- (void) removeFromPreferencesWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: An optional block that takes an [NSError](../../foundation/nserror.md) object. If specified, this block will be executed on the caller’s main thread after the removal operation is complete. If the configuration does not exist or an error occurs while removing it, the error parameter will be set to an `NSError` object containing details about the error. See `NEVPN Errors` for a list of possible errors. If the configuration is removed successfully then the error parameter will be set to nil.

<a id="Discussion"></a>

## Discussion

After the configuration is removed from the preferences the `NEVPNManager` object will still contain the configuration parameters. Calling [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): will clear out the configuration parameters from the `NEVPNManager` object.

## See Also

### Managing VPN configurations

- [sharedManager](shared%28%29.md): Access the single instance of `NEVPNManager`.
- [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md): Load the VPN configuration from the Network Extension preferences.
- [saveToPreferencesWithCompletionHandler:](savetopreferences%28completionhandler_%29.md): Save the VPN configuration in the Network Extension preferences.
- [setAuthorization:](setauthorization%28__%29.md)
