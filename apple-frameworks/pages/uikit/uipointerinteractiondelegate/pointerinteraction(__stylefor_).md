> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerinteractiondelegate/pointerinteraction(_:stylefor:)](https://developer.apple.com/documentation/uikit/uipointerinteractiondelegate/pointerinteraction(_:stylefor:))

# pointerInteraction(\_:styleFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Asks the delegate for a pointer style after an interaction receives a new region.

## Declaration

```swift
optional func pointerInteraction(_ interaction: UIPointerInteraction, styleFor region: UIPointerRegion) -> UIPointerStyle?
```

## Parameters

- `interaction`: This [UIPointerInteraction](../uipointerinteraction.md).
- `region`: The [UIPointerRegion](../uipointerregion.md) that represents the entire surface of the interaction’s view.

<a id="return-value"></a>

## Return Value

A `UIPointerStyle` describing the desired hover effect or pointer appearance for the given `UIPointerRegion`.

## See Also

### Defining pointer styles for regions

- [pointerInteraction(\_:regionFor:defaultRegion:)](pointerinteraction%28__regionfor_defaultregion_%29.md): Asks the delegate for a region as the pointer moves within the interaction’s view.

# pointerInteraction:styleForRegion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Asks the delegate for a pointer style after an interaction receives a new region.

## Declaration

```objectivec
- (UIPointerStyle *) pointerInteraction:(UIPointerInteraction *) interaction styleForRegion:(UIPointerRegion *) region;
```

## Parameters

- `interaction`: This [UIPointerInteraction](../uipointerinteraction.md).
- `region`: The [UIPointerRegion](../uipointerregion.md) that represents the entire surface of the interaction’s view.

<a id="return-value"></a>

## Return Value

A `UIPointerStyle` describing the desired hover effect or pointer appearance for the given `UIPointerRegion`.

## See Also

### Defining pointer styles for regions

- [pointerInteraction:regionForRequest:defaultRegion:](pointerinteraction%28__regionfor_defaultregion_%29.md): Asks the delegate for a region as the pointer moves within the interaction’s view.
