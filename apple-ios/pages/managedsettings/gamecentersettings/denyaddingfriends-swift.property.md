> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/gamecentersettings/denyaddingfriends-swift.property](https://developer.apple.com/documentation/managedsettings/gamecentersettings/denyaddingfriends-swift.property)

# denyAddingFriends

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether to prevent the user from adding Game Center friends.

## Declaration

```swift
var denyAddingFriends: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

If your app doesn’t configure this setting, this value is `nil`.

## See Also

### Denying the ability to add friends

- [denyAddingFriends](denyaddingfriends-swift.type.property.md): The metadata for the setting that prevents the user from adding friends in Game Center.
