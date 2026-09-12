> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipickerviewdelegate](https://developer.apple.com/documentation/uikit/uipickerviewdelegate)

# UIPickerViewDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The interface for a picker view’s delegate.

## Declaration

```swift
@MainActor protocol UIPickerViewDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The delegate of a [UIPickerView](uipickerview.md) object must adopt this protocol and implement at least some of its methods to provide the picker view with the data it needs to construct itself.

The delegate implements the required methods of this protocol to return height, width, row title, and the view content for the rows in each component. It must also provide the content for each component’s row, either as a string or a view. Typically the delegate implements other optional methods to respond to new selections or deselections of component rows.

See [UIPickerView](uipickerview.md) for a discussion of components, rows, row content, and row selection.

## Topics

### Setting the dimensions of the picker view

- [pickerView(\_:rowHeightForComponent:)](uipickerviewdelegate/pickerview%28__rowheightforcomponent_%29.md): Called by the picker view when it needs the row height to use for drawing row content.
- [pickerView(\_:widthForComponent:)](uipickerviewdelegate/pickerview%28__widthforcomponent_%29.md): Called by the picker view when it needs the row width to use for drawing row content.

### Setting the content of component rows

The methods in this group are marked `@optional`. However, to use a picker view, you must implement either the [pickerView(\_:titleForRow:forComponent:)](uipickerviewdelegate/pickerview%28__titleforrow_forcomponent_%29.md) or the [pickerView(\_:viewForRow:forComponent:reusing:)](uipickerviewdelegate/pickerview%28__viewforrow_forcomponent_reusing_%29.md) method to provide the content of component rows.

- [pickerView(\_:titleForRow:forComponent:)](uipickerviewdelegate/pickerview%28__titleforrow_forcomponent_%29.md): Called by the picker view when it needs the title to use for a given row in a given component.
- [pickerView(\_:attributedTitleForRow:forComponent:)](uipickerviewdelegate/pickerview%28__attributedtitleforrow_forcomponent_%29.md): Called by the picker view when it needs the styled title to use for a given row in a given component.
- [pickerView(\_:viewForRow:forComponent:reusing:)](uipickerviewdelegate/pickerview%28__viewforrow_forcomponent_reusing_%29.md): Called by the picker view when it needs the view to use for a given row in a given component.

### Responding to row selection

- [pickerView(\_:didSelectRow:inComponent:)](uipickerviewdelegate/pickerview%28__didselectrow_incomponent_%29.md): Called by the picker view when the user selects a row in a component.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UIPickerViewAccessibilityDelegate](uipickerviewaccessibilitydelegate.md)

## See Also

### Customizing the picker behavior

- [delegate](uipickerview/delegate.md): The delegate for the picker view.

# UIPickerViewDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

The interface for a picker view’s delegate.

## Declaration

```objectivec
@protocol UIPickerViewDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The delegate of a [UIPickerView](uipickerview.md) object must adopt this protocol and implement at least some of its methods to provide the picker view with the data it needs to construct itself.

The delegate implements the required methods of this protocol to return height, width, row title, and the view content for the rows in each component. It must also provide the content for each component’s row, either as a string or a view. Typically the delegate implements other optional methods to respond to new selections or deselections of component rows.

See [UIPickerView](uipickerview.md) for a discussion of components, rows, row content, and row selection.

## Topics

### Setting the dimensions of the picker view

- [pickerView:rowHeightForComponent:](uipickerviewdelegate/pickerview%28__rowheightforcomponent_%29.md): Called by the picker view when it needs the row height to use for drawing row content.
- [pickerView:widthForComponent:](uipickerviewdelegate/pickerview%28__widthforcomponent_%29.md): Called by the picker view when it needs the row width to use for drawing row content.

### Setting the content of component rows

The methods in this group are marked `@optional`. However, to use a picker view, you must implement either the [pickerView:titleForRow:forComponent:](uipickerviewdelegate/pickerview%28__titleforrow_forcomponent_%29.md) or the [pickerView:viewForRow:forComponent:reusingView:](uipickerviewdelegate/pickerview%28__viewforrow_forcomponent_reusing_%29.md) method to provide the content of component rows.

- [pickerView:titleForRow:forComponent:](uipickerviewdelegate/pickerview%28__titleforrow_forcomponent_%29.md): Called by the picker view when it needs the title to use for a given row in a given component.
- [pickerView:attributedTitleForRow:forComponent:](uipickerviewdelegate/pickerview%28__attributedtitleforrow_forcomponent_%29.md): Called by the picker view when it needs the styled title to use for a given row in a given component.
- [pickerView:viewForRow:forComponent:reusingView:](uipickerviewdelegate/pickerview%28__viewforrow_forcomponent_reusing_%29.md): Called by the picker view when it needs the view to use for a given row in a given component.

### Responding to row selection

- [pickerView:didSelectRow:inComponent:](uipickerviewdelegate/pickerview%28__didselectrow_incomponent_%29.md): Called by the picker view when the user selects a row in a component.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [UIPickerViewAccessibilityDelegate](uipickerviewaccessibilitydelegate.md)

## See Also

### Customizing the picker behavior

- [delegate](uipickerview/delegate.md): The delegate for the picker view.
