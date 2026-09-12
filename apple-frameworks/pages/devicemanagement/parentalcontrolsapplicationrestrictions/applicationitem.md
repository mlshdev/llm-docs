> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/parentalcontrolsapplicationrestrictions/applicationitem](https://developer.apple.com/documentation/devicemanagement/parentalcontrolsapplicationrestrictions/applicationitem)

# ParentalControlsApplicationRestrictions.ApplicationItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.15+ (deprecated in 27.0)

A dictionary defining an app for parental control.

> Use the declarative management `com.apple.configuration.app.settings` configuration.

## Declaration

```
object ParentalControlsApplicationRestrictions.ApplicationItem
```

## Properties

- `appID` — `data` (required): The identifier of the app. Obtain this value from the Security framework using [SecCodeCopyDesignatedRequirement(\_:\_:\_:)](../../security/seccodecopydesignatedrequirement%28______%29.md).

  Deprecated: macOS 27+
- `bundleID` — `string` (required): The bundle ID of the app.

  Deprecated: macOS 27+
- `detachedSignature` — `data`: The signature for an unsigned binary.

  Deprecated: macOS 27+
- `disabled` — `boolean`: If `true`, this app isn’t added to the allow list.

  Deprecated: macOS 27+  
  **Default:** `false`
- `displayName` — `string`: The name used for display purposes.

  Deprecated: macOS 27+
- `subApps` — `[ParentalControlsApplicationRestrictions.ApplicationItem]`: An array of nested helper applications.

  Deprecated: macOS 27+
