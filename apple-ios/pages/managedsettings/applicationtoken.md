> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/applicationtoken](https://developer.apple.com/documentation/managedsettings/applicationtoken)

# ApplicationToken

**Framework:** Managed Settings  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A representation of an application.

## Declaration

```swift
typealias ApplicationToken = Token<Application>
```

<a id="discussion"></a>

## Discussion

Use `ApplicationToken` to restrict and filter device applications without access to personal user data. [FamilyActivitySelection](../familycontrols/familyactivityselection.md) provides tokens that devices within the same Family Sharing group can use to identify applications.

## See Also

### Apps

- [Application](application.md): A representation of an application on the user’s device.
