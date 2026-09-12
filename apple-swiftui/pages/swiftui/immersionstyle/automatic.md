> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersionstyle/automatic](https://developer.apple.com/documentation/swiftui/immersionstyle/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** macOS 26.0+ · visionOS 1.0+

The default immersion style.

## Declaration

```swift
@export(implementation) static var automatic: AutomaticImmersionStyle { get }
```

<a id="discussion"></a>

## Discussion

The system uses this style for an [ImmersiveSpace](../immersivespace.md) if you don’t provide an [immersionStyle(selection:in:)](../scene/immersionstyle%28selection_in_%29.md) scene modifier. You don’t typically specify the `automatic` style explicitly.

By default, on visionOS, the system uses the [mixed](mixed.md) immersion style as the `automatic` style and for macOS the [full](full.md) immersion style as the `automatic` style.

## See Also

### Getting built-in styles

- [full](full.md): Conforms when `Self` is `FullImmersionStyle`. An immersion style that displays unbounded content that completely replaces passthrough video.
- [mixed](mixed.md): Conforms when `Self` is `MixedImmersionStyle`. An immersion style that displays unbounded content intermixed with other app content, along with passthrough video.
- [progressive](progressive.md): Conforms when `Self` is `ProgressiveImmersionStyle`. An immersion style that displays unbounded content that partially replaces passthrough video.
