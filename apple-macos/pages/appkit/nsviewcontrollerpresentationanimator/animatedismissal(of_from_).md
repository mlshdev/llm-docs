> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontrollerpresentationanimator/animatedismissal(of:from:)](https://developer.apple.com/documentation/appkit/nsviewcontrollerpresentationanimator/animatedismissal(of:from:))

# animateDismissal(of:from:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called when a previously-presented view controller is about to be dismissed.

## Declaration

```swift
@MainActor func animateDismissal(of viewController: NSViewController, from fromViewController: NSViewController)
```

## Parameters

- `viewController`: The view controller that is being dismissed.
- `fromViewController`: The view controller that is the parent of the one in the `viewController` parameter.

<a id="Discussion"></a>

## Discussion

To add custom view controller dismissal animation, Implement it in this method.

## See Also

### Animating Presentation and Dismissal of View Controllers

- [animatePresentation(of:from:)](animatepresentation%28of_from_%29.md): Called when the specified view controller is about to be presented.

# animateDismissalOfViewController:fromViewController: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Called when a previously-presented view controller is about to be dismissed.

## Declaration

```objectivec
- (void) animateDismissalOfViewController:(NSViewController *) viewController fromViewController:(NSViewController *) fromViewController;
```

## Parameters

- `viewController`: The view controller that is being dismissed.
- `fromViewController`: The view controller that is the parent of the one in the `viewController` parameter.

<a id="Discussion"></a>

## Discussion

To add custom view controller dismissal animation, Implement it in this method.

## See Also

### Animating Presentation and Dismissal of View Controllers

- [animatePresentationOfViewController:fromViewController:](animatepresentation%28of_from_%29.md): Called when the specified view controller is about to be presented.
