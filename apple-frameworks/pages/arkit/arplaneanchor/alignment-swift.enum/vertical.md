> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneanchor/alignment-swift.enum/vertical](https://developer.apple.com/documentation/arkit/arplaneanchor/alignment-swift.enum/vertical)

# ARPlaneAnchor.Alignment.vertical (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 11.3+ · iPadOS 11.3+

The plane is parallel to gravity.

## Declaration

```swift
case vertical
```

<a id="Discussion"></a>

## Discussion

The [transform](../../aranchor/transform.md) property for a vertical plane anchor includes a rotation component. That is, the transform matrix represents the result of rotating a horizontal plane to match the orientation of the detected surface.

## See Also

### Alignment Values

- [ARPlaneAnchor.Alignment.horizontal](horizontal.md): The plane is perpendicular to gravity.

# ARPlaneAnchorAlignmentVertical (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.3+ · iPadOS 11.3+

The plane is parallel to gravity.

## Declaration

```objectivec
ARPlaneAnchorAlignmentVertical
```

<a id="Discussion"></a>

## Discussion

The [transform](../../aranchor/transform.md) property for a vertical plane anchor includes a rotation component. That is, the transform matrix represents the result of rotating a horizontal plane to match the orientation of the detected surface.

## See Also

### Alignment Values

- [ARPlaneAnchorAlignmentHorizontal](horizontal.md): The plane is perpendicular to gravity.
