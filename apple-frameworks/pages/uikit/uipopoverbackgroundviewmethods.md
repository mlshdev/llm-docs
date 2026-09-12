> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverbackgroundviewmethods](https://developer.apple.com/documentation/uikit/uipopoverbackgroundviewmethods)

# UIPopoverBackgroundViewMethods (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that popover background view subclasses must implement.

## Declaration

```swift
protocol UIPopoverBackgroundViewMethods
```

<a id="overview"></a>

## Overview

The methods in this protocol are called only once when the popover is presented. All methods of this protocol are required.

## Topics

### Returning the content view insets

- [contentViewInsets()](uipopoverbackgroundviewmethods/contentviewinsets%28%29.md): The insets for the content portion of the popover.

### Accessing the arrow metrics

- [arrowBase()](uipopoverbackgroundviewmethods/arrowbase%28%29.md): The width of the arrow triangle at its base.
- [arrowHeight()](uipopoverbackgroundviewmethods/arrowheight%28%29.md): The height of the arrow (measured in points) from its base to its tip.

## Relationships

### Conforming Types

- [UIPopoverBackgroundView](uipopoverbackgroundview.md)

## See Also

### Popovers

- [Displaying transient content in a popover](displaying-transient-content-in-a-popover.md): Show a temporary interface on top of your app’s content on iPad.
- [UIPopoverPresentationController](uipopoverpresentationcontroller.md): An object that manages the display of content in a popover.
- [UIPopoverBackgroundView](uipopoverbackgroundview.md): The background appearance for a popover.

# UIPopoverBackgroundViewMethods (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

A set of methods that popover background view subclasses must implement.

## Declaration

```objectivec
@protocol UIPopoverBackgroundViewMethods
```

<a id="overview"></a>

## Overview

The methods in this protocol are called only once when the popover is presented. All methods of this protocol are required.

## Topics

### Returning the content view insets

- [contentViewInsets](uipopoverbackgroundviewmethods/contentviewinsets%28%29.md): The insets for the content portion of the popover.

### Accessing the arrow metrics

- [arrowBase](uipopoverbackgroundviewmethods/arrowbase%28%29.md): The width of the arrow triangle at its base.
- [arrowHeight](uipopoverbackgroundviewmethods/arrowheight%28%29.md): The height of the arrow (measured in points) from its base to its tip.

## Relationships

### Conforming Types

- [UIPopoverBackgroundView](uipopoverbackgroundview.md)

## See Also

### Popovers

- [Displaying transient content in a popover](displaying-transient-content-in-a-popover.md): Show a temporary interface on top of your app’s content on iPad.
- [UIPopoverPresentationController](uipopoverpresentationcontroller.md): An object that manages the display of content in a popover.
- [UIPopoverBackgroundView](uipopoverbackgroundview.md): The background appearance for a popover.
