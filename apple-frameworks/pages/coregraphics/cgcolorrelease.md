> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorrelease](https://developer.apple.com/documentation/coregraphics/cgcolorrelease)

# CGColorRelease

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Decrements the retain count of a color.

## Declaration

```objectivec
extern void CGColorRelease(CGColorRef color);
```

## Parameters

- `color`: The color to release.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRelease](../corefoundation/cfrelease.md), except that it does not cause an error if the `color` parameter is `NULL`.

## See Also

### Retaining and Releasing Color Objects

- [CGColorRetain](cgcolorretain.md): Increments the retain count of a color.
