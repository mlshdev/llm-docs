> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgcolorretain](https://developer.apple.com/documentation/coregraphics/cgcolorretain)

# CGColorRetain

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a color.

## Declaration

```objectivec
extern CGColorRefCGColorRetain(CGColorRef color);
```

## Parameters

- `color`: The color to retain.

<a id="return-value"></a>

## Return Value

The same color you passed in as the `color` parameter.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRetain](../corefoundation/cfretain.md), except that it does not cause an error if the `color` parameter is `NULL`.

## See Also

### Retaining and Releasing Color Objects

- [CGColorRelease](cgcolorrelease.md): Decrements the retain count of a color.
