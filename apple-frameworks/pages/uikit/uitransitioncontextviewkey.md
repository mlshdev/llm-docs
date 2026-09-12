> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitransitioncontextviewkey](https://developer.apple.com/documentation/uikit/uitransitioncontextviewkey)

# UITransitionContextViewKey (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The keys you use to identify the views involved in a transition.

## Declaration

```swift
struct UITransitionContextViewKey
```

## Topics

### Keys

- [from](uitransitioncontextviewkey/from.md): A key that identifies the view shown at the beginning of the transition, or at the end of a canceled transition.
- [to](uitransitioncontextviewkey/to.md): A key that identifies the view shown at the end of a completed transition.

### Initializers

- [init(rawValue:)](uitransitioncontextviewkey/init%28rawvalue_%29.md): Creates a key to identify the views in a transition.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [UITransitionContextViewControllerKey](uitransitioncontextviewcontrollerkey.md): The keys you use to identify the view controllers involved in a transition.

# UITransitionContextViewKey (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The keys you use to identify the views involved in a transition.

## Declaration

```objectivec
typedef NSString * UITransitionContextViewKey;
```

## Topics

### Keys

- [UITransitionContextFromViewKey](uitransitioncontextviewkey/from.md): A key that identifies the view shown at the beginning of the transition, or at the end of a canceled transition.
- [UITransitionContextToViewKey](uitransitioncontextviewkey/to.md): A key that identifies the view shown at the end of a completed transition.

## See Also

### Constants

- [UITransitionContextViewControllerKey](uitransitioncontextviewcontrollerkey.md): The keys you use to identify the view controllers involved in a transition.
