> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvuikit/tvlockupheaderfooterview](https://developer.apple.com/documentation/tvuikit/tvlockupheaderfooterview)

# TVLockupHeaderFooterView (Swift)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 12.0+

A view that contains header and footer information.

## Declaration

```swift
class TVLockupHeaderFooterView
```

<a id="overview"></a>

## Overview

You can add header and footer views containing titles and subtitles to the lockup view. Headers and footers are always displayed when the lockup view is in focus.

## Topics

### Adding Titles

- [titleLabel](tvlockupheaderfooterview/titlelabel.md): The title for a header or footer.
- [subtitleLabel](tvlockupheaderfooterview/subtitlelabel.md): The subtitle for a header or footer.

### Configuring Focus Behavior

- [showsOnlyWhenAncestorFocused](tvlockupheaderfooterview/showsonlywhenancestorfocused.md): A Boolean value indicating whether titles and subtitles are displayed when a lockup view isn’t in focus.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

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
- [TVLockupViewComponent](tvlockupviewcomponent.md)
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

### Lockup views

- [TVLockupView](tvlockupview.md): A focusable view that presents main content, like a movie poster, and an optional header and footer.
- [TVLockupViewComponent](tvlockupviewcomponent.md): The protocol for responding to lockup view state changes.
- [TVCardView](tvcardview.md): A view that responds to focus interaction with a motion effect it applies to all of its subviews.
- [TVPosterView](tvposterview.md): An optimized view for displaying an image, a header, and a footer.
- [TVCaptionButtonView](tvcaptionbuttonview.md): A button-like view that responds to user interactions.
- [TVMonogramView](tvmonogramview.md): Deprecated. A specialized lockup view that contains a circular image of a person or the person’s initials, along with a footer view.

# TVLockupHeaderFooterView (Objective-C)

**Framework:** TVUIKit  
**Kind:** Class  
**Availability:** tvOS 12.0+

A view that contains header and footer information.

## Declaration

```objectivec
@interface TVLockupHeaderFooterView : UIView
```

<a id="overview"></a>

## Overview

You can add header and footer views containing titles and subtitles to the lockup view. Headers and footers are always displayed when the lockup view is in focus.

## Topics

### Adding Titles

- [titleLabel](tvlockupheaderfooterview/titlelabel.md): The title for a header or footer.
- [subtitleLabel](tvlockupheaderfooterview/subtitlelabel.md): The subtitle for a header or footer.

### Configuring Focus Behavior

- [showsOnlyWhenAncestorFocused](tvlockupheaderfooterview/showsonlywhenancestorfocused.md): A Boolean value indicating whether titles and subtitles are displayed when a lockup view isn’t in focus.

## Relationships

### Inherits From

- [UIView](../uikit/uiview.md)

### Conforms To

- [TVLockupViewComponent](tvlockupviewcomponent.md)

## See Also

### Lockup views

- [TVLockupView](tvlockupview.md): A focusable view that presents main content, like a movie poster, and an optional header and footer.
- [TVLockupViewComponent](tvlockupviewcomponent.md): The protocol for responding to lockup view state changes.
- [TVCardView](tvcardview.md): A view that responds to focus interaction with a motion effect it applies to all of its subviews.
- [TVPosterView](tvposterview.md): An optimized view for displaying an image, a header, and a footer.
- [TVCaptionButtonView](tvcaptionbuttonview.md): A button-like view that responds to user interactions.
- [TVMonogramView](tvmonogramview.md): Deprecated. A specialized lockup view that contains a circular image of a person or the person’s initials, along with a footer view.
