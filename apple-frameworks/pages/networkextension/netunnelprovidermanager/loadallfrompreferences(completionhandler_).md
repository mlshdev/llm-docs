> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelprovidermanager/loadallfrompreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/netunnelprovidermanager/loadallfrompreferences(completionhandler:))

# loadAllFromPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Read all of the VPN configurations created by the calling app that have previously been saved to the Network Extension preferences.

## Declaration

```swift
class func loadAllFromPreferences(completionHandler: @escaping @Sendable ([NETunnelProviderManager]?, (any Error)?) -> Void)
```

```swift
class func loadAllFromPreferences() async throws -> [NETunnelProviderManager]
```

## Parameters

- `completionHandler`: A block that takes an [NSArray](../../foundation/nsarray.md) of `NETunnelProviderManager` objects, and an [NSError](../../foundation/nserror.md) object. This block will be executed on the caller’s main thread after the load operation is complete. If no configurations exist for the calling app then the `managers` parameter will be set to nil and the error parameter will be set to nil. If an error occurred while loading the configurations, the error parameter will be set to an NSError object containing details about the error. See [NEVPNManager](../nevpnmanager.md) for a list of possible errors.

## See Also

### Managing tunnel configurations

- [copyAppRules()](copyapprules%28%29.md): Returns a copy of the app rules currently set in the configuration.

# loadAllFromPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Read all of the VPN configurations created by the calling app that have previously been saved to the Network Extension preferences.

## Declaration

```objectivec
+ (void) loadAllFromPreferencesWithCompletionHandler:(void (^)(NSArray<NETunnelProviderManager *> *managers, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that takes an [NSArray](../../foundation/nsarray.md) of `NETunnelProviderManager` objects, and an [NSError](../../foundation/nserror.md) object. This block will be executed on the caller’s main thread after the load operation is complete. If no configurations exist for the calling app then the `managers` parameter will be set to nil and the error parameter will be set to nil. If an error occurred while loading the configurations, the error parameter will be set to an NSError object containing details about the error. See [NEVPNManager](../nevpnmanager.md) for a list of possible errors.

## See Also

### Managing tunnel configurations

- [copyAppRules](copyapprules%28%29.md): Returns a copy of the app rules currently set in the configuration.
