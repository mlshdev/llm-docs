> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibility/converttoscreencoordinates(_:in:)-6dx4a](https://developer.apple.com/documentation/uikit/uiaccessibility/converttoscreencoordinates(_:in:)-6dx4a)

# convertToScreenCoordinates(\_:in:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Converts the specified path object to screen coordinates and returns a new path object with the results.

## Declaration

```swift
@MainActor static func convertToScreenCoordinates(_ path: UIBezierPath, in view: UIView) -> UIBezierPath
```

## Parameters

- `path`: The path object that you want to convert. The coordinate values used to create this path object should be relative to the coordinate system of the specified `view`. This parameter must not be `nil`.
- `view`: The view whose coordinate system was used to define the path. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A new path object that has the same shape as `path` but whose points are specified in screen coordinates.

<a id="Discussion"></a>

## Discussion

This function adjusts the points of the path you provide to values that the accessibility system can use. You can use it to convert path objects in use by your app’s user interface before handing them to the accessibility system.

## See Also

### Conversions

- [convertToScreenCoordinates(\_:in:)](converttoscreencoordinates%28__in_%29-9ziiu.md): Converts the specified rectangle from view coordinates to screen coordinates.

# UIAccessibilityConvertPathToScreenCoordinates (Objective-C)

**Framework:** UIKit  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Converts the specified path object to screen coordinates and returns a new path object with the results.

## Declaration

```objectivec
extern UIBezierPath *UIAccessibilityConvertPathToScreenCoordinates(UIBezierPath *path, UIView *view);
```

## Parameters

- `path`: The path object that you want to convert. The coordinate values used to create this path object should be relative to the coordinate system of the specified `view`. This parameter must not be `nil`.
- `view`: The view whose coordinate system was used to define the path. This parameter must not be `nil`.

<a id="return-value"></a>

## Return Value

A new path object that has the same shape as `path` but whose points are specified in screen coordinates.

<a id="Discussion"></a>

## Discussion

This function adjusts the points of the path you provide to values that the accessibility system can use. You can use it to convert path objects in use by your app’s user interface before handing them to the accessibility system.

## See Also

### Conversions

- [UIAccessibilityConvertFrameToScreenCoordinates](converttoscreencoordinates%28__in_%29-9ziiu.md): Converts the specified rectangle from view coordinates to screen coordinates.
