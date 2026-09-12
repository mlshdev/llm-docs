> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/linkpresentation/lplinkview](https://developer.apple.com/documentation/linkpresentation/lplinkview)

# LPLinkView (Swift)

**Framework:** Link Presentation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A rich visual representation of a link.

## Declaration

```swift
class LPLinkView
```

<a id="overview"></a>

## Overview

[LPLinkView](lplinkview.md) presents a link based on its available metadata. Use it to show a link’s title and icon, associated images, inline audio, video playback, and maps in a familiar and consistent style.

<a id="Present-a-rich-link"></a>

## Present a rich link

To present a rich link in your app, create an [LPLinkView](lplinkview.md), passing an [LPLinkMetadata](lplinkmetadata.md) instance into its initializer. Then add the [LPLinkView](lplinkview.md) to your view.

For example, to present links in a table view, add an [LPLinkView](lplinkview.md) instance as a subview when populating each cell.

```swift
let linkView = LPLinkView(metadata: metadata)
cell.contentView.addSubview(linkView)
linkView.sizeToFit()
```

[LPLinkView](lplinkview.md) has an intrinsic size, but it also responds to [sizeToFit()](https://developer.apple.com/documentation/uikit/uiview/sizetofit%28%29) to present a layout at any size.

## Topics

### Creating a link view

- [init(metadata:)](lplinkview/init%28metadata_%29.md): Initializes a link view with specified metadata.
- [init(url:)](lplinkview/init%28url_%29-6f6kt.md): Initializes a placeholder link view without metadata for a given URL.

### Specifying metadata

- [metadata](lplinkview/metadata.md): The metadata from which to generate a rich presentation.

### Initializers

- [init(URL:)](lplinkview/init%28url_%29-8r0tp.md)

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](https://developer.apple.com/documentation/uikit/uiview)

### Conforms To

- [CALayerDelegate](https://developer.apple.com/documentation/quartzcore/calayerdelegate)
- [CLBodyIdentifiable](https://developer.apple.com/documentation/corelocation/clbodyidentifiable)
- [CMBodyIdentifiable](https://developer.apple.com/documentation/coremotion/cmbodyidentifiable)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityelementprotocol)
- [NSAccessibilityProtocol](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol)
- [NSAnimatablePropertyContainer](https://developer.apple.com/documentation/appkit/nsanimatablepropertycontainer)
- [NSAppearanceCustomization](https://developer.apple.com/documentation/appkit/nsappearancecustomization)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](https://developer.apple.com/documentation/appkit/nsdraggingdestination)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [UIAccessibilityIdentification](https://developer.apple.com/documentation/uikit/uiaccessibilityidentification)
- [UIActivityItemsConfigurationProviding](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationproviding)
- [UIAppearance](https://developer.apple.com/documentation/uikit/uiappearance)
- [UIAppearanceContainer](https://developer.apple.com/documentation/uikit/uiappearancecontainer)
- [UICoordinateSpace](https://developer.apple.com/documentation/uikit/uicoordinatespace)
- [UIDynamicItem](https://developer.apple.com/documentation/uikit/uidynamicitem)
- [UIFocusEnvironment](https://developer.apple.com/documentation/uikit/uifocusenvironment)
- [UIFocusItem](https://developer.apple.com/documentation/uikit/uifocusitem)
- [UIFocusItemContainer](https://developer.apple.com/documentation/uikit/uifocusitemcontainer)
- [UILargeContentViewerItem](https://developer.apple.com/documentation/uikit/uilargecontentvieweritem)
- [UIPasteConfigurationSupporting](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting)
- [UIPopoverPresentationControllerSourceItem](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontrollersourceitem)
- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)
- [UITraitChangeObservable](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94)
- [UITraitEnvironment](https://developer.apple.com/documentation/uikit/uitraitenvironment)
- [UIUserActivityRestoring](https://developer.apple.com/documentation/uikit/uiuseractivityrestoring)

# LPLinkView (Objective-C)

**Framework:** Link Presentation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A rich visual representation of a link.

## Declaration

```objectivec
@interface LPLinkView : UIView
```

```objectivec
@interface LPLinkView : NSView
```

<a id="overview"></a>

## Overview

[LPLinkView](lplinkview.md) presents a link based on its available metadata. Use it to show a link’s title and icon, associated images, inline audio, video playback, and maps in a familiar and consistent style.

<a id="Present-a-rich-link"></a>

## Present a rich link

To present a rich link in your app, create an [LPLinkView](lplinkview.md), passing an [LPLinkMetadata](lplinkmetadata.md) instance into its initializer. Then add the [LPLinkView](lplinkview.md) to your view.

For example, to present links in a table view, add an [LPLinkView](lplinkview.md) instance as a subview when populating each cell.

```swift
let linkView = LPLinkView(metadata: metadata)
cell.contentView.addSubview(linkView)
linkView.sizeToFit()
```

[LPLinkView](lplinkview.md) has an intrinsic size, but it also responds to [sizeToFit](https://developer.apple.com/documentation/uikit/uiview/sizetofit%28%29) to present a layout at any size.

## Topics

### Creating a link view

- [initWithMetadata:](lplinkview/init%28metadata_%29.md): Initializes a link view with specified metadata.
- [initWithURL:](lplinkview/init%28url_%29-6f6kt.md): Initializes a placeholder link view without metadata for a given URL.

### Specifying metadata

- [metadata](lplinkview/metadata.md): The metadata from which to generate a rich presentation.

## Relationships

### Inherits From

- [NSView](https://developer.apple.com/documentation/appkit/nsview)
- [UIView](https://developer.apple.com/documentation/uikit/uiview)
