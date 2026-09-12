> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedappview](https://developer.apple.com/documentation/managedappdistribution/managedappview)

# ManagedAppView

**Framework:** ManagedAppDistribution  
**Kind:** Structure  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · macOS 26.4+ · visionOS 26.4+

A view that displays a managed app.

## Declaration

```swift
@MainActor @preconcurrency struct ManagedAppView
```

## Topics

### Creating a view

- [init(app:)](managedappview/init%28app_%29.md): Create a managed app view from a managed app.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### View creation

- [ManagedContentView](managedcontentview.md)
- [ManagedContentOfferState](managedcontentofferstate.md): The state for a managed content view offer.
- [ManagedContentStyle](managedcontentstyle.md): A type that applies a custom appearance to the managed content view.
