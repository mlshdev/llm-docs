> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitransitioncontextviewkey/from](https://developer.apple.com/documentation/uikit/uitransitioncontextviewkey/from)

# from (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A key that identifies the view shown at the beginning of the transition, or at the end of a canceled transition.

## Declaration

```swift
static let from: UITransitionContextViewKey
```

<a id="Discussion"></a>

## Discussion

This view is typically the presenting view controller’s view.

## See Also

### Keys

- [to](to.md): A key that identifies the view shown at the end of a completed transition.

# UITransitionContextFromViewKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A key that identifies the view shown at the beginning of the transition, or at the end of a canceled transition.

## Declaration

```objectivec
extern UITransitionContextViewKey const UITransitionContextFromViewKey;
```

<a id="Discussion"></a>

## Discussion

This view is typically the presenting view controller’s view.

## See Also

### Keys

- [UITransitionContextToViewKey](to.md): A key that identifies the view shown at the end of a completed transition.
