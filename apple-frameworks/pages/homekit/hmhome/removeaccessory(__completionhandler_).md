> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/removeaccessory(_:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/removeaccessory(_:completionhandler:))

# removeAccessory(\_:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes an accessory from the home.

## Declaration

```swift
func removeAccessory(_ accessory: HMAccessory, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func removeAccessory(_ accessory: HMAccessory) async throws
```

## Parameters

- `accessory`: The accessory to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Managing accessories

- [accessories](accessories.md): The collection of accessories that are part of the home.
- [addAndSetupAccessories(completionHandler:)](addandsetupaccessories%28completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home.
- [addAndSetupAccessories(with:completionHandler:)](addandsetupaccessories%28with_completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home using a HomeKit code provided by your app.
- [addAccessory(\_:completionHandler:)](addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [assignAccessory(\_:to:completionHandler:)](assignaccessory%28__to_completionhandler_%29.md): Assigns an accessory to a different room.
- [supportsAddingNetworkRouter](supportsaddingnetworkrouter.md): A Boolean that indicates whether a home supports all of the requirements for adding a network router.
- [unblockAccessory(\_:completionHandler:)](unblockaccessory%28__completionhandler_%29.md): Unblocks a blocked accessory.
- [HMAccessory](../hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.

# removeAccessory:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Removes an accessory from the home.

## Declaration

```objectivec
- (void) removeAccessory:(HMAccessory *) accessory completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `accessory`: The accessory to remove.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Managing accessories

- [accessories](accessories.md): The collection of accessories that are part of the home.
- [addAndSetupAccessoriesWithCompletionHandler:](addandsetupaccessories%28completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home.
- [addAndSetupAccessoriesWithPayload:completionHandler:](addandsetupaccessories%28with_completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home using a HomeKit code provided by your app.
- [addAccessory:completionHandler:](addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [assignAccessory:toRoom:completionHandler:](assignaccessory%28__to_completionhandler_%29.md): Assigns an accessory to a different room.
- [supportsAddingNetworkRouter](supportsaddingnetworkrouter.md): A Boolean that indicates whether a home supports all of the requirements for adding a network router.
- [unblockAccessory:completionHandler:](unblockaccessory%28__completionhandler_%29.md): Unblocks a blocked accessory.
- [HMAccessory](../hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.
