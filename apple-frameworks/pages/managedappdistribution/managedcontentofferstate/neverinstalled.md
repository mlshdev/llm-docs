> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedappdistribution/managedcontentofferstate/neverinstalled

# neverInstalled

**Framework:** ManagedAppDistribution  
**Kind:** Type Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · macOS 26.4+ · visionOS 26.4+

A state representing content that has never been installed.

## Declaration

```swift
static var neverInstalled: ManagedContentOfferState { get }
```

## See Also

### Determining installation status

- [installed](installed.md): A state representing content that’s installed.
- [notInstalled](notinstalled.md): A state for representing content that isn’t currently installed.
- [noninteractive](noninteractive.md): A state representing content that has no actionable button.
