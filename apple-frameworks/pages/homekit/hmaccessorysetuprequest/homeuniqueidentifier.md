> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorysetuprequest/homeuniqueidentifier](https://developer.apple.com/documentation/homekit/hmaccessorysetuprequest/homeuniqueidentifier)

# homeUniqueIdentifier (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 27.0+

The identifier corresponding to the home that the accessory should be added to when being set up.

## Declaration

```swift
var homeUniqueIdentifier: UUID? { get set }
```

<a id="Discussion"></a>

## Discussion

If `nil`, then the user chooses a home. See [uniqueIdentifier](../hmhome/uniqueidentifier.md) for more information.

## See Also

### Setting up accessorices

- [payload](payload.md): The payload to use for accessory setup.
- [suggestedAccessoryName](suggestedaccessoryname.md): The name that the framework suggests when the user names the accessory being set up.
- [suggestedRoomUniqueIdentifier](suggestedroomuniqueidentifier.md): The identifier corresponding to the room that the framework suggests.

# homeUniqueIdentifier (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 27.0+

The identifier corresponding to the home that the accessory should be added to when being set up.

## Declaration

```objectivec
@property (copy, nullable) NSUUID * homeUniqueIdentifier;
```

<a id="Discussion"></a>

## Discussion

If `nil`, then the user chooses a home. See [uniqueIdentifier](../hmhome/uniqueidentifier.md) for more information.

## See Also

### Setting up accessorices

- [payload](payload.md): The payload to use for accessory setup.
- [suggestedAccessoryName](suggestedaccessoryname.md): The name that the framework suggests when the user names the accessory being set up.
- [suggestedRoomUniqueIdentifier](suggestedroomuniqueidentifier.md): The identifier corresponding to the room that the framework suggests.
