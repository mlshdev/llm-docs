> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/converttoscreencoordinates(_:in:)-9ziiu](https://developer.apple.com/documentation/uikit/uiaccessibility/converttoscreencoordinates(_:in:)-9ziiu)

# convertToScreenCoordinates(\_:in:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Converts the specified rectangle from view coordinates to screen coordinates.

## Declaration

```swift
@MainActor static func convertToScreenCoordinates(_ rect: CGRect, in view: UIView) -> CGRect
```

## Parameters

- `rect`: A rectangle specified in the coordinate system of the specified `view`.
- `view`: The view that contains the specified rectangle. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

The rectangle in screen coordinates.

<a id="Discussion"></a>

## Discussion

Use this function to convert accessibility frame rectangles to screen coordinates.

## See Also

### Conversions

- [convertToScreenCoordinates(\_:in:)](converttoscreencoordinates%28__in_%29-6dx4a.md): Converts the specified path object to screen coordinates and returns a new path object with the results.

# UIAccessibilityConvertFrameToScreenCoordinates (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Converts the specified rectangle from view coordinates to screen coordinates.

## Declaration

```objectivec
extern CGRect UIAccessibilityConvertFrameToScreenCoordinates(CGRect rect, UIView *view);
```

## Parameters

- `rect`: A rectangle specified in the coordinate system of the specified `view`.
- `view`: The view that contains the specified rectangle. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

The rectangle in screen coordinates.

<a id="Discussion"></a>

## Discussion

Use this function to convert accessibility frame rectangles to screen coordinates.

## See Also

### Conversions

- [UIAccessibilityConvertPathToScreenCoordinates](converttoscreencoordinates%28__in_%29-6dx4a.md): Converts the specified path object to screen coordinates and returns a new path object with the results.
