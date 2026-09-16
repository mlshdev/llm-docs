> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/immersionstyle/progressive(_:initialamount:aspectratio:)

# progressive(\_:initialAmount:aspectRatio:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** macOS 26.0+ · visionOS 26.0+

An immersion style that displays unbounded content that partially replaces passthrough video.

## Declaration

```swift
static func progressive(_ immersionRange: ClosedRange<Double>, initialAmount: Double? = nil, aspectRatio: ProgressiveImmersionAspectRatio?) -> ProgressiveImmersionStyle
```

## Parameters

- `immersionRange`: The range of immersion used for this instance of the style. The lower bound and upper bound value of the range represent how much of a spherical field of view of the user is covered by the portal effect of the style. The lower bound value must be equal to or greater than `0` and smaller than the upper bound. The upper bound value must be greater than the lower bound and smaller than or equal to `1`.
- `initialAmount`: The initial amount of immersion used for this instance of the style. If `nil`, a system default will be used. The value must be within the range defined by this style.
- `aspectRatio`: The aspect ratio of the portal. If `nil`, a system default of landscape will be used.

<a id="discussion"></a>

## Discussion

Use the [immersionStyle(selection:in:)](../scene/immersionstyle%28selection_in_%29.md) scene modifier to specify this style for an [ImmersiveSpace](../immersivespace.md).

The immersion style affects how windows interact with virtual objects in the environment. In `progressive` immersion, windows always render in front of virtual content, no matter how someone positions the window or the content. This helps people to avoid losing track of windows behind virtual content when passthrough is off.

The system initially uses a portal effect that replaces passthrough in a portion of the field of view. People can interactively adjust the size of the portal by rotating the Digital Crown, including down to a minimum amount of immersion defined by the app and up to the defined maximum amount of immersion.
