> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/papermarkupviewcontroller](https://developer.apple.com/documentation/paperkit/papermarkupviewcontroller)

# PaperMarkupViewController

**Framework:** PaperKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A view controller for interactively creating and showing markup.

## Declaration

```swift
@MainActor @objc @preconcurrency class PaperMarkupViewController
```

## Mentioned In

- [Integrating PaperKit into your app](getting-started-with-paperkit.md)

<a id="overview"></a>

## Overview

Properties are observable, so to save markup changes to disk, iterate over the changes to `markup`.

```
let markups = Observations.untilFinished { [weak paperViewController] in
    if let markup = paperViewController?.markup {
        return .next(markup)
    }
    return .finish
}
Task { [weak self] in
    for await newMarkup in markups {
        self?.save(model)
    }
}
```

## Topics

### Creating a view controller

- [init(markup:supportedFeatureSet:)](papermarkupviewcontroller/init%28markup_supportedfeatureset_%29.md): Creates a new markup view controller with the provided data model.

### Displaying markup

- [markup](papermarkupviewcontroller/markup.md): The paper data that this view controller displays.
- [contentView](papermarkupviewcontroller/contentview-4aeda.md): The content that markup appears on top of.
- [contentView](papermarkupviewcontroller/contentview-4hbkf.md): The content that markup appears on top of.
- [supportedFeatureSet](papermarkupviewcontroller/supportedfeatureset.md): The supported PaperKit features on this canvas.

### Editing markup

- [isEditable](papermarkupviewcontroller/iseditable.md): A Boolean value that indicates whether a person can edit the canvas contents.
- [drawingTool](papermarkupviewcontroller/drawingtool.md): The tool for drawing on the canvas.
- [isRulerActive](papermarkupviewcontroller/isruleractive.md): A Boolean value that indicates whether a ruler view is visible on the canvas.

### Controlling touch input

- [directTouchMode](papermarkupviewcontroller/directtouchmode.md): The interaction mode for direct touches on the canvas.
- [directTouchAutomaticallyDraws](papermarkupviewcontroller/directtouchautomaticallydraws.md): A Boolean value that indicates whether direct touches automatically draw based on system state.
- [indirectPointerTouchMode](papermarkupviewcontroller/indirectpointertouchmode.md): The interaction mode for indirect pointer touches on the canvas.
- [PaperMarkupViewController.TouchMode](papermarkupviewcontroller/touchmode.md): The canvas behavior for touches.

### Selecting elements

- [selection](papermarkupviewcontroller/selection.md): The current selected elements on the canvas.
- [selectedMarkup](papermarkupviewcontroller/selectedmarkup.md): The selected contents in the UI.
- [suggestedFrameForInserting(contentInFrame:)](papermarkupviewcontroller/suggestedframeforinserting%28contentinframe_%29.md): Returns the suggested frame for inserting shapes and other content.

### Managing adornments

- [adornments](papermarkupviewcontroller/adornments.md): An array of visual adornments that appear on the markup canvas.
- [adornmentFrame(for:)](papermarkupviewcontroller/adornmentframe%28for_%29.md): Returns the current frame of the specified adornment.

### Scrolling and zooming

- [scrollConfiguration](papermarkupviewcontroller/scrollconfiguration-swift.property.md): The configuration object that provides access to scroll view functionality.
- [PaperMarkupViewController.ScrollConfiguration](papermarkupviewcontroller/scrollconfiguration-swift.class.md): A cross-platform type that provides access to scroll view functionality.
- [contentVisibleFrame](papermarkupviewcontroller/contentvisibleframe.md): The visible area of content in the scroll view.
- [setContentVisibleFrame(\_:animated:)](papermarkupviewcontroller/setcontentvisibleframe%28__animated_%29.md): Zooms to a specific area of the content so that it’s visible in the scroll view.
- [zoomRange](papermarkupviewcontroller/zoomrange.md): A floating-point range that specifies the minimum and maximum scale factor that can apply to the canvas’ content.

### Responding to changes

- [delegate](papermarkupviewcontroller/delegate-swift.property.md): The delegate for responding to a person’s actions.
- [PaperMarkupViewController.Delegate](papermarkupviewcontroller/delegate-swift.protocol.md): The interface for responding to interactions in a markup view controller.
- [undoManager](papermarkupviewcontroller/undomanager.md)

### Managing first responder status

- [acceptsFirstResponder](papermarkupviewcontroller/acceptsfirstresponder.md)
- [canBecomeFirstResponder](papermarkupviewcontroller/canbecomefirstresponder.md)

### Managing view lifecycle

- [loadView()](papermarkupviewcontroller/loadview%28%29.md)
- [viewDidLoad()](papermarkupviewcontroller/viewdidload%28%29.md)
- [viewDidAppear()](papermarkupviewcontroller/viewdidappear%28%29.md)
- [viewDidLayout()](papermarkupviewcontroller/viewdidlayout%28%29.md)

### Deprecated

- [showsVerticalScrollIndicator](papermarkupviewcontroller/showsverticalscrollindicator.md): Deprecated. A Boolean value that controls whether the vertical scroll indicator is visible.
- [showsHorizontalScrollIndicator](papermarkupviewcontroller/showshorizontalscrollindicator.md): Deprecated. A Boolean value that controls whether the horizontal scroll indicator is visible.

## Relationships

### Inherits From

- [NSViewController](https://developer.apple.com/documentation/appkit/nsviewcontroller)
- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MarkupEditViewController.Delegate](markupeditviewcontroller/delegate-swift.protocol.md)
- [MarkupToolbarViewController.Delegate](markuptoolbarviewcontroller/delegate-swift.protocol.md)
- [NSCoding](../foundation/nscoding.md)
- [NSEditor](https://developer.apple.com/documentation/appkit/nseditor)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSeguePerforming](https://developer.apple.com/documentation/appkit/nssegueperforming)
- [NSStandardKeyBindingResponding](https://developer.apple.com/documentation/appkit/nsstandardkeybindingresponding)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [NSUserActivityRestoring](https://developer.apple.com/documentation/appkit/nsuseractivityrestoring)
- [NSUserInterfaceItemIdentification](https://developer.apple.com/documentation/appkit/nsuserinterfaceitemidentification)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [PKToolPickerObserver](../pencilkit/pktoolpickerobserver.md)
- [UIActivityItemsConfigurationProviding](../uikit/uiactivityitemsconfigurationproviding.md)
- [UIAppearanceContainer](../uikit/uiappearancecontainer.md)
- [UIContentContainer](../uikit/uicontentcontainer.md)
- [UIFocusEnvironment](../uikit/uifocusenvironment.md)
- [UIPasteConfigurationSupporting](../uikit/uipasteconfigurationsupporting.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UIStateRestoring](../uikit/uistaterestoring.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### View controllers

- [MarkupEditViewController](markupeditviewcontroller.md): A view controller that manages the interface for inserting content into a canvas.
- [MarkupToolbarViewController](markuptoolbarviewcontroller.md)
