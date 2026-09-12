> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gesture/handactivationbehavior(_:)](https://developer.apple.com/documentation/swiftui/gesture/handactivationbehavior(_:))

# handActivationBehavior(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Customizes the activation behavior for a gesture when driven by hand or hand-like input.

## Declaration

```swift
@MainActor @preconcurrency func handActivationBehavior(_ behavior: HandActivationBehavior) -> some Gesture<Self.Value>

```

## Parameters

- `behavior`: The hand activation behavior to use for the gesture.

<a id="return-value"></a>

## Return Value

A new gesture with a preference to activate with the provided behavior.

<a id="discussion"></a>

## Discussion

Use [automatic](../handactivationbehavior/automatic.md) to allow a gesture to activate with default system behaviors. Use [pinch](../handactivationbehavior/pinch.md) when a gesture should only trigger when the hand is pinched.

For example, in a 3D chess application, a [DragGesture](../draggesture.md) that enables movement of the pieces could use the pinch behavior to ensure that piece movement is only possible when a hand is pinched in order to avoid pushing the piece around by only touching it:

```swift
Model3D(named: "Pawn")
    .gesture(
        DragGesture()
            .handActivationBehavior(.pinch)
            .updating($chessDragState) { value, state, _ in
                // ...
            }
    )
```
