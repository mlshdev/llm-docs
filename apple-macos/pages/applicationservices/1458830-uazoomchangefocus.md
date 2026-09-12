> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1458830-uazoomchangefocus](https://developer.apple.com/documentation/applicationservices/1458830-uazoomchangefocus)

# UAZoomChangeFocus(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Tells the Universal Access zoom feature where it should focus.

## Declaration

```swift
func UAZoomChangeFocus(_ inRect: UnsafePointer<CGRect>!, _ inHighlightRect: UnsafePointer<CGRect>!, _ inType: UAZoomChangeFocusType) -> OSStatus
```

## Parameters

- `inRect`: The frame of the element in focus, in global 72-dot-per-inch (dpi) coordinates.
- `inHighlightRect`: The frame of the highlighted part of the element in focus, in global 72 dpi coordinates. If the whole element is in focus, and not just a smaller part of it, pass the `inRect` parameter and pass `NULL` for `inHighlightRect`.
- `inType`: A value of type [UAZoomChangeFocusType](uazoomchangefocustype.md).

<a id="return_value"></a>

## Return Value

Returns `noErr` if there were no problems, if Universal Access Zoom is zoomed all the way out, or if the feature is off; returns `paramErr` if `inRect` is `NULL` or if `inType` is out of range.

<a id="discussion"></a>

## Discussion

This function tells Universal Access the frame of the element in focus and the part of the element that should be in focus.

## See Also

### Miscellaneous

- [UAZoomEnabled()](1462288-uazoomenabled.md): Determines if the Universal Access zoom feature is enabled.

# UAZoomChangeFocus (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.4+

Tells the Universal Access zoom feature where it should focus.

## Declaration

```objectivec
OSStatus UAZoomChangeFocus(const CGRect *inRect, const CGRect *inHighlightRect, UAZoomChangeFocusType inType);
```

## Parameters

- `inRect`: The frame of the element in focus, in global 72-dot-per-inch (dpi) coordinates.
- `inHighlightRect`: The frame of the highlighted part of the element in focus, in global 72 dpi coordinates. If the whole element is in focus, and not just a smaller part of it, pass the `inRect` parameter and pass `NULL` for `inHighlightRect`.
- `inType`: A value of type [UAZoomChangeFocusType](uazoomchangefocustype.md).

<a id="return_value"></a>

## Return Value

Returns `noErr` if there were no problems, if Universal Access Zoom is zoomed all the way out, or if the feature is off; returns `paramErr` if `inRect` is `NULL` or if `inType` is out of range.

<a id="discussion"></a>

## Discussion

This function tells Universal Access the frame of the element in focus and the part of the element that should be in focus.

## See Also

### Miscellaneous

- [UAZoomEnabled](1462288-uazoomenabled.md): Determines if the Universal Access zoom feature is enabled.
