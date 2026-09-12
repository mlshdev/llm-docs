> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/assignaccessory(_:to:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/assignaccessory(_:to:completionhandler:))

# assignAccessory(\_:to:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Assigns an accessory to a different room.

## Declaration

```swift
func assignAccessory(_ accessory: HMAccessory, to room: HMRoom, completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func assignAccessory(_ accessory: HMAccessory, to room: HMRoom) async throws
```

## Parameters

- `accessory`: The accessory to assign; must already have been added to the home.
- `room`: The room to which the accessory will be assigned; must already exist in the home.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Managing accessories

- [accessories](accessories.md): The collection of accessories that are part of the home.
- [addAndSetupAccessories(completionHandler:)](addandsetupaccessories%28completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home.
- [addAndSetupAccessories(with:completionHandler:)](addandsetupaccessories%28with_completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home using a HomeKit code provided by your app.
- [addAccessory(\_:completionHandler:)](addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [removeAccessory(\_:completionHandler:)](removeaccessory%28__completionhandler_%29.md): Removes an accessory from the home.
- [supportsAddingNetworkRouter](supportsaddingnetworkrouter.md): A Boolean that indicates whether a home supports all of the requirements for adding a network router.
- [unblockAccessory(\_:completionHandler:)](unblockaccessory%28__completionhandler_%29.md): Unblocks a blocked accessory.
- [HMAccessory](../hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.

# assignAccessory:toRoom:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

Assigns an accessory to a different room.

## Declaration

```objectivec
- (void) assignAccessory:(HMAccessory *) accessory toRoom:(HMRoom *) room completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `accessory`: The accessory to assign; must already have been added to the home.
- `room`: The room to which the accessory will be assigned; must already exist in the home.
- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## See Also

### Managing accessories

- [accessories](accessories.md): The collection of accessories that are part of the home.
- [addAndSetupAccessoriesWithCompletionHandler:](addandsetupaccessories%28completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home.
- [addAndSetupAccessoriesWithPayload:completionHandler:](addandsetupaccessories%28with_completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home using a HomeKit code provided by your app.
- [addAccessory:completionHandler:](addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [removeAccessory:completionHandler:](removeaccessory%28__completionhandler_%29.md): Removes an accessory from the home.
- [supportsAddingNetworkRouter](supportsaddingnetworkrouter.md): A Boolean that indicates whether a home supports all of the requirements for adding a network router.
- [unblockAccessory:completionHandler:](unblockaccessory%28__completionhandler_%29.md): Unblocks a blocked accessory.
- [HMAccessory](../hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.
