> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/axisdirectionconvention/rightupback](https://developer.apple.com/documentation/compositorservices/axisdirectionconvention/rightupback)

# AxisDirectionConvention.rightUpBack (Swift)

**Framework:** Compositor Services  
**Kind:** Case  
**Availability:** macOS 26.0+ · visionOS 2.0+

The convention that uses a counterclockwise winding order and positions the leading pixel at the top-left corner of the view.

## Declaration

```swift
case rightUpBack
```

<a id="discussion"></a>

## Discussion

This convention positions the left-most pixel at the left edge of the view and the top-most pixel at the top edge of the view, and the system renders with a counterclockwise winding order.

## See Also

### Getting the axis directions

- [AxisDirectionConvention.rightUpForward](rightupforward.md): The convention that uses a clockwise winding order and positions the leading pixel at the top-left corner of the view.
- [AxisDirectionConvention.rightDownBack](rightdownback.md): The convention that uses a counterclockwise winding order and positions the leading pixel at the bottom-left corner of the view.
- [AxisDirectionConvention.rightDownForward](rightdownforward.md): The convention that uses a clockwise winding order and positions the leading pixel at the bottom-left corner of the view.

# cp_axis_direction_convention_right_up_back (Objective-C)

**Framework:** Compositor Services  
**Kind:** Enumeration Case  
**Availability:** macOS 26.0+ · visionOS 2.0+

The convention that uses a counterclockwise winding order and positions the leading pixel at the top-left corner of the view.

## Declaration

```objectivec
cp_axis_direction_convention_right_up_back
```

<a id="discussion"></a>

## Discussion

This convention positions the left-most pixel at the left edge of the view and the top-most pixel at the top edge of the view, and the system renders with a counterclockwise winding order.

## See Also

### Getting the axis directions

- [cp_axis_direction_convention_right_up_forward](rightupforward.md): The convention that uses a clockwise winding order and positions the leading pixel at the top-left corner of the view.
- [cp_axis_direction_convention_right_down_back](rightdownback.md): The convention that uses a counterclockwise winding order and positions the leading pixel at the bottom-left corner of the view.
- [cp_axis_direction_convention_right_down_forward](rightdownforward.md): The convention that uses a clockwise winding order and positions the leading pixel at the bottom-left corner of the view.
