> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutfragment/state-swift.enum/estimatedusagebounds](https://developer.apple.com/documentation/appkit/nstextlayoutfragment/state-swift.enum/estimatedusagebounds)

# NSTextLayoutFragment.State.estimatedUsageBounds (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 12.0+

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

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 12.0+

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
