> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicitem](https://developer.apple.com/documentation/uikit/uidynamicitem)

# UIDynamicItem (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that can make a custom object eligible to participate in UIKit Dynamics.

## Declaration

```swift
@MainActor protocol UIDynamicItem : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Starting in iOS 7, the [UIView](uiview.md) and [UICollectionViewLayoutAttributes](uicollectionviewlayoutattributes.md) classes implement this protocol.

## Topics

### Participating in dynamic animation

- [bounds](uidynamicitem/bounds.md): Called when a dynamic animator needs the bounds of the dynamic item.
- [center](uidynamicitem/center.md): The center point of the dynamic item.
- [transform](uidynamicitem/transform.md): The rotation of the dynamic item.
- [collisionBoundsType](uidynamicitem/collisionboundstype.md): The type of collision bounds associated with the item.
- [collisionBoundingPath](uidynamicitem/collisionboundingpath.md): The path-based shape to use for the collision bounds.

### Constants

- [UIDynamicItemCollisionBoundsType](uidynamicitemcollisionboundstype.md): Constants that indicate the shape of the item’s collision bounds.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [NSCollectionLayoutVisibleItem](nscollectionlayoutvisibleitem.md)

### Conforming Types

- [UIActionSheet](uiactionsheet.md)
- [UIActivityIndicatorView](uiactivityindicatorview.md)
- [UIAlertView](uialertview.md)
- [UIBackgroundExtensionView](uibackgroundextensionview.md)
- [UIButton](uibutton.md)
- [UICalendarView](uicalendarview.md)
- [UICollectionReusableView](uicollectionreusableview.md)
- [UICollectionView](uicollectionview.md)
- [UICollectionViewCell](uicollectionviewcell.md)
- [UICollectionViewLayoutAttributes](uicollectionviewlayoutattributes.md)
- [UICollectionViewListCell](uicollectionviewlistcell.md)
- [UIColorWell](uicolorwell.md)
- [UIContentUnavailableView](uicontentunavailableview.md)
- [UIControl](uicontrol.md)
- [UIDatePicker](uidatepicker.md)
- [UIDynamicItemGroup](uidynamicitemgroup.md)
- [UIEventAttributionView](uieventattributionview.md)
- [UIImageView](uiimageview.md)
- [UIInputView](uiinputview.md)
- [UILabel](uilabel.md)
- [UIListContentView](uilistcontentview.md)
- [UINavigationBar](uinavigationbar.md)
- [UIPageControl](uipagecontrol.md)
- [UIPasteControl](uipastecontrol.md)
- [UIPickerView](uipickerview.md)
- [UIPopoverBackgroundView](uipopoverbackgroundview.md)
- [UIProgressView](uiprogressview.md)
- [UIRefreshControl](uirefreshcontrol.md)
- [UIScrollView](uiscrollview.md)
- [UISearchBar](uisearchbar.md)
- [UISearchTextField](uisearchtextfield.md)
- [UISegmentedControl](uisegmentedcontrol.md)
- [UISlider](uislider.md)
- [UIStackView](uistackview.md)
- [UIStandardTextCursorView](uistandardtextcursorview.md)
- [UIStepper](uistepper.md)
- [UISwitch](uiswitch.md)
- [UITabBar](uitabbar.md)
- [UITableView](uitableview.md)
- [UITableViewCell](uitableviewcell.md)
- [UITableViewHeaderFooterView](uitableviewheaderfooterview.md)
- [UITextField](uitextfield.md)
- [UITextView](uitextview.md)
- [UIToolbar](uitoolbar.md)
- [UIView](uiview.md)
- [UIVisualEffectView](uivisualeffectview.md)
- [UIWebView](uiwebview.md)
- [UIWindow](uiwindow.md)

## See Also

### Dynamic items

- [UIDynamicItemBehavior](uidynamicitembehavior.md): A base dynamic animation configuration for one or more dynamic items.
- [UIDynamicItemGroup](uidynamicitemgroup.md): A dynamic item that comprises multiple other dynamic items.

# UIDynamicItem (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that can make a custom object eligible to participate in UIKit Dynamics.

## Declaration

```objectivec
@protocol UIDynamicItem <NSObject>
```

<a id="overview"></a>

## Overview

Starting in iOS 7, the [UIView](uiview.md) and [UICollectionViewLayoutAttributes](uicollectionviewlayoutattributes.md) classes implement this protocol.

## Topics

### Participating in dynamic animation

- [bounds](uidynamicitem/bounds.md): Called when a dynamic animator needs the bounds of the dynamic item.
- [center](uidynamicitem/center.md): The center point of the dynamic item.
- [transform](uidynamicitem/transform.md): The rotation of the dynamic item.
- [collisionBoundsType](uidynamicitem/collisionboundstype.md): The type of collision bounds associated with the item.
- [collisionBoundingPath](uidynamicitem/collisionboundingpath.md): The path-based shape to use for the collision bounds.

### Constants

- [UIDynamicItemCollisionBoundsType](uidynamicitemcollisionboundstype.md): Constants that indicate the shape of the item’s collision bounds.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [NSCollectionLayoutVisibleItem](nscollectionlayoutvisibleitem.md)

### Conforming Types

- [UICollectionViewLayoutAttributes](uicollectionviewlayoutattributes.md)
- [UIDynamicItemGroup](uidynamicitemgroup.md)
- [UIView](uiview.md)

## See Also

### Dynamic items

- [UIDynamicItemBehavior](uidynamicitembehavior.md): A base dynamic animation configuration for one or more dynamic items.
- [UIDynamicItemGroup](uidynamicitemgroup.md): A dynamic item that comprises multiple other dynamic items.
