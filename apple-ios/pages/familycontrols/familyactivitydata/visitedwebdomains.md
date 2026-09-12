> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/familyactivitydata/visitedwebdomains](https://developer.apple.com/documentation/familycontrols/familyactivitydata/visitedwebdomains)

# visitedWebDomains

**Framework:** Family Controls  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Web domains someone visits on their device.

## Declaration

```swift
var visitedWebDomains: [WebDomain] { get async throws }
```

<a id="Discussion"></a>

## Discussion

Each web domain contains both a `domain` and a `token`.

> **Important**

>  Authorize your app with [AuthorizationCenter](../authorizationcenter.md) and ensure data access is available before accessing this variable. Otherwise, it will always throw an error.

## See Also

### Accessing activity data

- [shared](shared.md): A shared instance for accessing a person’s family activity data.
- [activityCategories](activitycategories.md): The set of all possible activity categories.
- [installedApplications](installedapplications.md): Applications someone installs on a device.
