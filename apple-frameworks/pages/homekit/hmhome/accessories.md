> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/accessories](https://developer.apple.com/documentation/homekit/hmhome/accessories)

# accessories (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The collection of accessories that are part of the home.

## Declaration

```swift
var accessories: [HMAccessory] { get }
```

## See Also

### Managing accessories

- [addAndSetupAccessories(completionHandler:)](addandsetupaccessories%28completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home.
- [addAndSetupAccessories(with:completionHandler:)](addandsetupaccessories%28with_completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home using a HomeKit code provided by your app.
- [addAccessory(\_:completionHandler:)](addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [assignAccessory(\_:to:completionHandler:)](assignaccessory%28__to_completionhandler_%29.md): Assigns an accessory to a different room.
- [removeAccessory(\_:completionHandler:)](removeaccessory%28__completionhandler_%29.md): Removes an accessory from the home.
- [supportsAddingNetworkRouter](supportsaddingnetworkrouter.md): A Boolean that indicates whether a home supports all of the requirements for adding a network router.
- [unblockAccessory(\_:completionHandler:)](unblockaccessory%28__completionhandler_%29.md): Unblocks a blocked accessory.
- [HMAccessory](../hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.

# accessories (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The collection of accessories that are part of the home.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<HMAccessory *> * accessories;
```

## See Also

### Managing accessories

- [addAndSetupAccessoriesWithCompletionHandler:](addandsetupaccessories%28completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home.
- [addAndSetupAccessoriesWithPayload:completionHandler:](addandsetupaccessories%28with_completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home using a HomeKit code provided by your app.
- [addAccessory:completionHandler:](addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [assignAccessory:toRoom:completionHandler:](assignaccessory%28__to_completionhandler_%29.md): Assigns an accessory to a different room.
- [removeAccessory:completionHandler:](removeaccessory%28__completionhandler_%29.md): Removes an accessory from the home.
- [supportsAddingNetworkRouter](supportsaddingnetworkrouter.md): A Boolean that indicates whether a home supports all of the requirements for adding a network router.
- [unblockAccessory:completionHandler:](unblockaccessory%28__completionhandler_%29.md): Unblocks a blocked accessory.
- [HMAccessory](../hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.
