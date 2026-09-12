> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/autonomoussingleappmode/allowedapplicationsitem](https://developer.apple.com/documentation/devicemanagement/autonomoussingleappmode/allowedapplicationsitem)

# AutonomousSingleAppMode.AllowedApplicationsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.13.4+

A dictionary that specifies an app that can be granted access to the Accessibilty APIs.

## Declaration

```
object AutonomousSingleAppMode.AllowedApplicationsItem
```

## Properties

- `BundleIdentifier` — `string` (required): The unique bundle identifier. If two dictionaries contain the same `BundleIdentifier` value but a different `TeamIdentifier` value, an error occurs and the profile won’t be installed.
- `TeamIdentifier` — `string` (required): The developer’s team identifier that the system used when it signed the app.
