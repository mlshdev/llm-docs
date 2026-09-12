> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcontrollerpresentationanimator](https://developer.apple.com/documentation/appkit/nsviewcontrollerpresentationanimator)

# NSViewControllerPresentationAnimator (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that let you define animations to play when transitioning between two view controllers.

## Declaration

```swift
protocol NSViewControllerPresentationAnimator : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement this protocol only if you want to provide custom animations. You might find what you need in the [NSViewController.TransitionOptions](nsviewcontroller/transitionoptions.md) enumeration, which provides many predefined animations.

A class that adopts this protocol is responsible for both presenting and dismissing a view controller.

## Topics

### Animating Presentation and Dismissal of View Controllers

- [animatePresentation(of:from:)](nsviewcontrollerpresentationanimator/animatepresentation%28of_from_%29.md): Called when the specified view controller is about to be presented.
- [animateDismissal(of:from:)](nsviewcontrollerpresentationanimator/animatedismissal%28of_from_%29.md): Called when a previously-presented view controller is about to be dismissed.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# NSViewControllerPresentationAnimator (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that let you define animations to play when transitioning between two view controllers.

## Declaration

```objectivec
@protocol NSViewControllerPresentationAnimator <NSObject>
```

<a id="overview"></a>

## Overview

Implement this protocol only if you want to provide custom animations. You might find what you need in the [NSViewControllerTransitionOptions](nsviewcontroller/transitionoptions.md) enumeration, which provides many predefined animations.

A class that adopts this protocol is responsible for both presenting and dismissing a view controller.

## Topics

### Animating Presentation and Dismissal of View Controllers

- [animatePresentationOfViewController:fromViewController:](nsviewcontrollerpresentationanimator/animatepresentation%28of_from_%29.md): Called when the specified view controller is about to be presented.
- [animateDismissalOfViewController:fromViewController:](nsviewcontrollerpresentationanimator/animatedismissal%28of_from_%29.md): Called when a previously-presented view controller is about to be dismissed.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
