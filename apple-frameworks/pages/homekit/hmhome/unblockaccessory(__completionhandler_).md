> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/unblockaccessory(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/unblockaccessory(_:completionhandler:))

# unblockAccessory(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Unblocks a blocked accessory.

## Declaration

```swift
func unblockAccessory(_ accessory: HMAccessory, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func unblockAccessory(_ accessory: HMAccessory) async throws
```

## Parameters

- `accessory`: The accessory to unblock.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

A misbehaving accessory automatically becomes blocked. After that, all requests to the accessory fail. Use this API to explicitly unblock the accessory.

## See Also

### Managing accessories

- [accessories](accessories.md): The collection of accessories that are part of the home.
- [addAndSetupAccessories(completionHandler:)](addandsetupaccessories%28completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home.
- [addAndSetupAccessories(with:completionHandler:)](addandsetupaccessories%28with_completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home using a HomeKit code provided by your app.
- [addAccessory(\_:completionHandler:)](addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [assignAccessory(\_:to:completionHandler:)](assignaccessory%28__to_completionhandler_%29.md): Assigns an accessory to a different room.
- [removeAccessory(\_:completionHandler:)](removeaccessory%28__completionhandler_%29.md): Removes an accessory from the home.
- [supportsAddingNetworkRouter](supportsaddingnetworkrouter.md): A Boolean that indicates whether a home supports all of the requirements for adding a network router.
- [HMAccessory](../hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.

# unblockAccessory:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Unblocks a blocked accessory.

## Declaration

```objectivec
- (void) unblockAccessory:(HMAccessory *) accessory completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `accessory`: The accessory to unblock.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

<a id="Discussion"></a>

## Discussion

A misbehaving accessory automatically becomes blocked. After that, all requests to the accessory fail. Use this API to explicitly unblock the accessory.

## See Also

### Managing accessories

- [accessories](accessories.md): The collection of accessories that are part of the home.
- [addAndSetupAccessoriesWithCompletionHandler:](addandsetupaccessories%28completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home.
- [addAndSetupAccessoriesWithPayload:completionHandler:](addandsetupaccessories%28with_completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home using a HomeKit code provided by your app.
- [addAccessory:completionHandler:](addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [assignAccessory:toRoom:completionHandler:](assignaccessory%28__to_completionhandler_%29.md): Assigns an accessory to a different room.
- [removeAccessory:completionHandler:](removeaccessory%28__completionhandler_%29.md): Removes an accessory from the home.
- [supportsAddingNetworkRouter](supportsaddingnetworkrouter.md): A Boolean that indicates whether a home supports all of the requirements for adding a network router.
- [HMAccessory](../hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.
