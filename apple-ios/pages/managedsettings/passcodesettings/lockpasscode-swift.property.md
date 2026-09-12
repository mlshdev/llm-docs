> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/passcodesettings/lockpasscode-swift.property](https://developer.apple.com/documentation/managedsettings/passcodesettings/lockpasscode-swift.property)

# lockPasscode

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether to prevent changing the device passcode.

## Declaration

```swift
var lockPasscode: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

If your app doesn’t configure this setting, the value is `nil`.

## See Also

### Blocking passcode changes

- [lockPasscode](lockpasscode-swift.type.property.md): The metadata for the setting that prevents the user from changing their passcode.
