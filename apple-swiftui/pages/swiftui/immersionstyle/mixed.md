> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersionstyle/mixed](https://developer.apple.com/documentation/swiftui/immersionstyle/mixed)

# mixed

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** visionOS 1.0+

An immersion style that displays unbounded content intermixed with other app content, along with passthrough video.

## Declaration

```swift
@export(implementation) static var mixed: MixedImmersionStyle { get }
```

<a id="discussion"></a>

## Discussion

When this immersion style is selected, the immersion amount reported by the closure of [onImmersionChange(initial:\_:)](../view/onimmersionchange%28initial___%29.md) is `0.0`.

Use the [immersionStyle(selection:in:)](../scene/immersionstyle%28selection_in_%29.md) scene modifier to specify this style for an [ImmersiveSpace](../immersivespace.md). However, this is the default immersion style if you don’t specify one.

The immersion style affects how windows interact with virtual objects in the environment. In `mixed` immersion, a virtual object obscures part or all of a window that’s behind the object. Similarly, a window obscures a virtual object that’s behind the window.

## See Also

### Getting built-in styles

- [automatic](automatic.md): Conforms when `Self` is `AutomaticImmersionStyle`. The default immersion style.
- [full](full.md): Conforms when `Self` is `FullImmersionStyle`. An immersion style that displays unbounded content that completely replaces passthrough video.
- [progressive](progressive.md): Conforms when `Self` is `ProgressiveImmersionStyle`. An immersion style that displays unbounded content that partially replaces passthrough video.
