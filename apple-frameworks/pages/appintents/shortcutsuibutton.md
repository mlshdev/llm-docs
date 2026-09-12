> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/shortcutsuibutton](https://developer.apple.com/documentation/appintents/shortcutsuibutton)

# ShortcutsUIButton

**Framework:** AppIntents  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS

A button that opens the current app’s page in the Shortcuts app.

## Declaration

```swift
@MainActor @objc @preconcurrency final class ShortcutsUIButton
```

<a id="overview"></a>

## Overview

You can add additional targets to observe when the button is tapped.

## Topics

### Creating the button

- [init(style:)](shortcutsuibutton/init%28style_%29.md): Creates a button with the specified style.

### Getting the button style

- [style](shortcutsuibutton/style.md): The style to use for the button.

### Configuring additional actions

- [addTarget(\_:action:for:)](shortcutsuibutton/addtarget%28__action_for_%29.md)

### Resizing the button

- [sizeThatFits(\_:)](shortcutsuibutton/sizethatfits%28__%29.md)

## Relationships

### Inherits From

- [UIButton](../uikit/uibutton.md)

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
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [UIAccessibilityContentSizeCategoryImageAdjusting](../uikit/uiaccessibilitycontentsizecategoryimageadjusting.md)
- [UIAccessibilityIdentification](../uikit/uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearance](../uikit/uiappearance.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContextMenuInteractionDelegate](../uikit/uicontextmenuinteractiondelegate.md)
- [UICoordinateSpace](../uikit/uicoordinatespace.md)
- [UIDynamicItem](../uikit/uidynamicitem.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIFocusItem](../uikit/uifocusitem.md)
- [UIFocusItemContainer](../uikit/uifocusitemcontainer.md)
- [UILargeContentViewerItem](../uikit/uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UISpringLoadedInteractionSupporting](../uikit/uispringloadedinteractionsupporting.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Buttons

- [ShortcutsLink](shortcutslink.md): A button that brings users to the current app’s App Shortcuts page in the Shortcuts app.
- [ShortcutsLinkStyle](shortcutslinkstyle.md): The styles to apply to buttons you use to open your app’s page in the Shortcuts app.
