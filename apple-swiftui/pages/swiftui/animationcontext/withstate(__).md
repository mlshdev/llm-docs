> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/animationcontext/withstate(_:)

# withState(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a new context from another one with a state that you provide.

## Declaration

```swift
func withState<T>(_ state: AnimationState<T>) -> AnimationContext<T> where T : VectorArithmetic
```

## Parameters

- `state`: The initial state for the new context.

<a id="return-value"></a>

## Return Value

A new context that contains the specified state.

<a id="discussion"></a>

## Discussion

Use this method to create a new context that contains the state that you provide and view environment values from the original context.
