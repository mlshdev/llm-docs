> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutfragment/state-swift.enum/estimatedusagebounds](https://developer.apple.com/documentation/uikit/nstextlayoutfragment/state-swift.enum/estimatedusagebounds)

# NSTextLayoutFragment.State.estimatedUsageBounds (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The text layout manager hasn’t performed a full layout yet for the region covered by this layout fragment and is returning an estimated bounds.

## Declaration

```swift
case estimatedUsageBounds
```

## See Also

### Constants that describe layout bounds

- [NSTextLayoutFragment.State.calculatedUsageBounds](calculatedusagebounds.md): The layout fragment measurements are available without text line fragments.
- [NSTextLayoutFragment.State.layoutAvailable](layoutavailable.md): Measurements for the text line fragments and layout fragment are available.
- [NSTextLayoutFragment.State.none](none.md): No layout information is available.

# NSTextLayoutFragmentStateEstimatedUsageBounds (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The text layout manager hasn’t performed a full layout yet for the region covered by this layout fragment and is returning an estimated bounds.

## Declaration

```objectivec
NSTextLayoutFragmentStateEstimatedUsageBounds
```

## See Also

### Constants that describe layout bounds

- [NSTextLayoutFragmentStateCalculatedUsageBounds](calculatedusagebounds.md): The layout fragment measurements are available without text line fragments.
- [NSTextLayoutFragmentStateLayoutAvailable](layoutavailable.md): Measurements for the text line fragments and layout fragment are available.
- [NSTextLayoutFragmentStateNone](none.md): No layout information is available.
