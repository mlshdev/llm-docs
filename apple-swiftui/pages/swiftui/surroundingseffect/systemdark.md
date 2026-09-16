> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/surroundingseffect/systemdark

# systemDark

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** visionOS 1.0+ (deprecated in 27.2)

An effect that dims passthrough video.

## Declaration

```swift
static var systemDark: SurroundingsEffect { get }
```

<a id="discussion"></a>

## Discussion

Use this value with the [preferredSurroundingsEffect(\_:)](../view/preferredsurroundingseffect%28__%29.md) view modifier when you want to dim passthrough video while displaying a particular view. Doing so helps to draw attention to your app’s content while still enabling people to remain aware of their surroundings.
