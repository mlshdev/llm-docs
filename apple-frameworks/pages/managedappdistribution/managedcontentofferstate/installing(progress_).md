> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedappdistribution/managedcontentofferstate/installing(progress:)

# installing(progress:)

**Framework:** ManagedAppDistribution  
**Kind:** Type Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · macOS 26.4+ · visionOS 26.4+

A state indicating install progress.

## Declaration

```swift
static func installing(progress: Double?) -> ManagedContentOfferState
```

## Parameters

- `progress`: The progress of the install from `0.0` to `1.0`. `nil` represents indeterminate progress.

## See Also

### Creating states

- [custom(title:)](custom%28title_%29.md): A state with a custom title.
