> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipuipopoverviewcontroller](https://developer.apple.com/documentation/tipkit/tipuipopoverviewcontroller)

# TipUIPopoverViewController

**Framework:** TipKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A view controller that displays a popover tip in UIKit applications.

## Declaration

```swift
@MainActor @objc @preconcurrency final class TipUIPopoverViewController
```

<a id="Overview"></a>

## Overview

Use this view controller to present a tip you want to display using [UIPopoverPresentationController](../uikit/uipopoverpresentationcontroller.md).

Presenting or dismissing TipUIPopoverViewController is done by listening to a tip’s [shouldDisplayUpdates](tip/shoulddisplayupdates.md) or [statusUpdates](tip/statusupdates.md).

```swift
import TipKit
import UIKit

struct CatTracksFeatureTip: Tip {
    var title: Text {
        Text("Sample tip title")
    }

    var message: Text? {
        Text("Sample tip message")
    }

    var image: Image? {
        Image(systemName: "globe")
    }
}

class CatTracksViewController: UIViewController {
    @IBOutlet weak var catTracksFeatureButton: UIButton!

    private var catTracksFeatureTip = CatTracksFeatureTip()
    private var tipObservationTask: Task<Void, Never>?
    private weak var tipPopoverController: TipUIPopoverViewController?

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)

        tipObservationTask = tipObservationTask ?? Task { @MainActor in
            for await shouldDisplay in catTracksFeatureTip.shouldDisplayUpdates {
                if shouldDisplay {
                    let popoverController = TipUIPopoverViewController(catTracksFeatureTip, sourceItem: catTracksFeatureButton)
                    present(popoverController, animated: animated)
                    tipPopoverController = popoverController
                }
                else {
                    if presentedViewController is TipUIPopoverViewController {
                        dismiss(animated: animated)
                        tipPopoverController = nil
                    }
                }
            }
        }
    }

    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)

        tipObservationTask?.cancel()
        tipObservationTask = nil
    }
}
```

## Topics

### Initializers

- [init(\_:sourceItem:actionHandler:)](tipuipopoverviewcontroller/init%28__sourceitem_actionhandler_%29.md): Initializes a popover controller with the specified tip.
- [init(coder:)](tipuipopoverviewcontroller/init%28coder_%29.md)
- [init(nibName:bundle:)](tipuipopoverviewcontroller/init%28nibname_bundle_%29.md)

### Instance Properties

- [backgroundColor](tipuipopoverviewcontroller/backgroundcolor.md): The background color to use for the tip view.
- [backgroundStyle](tipuipopoverviewcontroller/backgroundstyle.md): The background style to use for the tip view.
- [imageSize](tipuipopoverviewcontroller/imagesize.md): Size of the image displayed in the tip view.
- [imageStyle](tipuipopoverviewcontroller/imagestyle.md): Foreground style for the tip’s image.
- [presentationDelegate](tipuipopoverviewcontroller/presentationdelegate.md): The popover presentation delegate, which lets you customize the behavior of a popover-based presentation.
- [sourceItem](tipuipopoverviewcontroller/sourceitem.md): The item on which to anchor the tip popover.
- [viewStyle](tipuipopoverviewcontroller/viewstyle.md): The given style for TipView within the view hierarchy.

## Relationships

### Inherits From

- [UIViewController](../uikit/uiviewcontroller.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSExtensionRequestHandling](../foundation/nsextensionrequesthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSTouchBarProvider](https://developer.apple.com/documentation/appkit/nstouchbarprovider)
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

### UIKit Views

- [TipUIView](tipuiview.md): A user interface element that represents a tip in UIKit applications.
- [TipUICollectionViewCell](tipuicollectionviewcell.md): A collection view cell that embeds a tip.
- [TipUICollectionReusableView](tipuicollectionreusableview.md): A UICollectionReusableView subclass that represents a tip.
