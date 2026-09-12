> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/cellularsettings/lockesim-swift.property](https://developer.apple.com/documentation/managedsettings/cellularsettings/lockesim-swift.property)

# lockESIM

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether to prevent the user from changing their eSIM settings.

## Declaration

```swift
var lockESIM: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

If your app doesn’t configure this setting, the value is `nil`.

## See Also

### Locking the device’s eSIM settings

- [lockESIM](lockesim-swift.type.property.md): The metadata associated with the constraint that locks the user’s eSIM settings.
