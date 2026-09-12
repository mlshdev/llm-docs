> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyprovidermanager/loadallfrompreferences(completionhandler:)](https://developer.apple.com/documentation/networkextension/neappproxyprovidermanager/loadallfrompreferences(completionhandler:))

# loadAllFromPreferences(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Load all of the App Proxy configurations associated with the calling app that have previously been saved to the Network Extension preferences.

## Declaration

```swift
class func loadAllFromPreferences(completionHandler: @escaping @Sendable ([NEAppProxyProviderManager]?, (any Error)?) -> Void)
```

```swift
class func loadAllFromPreferences() async throws -> [NEAppProxyProviderManager]
```

## Parameters

- `completionHandler`: A block that takes an [NSArray](../../foundation/nsarray.md) of [NEAppProxyProviderManager](../neappproxyprovidermanager.md) objects, and an [NSError](../../foundation/nserror.md) object. This block will be executed on the caller’s main thread after the load operation is complete. If no configurations exist for the calling app then the `managers` parameter will be set to nil and the error parameter will be set to nil. If an error occurred while loading the configurations, the error parameter will be set to an [NSError](../../foundation/nserror.md) object containing details about the error. See NEVPNError in [NEVPNManager](../nevpnmanager.md) for a list of possible errors.

# loadAllFromPreferencesWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Load all of the App Proxy configurations associated with the calling app that have previously been saved to the Network Extension preferences.

## Declaration

```objectivec
+ (void) loadAllFromPreferencesWithCompletionHandler:(void (^)(NSArray<NEAppProxyProviderManager *> *managers, NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that takes an [NSArray](../../foundation/nsarray.md) of [NEAppProxyProviderManager](../neappproxyprovidermanager.md) objects, and an [NSError](../../foundation/nserror.md) object. This block will be executed on the caller’s main thread after the load operation is complete. If no configurations exist for the calling app then the `managers` parameter will be set to nil and the error parameter will be set to nil. If an error occurred while loading the configurations, the error parameter will be set to an [NSError](../../foundation/nserror.md) object containing details about the error. See NEVPNError in [NEVPNManager](../nevpnmanager.md) for a list of possible errors.
