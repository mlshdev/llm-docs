> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/supportsaddingnetworkrouter](https://developer.apple.com/documentation/homekit/hmhome/supportsaddingnetworkrouter)

# supportsAddingNetworkRouter (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 13.2+ · iPadOS 13.2+ · Mac Catalyst 13.2+ · tvOS 13.2+ · visionOS 1.0+ · watchOS 6.1+

A Boolean that indicates whether a home supports all of the requirements for adding a network router.

## Declaration

```swift
var supportsAddingNetworkRouter: Bool { get }
```

## See Also

### Managing accessories

- [accessories](accessories.md): The collection of accessories that are part of the home.
- [addAndSetupAccessories(completionHandler:)](addandsetupaccessories%28completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home.
- [addAndSetupAccessories(with:completionHandler:)](addandsetupaccessories%28with_completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home using a HomeKit code provided by your app.
- [addAccessory(\_:completionHandler:)](addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [assignAccessory(\_:to:completionHandler:)](assignaccessory%28__to_completionhandler_%29.md): Assigns an accessory to a different room.
- [removeAccessory(\_:completionHandler:)](removeaccessory%28__completionhandler_%29.md): Removes an accessory from the home.
- [unblockAccessory(\_:completionHandler:)](unblockaccessory%28__completionhandler_%29.md): Unblocks a blocked accessory.
- [HMAccessory](../hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.

# supportsAddingNetworkRouter (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 13.2+ · iPadOS 13.2+ · tvOS 13.2+ · visionOS 1.0+ · watchOS 6.1+

A Boolean that indicates whether a home supports all of the requirements for adding a network router.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL supportsAddingNetworkRouter;
```

## See Also

### Managing accessories

- [accessories](accessories.md): The collection of accessories that are part of the home.
- [addAndSetupAccessoriesWithCompletionHandler:](addandsetupaccessories%28completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home.
- [addAndSetupAccessoriesWithPayload:completionHandler:](addandsetupaccessories%28with_completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home using a HomeKit code provided by your app.
- [addAccessory:completionHandler:](addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [assignAccessory:toRoom:completionHandler:](assignaccessory%28__to_completionhandler_%29.md): Assigns an accessory to a different room.
- [removeAccessory:completionHandler:](removeaccessory%28__completionhandler_%29.md): Removes an accessory from the home.
- [unblockAccessory:completionHandler:](unblockaccessory%28__completionhandler_%29.md): Unblocks a blocked accessory.
- [HMAccessory](../hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.
