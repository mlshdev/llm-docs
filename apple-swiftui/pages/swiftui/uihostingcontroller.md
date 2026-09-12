> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uihostingcontroller](https://developer.apple.com/documentation/swiftui/uihostingcontroller)

# UIHostingController

**Framework:** SwiftUI  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+

A UIKit view controller that manages a SwiftUI view hierarchy.

## Declaration

```swift
@MainActor @preconcurrency class UIHostingController<Content> where Content : View
```

<a id="overview"></a>

## Overview

Create a `UIHostingController` object when you want to integrate SwiftUI views into a UIKit view hierarchy. At creation time, specify the SwiftUI view you want to use as the root view for this view controller; you can change that view later using the [rootView](uihostingcontroller/rootview.md) property. Use the hosting controller like you would any other view controller, by presenting it or embedding it as a child view controller in your interface.

## Topics

### Creating a hosting controller object

- [init(rootView:)](uihostingcontroller/init%28rootview_%29.md): Creates a hosting controller object that wraps the specified SwiftUI view.
- [init(coder:rootView:)](uihostingcontroller/init%28coder_rootview_%29.md): Creates a hosting controller object from an archive and the specified SwiftUI view.
- [init(coder:)](uihostingcontroller/init%28coder_%29.md): Creates a hosting controller object from the contents of the specified archive.

### Responding to view-related events

- [loadView()](uihostingcontroller/loadview%28%29.md)
- [viewWillAppear(\_:)](uihostingcontroller/viewwillappear%28__%29.md): Notifies the view controller that its view is about to be added to a view hierarchy.
- [viewDidAppear(\_:)](uihostingcontroller/viewdidappear%28__%29.md): Notifies the view controller that its view has been added to a view hierarchy.
- [viewWillDisappear(\_:)](uihostingcontroller/viewwilldisappear%28__%29.md): Notifies the view controller that its view will be removed from a view hierarchy.
- [viewDidDisappear(\_:)](uihostingcontroller/viewdiddisappear%28__%29.md)
- [willMove(toParent:)](uihostingcontroller/willmove%28toparent_%29.md)
- [didMove(toParent:)](uihostingcontroller/didmove%28toparent_%29.md)
- [viewWillTransition(to:with:)](uihostingcontroller/viewwilltransition%28to_with_%29.md)
- [viewWillLayoutSubviews()](uihostingcontroller/viewwilllayoutsubviews%28%29.md)
- [target(forAction:withSender:)](uihostingcontroller/target%28foraction_withsender_%29.md)
- [rootView](uihostingcontroller/rootview.md): The root view of the SwiftUI view hierarchy managed by this view controller.

### Checking for modality

- [isModalInPresentation](uihostingcontroller/ismodalinpresentation.md)

### Managing the size

- [sizingOptions](uihostingcontroller/sizingoptions.md): The options for how the hosting controller tracks changes to the size of its SwiftUI content.
- [preferredContentSizeDidChange(forChildContentContainer:)](uihostingcontroller/preferredcontentsizedidchange%28forchildcontentcontainer_%29.md)
- [sizeThatFits(in:)](uihostingcontroller/sizethatfits%28in_%29.md): Calculates and returns the most appropriate size for the current view.
- [safeAreaRegions](uihostingcontroller/safearearegions.md): Conforms when `Content` conforms to `View`. The safe area regions that this view controller adds to its view.

### Configuring the status bar

- [preferredStatusBarStyle](uihostingcontroller/preferredstatusbarstyle.md): The preferred status bar style for the view controller.
- [preferredStatusBarUpdateAnimation](uihostingcontroller/preferredstatusbarupdateanimation.md): The animation style to use when hiding or showing the status bar for this view controller.
- [prefersStatusBarHidden](uihostingcontroller/prefersstatusbarhidden.md): A Boolean value that indicates whether the view controller prefers the status bar to be hidden or shown.
- [childForStatusBarStyle](uihostingcontroller/childforstatusbarstyle.md)
- [childForStatusBarHidden](uihostingcontroller/childforstatusbarhidden.md)

### Configuring the home indicator

- [prefersHomeIndicatorAutoHidden](uihostingcontroller/prefershomeindicatorautohidden.md): A Boolean value that indicates whether the view controller prefers the home indicator to be hidden or shown.
- [childForHomeIndicatorAutoHidden](uihostingcontroller/childforhomeindicatorautohidden.md)

### Configuring the interface appearance

- [preferredUserInterfaceStyle](uihostingcontroller/preferreduserinterfacestyle.md): The preferred interface style for this view controller.
- [preferredScreenEdgesDeferringSystemGestures](uihostingcontroller/preferredscreenedgesdeferringsystemgestures.md): Sets the screen edge from which you want your gesture to take precedence over the system gesture.
- [childForScreenEdgesDeferringSystemGestures](uihostingcontroller/childforscreenedgesdeferringsystemgestures.md)

### Accessing the available key commands

- [keyCommands](uihostingcontroller/keycommands.md)

### Managing undo

- [undoManager](uihostingcontroller/undomanager.md)

### Instance Properties

- [childViewControllerForPreferredContainerBackgroundStyle](uihostingcontroller/childviewcontrollerforpreferredcontainerbackgroundstyle.md)
- [preferredContainerBackgroundStyle](uihostingcontroller/preferredcontainerbackgroundstyle.md)

### Instance Methods

- [addChild(\_:)](uihostingcontroller/addchild%28__%29.md)
- [canPerformAction(\_:withSender:)](uihostingcontroller/canperformaction%28__withsender_%29.md)

## Relationships

### Inherits From

- [UIViewController](https://developer.apple.com/documentation/uikit/uiviewcontroller)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSExtensionRequestHandling](https://developer.apple.com/documentation/foundation/nsextensionrequesthandling)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
- [UIActivityItemsConfigurationProviding](https://developer.apple.com/documentation/uikit/uiactivityitemsconfigurationproviding)
- [UIAppearanceContainer](https://developer.apple.com/documentation/uikit/uiappearancecontainer)
- [UIContentContainer](https://developer.apple.com/documentation/uikit/uicontentcontainer)
- [UIFocusEnvironment](https://developer.apple.com/documentation/uikit/uifocusenvironment)
- [UIPasteConfigurationSupporting](https://developer.apple.com/documentation/uikit/uipasteconfigurationsupporting)
- [UIResponderStandardEditActions](https://developer.apple.com/documentation/uikit/uiresponderstandardeditactions)
- [UIStateRestoring](https://developer.apple.com/documentation/uikit/uistaterestoring)
- [UITraitChangeObservable](https://developer.apple.com/documentation/uikit/uitraitchangeobservable-67e94)
- [UITraitEnvironment](https://developer.apple.com/documentation/uikit/uitraitenvironment)
- [UIUserActivityRestoring](https://developer.apple.com/documentation/uikit/uiuseractivityrestoring)

## See Also

### Displaying SwiftUI views in UIKit

- [Using SwiftUI with UIKit](https://developer.apple.com/documentation/uikit/using-swiftui-with-uikit): Learn how to incorporate SwiftUI views into a UIKit app.
- [Unifying your app’s animations](unifying-your-app-s-animations.md): Create a consistent UI animation experience across SwiftUI, UIKit, and AppKit.
- [UIHostingControllerSizingOptions](uihostingcontrollersizingoptions.md): Options for how a hosting controller tracks its content’s size.
- [UIHostingConfiguration](uihostingconfiguration.md): A content configuration suitable for hosting a hierarchy of SwiftUI views.
- [UIHostingSceneDelegate](uihostingscenedelegate.md): Extends `UIKit/UISceneDelegate` to bridge SwiftUI scenes.
