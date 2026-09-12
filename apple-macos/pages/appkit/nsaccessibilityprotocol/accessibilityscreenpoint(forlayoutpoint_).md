> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprotocol/accessibilityscreenpoint(forlayoutpoint:)](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/accessibilityscreenpoint(forlayoutpoint:))

# accessibilityScreenPoint(forLayoutPoint:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Converts the provided point in the layout area’s coordinates to a point in the screen’s coordinate system.

## Declaration

```swift
func accessibilityScreenPoint(forLayoutPoint point: NSPoint) -> NSPoint
```

## Parameters

- `point`: A point in the layout area’s coordinate system.

<a id="return-value"></a>

## Return Value

A point in the screen’s coordinate system.

## See Also

### Configuring layout

- [accessibilityHandles()](accessibilityhandles%28%29.md): Returns the drag handle elements for the layout item element.
- [setAccessibilityHandles(\_:)](setaccessibilityhandles%28__%29.md): Sets the drag handle accessibility elements for the layout item element.
- [accessibilityHorizontalUnits()](accessibilityhorizontalunits%28%29.md): Returns the units that the layout area uses for horizontal values.
- [setAccessibilityHorizontalUnits(\_:)](setaccessibilityhorizontalunits%28__%29.md): Sets the units that the layout area uses for horizontal values.
- [accessibilityHorizontalUnitDescription()](accessibilityhorizontalunitdescription%28%29.md): Returns the description of the layout area’s horizontal units.
- [setAccessibilityHorizontalUnitDescription(\_:)](setaccessibilityhorizontalunitdescription%28__%29.md): Sets the description of the layout area’s horizontal units.
- [accessibilityVerticalUnits()](accessibilityverticalunits%28%29.md): Returns the units that the layout area uses for vertical values.
- [setAccessibilityVerticalUnits(\_:)](setaccessibilityverticalunits%28__%29.md): Sets the units that the layout area uses for vertical values.
- [accessibilityVerticalUnitDescription()](accessibilityverticalunitdescription%28%29.md): Returns the description of the layout area’s vertical units.
- [setAccessibilityVerticalUnitDescription(\_:)](setaccessibilityverticalunitdescription%28__%29.md): Sets the description of the layout area’s vertical units.
- [accessibilityLayoutPoint(forScreenPoint:)](accessibilitylayoutpoint%28forscreenpoint_%29.md): Converts the provided point in screen coordinates to a point in the layout area’s coordinate system.
- [accessibilityLayoutSize(forScreenSize:)](accessibilitylayoutsize%28forscreensize_%29.md): Converts the provided size in screen coordinates to a size in the layout area’s coordinate system.
- [accessibilityScreenSize(forLayoutSize:)](accessibilityscreensize%28forlayoutsize_%29.md): Converts the provided size in the layout area’s coordinates to a size in the screen’s coordinate system.

# accessibilityScreenPointForLayoutPoint: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Converts the provided point in the layout area’s coordinates to a point in the screen’s coordinate system.

## Declaration

```objectivec
- (NSPoint) accessibilityScreenPointForLayoutPoint:(NSPoint) point;
```

## Parameters

- `point`: A point in the layout area’s coordinate system.

<a id="return-value"></a>

## Return Value

A point in the screen’s coordinate system.

## See Also

### Configuring layout

- [accessibilityLayoutPointForScreenPoint:](accessibilitylayoutpoint%28forscreenpoint_%29.md): Converts the provided point in screen coordinates to a point in the layout area’s coordinate system.
- [accessibilityLayoutSizeForScreenSize:](accessibilitylayoutsize%28forscreensize_%29.md): Converts the provided size in screen coordinates to a size in the layout area’s coordinate system.
- [accessibilityScreenSizeForLayoutSize:](accessibilityscreensize%28forlayoutsize_%29.md): Converts the provided size in the layout area’s coordinates to a size in the screen’s coordinate system.
- [accessibilityHandles](../nsaccessibility-c.protocol/accessibilityhandles.md): The drag handle accessibility elements for the layout item element.
- [accessibilityHorizontalUnits](../nsaccessibility-c.protocol/accessibilityhorizontalunits.md): The units that the layout area uses for horizontal values.
- [accessibilityHorizontalUnitDescription](../nsaccessibility-c.protocol/accessibilityhorizontalunitdescription.md): A description of the layout area’s horizontal units.
- [accessibilityVerticalUnits](../nsaccessibility-c.protocol/accessibilityverticalunits.md): The units that the layout area uses for vertical values.
- [accessibilityVerticalUnitDescription](../nsaccessibility-c.protocol/accessibilityverticalunitdescription.md): A description of the layout area’s vertical units.
