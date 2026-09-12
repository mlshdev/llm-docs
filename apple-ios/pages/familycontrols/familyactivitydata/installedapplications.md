> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/familyactivitydata/installedapplications](https://developer.apple.com/documentation/familycontrols/familyactivitydata/installedapplications)

# installedApplications

**Framework:** Family Controls  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Applications someone installs on a device.

## Declaration

```swift
var installedApplications: [Application] { get async throws }
```

<a id="Discussion"></a>

## Discussion

Each application contains both a `bundleIdentifier` and a `token`.

> **Important**

>  Authorize your app with [AuthorizationCenter](../authorizationcenter.md) and ensure data access is available before accessing this variable. Otherwise, it always throws an error.

## See Also

### Accessing activity data

- [shared](shared.md): A shared instance for accessing a person’s family activity data.
- [activityCategories](activitycategories.md): The set of all possible activity categories.
- [visitedWebDomains](visitedwebdomains.md): Web domains someone visits on their device.
