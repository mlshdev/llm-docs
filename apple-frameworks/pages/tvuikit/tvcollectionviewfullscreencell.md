> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvcollectionviewfullscreencell](https://developer.apple.com/documentation/tvuikit/tvcollectionviewfullscreencell)

# TVCollectionViewFullScreenCell (Swift)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 13.0+

A full-screen cell to use in full-screen display format.

## Declaration

```swift
class TVCollectionViewFullScreenCell
```

<a id="overview"></a>

## Overview

Use `TVCollectionViewFullScreenCell` to populate the full-screen collection view with content.

## Topics

### Modifying Cell Appearance

- [contentBleed](tvcollectionviewfullscreencell/contentbleed.md): The amount of content that overlaps into the masked portions of the cell.
- [cornerRadius](tvcollectionviewfullscreencell/cornerradius.md): The radius to use when drawing rounded corners for the cell.
- [maskAmount](tvcollectionviewfullscreencell/maskamount.md): The factor that determines the amount of masking applied on the cell.

### Accessing Cell Views

- [maskedContentView](tvcollectionviewfullscreencell/maskedcontentview.md): The content view in focus.
- [maskedBackgroundView](tvcollectionviewfullscreencell/maskedbackgroundview.md): The background view that performs the parallax effect.

### Accessing Cell Position

- [normalizedPosition](tvcollectionviewfullscreencell/normalizedposition.md): The value that determines the current cell’s relative position on the screen.

### Managing Cell Position

- [normalizedPositionDidChange()](tvcollectionviewfullscreencell/normalizedpositiondidchange%28%29.md): Notifies the cell when its normalized position changes.
- [normalizedPositionWillChange(\_:)](tvcollectionviewfullscreencell/normalizedpositionwillchange%28__%29.md): Notifies the cell when its normalized position is about to change.

### Managing Cell Mask

- [maskAmountDidChange()](tvcollectionviewfullscreencell/maskamountdidchange%28%29.md): Notifies the cell when its mask amount changes.
- [maskAmountWillChange(\_:)](tvcollectionviewfullscreencell/maskamountwillchange%28__%29.md): Notifies the cell when its mask amount is about to change.

### Managing the Parallax Effect

- [parallaxOffset](tvcollectionviewfullscreencell/parallaxoffset.md): The number of pixels by which to shift the background from the center when moving focus.

## Relationships

### Inherits From

- [UICollectionViewCell](../uikit/uicollectionviewcell.md)

### Conforms To

- [CALayerDelegate](../quartzcore/calayerdelegate.md)
- [CLBodyIdentifiable](../corelocation/clbodyidentifiable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
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
- [UIPopoverPresentationControllerSourceItem](../uikit/uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](../uikit/uiresponderstandardeditactions.md)
- [UITraitChangeObservable](../uikit/uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](../uikit/uitraitenvironment.md)
- [UIUserActivityRestoring](../uikit/uiuseractivityrestoring.md)

## See Also

### Collections of content

- [Creating immersive experiences using a full-screen layout](creating-immersive-experiences-using-a-full-screen-layout.md): Display content with a collection view that maximizes the tvOS experience.
- [TVCollectionViewFullScreenLayout](tvcollectionviewfullscreenlayout.md): A collection view layout that organizes items into a browsable, full-screen display format.
- [TVCollectionViewDelegateFullScreenLayout](tvcollectionviewdelegatefullscreenlayout.md): Methods that send notifications of events during cell transitions.
- [TVCollectionViewFullScreenLayoutAttributes](tvcollectionviewfullscreenlayoutattributes.md): Attributes to manage the appearance of the collection view’s layout.

# TVCollectionViewFullScreenCell (Objective-C)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 13.0+

A full-screen cell to use in full-screen display format.

## Declaration

```objectivec
@interface TVCollectionViewFullScreenCell : UICollectionViewCell
```

<a id="overview"></a>

## Overview

Use `TVCollectionViewFullScreenCell` to populate the full-screen collection view with content.

## Topics

### Modifying Cell Appearance

- [contentBleed](tvcollectionviewfullscreencell/contentbleed.md): The amount of content that overlaps into the masked portions of the cell.
- [cornerRadius](tvcollectionviewfullscreencell/cornerradius.md): The radius to use when drawing rounded corners for the cell.
- [maskAmount](tvcollectionviewfullscreencell/maskamount.md): The factor that determines the amount of masking applied on the cell.

### Accessing Cell Views

- [maskedContentView](tvcollectionviewfullscreencell/maskedcontentview.md): The content view in focus.
- [maskedBackgroundView](tvcollectionviewfullscreencell/maskedbackgroundview.md): The background view that performs the parallax effect.

### Accessing Cell Position

- [normalizedPosition](tvcollectionviewfullscreencell/normalizedposition.md): The value that determines the current cell’s relative position on the screen.

### Managing Cell Position

- [normalizedPositionDidChange](tvcollectionviewfullscreencell/normalizedpositiondidchange%28%29.md): Notifies the cell when its normalized position changes.
- [normalizedPositionWillChange:](tvcollectionviewfullscreencell/normalizedpositionwillchange%28__%29.md): Notifies the cell when its normalized position is about to change.

### Managing Cell Mask

- [maskAmountDidChange](tvcollectionviewfullscreencell/maskamountdidchange%28%29.md): Notifies the cell when its mask amount changes.
- [maskAmountWillChange:](tvcollectionviewfullscreencell/maskamountwillchange%28__%29.md): Notifies the cell when its mask amount is about to change.

### Managing the Parallax Effect

- [parallaxOffset](tvcollectionviewfullscreencell/parallaxoffset.md): The number of pixels by which to shift the background from the center when moving focus.

## Relationships

### Inherits From

- [UICollectionViewCell](../uikit/uicollectionviewcell.md)

## See Also

### Collections of content

- [TVCollectionViewFullScreenLayout](tvcollectionviewfullscreenlayout.md): A collection view layout that organizes items into a browsable, full-screen display format.
- [TVCollectionViewDelegateFullScreenLayout](tvcollectionviewdelegatefullscreenlayout.md): Methods that send notifications of events during cell transitions.
- [TVCollectionViewFullScreenLayoutAttributes](tvcollectionviewfullscreenlayoutattributes.md): Attributes to manage the appearance of the collection view’s layout.
