> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessorysetuprequest/suggestedaccessoryname](https://developer.apple.com/documentation/homekit/hmaccessorysetuprequest/suggestedaccessoryname)

# suggestedAccessoryName (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 27.0+

The name that the framework suggests when the user names the accessory being set up.

## Declaration

```swift
var suggestedAccessoryName: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If this value is `nil`, then the suggested name is taken from the accessory itself. If the user sets up an accessory bridge, then this value only applies to the accessory bridge and not any accessories behind the bridge.

## See Also

### Setting up accessorices

- [homeUniqueIdentifier](homeuniqueidentifier.md): The identifier corresponding to the home that the accessory should be added to when being set up.
- [payload](payload.md): The payload to use for accessory setup.
- [suggestedRoomUniqueIdentifier](suggestedroomuniqueidentifier.md): The identifier corresponding to the room that the framework suggests.

# suggestedAccessoryName (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 27.0+

The name that the framework suggests when the user names the accessory being set up.

## Declaration

```objectivec
@property (copy, nullable) NSString * suggestedAccessoryName;
```

<a id="Discussion"></a>

## Discussion

If this value is `nil`, then the suggested name is taken from the accessory itself. If the user sets up an accessory bridge, then this value only applies to the accessory bridge and not any accessories behind the bridge.

## See Also

### Setting up accessorices

- [homeUniqueIdentifier](homeuniqueidentifier.md): The identifier corresponding to the home that the accessory should be added to when being set up.
- [payload](payload.md): The payload to use for accessory setup.
- [suggestedRoomUniqueIdentifier](suggestedroomuniqueidentifier.md): The identifier corresponding to the room that the framework suggests.
