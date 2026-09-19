> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretelephony/ctslicingmanager/appcategory/missioncritical

# CTSlicingManager.AppCategory.missionCritical

**Framework:** Core Telephony  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An application category for mission-critical applications requiring guaranteed reliability.

## Declaration

```swift
case missionCritical
```

<a id="discussion"></a>

## Discussion

Mission-critical slices provide the highest reliability and priority for applications where uninterrupted connectivity is essential. Use this category for applications that require guaranteed network access, such as emergency services or critical infrastructure apps.
