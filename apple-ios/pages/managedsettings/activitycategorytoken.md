> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/activitycategorytoken](https://developer.apple.com/documentation/managedsettings/activitycategorytoken)

# ActivityCategoryToken

**Framework:** Managed Settings  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A token that represents a category of app or website activity.

## Declaration

```swift
typealias ActivityCategoryToken = Token<ActivityCategory>
```

<a id="discussion"></a>

## Discussion

Use `ActivityCategoryToken` to restrict and filter device applications without access to personal user data. [FamilyActivitySelection](../familycontrols/familyactivityselection.md) provides tokens that devices within the same Family Sharing group can use to identify applications.

## See Also

### Categories

- [ActivityCategory](activitycategory.md): An activity’s category, such as Entertainment or Social.
