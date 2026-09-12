> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistatusbaranimation](https://developer.apple.com/documentation/uikit/uistatusbaranimation)

# UIStatusBarAnimation (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that specify the animation of the status bar as it’s hidden or made visible.

## Declaration

```swift
enum UIStatusBarAnimation
```

<a id="overview"></a>

## Overview

Constants of the [UIStatusBarAnimation](uistatusbaranimation.md) type are arguments of the [setStatusBarHidden(\_:with:)](uiapplication/setstatusbarhidden%28__with_%29.md) method.

## Topics

### Constants

- [UIStatusBarAnimation.none](uistatusbaranimation/none.md): No animation is applied to the status bar as it is shown or hidden.
- [UIStatusBarAnimation.fade](uistatusbaranimation/fade.md): The status bar fades in and out as it is shown or hidden, respectively.
- [UIStatusBarAnimation.slide](uistatusbaranimation/slide.md): The status bar slides in or out as it is shown or hidden, respectively.

### Initializers

- [init(rawValue:)](uistatusbaranimation/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated enumerations

- [UIDirectionalRectEdge](uidirectionalrectedge.md): Deprecated. Constants that specify an edge or a set of edges, taking the user interface layout direction into account.

# UIStatusBarAnimation (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Constants that specify the animation of the status bar as it’s hidden or made visible.

## Declaration

```objectivec
enum UIStatusBarAnimation : NSInteger;
```

<a id="overview"></a>

## Overview

Constants of the [UIStatusBarAnimation](uistatusbaranimation.md) type are arguments of the [setStatusBarHidden:withAnimation:](uiapplication/setstatusbarhidden%28__with_%29.md) method.

## Topics

### Constants

- [UIStatusBarAnimationNone](uistatusbaranimation/none.md): No animation is applied to the status bar as it is shown or hidden.
- [UIStatusBarAnimationFade](uistatusbaranimation/fade.md): The status bar fades in and out as it is shown or hidden, respectively.
- [UIStatusBarAnimationSlide](uistatusbaranimation/slide.md): The status bar slides in or out as it is shown or hidden, respectively.

## See Also

### Deprecated enumerations

- [UIDirectionalRectEdge](uidirectionalrectedge.md): Deprecated. Constants that specify an edge or a set of edges, taking the user interface layout direction into account.
