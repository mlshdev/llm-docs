> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cglinejoin/miter](https://developer.apple.com/documentation/coregraphics/cglinejoin/miter)

# CGLineJoin.miter (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
case miter
```

<a id="Discussion"></a>

## Discussion

A join with a sharp (angled) corner. Core Graphics draws the outer sides of the lines beyond the endpoint of the path, until they meet. If the length of the miter divided by the line width is greater than the miter limit, a bevel join is used instead. This is the default. To set the miter limit, see [setMiterLimit(\_:)](../cgcontext/setmiterlimit%28__%29.md).

## See Also

### Constants

- [CGLineJoin.round](round.md): A join with a rounded end. Core Graphics draws the line to extend beyond the endpoint of the path. The line ends with a semicircular arc with a radius of 1/2 the line’s width, centered on the endpoint.
- [CGLineJoin.bevel](bevel.md): A join with a squared-off end. Core Graphics draws the line to extend beyond the endpoint of the path, for a distance of 1/2 the line’s width.

# kCGLineJoinMiter (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
kCGLineJoinMiter
```

<a id="Discussion"></a>

## Discussion

A join with a sharp (angled) corner. Core Graphics draws the outer sides of the lines beyond the endpoint of the path, until they meet. If the length of the miter divided by the line width is greater than the miter limit, a bevel join is used instead. This is the default. To set the miter limit, see [CGContextSetMiterLimit](../cgcontext/setmiterlimit%28__%29.md).

## See Also

### Constants

- [kCGLineJoinRound](round.md): A join with a rounded end. Core Graphics draws the line to extend beyond the endpoint of the path. The line ends with a semicircular arc with a radius of 1/2 the line’s width, centered on the endpoint.
- [kCGLineJoinBevel](bevel.md): A join with a squared-off end. Core Graphics draws the line to extend beyond the endpoint of the path, for a distance of 1/2 the line’s width.
