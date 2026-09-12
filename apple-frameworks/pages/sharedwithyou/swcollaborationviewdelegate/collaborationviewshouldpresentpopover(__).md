> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swcollaborationviewdelegate/collaborationviewshouldpresentpopover(_:)](https://developer.apple.com/documentation/sharedwithyou/swcollaborationviewdelegate/collaborationviewshouldpresentpopover(_:))

# collaborationViewShouldPresentPopover(\_:) (Swift)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Asks the delegate whether the system can display the popover.

## Declaration

```swift
optional func collaborationViewShouldPresentPopover(_ collaborationView: SWCollaborationView) -> Bool
```

## Parameters

- `collaborationView`: The related `SWCollaborationView`.

<a id="return-value"></a>

## Return Value

`true` if the system should present the popover; otherwise `false`.

## See Also

### Responding to popover activity

- [collaborationViewDidDismissPopover(\_:)](collaborationviewdiddismisspopover%28__%29.md): Notifies the delegate after the system dismisses the popover.
- [collaborationViewWillPresentPopover(\_:)](collaborationviewwillpresentpopover%28__%29.md): Notifies the delegate before the system presents the popover.

# collaborationViewShouldPresentPopover: (Objective-C)

**Framework:** Shared with You  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Asks the delegate whether the system can display the popover.

## Declaration

```objectivec
- (BOOL) collaborationViewShouldPresentPopover:(SWCollaborationView *) collaborationView;
```

## Parameters

- `collaborationView`: The related `SWCollaborationView`.

<a id="return-value"></a>

## Return Value

`true` if the system should present the popover; otherwise `false`.

## See Also

### Responding to popover activity

- [collaborationViewDidDismissPopover:](collaborationviewdiddismisspopover%28__%29.md): Notifies the delegate after the system dismisses the popover.
- [collaborationViewWillPresentPopover:](collaborationviewwillpresentpopover%28__%29.md): Notifies the delegate before the system presents the popover.
