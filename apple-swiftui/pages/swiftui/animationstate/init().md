> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/animationstate/init()](https://developer.apple.com/documentation/swiftui/animationstate/init())

# init()

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Create an empty state container.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

You don’t typically create an instance of [AnimationState](../animationstate.md) directly. Instead, the [AnimationContext](../animationcontext.md) provides the animation state to an instance of [CustomAnimation](../customanimation.md).
