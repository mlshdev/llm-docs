> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/surroundingseffect/dim(intensity:)](https://developer.apple.com/documentation/swiftui/surroundingseffect/dim(intensity:))

# dim(intensity:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 26.0+ · visionOS 2.0+

An effect that dims the passthrough video a custom amount.

## Declaration

```swift
static func dim(intensity: Double) -> SurroundingsEffect
```

<a id="discussion"></a>

## Discussion

Use this with the [preferredSurroundingsEffect(\_:)](../view/preferredsurroundingseffect%28__%29.md) view modifier when you want to darken the passthrough while displaying a particular view. The value will be clamped between 0 and 1. This effect will only be applied while an immersive space is opened.
