> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibilityprotocol/accessibilitylayoutsize(forscreensize:)](https://developer.apple.com/documentation/appkit/nsaccessibilityprotocol/accessibilitylayoutsize(forscreensize:))

# accessibilityLayoutSize(forScreenSize:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Converts the provided size in screen coordinates to a size in the layout area’s coordinate system.

## Declaration

```swift
func accessibilityLayoutSize(forScreenSize size: NSSize) -> NSSize
```

## Parameters

- `size`: A size in the screen’s coordinate system.

<a id="return-value"></a>

## Return Value

A size in the layout area’s coordinate system.

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
- [accessibilityScreenPoint(forLayoutPoint:)](accessibilityscreenpoint%28forlayoutpoint_%29.md): Converts the provided point in the layout area’s coordinates to a point in the screen’s coordinate system.
- [accessibilityScreenSize(forLayoutSize:)](accessibilityscreensize%28forlayoutsize_%29.md): Converts the provided size in the layout area’s coordinates to a size in the screen’s coordinate system.

# accessibilityLayoutSizeForScreenSize: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10+

Converts the provided size in screen coordinates to a size in the layout area’s coordinate system.

## Declaration

```objectivec
- (NSSize) accessibilityLayoutSizeForScreenSize:(NSSize) size;
```

## Parameters

- `size`: A size in the screen’s coordinate system.

<a id="return-value"></a>

## Return Value

A size in the layout area’s coordinate system.

## See Also

### Configuring layout

- [accessibilityLayoutPointForScreenPoint:](accessibilitylayoutpoint%28forscreenpoint_%29.md): Converts the provided point in screen coordinates to a point in the layout area’s coordinate system.
- [accessibilityScreenPointForLayoutPoint:](accessibilityscreenpoint%28forlayoutpoint_%29.md): Converts the provided point in the layout area’s coordinates to a point in the screen’s coordinate system.
- [accessibilityScreenSizeForLayoutSize:](accessibilityscreensize%28forlayoutsize_%29.md): Converts the provided size in the layout area’s coordinates to a size in the screen’s coordinate system.
- [accessibilityHandles](../nsaccessibility-c.protocol/accessibilityhandles.md): The drag handle accessibility elements for the layout item element.
- [accessibilityHorizontalUnits](../nsaccessibility-c.protocol/accessibilityhorizontalunits.md): The units that the layout area uses for horizontal values.
- [accessibilityHorizontalUnitDescription](../nsaccessibility-c.protocol/accessibilityhorizontalunitdescription.md): A description of the layout area’s horizontal units.
- [accessibilityVerticalUnits](../nsaccessibility-c.protocol/accessibilityverticalunits.md): The units that the layout area uses for vertical values.
- [accessibilityVerticalUnitDescription](../nsaccessibility-c.protocol/accessibilityverticalunitdescription.md): A description of the layout area’s vertical units.
