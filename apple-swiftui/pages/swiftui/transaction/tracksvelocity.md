> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/transaction/tracksvelocity](https://developer.apple.com/documentation/swiftui/transaction/tracksvelocity)

# tracksVelocity

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Whether this transaction will track the velocity of any animatable properties that change.

## Declaration

```swift
var tracksVelocity: Bool { get set }
```

<a id="discussion"></a>

## Discussion

This property can be enabled in an interactive context to track velocity during a user interaction so that when the interaction ends, an animation can use the accumulated velocities to create animations that preserve them. This tracking is mutually exclusive with an animation being used during a view change, since if there is an animation, it is responsible for managing its own velocity.

Gesture onChanged and updating callbacks automatically set this property to true.

This example shows an interaction which applies changes, tracking velocity until the final change, which applies an animation (which will start with the velocity that was tracked during the previous changes). These changes could come from a server or from an interactive control like a slider.

```swift
func receiveChange(change: ChangeInfo) {
    var transaction = Transaction()
    if change.isFinal {
        transaction.animation = .spring
    } else {
        transaction.tracksVelocity = true
    }
    withTransaction(transaction) {
        state.applyChange(change)
    }
}
```

## See Also

### Getting information about a transaction

- [isContinuous](iscontinuous.md): A Boolean value that indicates whether the transaction originated from an action that produces a sequence of values.
- [scrollTargetAnchor](scrolltargetanchor.md): The preferred alignment of the view within a scroll view’s visible region when scrolling to a view.
- [subscript(\_:)](subscript%28__%29.md): Accesses the transaction value associated with a custom key.
