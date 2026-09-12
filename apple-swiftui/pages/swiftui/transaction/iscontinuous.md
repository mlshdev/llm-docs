> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/transaction/iscontinuous](https://developer.apple.com/documentation/swiftui/transaction/iscontinuous)

# isContinuous

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the transaction originated from an action that produces a sequence of values.

## Declaration

```swift
var isContinuous: Bool { get set }
```

<a id="discussion"></a>

## Discussion

This value is `true` if a continuous action created the transaction, and is `false` otherwise. Continuous actions include things like dragging a slider or pressing and holding a stepper, as opposed to tapping a button.

## See Also

### Getting information about a transaction

- [scrollTargetAnchor](scrolltargetanchor.md): The preferred alignment of the view within a scroll view’s visible region when scrolling to a view.
- [tracksVelocity](tracksvelocity.md): Whether this transaction will track the velocity of any animatable properties that change.
- [subscript(\_:)](subscript%28__%29.md): Accesses the transaction value associated with a custom key.
