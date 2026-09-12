> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipuicollectionviewcell](https://developer.apple.com/documentation/tipkit/tipuicollectionviewcell)

# TipUICollectionViewCell

**Framework:** TipKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A collection view cell that embeds a tip.

## Declaration

```swift
@MainActor @objc @preconcurrency final class TipUICollectionViewCell
```

<a id="Overview"></a>

## Overview

Use this cell to create a tip you want to display and layout as a [UICollectionViewCell](../uikit/uicollectionviewcell.md). To configure the content and appearance of your cell, use the [configureTip(\_:arrowEdge:actionHandler:)](tipuicollectionviewcell/configuretip%28__arrowedge_actionhandler_%29.md) function and provide a tip along with an optional arrow edge and action handler. Set the background color of your tip view using [backgroundColor](tipuicollectionviewcell/backgroundcolor.md).

Adding or removing TipUICollectionViewCell is done by listening to a tip’s [shouldDisplayUpdates](tip/shoulddisplayupdates.md) or [statusUpdates](tip/statusupdates.md).

```swift
import TipKit
import UIKit

class CatTracksCollectionViewController: UIViewController, UICollectionViewDataSource {
    var collectionView: UICollectionView
    var catTracksFeatureTip = CatTracksFeatureTip()

    override func viewDidLoad() {
        super.viewDidLoad()
        collectionView.register(TipUICollectionViewCell.self, forCellWithReuseIdentifier: "TipUICollectionViewCell")
    }

    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)

        Task { @MainActor in
            for await shouldDisplay in catTracksFeatureTip.shouldDisplayUpdates {
                collectionView.reloadData()
            }
        }
    }
    
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        if section == 0 {
            return catTracksFeatureTip.shouldDisplay ? 1 : 0
        }
        return dataStore.numberOfItemsInSection(section - 1)
    }

    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        if let indexPath.section == 0, let catTracksTipCell = collectionView.dequeueReusableCell(withReuseIdentifier: "TipUICollectionViewCell", for: indexPath) as? TipUICollectionViewCell {
            catTracksTipCell.configureTip(catTracksFeatureTip)
            return catTracksTipCell
        }
    }
}
```

## Topics

### Initializers

- [init(coder:)](tipuicollectionviewcell/init%28coder_%29.md)
- [init(frame:)](tipuicollectionviewcell/init%28frame_%29.md)

### Instance Properties

- [backgroundColor](tipuicollectionviewcell/backgroundcolor.md): The background color to use for the tip view.
- [backgroundStyle](tipuicollectionviewcell/backgroundstyle.md): The background style to use for the tip view.
- [cornerRadius](tipuicollectionviewcell/cornerradius.md): Corner radius for the tip view.
- [imageSize](tipuicollectionviewcell/imagesize.md): Size of the image displayed in the tip view.
- [imageStyle](tipuicollectionviewcell/imagestyle.md): Foreground style for the tip’s image.
- [viewStyle](tipuicollectionviewcell/viewstyle.md): The given style for TipView within the view hierarchy

### Instance Methods

- [configureTip(\_:arrowEdge:actionHandler:)](tipuicollectionviewcell/configuretip%28__arrowedge_actionhandler_%29.md): Configures the cell to display an embedded tip view.

## Relationships

### Inherits From

- [UICollectionViewCell](../uikit/uicollectionviewcell.md)

### Conforms To

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

### UIKit Views

- [TipUIView](tipuiview.md): A user interface element that represents a tip in UIKit applications.
- [TipUIPopoverViewController](tipuipopoverviewcontroller.md): A view controller that displays a popover tip in UIKit applications.
- [TipUICollectionReusableView](tipuicollectionreusableview.md): A UICollectionReusableView subclass that represents a tip.
