> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/familyactivitydata/activitycategories](https://developer.apple.com/documentation/familycontrols/familyactivitydata/activitycategories)

# activityCategories

**Framework:** Family Controls  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

The set of all possible activity categories.

## Declaration

```swift
var activityCategories: Set<ActivityCategory> { get async throws }
```

<a id="Discussion"></a>

## Discussion

Each category contains both a `localizedDisplayName` and a `token`.

> **Important**

>  Authorize your app with [AuthorizationCenter](../authorizationcenter.md) and ensure data access is available before accessing this variable. Otherwise, it always throws an error.

## See Also

### Accessing activity data

- [shared](shared.md): A shared instance for accessing a person’s family activity data.
- [installedApplications](installedapplications.md): Applications someone installs on a device.
- [visitedWebDomains](visitedwebdomains.md): Web domains someone visits on their device.
