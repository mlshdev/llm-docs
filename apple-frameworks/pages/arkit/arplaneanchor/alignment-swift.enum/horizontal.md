> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneanchor/alignment-swift.enum/horizontal](https://developer.apple.com/documentation/arkit/arplaneanchor/alignment-swift.enum/horizontal)

# ARPlaneAnchor.Alignment.horizontal (Swift)

**Framework:** ARKit  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The plane is perpendicular to gravity.

## Declaration

```swift
case horizontal
```

<a id="Discussion"></a>

## Discussion

The [transform](../../aranchor/transform.md) property for a horizontal plane anchor includes no rotation about the x- or z-axis. Thus, using this anchor’s transform to place a 3D model asset in your scene results in the model appearing “right side up”.

## See Also

### Alignment Values

- [ARPlaneAnchor.Alignment.vertical](vertical.md): The plane is parallel to gravity.

# ARPlaneAnchorAlignmentHorizontal (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS

The plane is perpendicular to gravity.

## Declaration

```objectivec
ARPlaneAnchorAlignmentHorizontal
```

<a id="Discussion"></a>

## Discussion

The [transform](../../aranchor/transform.md) property for a horizontal plane anchor includes no rotation about the x- or z-axis. Thus, using this anchor’s transform to place a 3D model asset in your scene results in the model appearing “right side up”.

## See Also

### Alignment Values

- [ARPlaneAnchorAlignmentVertical](vertical.md): The plane is parallel to gravity.
