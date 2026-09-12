> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicoordinatespace](https://developer.apple.com/documentation/uikit/uicoordinatespace)

# UICoordinateSpace (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · tvOS · visionOS · watchOS

A set of methods for converting between different frames of reference on a screen.

## Declaration

```swift
@MainActor protocol UICoordinateSpace : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The [UIView](uiview.md) class adopts this protocol so that you can convert easily between most coordinate spaces in your app. The [UIScreen](uiscreen.md) class includes the [coordinateSpace](uiscreen/coordinatespace.md) and [fixedCoordinateSpace](uiscreen/fixedcoordinatespace.md) properties, which give you access to the screen’s coordinate spaces. You can adopt this protocol in your own classes to convert between your custom coordinate spaces and the coordinate spaces of your app’s views and screens.

In iOS 8 and later, window and screen coordinate spaces aren’t fixed to a specific device orientation. Instead, window and screen coordinates change to match the app’s interface orientation, which typically (but not always) matches the current device orientation. (View controllers still determine which interface orientations the app supports.) Rotating the window and screen simplifies the interactions between views, windows, and the screen. In cases where you still need a fixed frame of reference — for example, because you need to store the location of a touch event or onscreen item persistently — you can use the methods of this protocol to convert coordinate values to the fixed coordinate space provided by the [UIScreen](uiscreen.md) object.

To convert a point from a view’s current coordinate space to the screen’s fixed coordinate space, use code similar to the following:

```objc
[myView convertPoint:point toCoordinateSpace:myView.window.screen.fixedCoordinateSpace];
```

When implementing the methods of this protocol, you must convert coordinate values to or from your local coordinate space. When performing such conversions, use the screen coordinate space as an intermediate coordinate space, converting to screen coordinates before converting to the target coordinate space. For example, when converting from your local coordinate space to the coordinate space of another view, convert your local coordinates to the screen coordinate space first and then convert those screen coordinates to the coordinate space of the view.

## Topics

### Getting the bounds rectangle

- [bounds](uicoordinatespace/bounds.md): The bounds rectangle describing the item’s location and size in its own coordinate system.

### Converting between coordinate spaces

- [convert(\_:to:)](uicoordinatespace/convert%28__to_%29-2ub7a.md): Converts a point from the coordinate space of the current object to the specified coordinate space.
- [convert(\_:from:)](uicoordinatespace/convert%28__from_%29-3w27q.md): Converts a point from the specified coordinate space to the coordinate space of the current object.
- [convert(\_:to:)](uicoordinatespace/convert%28__to_%29-3imkt.md): Converts a rectangle from the coordinate space of the current object to the specified coordinate space.
- [convert(\_:from:)](uicoordinatespace/convert%28__from_%29-9921a.md): Converts a rectangle from the specified coordinate space to the coordinate space of the current object.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UITextCursorView](uitextcursorview.md)
- [UITextSelectionHandleView](uitextselectionhandleview.md)
- [UITextSelectionHighlightView](uitextselectionhighlightview.md)

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
- [UICollectionViewListCell](uicollectionviewlistcell.md)
- [UIColorWell](uicolorwell.md)
- [UIContentUnavailableView](uicontentunavailableview.md)
- [UIControl](uicontrol.md)
- [UIDatePicker](uidatepicker.md)
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

### Windows

- [UIWindow](uiwindow.md): The backdrop for your app’s user interface and the object that dispatches events to your views.

# UICoordinateSpace (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · tvOS · visionOS · watchOS

A set of methods for converting between different frames of reference on a screen.

## Declaration

```objectivec
@protocol UICoordinateSpace <NSObject>
```

<a id="overview"></a>

## Overview

The [UIView](uiview.md) class adopts this protocol so that you can convert easily between most coordinate spaces in your app. The [UIScreen](uiscreen.md) class includes the [coordinateSpace](uiscreen/coordinatespace.md) and [fixedCoordinateSpace](uiscreen/fixedcoordinatespace.md) properties, which give you access to the screen’s coordinate spaces. You can adopt this protocol in your own classes to convert between your custom coordinate spaces and the coordinate spaces of your app’s views and screens.

In iOS 8 and later, window and screen coordinate spaces aren’t fixed to a specific device orientation. Instead, window and screen coordinates change to match the app’s interface orientation, which typically (but not always) matches the current device orientation. (View controllers still determine which interface orientations the app supports.) Rotating the window and screen simplifies the interactions between views, windows, and the screen. In cases where you still need a fixed frame of reference — for example, because you need to store the location of a touch event or onscreen item persistently — you can use the methods of this protocol to convert coordinate values to the fixed coordinate space provided by the [UIScreen](uiscreen.md) object.

To convert a point from a view’s current coordinate space to the screen’s fixed coordinate space, use code similar to the following:

```objc
[myView convertPoint:point toCoordinateSpace:myView.window.screen.fixedCoordinateSpace];
```

When implementing the methods of this protocol, you must convert coordinate values to or from your local coordinate space. When performing such conversions, use the screen coordinate space as an intermediate coordinate space, converting to screen coordinates before converting to the target coordinate space. For example, when converting from your local coordinate space to the coordinate space of another view, convert your local coordinates to the screen coordinate space first and then convert those screen coordinates to the coordinate space of the view.

## Topics

### Getting the bounds rectangle

- [bounds](uicoordinatespace/bounds.md): The bounds rectangle describing the item’s location and size in its own coordinate system.

### Converting between coordinate spaces

- [convertPoint:toCoordinateSpace:](uicoordinatespace/convert%28__to_%29-2ub7a.md): Converts a point from the coordinate space of the current object to the specified coordinate space.
- [convertPoint:fromCoordinateSpace:](uicoordinatespace/convert%28__from_%29-3w27q.md): Converts a point from the specified coordinate space to the coordinate space of the current object.
- [convertRect:toCoordinateSpace:](uicoordinatespace/convert%28__to_%29-3imkt.md): Converts a rectangle from the coordinate space of the current object to the specified coordinate space.
- [convertRect:fromCoordinateSpace:](uicoordinatespace/convert%28__from_%29-9921a.md): Converts a rectangle from the specified coordinate space to the coordinate space of the current object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UITextCursorView](uitextcursorview.md)
- [UITextSelectionHandleView](uitextselectionhandleview.md)
- [UITextSelectionHighlightView](uitextselectionhighlightview.md)

### Conforming Types

- [UIView](uiview.md)

## See Also

### Windows

- [UIWindow](uiwindow.md): The backdrop for your app’s user interface and the object that dispatches events to your views.
