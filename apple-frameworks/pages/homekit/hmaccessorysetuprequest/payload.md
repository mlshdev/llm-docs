> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorysetuprequest/payload](https://developer.apple.com/documentation/homekit/hmaccessorysetuprequest/payload)

# payload (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 27.0+

The payload to use for accessory setup.

## Declaration

```swift
@NSCopying var payload: HMAccessorySetupPayload? { get set }
```

<a id="Discussion"></a>

## Discussion

See [HMAccessorySetupPayload](../hmaccessorysetuppayload.md) for more information.

## See Also

### Setting up accessorices

- [homeUniqueIdentifier](homeuniqueidentifier.md): The identifier corresponding to the home that the accessory should be added to when being set up.
- [suggestedAccessoryName](suggestedaccessoryname.md): The name that the framework suggests when the user names the accessory being set up.
- [suggestedRoomUniqueIdentifier](suggestedroomuniqueidentifier.md): The identifier corresponding to the room that the framework suggests.

# payload (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 27.0+

The payload to use for accessory setup.

## Declaration

```objectivec
@property (copy, nullable) HMAccessorySetupPayload * payload;
```

<a id="Discussion"></a>

## Discussion

See [HMAccessorySetupPayload](../hmaccessorysetuppayload.md) for more information.

## See Also

### Setting up accessorices

- [homeUniqueIdentifier](homeuniqueidentifier.md): The identifier corresponding to the home that the accessory should be added to when being set up.
- [suggestedAccessoryName](suggestedaccessoryname.md): The name that the framework suggests when the user names the accessory being set up.
- [suggestedRoomUniqueIdentifier](suggestedroomuniqueidentifier.md): The identifier corresponding to the room that the framework suggests.
