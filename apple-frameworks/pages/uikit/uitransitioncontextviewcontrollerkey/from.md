> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitransitioncontextviewcontrollerkey/from](https://developer.apple.com/documentation/uikit/uitransitioncontextviewcontrollerkey/from)

# from (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A key that identifies the view controller that’s visible at the beginning of the transition, or at the end of a canceled transition.

## Declaration

```swift
static let from: UITransitionContextViewControllerKey
```

<a id="Discussion"></a>

## Discussion

This view controller is typically the one presenting the “to” view controller or is the one being replaced by the “to” view controller.

## See Also

### Keys

- [to](to.md): A key that identifies the view controller that’s visible at the end of a completed transition.

# UITransitionContextFromViewControllerKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A key that identifies the view controller that’s visible at the beginning of the transition, or at the end of a canceled transition.

## Declaration

```objectivec
extern UITransitionContextViewControllerKey const UITransitionContextFromViewControllerKey;
```

<a id="Discussion"></a>

## Discussion

This view controller is typically the one presenting the “to” view controller or is the one being replaced by the “to” view controller.

## See Also

### Keys

- [UITransitionContextToViewControllerKey](to.md): A key that identifies the view controller that’s visible at the end of a completed transition.
