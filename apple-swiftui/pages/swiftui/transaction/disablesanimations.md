> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/transaction/disablesanimations

# disablesAnimations

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether views should disable animations.

## Declaration

```swift
var disablesAnimations: Bool { get set }
```

<a id="discussion"></a>

## Discussion

This value is `true` during the initial phase of a two-part transition update, to prevent [animation(\_:)](../view/animation%28__%29.md) from inserting new animations into the transaction.

## See Also

### Managing animations

- [animation](animation.md): The animation, if any, associated with the current state change.
- [addAnimationCompletion(criteria:\_:)](addanimationcompletion%28criteria___%29.md): Adds a completion to run when the animations created with this transaction are all complete.
