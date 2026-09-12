> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/surroundingseffect/dark](https://developer.apple.com/documentation/swiftui/surroundingseffect/dark)

# dark

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 26.0+ · visionOS 2.0+

An effect that dims passthrough video.

## Declaration

```swift
static var dark: SurroundingsEffect { get }
```

<a id="discussion"></a>

## Discussion

Use this value with the [preferredSurroundingsEffect(\_:)](../view/preferredsurroundingseffect%28__%29.md) view modifier when you want to dim passthrough video while displaying a particular view. Doing so helps to draw attention to your app’s content while still enabling people to remain aware of their surroundings. This value can be used in the shared space.
