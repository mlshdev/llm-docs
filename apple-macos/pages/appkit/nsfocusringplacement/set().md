> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfocusringplacement/set()](https://developer.apple.com/documentation/appkit/nsfocusringplacement/set())

# set() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Specifies how the system draws the focus ring.

## Declaration

```swift
func set()
```

<a id="Discussion"></a>

## Discussion

Use [NSFocusRingPlacement.above](above.md) to draw the focus ring over an image, use [NSFocusRingPlacement.below](below.md) to draw the focus ring under text, and use [NSFocusRingPlacement.only](only.md) if you don’t have an image or text. For the [NSFocusRingPlacement.only](only.md) case, fills a shape to add the focus ring around the shape.

Note that the focus ring may actually be drawn outside the view but will be clipped to any clipping superview or the window content view.

## See Also

### Drawing Focus Rings

- [NSFocusRingPlacement](../nsfocusringplacement.md): Constants that indicate how the system draws the focus ring.
- [NSFocusRingType](../nsfocusringtype.md): Constants that describe the style of the focus ring.

# NSSetFocusRingStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Specifies how the system draws the focus ring.

## Declaration

```objectivec
extern void NSSetFocusRingStyle(NSFocusRingPlacement placement);
```

## Parameters

- `placement`: Specifies how you want the focus ring to be drawn.

<a id="Discussion"></a>

## Discussion

Use [NSFocusRingAbove](above.md) to draw the focus ring over an image, use [NSFocusRingBelow](below.md) to draw the focus ring under text, and use [NSFocusRingOnly](only.md) if you don’t have an image or text. For the [NSFocusRingOnly](only.md) case, fills a shape to add the focus ring around the shape.

Note that the focus ring may actually be drawn outside the view but will be clipped to any clipping superview or the window content view.

## See Also

### Drawing Focus Rings

- [NSFocusRingPlacement](../nsfocusringplacement.md): Constants that indicate how the system draws the focus ring.
- [NSFocusRingType](../nsfocusringtype.md): Constants that describe the style of the focus ring.
