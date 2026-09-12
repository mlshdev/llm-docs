> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontroller/init(contentviewcontroller:)](https://developer.apple.com/documentation/uikit/uipopovercontroller/init(contentviewcontroller:))

# init(contentViewController:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Returns an initialized popover controller object.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```swift
init(contentViewController viewController: UIViewController)
```

## Parameters

- `viewController`: The view controller for managing the popover’s content. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized popover controller object.

<a id="Discussion"></a>

## Discussion

When initializing a popover controller, you must specify the view controller object whose content is to be displayed in the popover. You can change this view controller later by modifying the [contentViewController](contentviewcontroller.md) property.

# initWithContentViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Returns an initialized popover controller object.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```objectivec
- (instancetype) initWithContentViewController:(UIViewController *) viewController;
```

## Parameters

- `viewController`: The view controller for managing the popover’s content. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized popover controller object.

<a id="Discussion"></a>

## Discussion

When initializing a popover controller, you must specify the view controller object whose content is to be displayed in the popover. You can change this view controller later by modifying the [contentViewController](contentviewcontroller.md) property.
