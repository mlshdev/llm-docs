> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cglinejoin/bevel](https://developer.apple.com/documentation/coregraphics/cglinejoin/bevel)

# CGLineJoin.bevel (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A join with a squared-off end. Core Graphics draws the line to extend beyond the endpoint of the path, for a distance of 1/2 the line’s width.

## Declaration

```swift
case bevel
```

## See Also

### Constants

- [CGLineJoin.miter](miter.md)
- [CGLineJoin.round](round.md): A join with a rounded end. Core Graphics draws the line to extend beyond the endpoint of the path. The line ends with a semicircular arc with a radius of 1/2 the line’s width, centered on the endpoint.

# kCGLineJoinBevel (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A join with a squared-off end. Core Graphics draws the line to extend beyond the endpoint of the path, for a distance of 1/2 the line’s width.

## Declaration

```objectivec
kCGLineJoinBevel
```

## See Also

### Constants

- [kCGLineJoinMiter](miter.md)
- [kCGLineJoinRound](round.md): A join with a rounded end. Core Graphics draws the line to extend beyond the endpoint of the path. The line ends with a semicircular arc with a radius of 1/2 the line’s width, centered on the endpoint.
