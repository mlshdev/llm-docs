> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyou/swcollaborationview](https://developer.apple.com/documentation/sharedwithyou/swcollaborationview)

# SWCollaborationView (Swift)

**Framework:** Shared with You  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A view that contains the collaboration content and options.

## Declaration

```swift
@MainActor class SWCollaborationView
```

## Mentioned In

- [Adding shared content collaboration to your app](adding-shared-content-collaboration-to-your-app.md)

<a id="overview"></a>

## Overview

The system presents an `SWCollaborationView` that displays participants and sharing options to a collaborator. For CloudKit and iCloud Drive adopters, the collaboration view includes a manage button. The button brings up the manage user interface, where collaborators can add and remove participants or change the share settings.

## Topics

### Creating a collaboration view

- [init(itemProvider:)](swcollaborationview/init%28itemprovider_%29.md): Creates and initializes a collaboration view.

### Accessing view attributes

- [activeParticipantCount](swcollaborationview/activeparticipantcount.md): The number of participants in a collaboration.
- [cloudSharingDelegate](swcollaborationview/cloudsharingdelegate.md): The delegate object for the cloud-sharing controller.
- [delegate](swcollaborationview/delegate.md): The delegate object for the collaboration view.
- [headerImage](swcollaborationview/headerimage.md): The image that the system displays in the header.
- [headerSubtitle](swcollaborationview/headersubtitle.md): The subtitle that the system displays in the header.
- [headerTitle](swcollaborationview/headertitle.md): The title that the system displays in the header.
- [manageButtonTitle](swcollaborationview/managebuttontitle.md): The manage button title that the system displays in the header.
- [menuFormRepresentation](swcollaborationview/menuformrepresentation-3sffe.md): Returns a menu item suitable to display the collaboration detail view from the toolbar overflow menu.
- [menuFormRepresentation](swcollaborationview/menuformrepresentation-55skx.md): Returns a menu item suitable to display the collaboration detail view from the toolbar overflow menu.

### Setting view attributes

- [setContent(\_:)](swcollaborationview/setcontent%28__%29.md): Sets the content view.
- [setDetailViewListContent(\_:)](swcollaborationview/setdetailviewlistcontent%28__%29-88gy5.md): Sets the detail view for the list content.
- [setDetailViewListContent(\_:)](swcollaborationview/setdetailviewlistcontent%28__%29-8ml1c.md): Sets the detail view for the list content from view builder closures.
- [setShowManageButton(\_:)](swcollaborationview/setshowmanagebutton%28__%29.md): A Boolean value the system uses to show or hide the default manage-participants button in the collaboration popover.

### Dismissing the popover

- [dismissPopover(\_:)](swcollaborationview/dismisspopover%28__%29.md): Dismisses the popover.

### Customizing the cloud-sharing behavior

- [cloudSharingControllerDelegate](swcollaborationview/cloudsharingcontrollerdelegate.md): A reference to an object that conforms to the CloudKit sharing controller delegate protocol.
- [cloudSharingServiceDelegate](swcollaborationview/cloudsharingservicedelegate.md): A reference to an object that conforms to the cloud-sharing service delegate protocol.

### Instance Properties

- [pendingAccessRequestsCount](swcollaborationview/pendingaccessrequestscount.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](../foundation/nscoding.md)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

# SWCollaborationView (Objective-C)

**Framework:** Shared with You  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A view that contains the collaboration content and options.

## Declaration

```objectivec
@interface SWCollaborationView : UIView
```

```objectivec
@interface SWCollaborationView : NSView
```

## Mentioned In

- [Adding shared content collaboration to your app](adding-shared-content-collaboration-to-your-app.md)

<a id="overview"></a>

## Overview

The system presents an `SWCollaborationView` that displays participants and sharing options to a collaborator. For CloudKit and iCloud Drive adopters, the collaboration view includes a manage button. The button brings up the manage user interface, where collaborators can add and remove participants or change the share settings.

## Topics

### Creating a collaboration view

- [initWithItemProvider:](swcollaborationview/init%28itemprovider_%29.md): Creates and initializes a collaboration view.

### Accessing view attributes

- [activeParticipantCount](swcollaborationview/activeparticipantcount.md): The number of participants in a collaboration.
- [cloudSharingDelegate](swcollaborationview/cloudsharingdelegate.md): The delegate object for the cloud-sharing controller.
- [delegate](swcollaborationview/delegate.md): The delegate object for the collaboration view.
- [headerImage](swcollaborationview/headerimage.md): The image that the system displays in the header.
- [headerSubtitle](swcollaborationview/headersubtitle.md): The subtitle that the system displays in the header.
- [headerTitle](swcollaborationview/headertitle.md): The title that the system displays in the header.
- [manageButtonTitle](swcollaborationview/managebuttontitle.md): The manage button title that the system displays in the header.
- [menuFormRepresentation](swcollaborationview/menuformrepresentation-55skx.md): Returns a menu item suitable to display the collaboration detail view from the toolbar overflow menu.

### Setting view attributes

- [setContentView:](swcollaborationview/setcontent%28__%29.md): Sets the content view.
- [setShowManageButton:](swcollaborationview/setshowmanagebutton%28__%29.md): A Boolean value the system uses to show or hide the default manage-participants button in the collaboration popover.

### Dismissing the popover

- [dismissPopover:](swcollaborationview/dismisspopover%28__%29.md): Dismisses the popover.

### Customizing the cloud-sharing behavior

- [cloudSharingControllerDelegate](swcollaborationview/cloudsharingcontrollerdelegate.md): A reference to an object that conforms to the CloudKit sharing controller delegate protocol.
- [cloudSharingServiceDelegate](swcollaborationview/cloudsharingservicedelegate.md): A reference to an object that conforms to the cloud-sharing service delegate protocol.

### Instance Properties

- [pendingAccessRequestsCount](swcollaborationview/pendingaccessrequestscount.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](../uikit/uiview.md)
