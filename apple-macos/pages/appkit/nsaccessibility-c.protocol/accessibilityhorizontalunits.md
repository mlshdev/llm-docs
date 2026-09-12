> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsaccessibility-c.protocol/accessibilityhorizontalunits](https://developer.apple.com/documentation/appkit/nsaccessibility-c.protocol/accessibilityhorizontalunits)

# accessibilityHorizontalUnits

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

The units that the layout area uses for horizontal values.

## Declaration

```objectivec
@property NSAccessibilityUnits accessibilityHorizontalUnits;
```

<a id="Discussion"></a>

## Discussion

For a list of possible values, see [NSAccessibilityUnits](../nsaccessibilityunits.md).

## See Also

### Configuring layout

- [accessibilityLayoutPointForScreenPoint:](../nsaccessibilityprotocol/accessibilitylayoutpoint%28forscreenpoint_%29.md): Converts the provided point in screen coordinates to a point in the layout area’s coordinate system.
- [accessibilityLayoutSizeForScreenSize:](../nsaccessibilityprotocol/accessibilitylayoutsize%28forscreensize_%29.md): Converts the provided size in screen coordinates to a size in the layout area’s coordinate system.
- [accessibilityScreenPointForLayoutPoint:](../nsaccessibilityprotocol/accessibilityscreenpoint%28forlayoutpoint_%29.md): Converts the provided point in the layout area’s coordinates to a point in the screen’s coordinate system.
- [accessibilityScreenSizeForLayoutSize:](../nsaccessibilityprotocol/accessibilityscreensize%28forlayoutsize_%29.md): Converts the provided size in the layout area’s coordinates to a size in the screen’s coordinate system.
- [accessibilityHandles](accessibilityhandles.md): The drag handle accessibility elements for the layout item element.
- [accessibilityHorizontalUnitDescription](accessibilityhorizontalunitdescription.md): A description of the layout area’s horizontal units.
- [accessibilityVerticalUnits](accessibilityverticalunits.md): The units that the layout area uses for vertical values.
- [accessibilityVerticalUnitDescription](accessibilityverticalunitdescription.md): A description of the layout area’s vertical units.
