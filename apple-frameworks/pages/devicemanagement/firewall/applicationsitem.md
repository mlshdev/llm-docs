> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/firewall/applicationsitem

# Firewall.ApplicationsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.12+

A dictionary of details for apps.

## Declaration

```
object Firewall.ApplicationsItem
```

## Properties

- `Allowed` — `boolean` (required): If `true`, the system allows connections for the app.
- `BundleID` — `string` (required): The bundle identifier for the app.
