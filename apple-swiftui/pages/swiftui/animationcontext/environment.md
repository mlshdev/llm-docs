> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/animationcontext/environment

# environment

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The current environment of the view that created the custom animation.

## Declaration

```swift
var environment: EnvironmentValues { get }
```

<a id="discussion"></a>

## Discussion

An instance of [CustomAnimation](../customanimation.md) uses this property to read environment values from the view that created the animation. To learn more about environment values including how to define custom environment values, see [EnvironmentValues](../environmentvalues.md).
