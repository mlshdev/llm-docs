> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaddaccessoryrequest/home](https://developer.apple.com/documentation/homekit/hmaddaccessoryrequest/home)

# home (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · visionOS 1.0+

The home to which to add the accessory.

## Declaration

```swift
var home: HMHome { get }
```

<a id="Discussion"></a>

## Discussion

Call this home’s [addAndSetupAccessories(with:completionHandler:)](../hmhome/addandsetupaccessories%28with_completionhandler_%29.md) method to fulfill the request after constructing the setup payload.

## See Also

### Characterizing the Request

- [accessoryCategory](accessorycategory.md): The category of the accessory to add.
- [accessoryName](accessoryname.md): The name of the accessory to add.
- [requiresOwnershipToken](requiresownershiptoken.md): Deprecated. An indication of whether the add operation requires an ownership token.
- [requiresSetupPayloadURL](requiressetuppayloadurl.md): An indication of whether the add operation requires a setup payload URL.

# home (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · visionOS 1.0+

The home to which to add the accessory.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) HMHome * home;
```

<a id="Discussion"></a>

## Discussion

Call this home’s [addAndSetupAccessoriesWithPayload:completionHandler:](../hmhome/addandsetupaccessories%28with_completionhandler_%29.md) method to fulfill the request after constructing the setup payload.

## See Also

### Characterizing the Request

- [accessoryCategory](accessorycategory.md): The category of the accessory to add.
- [accessoryName](accessoryname.md): The name of the accessory to add.
- [requiresOwnershipToken](requiresownershiptoken.md): Deprecated. An indication of whether the add operation requires an ownership token.
- [requiresSetupPayloadURL](requiressetuppayloadurl.md): An indication of whether the add operation requires a setup payload URL.
