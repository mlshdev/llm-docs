> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/securityinforesponse/securityinfo-data.dictionary/firewallsettings-data.dictionary/applicationsitem

# SecurityInfoResponse.SecurityInfo.FirewallSettings.ApplicationsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.12+

A dictionary that describes the allowed apps.

## Declaration

```
object SecurityInfoResponse.SecurityInfo.FirewallSettings.ApplicationsItem
```

## Properties

- `Allowed` — `boolean`: If `true`, the app is an allowed app.
- `BundleID` — `string`: The app’s bundle identifier.
- `Name` — `string`: The app’s display name if it’s determinable from the `BundleID`.
