> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutfragment/state-swift.enum/layoutavailable](https://developer.apple.com/documentation/uikit/nstextlayoutfragment/state-swift.enum/layoutavailable)

# NSTextLayoutFragment.State.layoutAvailable (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Measurements for the text line fragments and layout fragment are available.

## Declaration

```swift
case layoutAvailable
```

## See Also

### Constants that describe layout bounds

- [NSTextLayoutFragment.State.calculatedUsageBounds](calculatedusagebounds.md): The layout fragment measurements are available without text line fragments.
- [NSTextLayoutFragment.State.estimatedUsageBounds](estimatedusagebounds.md): The text layout manager hasn’t performed a full layout yet for the region covered by this layout fragment and is returning an estimated bounds.
- [NSTextLayoutFragment.State.none](none.md): No layout information is available.

# NSTextLayoutFragmentStateLayoutAvailable (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Measurements for the text line fragments and layout fragment are available.

## Declaration

```objectivec
NSTextLayoutFragmentStateLayoutAvailable
```

## See Also

### Constants that describe layout bounds

- [NSTextLayoutFragmentStateCalculatedUsageBounds](calculatedusagebounds.md): The layout fragment measurements are available without text line fragments.
- [NSTextLayoutFragmentStateEstimatedUsageBounds](estimatedusagebounds.md): The text layout manager hasn’t performed a full layout yet for the region covered by this layout fragment and is returning an estimated bounds.
- [NSTextLayoutFragmentStateNone](none.md): No layout information is available.
