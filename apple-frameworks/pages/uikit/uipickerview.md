> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerview](https://developer.apple.com/documentation/uikit/uipickerview)

# UIPickerView (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view that uses a spinning-wheel or slot-machine metaphor to show one or more sets of values.

## Declaration

```swift
@MainActor class UIPickerView
```

## Mentioned In

- [About app development with UIKit](about-app-development-with-uikit.md)

<a id="overview"></a>

## Overview

A picker view displays one or more wheels that the user manipulates to select items. Each wheel — known as a *component* — has a series of indexed rows representing the selectable items. Each row displays a string or view so that the user can identify the item on that row. Users select items by rotating the wheels to the desired values, which align with a selection indicator.

> **Note**

>  The [UIDatePicker](uidatepicker.md) class uses a custom subclass of [UIPickerView](uipickerview.md) to display dates and times. To see an example, tap the add (”+”) button in the Alarm pane of the Clock app.

You provide the data to display in your picker view using a picker data source (an object that adopts the [UIPickerViewDataSource](uipickerviewdatasource.md) protocol). Use your picker view delegate (an object that adopts the [UIPickerViewDelegate](uipickerviewdelegate.md) protocol) to provide views for displaying your data and responding to user selections.

> **Important**

>  [UIPickerView](uipickerview.md) and its descendants aren’t available when the user interface idiom is [UIUserInterfaceIdiom.mac](uiuserinterfaceidiom/mac.md).

## Topics

### Providing the picker data

- [dataSource](uipickerview/datasource.md): The data source for the picker view.
- [UIPickerViewDataSource](uipickerviewdatasource.md): The interface for a picker view’s data source.

### Customizing the picker behavior

- [delegate](uipickerview/delegate.md): The delegate for the picker view.
- [UIPickerViewDelegate](uipickerviewdelegate.md): The interface for a picker view’s delegate.

### Getting the dimensions of the picker view

- [numberOfComponents](uipickerview/numberofcomponents.md): The number of components for the picker view.
- [numberOfRows(inComponent:)](uipickerview/numberofrows%28incomponent_%29.md): Returns the number of rows for a component.
- [rowSize(forComponent:)](uipickerview/rowsize%28forcomponent_%29.md): Returns the size of a row for a component.

### Reloading the picker view

- [reloadAllComponents()](uipickerview/reloadallcomponents%28%29.md): Reloads all components of the picker view.
- [reloadComponent(\_:)](uipickerview/reloadcomponent%28__%29.md): Reloads a particular component of the picker view.

### Selecting rows in the view picker

- [selectRow(\_:inComponent:animated:)](uipickerview/selectrow%28__incomponent_animated_%29.md): Selects a row in a specified component of the picker view.
- [selectedRow(inComponent:)](uipickerview/selectedrow%28incomponent_%29.md): Returns the index of the selected row in a given component.

### Returning the view for a row and component

- [view(forRow:forComponent:)](uipickerview/view%28forrow_forcomponent_%29.md): Returns the view used by the picker view for a given row and component.

### Managing the appearance of the picker view

- [showsSelectionIndicator](uipickerview/showsselectionindicator.md): Deprecated. A Boolean value that determines whether the selection indicator is displayed.

## Relationships

### Inherits From

- [UIView](uiview.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIAccessibilityIdentification](uiaccessibilityidentification.md)
- [UIActivityItemsConfigurationProviding](uiactivityitemsconfigurationproviding.md)
- [UIAppearance](uiappearance.md)
- [UIAppearanceContainer](uiappearancecontainer.md)
- [UICoordinateSpace](uicoordinatespace.md)
- [UIDynamicItem](uidynamicitem.md)
- [UIFocusEnvironment](uifocusenvironment.md)
- [UIFocusItem](uifocusitem.md)
- [UIFocusItemContainer](uifocusitemcontainer.md)
- [UILargeContentViewerItem](uilargecontentvieweritem.md)
- [UIPasteConfigurationSupporting](uipasteconfigurationsupporting.md)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md)
- [UITraitChangeObservable](uitraitchangeobservable-67e94.md)
- [UITraitEnvironment](uitraitenvironment.md)
- [UIUserActivityRestoring](uiuseractivityrestoring.md)

## See Also

### Content views

- [UIActivityIndicatorView](uiactivityindicatorview.md): A view that shows that a task is in progress.
- [UICalendarView](uicalendarview.md): A view that displays a calendar with date-specific decorations, and provides for user selection of a single date or multiple dates.
- [UIContentUnavailableView](uicontentunavailableview.md): A view that indicates there’s no content to display.
- [UIImageView](uiimageview.md): A view that displays a single image or a sequence of animated images in your interface.
- [UIProgressView](uiprogressview.md): A view that depicts the progress of a task over time.

# UIPickerView (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A view that uses a spinning-wheel or slot-machine metaphor to show one or more sets of values.

## Declaration

```objectivec
@interface UIPickerView : UIView
```

## Mentioned In

- [About app development with UIKit](about-app-development-with-uikit.md)

<a id="overview"></a>

## Overview

A picker view displays one or more wheels that the user manipulates to select items. Each wheel — known as a *component* — has a series of indexed rows representing the selectable items. Each row displays a string or view so that the user can identify the item on that row. Users select items by rotating the wheels to the desired values, which align with a selection indicator.

> **Note**

>  The [UIDatePicker](uidatepicker.md) class uses a custom subclass of [UIPickerView](uipickerview.md) to display dates and times. To see an example, tap the add (”+”) button in the Alarm pane of the Clock app.

You provide the data to display in your picker view using a picker data source (an object that adopts the [UIPickerViewDataSource](uipickerviewdatasource.md) protocol). Use your picker view delegate (an object that adopts the [UIPickerViewDelegate](uipickerviewdelegate.md) protocol) to provide views for displaying your data and responding to user selections.

> **Important**

>  [UIPickerView](uipickerview.md) and its descendants aren’t available when the user interface idiom is [UIUserInterfaceIdiomMac](uiuserinterfaceidiom/mac.md).

## Topics

### Providing the picker data

- [dataSource](uipickerview/datasource.md): The data source for the picker view.
- [UIPickerViewDataSource](uipickerviewdatasource.md): The interface for a picker view’s data source.

### Customizing the picker behavior

- [delegate](uipickerview/delegate.md): The delegate for the picker view.
- [UIPickerViewDelegate](uipickerviewdelegate.md): The interface for a picker view’s delegate.

### Getting the dimensions of the picker view

- [numberOfComponents](uipickerview/numberofcomponents.md): The number of components for the picker view.
- [numberOfRowsInComponent:](uipickerview/numberofrows%28incomponent_%29.md): Returns the number of rows for a component.
- [rowSizeForComponent:](uipickerview/rowsize%28forcomponent_%29.md): Returns the size of a row for a component.

### Reloading the picker view

- [reloadAllComponents](uipickerview/reloadallcomponents%28%29.md): Reloads all components of the picker view.
- [reloadComponent:](uipickerview/reloadcomponent%28__%29.md): Reloads a particular component of the picker view.

### Selecting rows in the view picker

- [selectRow:inComponent:animated:](uipickerview/selectrow%28__incomponent_animated_%29.md): Selects a row in a specified component of the picker view.
- [selectedRowInComponent:](uipickerview/selectedrow%28incomponent_%29.md): Returns the index of the selected row in a given component.

### Returning the view for a row and component

- [viewForRow:forComponent:](uipickerview/view%28forrow_forcomponent_%29.md): Returns the view used by the picker view for a given row and component.

### Managing the appearance of the picker view

- [showsSelectionIndicator](uipickerview/showsselectionindicator.md): Deprecated. A Boolean value that determines whether the selection indicator is displayed.

## Relationships

### Inherits From

- [UIView](uiview.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)

## See Also

### Content views

- [UIActivityIndicatorView](uiactivityindicatorview.md): A view that shows that a task is in progress.
- [UICalendarView](uicalendarview.md): A view that displays a calendar with date-specific decorations, and provides for user selection of a single date or multiple dates.
- [UIContentUnavailableView](uicontentunavailableview.md): A view that indicates there’s no content to display.
- [UIImageView](uiimageview.md): A view that displays a single image or a sequence of animated images in your interface.
- [UIProgressView](uiprogressview.md): A view that depicts the progress of a task over time.
