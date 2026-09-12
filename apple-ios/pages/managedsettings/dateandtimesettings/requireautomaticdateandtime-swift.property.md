> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/dateandtimesettings/requireautomaticdateandtime-swift.property](https://developer.apple.com/documentation/managedsettings/dateandtimesettings/requireautomaticdateandtime-swift.property)

# requireAutomaticDateAndTime

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether to prevent the user from changing their device’s date and time.

## Declaration

```swift
var requireAutomaticDateAndTime: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

If your app doesn’t configure this setting, the value is `nil`.

## See Also

### Requiring automatic date and time

- [requireAutomaticDateAndTime](requireautomaticdateandtime-swift.type.property.md): The metadata for the constraint that configures the date and time setting.
