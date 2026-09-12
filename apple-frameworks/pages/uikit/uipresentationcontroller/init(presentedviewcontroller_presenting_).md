> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipresentationcontroller/init(presentedviewcontroller:presenting:)](https://developer.apple.com/documentation/uikit/uipresentationcontroller/init(presentedviewcontroller:presenting:))

# init(presentedViewController:presenting:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes and returns a presentation controller for transitioning between the specified view controllers.

## Declaration

```swift
init(presentedViewController: UIViewController, presenting presentingViewController: UIViewController?)
```

## Parameters

- `presentedViewController`: The view controller being presented modally.
- `presentingViewController`: The view controller whose content represents the starting point of the transition.

<a id="return-value"></a>

## Return Value

An initialized presentation controller object or `nil` if the presentation controller could not be initialized.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the presentation controller. You must call it from any custom initialization methods you define for your presentation controller subclasses.

# initWithPresentedViewController:presentingViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Initializes and returns a presentation controller for transitioning between the specified view controllers.

## Declaration

```objectivec
- (instancetype) initWithPresentedViewController:(UIViewController *) presentedViewController presentingViewController:(UIViewController *) presentingViewController;
```

## Parameters

- `presentedViewController`: The view controller being presented modally.
- `presentingViewController`: The view controller whose content represents the starting point of the transition.

<a id="return-value"></a>

## Return Value

An initialized presentation controller object or `nil` if the presentation controller could not be initialized.

<a id="Discussion"></a>

## Discussion

This method is the designated initializer for the presentation controller. You must call it from any custom initialization methods you define for your presentation controller subclasses.
