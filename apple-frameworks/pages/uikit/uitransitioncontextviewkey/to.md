> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitransitioncontextviewkey/to](https://developer.apple.com/documentation/uikit/uitransitioncontextviewkey/to)

# to (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A key that identifies the view shown at the end of a completed transition.

## Declaration

```swift
static let to: UITransitionContextViewKey
```

<a id="Discussion"></a>

## Discussion

This view is typically the presented view controller’s view but may also be an ancestor of that view.

## See Also

### Keys

- [from](from.md): A key that identifies the view shown at the beginning of the transition, or at the end of a canceled transition.

# UITransitionContextToViewKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A key that identifies the view shown at the end of a completed transition.

## Declaration

```objectivec
extern UITransitionContextViewKey const UITransitionContextToViewKey;
```

<a id="Discussion"></a>

## Discussion

This view is typically the presented view controller’s view but may also be an ancestor of that view.

## See Also

### Keys

- [UITransitionContextFromViewKey](from.md): A key that identifies the view shown at the beginning of the transition, or at the end of a canceled transition.
