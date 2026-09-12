> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedcontentview](https://developer.apple.com/documentation/managedappdistribution/managedcontentview)

# ManagedContentView

**Framework:** ManagedAppDistribution  
**Kind:** Structure  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
@MainActor struct ManagedContentView<Icon> where Icon : View
```

## Topics

### Creating views

- [init(primaryLabel:secondaryLabel:tertiaryLabel:quaternaryLabel:offerState:offerAction:icon:)](managedcontentview/init%28primarylabel_secondarylabel_tertiarylabel_quaternarylabel_offerstate_offeraction_icon_%29-4blv1.md): Create a view with the layout of a managed app view and customized labels using localized string keys.
- [init(primaryLabel:secondaryLabel:tertiaryLabel:quaternaryLabel:offerState:offerAction:icon:)](managedcontentview/init%28primarylabel_secondarylabel_tertiarylabel_quaternarylabel_offerstate_offeraction_icon_%29-8l3xw.md): Create a content view with the layout of a managed app view and customized labels using strings.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### View creation

- [ManagedAppView](managedappview.md): A view that displays a managed app.
- [ManagedContentOfferState](managedcontentofferstate.md): The state for a managed content view offer.
- [ManagedContentStyle](managedcontentstyle.md): A type that applies a custom appearance to the managed content view.
