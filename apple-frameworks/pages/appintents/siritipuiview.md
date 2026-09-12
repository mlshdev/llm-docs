> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/siritipuiview](https://developer.apple.com/documentation/appintents/siritipuiview)

# SiriTipUIView

**Framework:** AppIntents  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS

A view that displays the phrase a person uses to invoke an App Shortcut.

## Declaration

```swift
@MainActor @objc @preconcurrency final class SiriTipUIView
```

<a id="overview"></a>

## Overview

You must call `UISiriTip/setIntent(intent:)` before displaying the view.

## Topics

### Creating a tip view

- [init(style:)](siritipuiview/init%28style_%29.md): A view that displays the phrase for an App Shortcut.

### Getting the view style

- [style](siritipuiview/style.md): The style to use for the view.
- [SiriTipViewStyle](siritipviewstyle.md): The styles to apply to the tip views you use to display spoken phrases.

### Getting the view’s configuration

- [allowsDismissal](siritipuiview/allowsdismissal.md): Indicates if the tip view should display a dismissal button
- [isPresented](siritipuiview/ispresented.md): Determines if the view should be presented to the user.

### Instance Properties

- [intrinsicContentSize](siritipuiview/intrinsiccontentsize.md)

### Instance Methods

- [didMoveToWindow()](siritipuiview/didmovetowindow%28%29.md)
- [setIntent(intent:)](siritipuiview/setintent%28intent_%29.md): Sets an `AppIntent` for this view. This must be called before presenting the view.
- [sizeThatFits(\_:)](siritipuiview/sizethatfits%28__%29.md)

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Conforms To

- [AppEntityAnnotatable](appentityannotatable.md)
- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CMBodyIdentifiable](../coremotion/cmbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
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

## See Also

### Tip views

- [SiriTipView](siritipview.md): A SwiftUI view that displays the phrase someone uses to invoke an App Shortcut.
- [SiriTipViewStyle](siritipviewstyle.md): The styles to apply to the tip views you use to display spoken phrases.
