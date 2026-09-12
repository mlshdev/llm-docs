> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swcollaborationviewdelegate](https://developer.apple.com/documentation/sharedwithyou/swcollaborationviewdelegate)

# SWCollaborationViewDelegate (Swift)

**Framework:** Shared with You  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A delegate object that the system notifies about changes to the collaboration popover state.

## Declaration

```swift
protocol SWCollaborationViewDelegate : NSObjectProtocol
```

## Topics

### Responding to popover activity

- [collaborationViewShouldPresentPopover(\_:)](swcollaborationviewdelegate/collaborationviewshouldpresentpopover%28__%29.md): Asks the delegate whether the system can display the popover.
- [collaborationViewDidDismissPopover(\_:)](swcollaborationviewdelegate/collaborationviewdiddismisspopover%28__%29.md): Notifies the delegate after the system dismisses the popover.
- [collaborationViewWillPresentPopover(\_:)](swcollaborationviewdelegate/collaborationviewwillpresentpopover%28__%29.md): Notifies the delegate before the system presents the popover.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Collaboration management

- [SWCollaborationCoordinator](../sharedwithyoucore/swcollaborationcoordinator.md): An object that contains the shared collaboration coordinator.
- [SWCollaborationOption](../sharedwithyoucore/swcollaborationoption.md): An object that determines how the system shares a document in a collaboration.
- [SWCollaborationOptionsGroup](../sharedwithyoucore/swcollaborationoptionsgroup.md): An object that represents a group of collaboration options that the system displays together.
- [SWCollaborationOptionsPickerGroup](../sharedwithyoucore/swcollaborationoptionspickergroup.md): An object that represents a group of collaboration options that the system displays together with mutually exclusive options.
- [SWCollaborationShareOptions](../sharedwithyoucore/swcollaborationshareoptions.md): An object that represents the state of the collaboration options for the document.
- [UTCollaborationOptionsTypeIdentifier](../sharedwithyoucore/utcollaborationoptionstypeidentifier.md): A string constant for the options type identifier.

# SWCollaborationViewDelegate (Objective-C)

**Framework:** Shared with You  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A delegate object that the system notifies about changes to the collaboration popover state.

## Declaration

```objectivec
@protocol SWCollaborationViewDelegate <NSObject>
```

## Topics

### Responding to popover activity

- [collaborationViewShouldPresentPopover:](swcollaborationviewdelegate/collaborationviewshouldpresentpopover%28__%29.md): Asks the delegate whether the system can display the popover.
- [collaborationViewDidDismissPopover:](swcollaborationviewdelegate/collaborationviewdiddismisspopover%28__%29.md): Notifies the delegate after the system dismisses the popover.
- [collaborationViewWillPresentPopover:](swcollaborationviewdelegate/collaborationviewwillpresentpopover%28__%29.md): Notifies the delegate before the system presents the popover.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Collaboration management

- [SWCollaborationCoordinator](../sharedwithyoucore/swcollaborationcoordinator.md): An object that contains the shared collaboration coordinator.
- [SWCollaborationOption](../sharedwithyoucore/swcollaborationoption.md): An object that determines how the system shares a document in a collaboration.
- [SWCollaborationOptionsGroup](../sharedwithyoucore/swcollaborationoptionsgroup.md): An object that represents a group of collaboration options that the system displays together.
- [SWCollaborationOptionsPickerGroup](../sharedwithyoucore/swcollaborationoptionspickergroup.md): An object that represents a group of collaboration options that the system displays together with mutually exclusive options.
- [SWCollaborationShareOptions](../sharedwithyoucore/swcollaborationshareoptions.md): An object that represents the state of the collaboration options for the document.
- [UTCollaborationOptionsTypeIdentifier](../sharedwithyoucore/utcollaborationoptionstypeidentifier.md): A string constant for the options type identifier.
