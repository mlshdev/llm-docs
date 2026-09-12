> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedcontentview/init(primarylabel:secondarylabel:tertiarylabel:quaternarylabel:offerstate:offeraction:icon:)-8l3xw](https://developer.apple.com/documentation/managedappdistribution/managedcontentview/init(primarylabel:secondarylabel:tertiarylabel:quaternarylabel:offerstate:offeraction:icon:)-8l3xw)

# init(primaryLabel:secondaryLabel:tertiaryLabel:quaternaryLabel:offerState:offerAction:icon:)

**Framework:** ManagedAppDistribution  
**Kind:** Initializer  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · macOS 26.4+ · visionOS 26.4+

Create a content view with the layout of a managed app view and customized labels using strings.

## Declaration

```swift
@MainActor init(primaryLabel: any StringProtocol, secondaryLabel: any StringProtocol = "", tertiaryLabel: any StringProtocol = "", quaternaryLabel: any StringProtocol = "", offerState: ManagedContentOfferState, offerAction: @escaping (ManagedContentOfferState) -> Void, @ViewBuilder icon: () -> Icon)
```

## Parameters

- `primaryLabel`: The string for primary label.
- `secondaryLabel`: The string for secondary label.
- `tertiaryLabel`: The string for tertiary label.
- `quaternaryLabel`: The string for quaternary label.
- `offerState`: The view’s offer state.
- `offerAction`: The action to execute when a person taps the offer button.
- `icon`: A view that represents the icon for this managed content.

## See Also

### Creating views

- [init(primaryLabel:secondaryLabel:tertiaryLabel:quaternaryLabel:offerState:offerAction:icon:)](init%28primarylabel_secondarylabel_tertiarylabel_quaternarylabel_offerstate_offeraction_icon_%29-4blv1.md): Create a view with the layout of a managed app view and customized labels using localized string keys.
