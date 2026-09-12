> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/addandsetupaccessories(with:completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/addandsetupaccessories(with:completionhandler:))

# addAndSetupAccessories(with:completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ (deprecated in 15.0) · iPadOS 11.3+ (deprecated in 15.0) · Mac Catalyst 11.3+ (deprecated in 15.0)

Finds and adds nearby accessories to the home using a HomeKit code provided by your app.

> Use -\[HMAccessorySetupManager performAccessorySetupUsingRequest:completionHandler:\] instead

## Declaration

```swift
func addAndSetupAccessories(with payload: HMAccessorySetupPayload, completionHandler completion: @escaping @Sendable ([HMAccessory]?, (any Error)?) -> Void)
```

```swift
func addAndSetUpAccessories(payload: HMAccessorySetupPayload) async throws -> [HMAccessory]
```

<a id="Discussion"></a>

## Discussion

Use this method to add accessories that have already been deployed (for example, accessories that have HomeKit support added as a firmware update), or accessories for which scanning a QR code would be difficult. Your app provides the accessory’s HomeKit code using a setup payload. For details on the payload’s content, please join the [MFi Program](https://developer.apple.com/programs/mfi/).

During this process, the user assigns the accessory to a room and configures its services.

## Topics

### Defining the Setup Payload

- [HMAccessorySetupPayload](../hmaccessorysetuppayload.md): A payload for authenticating a HomeKit accessory.

## See Also

### Managing accessories

- [accessories](accessories.md): The collection of accessories that are part of the home.
- [addAndSetupAccessories(completionHandler:)](addandsetupaccessories%28completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home.
- [addAccessory(\_:completionHandler:)](addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [assignAccessory(\_:to:completionHandler:)](assignaccessory%28__to_completionhandler_%29.md): Assigns an accessory to a different room.
- [removeAccessory(\_:completionHandler:)](removeaccessory%28__completionhandler_%29.md): Removes an accessory from the home.
- [supportsAddingNetworkRouter](supportsaddingnetworkrouter.md): A Boolean that indicates whether a home supports all of the requirements for adding a network router.
- [unblockAccessory(\_:completionHandler:)](unblockaccessory%28__completionhandler_%29.md): Unblocks a blocked accessory.
- [HMAccessory](../hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.

# addAndSetupAccessoriesWithPayload:completionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ (deprecated in 15.0) · iPadOS 11.3+ (deprecated in 15.0)

Finds and adds nearby accessories to the home using a HomeKit code provided by your app.

> Use -\[HMAccessorySetupManager performAccessorySetupUsingRequest:completionHandler:\] instead

## Declaration

```objectivec
- (void) addAndSetupAccessoriesWithPayload:(HMAccessorySetupPayload *) payload completionHandler:(void (^)(NSArray<HMAccessory *> *accessories, NSError *error)) completion;
```

<a id="Discussion"></a>

## Discussion

Use this method to add accessories that have already been deployed (for example, accessories that have HomeKit support added as a firmware update), or accessories for which scanning a QR code would be difficult. Your app provides the accessory’s HomeKit code using a setup payload. For details on the payload’s content, please join the [MFi Program](https://developer.apple.com/programs/mfi/).

During this process, the user assigns the accessory to a room and configures its services.

## Topics

### Defining the Setup Payload

- [HMAccessorySetupPayload](../hmaccessorysetuppayload.md): A payload for authenticating a HomeKit accessory.

## See Also

### Managing accessories

- [accessories](accessories.md): The collection of accessories that are part of the home.
- [addAndSetupAccessoriesWithCompletionHandler:](addandsetupaccessories%28completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home.
- [addAccessory:completionHandler:](addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [assignAccessory:toRoom:completionHandler:](assignaccessory%28__to_completionhandler_%29.md): Assigns an accessory to a different room.
- [removeAccessory:completionHandler:](removeaccessory%28__completionhandler_%29.md): Removes an accessory from the home.
- [supportsAddingNetworkRouter](supportsaddingnetworkrouter.md): A Boolean that indicates whether a home supports all of the requirements for adding a network router.
- [unblockAccessory:completionHandler:](unblockaccessory%28__completionhandler_%29.md): Unblocks a blocked accessory.
- [HMAccessory](../hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.
