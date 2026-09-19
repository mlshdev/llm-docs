> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedappdistribution/managedcontentofferstate

# ManagedContentOfferState

**Framework:** ManagedAppDistribution  
**Kind:** Structure  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · macOS 26.4+ · visionOS 26.4+

The state for a managed content view offer.

## Declaration

```swift
struct ManagedContentOfferState
```

## Topics

### Creating states

- [custom(title:)](managedcontentofferstate/custom%28title_%29.md): A state with a custom title.
- [installing(progress:)](managedcontentofferstate/installing%28progress_%29.md): A state indicating install progress.

### Determining installation status

- [installed](managedcontentofferstate/installed.md): A state representing content that’s installed.
- [notInstalled](managedcontentofferstate/notinstalled.md): A state for representing content that isn’t currently installed.
- [neverInstalled](managedcontentofferstate/neverinstalled.md): A state representing content that has never been installed.
- [noninteractive](managedcontentofferstate/noninteractive.md): A state representing content that has no actionable button.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### View creation

- [ManagedAppView](managedappview.md): A view that displays a managed app.
- [ManagedContentView](managedcontentview.md)
- [ManagedContentStyle](managedcontentstyle.md): A type that applies a custom appearance to the managed content view.
