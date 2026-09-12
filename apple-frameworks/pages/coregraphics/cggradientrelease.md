> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cggradientrelease](https://developer.apple.com/documentation/coregraphics/cggradientrelease)

# CGGradientRelease

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decrements the retain count of a CGGradient object.

## Declaration

```objectivec
extern void CGGradientRelease(CGGradientRef gradient);
```

## Parameters

- `gradient`: The gradient object to release.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRelease](../corefoundation/cfrelease.md), except that it does not cause an error if the `gradient` parameter is `NULL`.

## See Also

### Retaining and Releasing a Gradient

- [CGGradientRetain](cggradientretain.md): Increments the retain count of a CGGradient object.
