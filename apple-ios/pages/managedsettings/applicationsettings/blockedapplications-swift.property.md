> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/applicationsettings/blockedapplications-swift.property](https://developer.apple.com/documentation/managedsettings/applicationsettings/blockedapplications-swift.property)

# blockedApplications

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A set of applications for the system to block.

## Declaration

```swift
var blockedApplications: Set<Application>? { get set }
```

<a id="discussion"></a>

## Discussion

The system hides blocked applications and prevents the user from launching them. The value is `nil` if your app doesn’t specify a set of apps to block. Your app can shield up to 50 applications at once.

## See Also

### Blocking applications

- [blockedApplications](blockedapplications-swift.type.property.md): A description of the setting that controls which apps a user can launch on their device.
