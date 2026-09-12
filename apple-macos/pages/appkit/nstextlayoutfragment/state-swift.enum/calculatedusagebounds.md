> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutfragment/state-swift.enum/calculatedusagebounds](https://developer.apple.com/documentation/appkit/nstextlayoutfragment/state-swift.enum/calculatedusagebounds)

# NSTextLayoutFragment.State.calculatedUsageBounds (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 12.0+

The layout fragment measurements are available without text line fragments.

## Declaration

```swift
case calculatedUsageBounds
```

## See Also

### Constants that describe layout bounds

- [NSTextLayoutFragment.State.estimatedUsageBounds](estimatedusagebounds.md): The text layout manager hasn’t performed a full layout yet for the region covered by this layout fragment and is returning an estimated bounds.
- [NSTextLayoutFragment.State.layoutAvailable](layoutavailable.md): Measurements for the text line fragments and layout fragment are available.
- [NSTextLayoutFragment.State.none](none.md): No layout information is available.

# NSTextLayoutFragmentStateCalculatedUsageBounds (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 12.0+

The layout fragment measurements are available without text line fragments.

## Declaration

```objectivec
NSTextLayoutFragmentStateCalculatedUsageBounds
```

## See Also

### Constants that describe layout bounds

- [NSTextLayoutFragmentStateEstimatedUsageBounds](estimatedusagebounds.md): The text layout manager hasn’t performed a full layout yet for the region covered by this layout fragment and is returning an estimated bounds.
- [NSTextLayoutFragmentStateLayoutAvailable](layoutavailable.md): Measurements for the text line fragments and layout fragment are available.
- [NSTextLayoutFragmentStateNone](none.md): No layout information is available.
