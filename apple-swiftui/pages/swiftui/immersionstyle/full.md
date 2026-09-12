> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersionstyle/full](https://developer.apple.com/documentation/swiftui/immersionstyle/full)

# full

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

An immersion style that displays unbounded content that completely replaces passthrough video.

## Declaration

```swift
@export(implementation) static var full: FullImmersionStyle { get }
```

<a id="discussion"></a>

## Discussion

When this immersion style is selected, the immersion amount reported by the closure of [onImmersionChange(initial:\_:)](../view/onimmersionchange%28initial___%29.md) is `1.0`.

Use the [immersionStyle(selection:in:)](../scene/immersionstyle%28selection_in_%29.md) scene modifier to specify this style for an [ImmersiveSpace](../immersivespace.md).

When using this style, the space’s content fully obscures passthrough except for the user’s upper limbs. You can manage limb visibility separately by applying the [upperLimbVisibility(\_:)](../scene/upperlimbvisibility%28__%29.md) scene modifier to the space, or the view modifier equivalent to a view inside the scene.

The immersion style affects how windows interact with virtual objects in the environment. In `full` immersion, windows always render in front of virtual content, no matter how someone positions the window or the content. This helps people to avoid losing track of windows behind virtual content when passthrough is off.

## See Also

### Getting built-in styles

- [automatic](automatic.md): Conforms when `Self` is `AutomaticImmersionStyle`. The default immersion style.
- [mixed](mixed.md): Conforms when `Self` is `MixedImmersionStyle`. An immersion style that displays unbounded content intermixed with other app content, along with passthrough video.
- [progressive](progressive.md): Conforms when `Self` is `ProgressiveImmersionStyle`. An immersion style that displays unbounded content that partially replaces passthrough video.
