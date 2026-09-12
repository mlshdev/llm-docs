> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextlayoutfragment/state-swift.enum](https://developer.apple.com/documentation/uikit/nstextlayoutfragment/state-swift.enum)

# NSTextLayoutFragment.State (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Values that describe the possible layout states.

## Declaration

```swift
enum State
```

## Topics

### Constants that describe layout bounds

- [NSTextLayoutFragment.State.calculatedUsageBounds](state-swift.enum/calculatedusagebounds.md): The layout fragment measurements are available without text line fragments.
- [NSTextLayoutFragment.State.estimatedUsageBounds](state-swift.enum/estimatedusagebounds.md): The text layout manager hasn’t performed a full layout yet for the region covered by this layout fragment and is returning an estimated bounds.
- [NSTextLayoutFragment.State.layoutAvailable](state-swift.enum/layoutavailable.md): Measurements for the text line fragments and layout fragment are available.
- [NSTextLayoutFragment.State.none](state-swift.enum/none.md): No layout information is available.

### Initializers

- [init(rawValue:)](state-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting element information

- [state](state-swift.property.md): The layout information state.
- [rangeInElement](rangeinelement.md): The range inside the text element relative to the document origin.
- [textElement](textelement.md): The parent text element.

# NSTextLayoutFragmentState (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Values that describe the possible layout states.

## Declaration

```objectivec
enum NSTextLayoutFragmentState : NSUInteger;
```

## Topics

### Constants that describe layout bounds

- [NSTextLayoutFragmentStateCalculatedUsageBounds](state-swift.enum/calculatedusagebounds.md): The layout fragment measurements are available without text line fragments.
- [NSTextLayoutFragmentStateEstimatedUsageBounds](state-swift.enum/estimatedusagebounds.md): The text layout manager hasn’t performed a full layout yet for the region covered by this layout fragment and is returning an estimated bounds.
- [NSTextLayoutFragmentStateLayoutAvailable](state-swift.enum/layoutavailable.md): Measurements for the text line fragments and layout fragment are available.
- [NSTextLayoutFragmentStateNone](state-swift.enum/none.md): No layout information is available.

## See Also

### Getting element information

- [state](state-swift.property.md): The layout information state.
- [rangeInElement](rangeinelement.md): The range inside the text element relative to the document origin.
- [textElement](textelement.md): The parent text element.
