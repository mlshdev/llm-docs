> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorysetuprequest/suggestedroomuniqueidentifier](https://developer.apple.com/documentation/homekit/hmaccessorysetuprequest/suggestedroomuniqueidentifier)

# suggestedRoomUniqueIdentifier (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 27.0+

The identifier corresponding to the room that the framework suggests.

## Declaration

```swift
var suggestedRoomUniqueIdentifier: UUID? { get set }
```

<a id="Discussion"></a>

## Discussion

If `nil`, then any room may be suggested. See [uniqueIdentifier](../hmhome/uniqueidentifier.md) for more information.

## See Also

### Setting up accessorices

- [homeUniqueIdentifier](homeuniqueidentifier.md): The identifier corresponding to the home that the accessory should be added to when being set up.
- [payload](payload.md): The payload to use for accessory setup.
- [suggestedAccessoryName](suggestedaccessoryname.md): The name that the framework suggests when the user names the accessory being set up.

# suggestedRoomUniqueIdentifier (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 27.0+

The identifier corresponding to the room that the framework suggests.

## Declaration

```objectivec
@property (copy, nullable) NSUUID * suggestedRoomUniqueIdentifier;
```

<a id="Discussion"></a>

## Discussion

If `nil`, then any room may be suggested. See [uniqueIdentifier](../hmhome/uniqueidentifier.md) for more information.

## See Also

### Setting up accessorices

- [homeUniqueIdentifier](homeuniqueidentifier.md): The identifier corresponding to the home that the accessory should be added to when being set up.
- [payload](payload.md): The payload to use for accessory setup.
- [suggestedAccessoryName](suggestedaccessoryname.md): The name that the framework suggests when the user names the accessory being set up.
