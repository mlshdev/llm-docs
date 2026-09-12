> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspothelper/register(options:queue:handler:)](https://developer.apple.com/documentation/networkextension/nehotspothelper/register(options:queue:handler:))

# register(options:queue:handler:) (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Register the application as a Hotspot Helper.

> Use NEHotspotManager API

## Declaration

```swift
class func register(options: [String : NSObject]? = nil, queue: dispatch_queue_t, handler: @escaping NEHotspotHelperHandler) -> Bool
```

## Parameters

- `options`: If not nil, a [NSDictionary](../../foundation/nsdictionary.md) containing `kNEHotspotHelperOption*` keys (currently just `kNEHotspotHelperOptionDisplayName`).
- `queue`: The [dispatch_queue_t](../../dispatch/dispatch_queue_t.md) to invoke the handle block on.
- `handler`: The `NEHotspotHelperHandler` block to execute to process helper commands.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the registration was successful, [false](https://developer.apple.com/documentation/swift/false) otherwise

<a id="Discussion"></a>

## Discussion

Once this API is invoked successfully, the application becomes eligible to be launched in the background and participate in various hotspot related functions.

This method should be called once when the application starts up. Invoking it again will have no effect and result in [false](https://developer.apple.com/documentation/swift/false) being returned.

> **Warning**

>  The application’s `Info.plist` must include a `UIBackgroundModes` array containing `network-authentication`.

> **Warning**

>  The application must set `com.apple.developer.networking.HotspotHelper` as one of its entitlements. The value of the entitlement is a boolean set to `true`.

## See Also

### Registering a hotspot helper

- [kNEHotspotHelperOptionDisplayName](../knehotspothelperoptiondisplayname.md): The string displayed in Wi-Fi Settings for a network handled by the application.
- [NEHotspotHelperHandler](../nehotspothelperhandler.md): The type definition for the Hotspot Helper’s command handler block.

# registerWithOptions:queue:handler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Register the application as a Hotspot Helper.

> Use NEHotspotManager API

## Declaration

```objectivec
+ (BOOL) registerWithOptions:(NSDictionary<NSString *,NSObject *> *) options queue:(dispatch_queue_t) queue handler:(NEHotspotHelperHandler) handler;
```

## Parameters

- `options`: If not nil, a [NSDictionary](../../foundation/nsdictionary.md) containing `kNEHotspotHelperOption*` keys (currently just `kNEHotspotHelperOptionDisplayName`).
- `queue`: The [dispatch_queue_t](../../dispatch/dispatch_queue_t.md) to invoke the handle block on.
- `handler`: The `NEHotspotHelperHandler` block to execute to process helper commands.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the registration was successful, [false](https://developer.apple.com/documentation/swift/false) otherwise

<a id="Discussion"></a>

## Discussion

Once this API is invoked successfully, the application becomes eligible to be launched in the background and participate in various hotspot related functions.

This method should be called once when the application starts up. Invoking it again will have no effect and result in [false](https://developer.apple.com/documentation/swift/false) being returned.

> **Warning**

>  The application’s `Info.plist` must include a `UIBackgroundModes` array containing `network-authentication`.

> **Warning**

>  The application must set `com.apple.developer.networking.HotspotHelper` as one of its entitlements. The value of the entitlement is a boolean set to `true`.

## See Also

### Registering a hotspot helper

- [kNEHotspotHelperOptionDisplayName](../knehotspothelperoptiondisplayname.md): The string displayed in Wi-Fi Settings for a network handled by the application.
- [NEHotspotHelperHandler](../nehotspothelperhandler.md): The type definition for the Hotspot Helper’s command handler block.
