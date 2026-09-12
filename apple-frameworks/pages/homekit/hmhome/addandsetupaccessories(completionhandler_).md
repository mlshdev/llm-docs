> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmhome/addandsetupaccessories(completionhandler:)](https://developer.apple.com/documentation/homekit/hmhome/addandsetupaccessories(completionhandler:))

# addAndSetupAccessories(completionHandler:) (Swift)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.4) · iPadOS 10.0+ (deprecated in 15.4) · Mac Catalyst 10.0+ (deprecated in 15.4)

Finds and adds nearby accessories to the home.

> Use -\[HMAccessorySetupManager performAccessorySetupUsingRequest:completionHandler:\] instead

## Declaration

```swift
func addAndSetupAccessories(completionHandler completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func addAndSetUpAccessories() async throws
```

## Parameters

- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## Mentioned In

- [Testing your app with the HomeKit Accessory Simulator](../testing-your-app-with-the-homekit-accessory-simulator.md)

<a id="Discussion"></a>

## Discussion

This method launches an interactive process that first asks the user to provide a HomeKit code for the accessories—for example, by scanning an 8-digit code, by scanning the QR code, wirelessly by holding an iPhone next to the device, or by manually entering the HomeKit code. The process then asks the user to configure the accessory’s services, naming them and placing them in rooms.

## See Also

### Managing accessories

- [accessories](accessories.md): The collection of accessories that are part of the home.
- [addAndSetupAccessories(with:completionHandler:)](addandsetupaccessories%28with_completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home using a HomeKit code provided by your app.
- [addAccessory(\_:completionHandler:)](addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [assignAccessory(\_:to:completionHandler:)](assignaccessory%28__to_completionhandler_%29.md): Assigns an accessory to a different room.
- [removeAccessory(\_:completionHandler:)](removeaccessory%28__completionhandler_%29.md): Removes an accessory from the home.
- [supportsAddingNetworkRouter](supportsaddingnetworkrouter.md): A Boolean that indicates whether a home supports all of the requirements for adding a network router.
- [unblockAccessory(\_:completionHandler:)](unblockaccessory%28__completionhandler_%29.md): Unblocks a blocked accessory.
- [HMAccessory](../hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.

# addAndSetupAccessoriesWithCompletionHandler: (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.4) · iPadOS 10.0+ (deprecated in 15.4)

Finds and adds nearby accessories to the home.

> Use -\[HMAccessorySetupManager performAccessorySetupUsingRequest:completionHandler:\] instead

## Declaration

```objectivec
- (void) addAndSetupAccessoriesWithCompletionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `completion`: The block executed after the request is processed.

  - **error**: `nil` on success; otherwise, error object indicating the reason for failure.

## Mentioned In

- [Testing your app with the HomeKit Accessory Simulator](../testing-your-app-with-the-homekit-accessory-simulator.md)

<a id="Discussion"></a>

## Discussion

This method launches an interactive process that first asks the user to provide a HomeKit code for the accessories—for example, by scanning an 8-digit code, by scanning the QR code, wirelessly by holding an iPhone next to the device, or by manually entering the HomeKit code. The process then asks the user to configure the accessory’s services, naming them and placing them in rooms.

## See Also

### Managing accessories

- [accessories](accessories.md): The collection of accessories that are part of the home.
- [addAndSetupAccessoriesWithPayload:completionHandler:](addandsetupaccessories%28with_completionhandler_%29.md): Deprecated. Finds and adds nearby accessories to the home using a HomeKit code provided by your app.
- [addAccessory:completionHandler:](addaccessory%28__completionhandler_%29.md): Adds a new accessory to the home.
- [assignAccessory:toRoom:completionHandler:](assignaccessory%28__to_completionhandler_%29.md): Assigns an accessory to a different room.
- [removeAccessory:completionHandler:](removeaccessory%28__completionhandler_%29.md): Removes an accessory from the home.
- [supportsAddingNetworkRouter](supportsaddingnetworkrouter.md): A Boolean that indicates whether a home supports all of the requirements for adding a network router.
- [unblockAccessory:completionHandler:](unblockaccessory%28__completionhandler_%29.md): Unblocks a blocked accessory.
- [HMAccessory](../hmaccessory.md): A home automation accessory, like a garage door opener or a thermostat.
