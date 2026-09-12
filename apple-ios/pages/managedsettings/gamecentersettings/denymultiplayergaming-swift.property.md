> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/gamecentersettings/denymultiplayergaming-swift.property](https://developer.apple.com/documentation/managedsettings/gamecentersettings/denymultiplayergaming-swift.property)

# denyMultiplayerGaming

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether your app prevents the user joining multiplayer games.

## Declaration

```swift
var denyMultiplayerGaming: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

If your app doesn’t set this value, it is `nil`.

## See Also

### Denying the ability to join multiplayer games

- [denyMultiplayerGaming](denymultiplayergaming-swift.type.property.md): The metadata associated with the setting that prevents users from joining multiplayer games.
