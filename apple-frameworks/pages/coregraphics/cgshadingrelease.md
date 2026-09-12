> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgshadingrelease](https://developer.apple.com/documentation/coregraphics/cgshadingrelease)

# CGShadingRelease

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decrements the retain count of a shading object.

## Declaration

```objectivec
extern void CGShadingRelease(CGShadingRef shading);
```

## Parameters

- `shading`: The shading object to release.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRelease](../corefoundation/cfrelease.md), except that it does not cause an error if the `shading` parameter is `NULL`.

## See Also

### Retaining and Releasing Shading Objects

- [CGShadingRetain](cgshadingretain.md): Increments the retain count of a shading object.
