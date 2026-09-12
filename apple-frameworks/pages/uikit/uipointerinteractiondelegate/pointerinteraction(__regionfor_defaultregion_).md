> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerinteractiondelegate/pointerinteraction(_:regionfor:defaultregion:)](https://developer.apple.com/documentation/uikit/uipointerinteractiondelegate/pointerinteraction(_:regionfor:defaultregion:))

# pointerInteraction(\_:regionFor:defaultRegion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Asks the delegate for a region as the pointer moves within the interaction’s view.

## Declaration

```swift
optional func pointerInteraction(_ interaction: UIPointerInteraction, regionFor request: UIPointerRegionRequest, defaultRegion: UIPointerRegion) -> UIPointerRegion?
```

## Parameters

- `interaction`: This [UIPointerInteraction](../uipointerinteraction.md).
- `request`: The [UIPointerRegionRequest](../uipointerregionrequest.md) that describes the pointer’s location in the interaction’s view.
- `defaultRegion`: The [UIPointerRegion](../uipointerregion.md) that represents the entire surface of the interaction’s view.

<a id="return-value"></a>

## Return Value

A `UIPointerRegion` in which to apply a pointer style. Return `nil` to indicate that this interaction typically doesn’t customize the pointer for the current location.

## See Also

### Defining pointer styles for regions

- [pointerInteraction(\_:styleFor:)](pointerinteraction%28__stylefor_%29.md): Asks the delegate for a pointer style after an interaction receives a new region.

# pointerInteraction:regionForRequest:defaultRegion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

Asks the delegate for a region as the pointer moves within the interaction’s view.

## Declaration

```objectivec
- (UIPointerRegion *) pointerInteraction:(UIPointerInteraction *) interaction regionForRequest:(UIPointerRegionRequest *) request defaultRegion:(UIPointerRegion *) defaultRegion;
```

## Parameters

- `interaction`: This [UIPointerInteraction](../uipointerinteraction.md).
- `request`: The [UIPointerRegionRequest](../uipointerregionrequest.md) that describes the pointer’s location in the interaction’s view.
- `defaultRegion`: The [UIPointerRegion](../uipointerregion.md) that represents the entire surface of the interaction’s view.

<a id="return-value"></a>

## Return Value

A `UIPointerRegion` in which to apply a pointer style. Return `nil` to indicate that this interaction typically doesn’t customize the pointer for the current location.

## See Also

### Defining pointer styles for regions

- [pointerInteraction:styleForRegion:](pointerinteraction%28__stylefor_%29.md): Asks the delegate for a pointer style after an interaction receives a new region.
