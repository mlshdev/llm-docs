> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/compositorcontent/upperlimbvisibility(_:)](https://developer.apple.com/documentation/swiftui/compositorcontent/upperlimbvisibility(_:))

# upperLimbVisibility(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

Sets the preferred visibility of the user’s upper limbs, while an [ImmersiveSpace](../immersivespace.md) scene is presented.

## Declaration

```swift
nonisolated func upperLimbVisibility(_ preferredVisibility: Visibility) -> some CompositorContent

```

## Parameters

- `preferredVisibility`: A value indicating if the upper limbs should be visible. Use `.automatic` for a system-defined standard behavior, `.visible` to keep the upper limbs visible, and `.hidden` to hide the upper limbs.

<a id="discussion"></a>

## Discussion

The system can show the user’s upper limbs during fully immersive experiences, but you can also hide them, for example, in order to display virtual hands instead.

Note that this modifier only sets a preference and ultimately the system will decide if it will honor it or not. The system may be unable to honor the preference if the immersive space is currently not visible.
