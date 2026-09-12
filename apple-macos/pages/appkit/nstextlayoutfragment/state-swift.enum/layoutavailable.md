> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextlayoutfragment/state-swift.enum/layoutavailable](https://developer.apple.com/documentation/appkit/nstextlayoutfragment/state-swift.enum/layoutavailable)

# NSTextLayoutFragment.State.layoutAvailable (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS 12.0+

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

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS 12.0+

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
