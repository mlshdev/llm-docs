> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sharedwithyou/swcollaborationviewdelegate/collaborationviewdiddismisspopover(_:)

# collaborationViewDidDismissPopover(\_:) (Swift)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Notifies the delegate after the system dismisses the popover.

## Declaration

```swift
optional func collaborationViewDidDismissPopover(_ collaborationView: SWCollaborationView)
```

## Parameters

- `collaborationView`: The related `SWCollaborationView`.

## See Also

### Responding to popover activity

- [collaborationViewShouldPresentPopover(\_:)](collaborationviewshouldpresentpopover%28__%29.md): Asks the delegate whether the system can display the popover.
- [collaborationViewWillPresentPopover(\_:)](collaborationviewwillpresentpopover%28__%29.md): Notifies the delegate before the system presents the popover.

# collaborationViewDidDismissPopover: (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Notifies the delegate after the system dismisses the popover.

## Declaration

```objectivec
- (void) collaborationViewDidDismissPopover:(SWCollaborationView *) collaborationView;
```

## Parameters

- `collaborationView`: The related `SWCollaborationView`.

## See Also

### Responding to popover activity

- [collaborationViewShouldPresentPopover:](collaborationviewshouldpresentpopover%28__%29.md): Asks the delegate whether the system can display the popover.
- [collaborationViewWillPresentPopover:](collaborationviewwillpresentpopover%28__%29.md): Notifies the delegate before the system presents the popover.
