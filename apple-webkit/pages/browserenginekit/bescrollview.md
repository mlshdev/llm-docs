> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bescrollview](https://developer.apple.com/documentation/browserenginekit/bescrollview)

# BEScrollView (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A scroll view that works with its delegate to handle nesting and customize scroll interactions.

## Declaration

```swift
@MainActor class BEScrollView
```

<a id="overview"></a>

## Overview

Use `BEScrollView` instead of [UIScrollView](https://developer.apple.com/documentation/uikit/uiscrollview) if you need to:

- Handle scroll updates programmatically
- Override default scroll view behavior
- Support scroll views that are siblings in the view hierarchy, but nested in the browser Document Object Model (DOM)

In any of these scenarios, set the scroll view’s [delegate](bescrollview/delegate.md) to an object that implements [BEScrollViewDelegate](bescrollviewdelegate.md).

## Topics

### Responding to scroll updates

- [delegate](bescrollview/delegate.md): A delegate that responds to the scroll view’s scroll updates.

## Relationships

### Inherits From

- [UIScrollView](https://developer.apple.com/documentation/uikit/uiscrollview)

### Conforms To

- [CALayerDelegate](https://developer.apple.com/documentation/quartzcore/calayerdelegate)
- [CLBodyIdentifiable](https://developer.apple.com/documentation/corelocation/clbodyidentifiable)
- [CMBodyIdentifiable](https://developer.apple.com/documentation/coremotion/cmbodyidentifiable)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [UIAccessibilityIdentification](https://developer.apple.com/documentation/uikit/uiaccessibilityidentification)
- [UIActivityItemsConfigurationProviding](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationproviding)
- [UIAppearance](https://developer.apple.com/documentation/uikit/uiappearance)
- [UIAppearanceContainer](https://developer.apple.com/documentation/uikit/uiappearancecontainer)
- [UICoordinateSpace](https://developer.apple.com/documentation/uikit/uicoordinatespace)
- [UIDynamicItem](https://developer.apple.com/documentation/uikit/uidynamicitem)
- [UIFocusEnvironment](https://developer.apple.com/documentation/uikit/uifocusenvironment)
- [UIFocusItem](https://developer.apple.com/documentation/uikit/uifocusitem)
- [UIFocusItemContainer](https://developer.apple.com/documentation/uikit/uifocusitemcontainer)
- [UIFocusItemScrollableContainer](https://developer.apple.com/documentation/uikit/uifocusitemscrollablecontainer)
- [UILargeContentViewerItem](https://developer.apple.com/documentation/uikit/uilargecontentvieweritem)
- [UIPasteConfigurationSupporting](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting)
- [UIPopoverPresentationControllerSourceItem](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontrollersourceitem)
- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)
- [UITraitChangeObservable](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94)
- [UITraitEnvironment](https://developer.apple.com/documentation/uikit/uitraitenvironment)
- [UIUserActivityRestoring](https://developer.apple.com/documentation/uikit/uiuseractivityrestoring)

## See Also

### Scroll view interaction

- [BEScrollViewScrollUpdate](bescrollviewscrollupdate.md): An object that describes a change in a scroll view’s scroll state.
- [BEScrollViewDelegate](bescrollviewdelegate.md): A protocol for scroll view delegates to handle scroll updates and DOM nesting.

# BEScrollView (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

A scroll view that works with its delegate to handle nesting and customize scroll interactions.

## Declaration

```objectivec
@interface BEScrollView : UIScrollView
```

<a id="overview"></a>

## Overview

Use `BEScrollView` instead of [UIScrollView](https://developer.apple.com/documentation/uikit/uiscrollview) if you need to:

- Handle scroll updates programmatically
- Override default scroll view behavior
- Support scroll views that are siblings in the view hierarchy, but nested in the browser Document Object Model (DOM)

In any of these scenarios, set the scroll view’s [delegate](bescrollview/delegate.md) to an object that implements [BEScrollViewDelegate](bescrollviewdelegate.md).

## Topics

### Responding to scroll updates

- [delegate](bescrollview/delegate.md): A delegate that responds to the scroll view’s scroll updates.

## Relationships

### Inherits From

- [UIScrollView](https://developer.apple.com/documentation/uikit/uiscrollview)

## See Also

### Scroll view interaction

- [BEScrollViewScrollUpdate](bescrollviewscrollupdate.md): An object that describes a change in a scroll view’s scroll state.
- [BEScrollViewDelegate](bescrollviewdelegate.md): A protocol for scroll view delegates to handle scroll updates and DOM nesting.
