> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/declaredagerange/agerangeservice/parentalcontrols/significantappchangeapprovalrequired

# significantAppChangeApprovalRequired

**Framework:** Declared Age Range  
**Kind:** Type Property  
**Availability:** iOS 26.2+ (deprecated in 26.4) · iPadOS 26.2+ (deprecated in 26.4) · Mac Catalyst 26.2+ (deprecated in 26.4) · macOS 26.2+ (deprecated in 26.4)

Indicates a notification obligation for significant app updates.

> Use requiredRegulatoryFeatures to check for significantAppChangeRequiresParentalConsent instead

## Declaration

```swift
static let significantAppChangeApprovalRequired: AgeRangeService.ParentalControls
```

<a id="discussion"></a>

## Discussion

When this option is present, notify the parent or guardian before implementing significant app changes or updates to comply with associated laws or regulations.

## See Also

### Defining parental control options

- [communicationLimits](communicationlimits.md): Indicates that the system limits communication features for the minor.
