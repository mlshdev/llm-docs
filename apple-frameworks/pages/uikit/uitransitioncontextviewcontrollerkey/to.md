> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitransitioncontextviewcontrollerkey/to](https://developer.apple.com/documentation/uikit/uitransitioncontextviewcontrollerkey/to)

# to (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A key that identifies the view controller that’s visible at the end of a completed transition.

## Declaration

```swift
static let to: UITransitionContextViewControllerKey
```

<a id="Discussion"></a>

## Discussion

This view controller is the one being presented.

## See Also

### Keys

- [from](from.md): A key that identifies the view controller that’s visible at the beginning of the transition, or at the end of a canceled transition.

# UITransitionContextToViewControllerKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A key that identifies the view controller that’s visible at the end of a completed transition.

## Declaration

```objectivec
extern UITransitionContextViewControllerKey const UITransitionContextToViewControllerKey;
```

<a id="Discussion"></a>

## Discussion

This view controller is the one being presented.

## See Also

### Keys

- [UITransitionContextFromViewControllerKey](from.md): A key that identifies the view controller that’s visible at the beginning of the transition, or at the end of a canceled transition.
