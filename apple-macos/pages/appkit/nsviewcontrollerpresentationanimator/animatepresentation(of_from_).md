> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontrollerpresentationanimator/animatepresentation(of:from:)](https://developer.apple.com/documentation/appkit/nsviewcontrollerpresentationanimator/animatepresentation(of:from:))

# animatePresentation(of:from:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called when the specified view controller is about to be presented.

## Declaration

```swift
@MainActor func animatePresentation(of viewController: NSViewController, from fromViewController: NSViewController)
```

## Parameters

- `viewController`: The view controller that is being presented in place of the one in the `fromViewController` parameter.
- `fromViewController`: The view controller that is the parent of the one in the `viewController` parameter.

<a id="Discussion"></a>

## Discussion

To add custom presentation animation, Implement it in this method.

## See Also

### Animating Presentation and Dismissal of View Controllers

- [animateDismissal(of:from:)](animatedismissal%28of_from_%29.md): Called when a previously-presented view controller is about to be dismissed.

# animatePresentationOfViewController:fromViewController: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called when the specified view controller is about to be presented.

## Declaration

```objectivec
- (void) animatePresentationOfViewController:(NSViewController *) viewController fromViewController:(NSViewController *) fromViewController;
```

## Parameters

- `viewController`: The view controller that is being presented in place of the one in the `fromViewController` parameter.
- `fromViewController`: The view controller that is the parent of the one in the `viewController` parameter.

<a id="Discussion"></a>

## Discussion

To add custom presentation animation, Implement it in this method.

## See Also

### Animating Presentation and Dismissal of View Controllers

- [animateDismissalOfViewController:fromViewController:](animatedismissal%28of_from_%29.md): Called when a previously-presented view controller is about to be dismissed.
