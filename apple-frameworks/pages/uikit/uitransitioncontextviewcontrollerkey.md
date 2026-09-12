> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitransitioncontextviewcontrollerkey](https://developer.apple.com/documentation/uikit/uitransitioncontextviewcontrollerkey)

# UITransitionContextViewControllerKey (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The keys you use to identify the view controllers involved in a transition.

## Declaration

```swift
struct UITransitionContextViewControllerKey
```

## Topics

### Keys

- [from](uitransitioncontextviewcontrollerkey/from.md): A key that identifies the view controller that’s visible at the beginning of the transition, or at the end of a canceled transition.
- [to](uitransitioncontextviewcontrollerkey/to.md): A key that identifies the view controller that’s visible at the end of a completed transition.

### Initializers

- [init(rawValue:)](uitransitioncontextviewcontrollerkey/init%28rawvalue_%29.md): Creates a key to identify the view controllers in a transition.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UITransitionContextViewKey](uitransitioncontextviewkey.md): The keys you use to identify the views involved in a transition.

# UITransitionContextViewControllerKey (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The keys you use to identify the view controllers involved in a transition.

## Declaration

```objectivec
typedef NSString * UITransitionContextViewControllerKey;
```

## Topics

### Keys

- [UITransitionContextFromViewControllerKey](uitransitioncontextviewcontrollerkey/from.md): A key that identifies the view controller that’s visible at the beginning of the transition, or at the end of a canceled transition.
- [UITransitionContextToViewControllerKey](uitransitioncontextviewcontrollerkey/to.md): A key that identifies the view controller that’s visible at the end of a completed transition.

## See Also

### Constants

- [UITransitionContextViewKey](uitransitioncontextviewkey.md): The keys you use to identify the views involved in a transition.
