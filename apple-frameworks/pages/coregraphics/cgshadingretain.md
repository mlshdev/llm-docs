> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgshadingretain](https://developer.apple.com/documentation/coregraphics/cgshadingretain)

# CGShadingRetain

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a shading object.

## Declaration

```objectivec
extern CGShadingRefCGShadingRetain(CGShadingRef shading);
```

## Parameters

- `shading`: The shading object to retain.

<a id="return-value"></a>

## Return Value

The same shading object you passed in as the `shading` parameter.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRetain](../corefoundation/cfretain.md), except that it does not cause an error if the `shading` parameter is `NULL`.

## See Also

### Retaining and Releasing Shading Objects

- [CGShadingRelease](cgshadingrelease.md): Decrements the retain count of a shading object.
