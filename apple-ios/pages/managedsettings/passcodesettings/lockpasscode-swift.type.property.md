> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/passcodesettings/lockpasscode-swift.type.property](https://developer.apple.com/documentation/managedsettings/passcodesettings/lockpasscode-swift.type.property)

# lockPasscode

**Framework:** Managed Settings  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The metadata for the setting that prevents the user from changing their passcode.

## Declaration

```swift
static let lockPasscode: SettingMetadata<Bool>
```

<a id="discussion"></a>

## Discussion

Use `lockPasscode` to access metadata for [lockPasscode](lockpasscode-swift.property.md). The default value is `false`.

## See Also

### Blocking passcode changes

- [lockPasscode](lockpasscode-swift.property.md): A Boolean value that indicates whether to prevent changing the device passcode.
