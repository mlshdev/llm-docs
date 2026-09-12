> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cglinecap/round](https://developer.apple.com/documentation/coregraphics/cglinecap/round)

# CGLineCap.round (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A line with a rounded end. Core Graphics draws the line to extend beyond the endpoint of the path. The line ends with a semicircular arc with a radius of 1/2 the line’s width, centered on the endpoint.

## Declaration

```swift
case round
```

## See Also

### Constants

- [CGLineCap.butt](butt.md): A line with a squared-off end. Core Graphics draws the line to extend only to the exact endpoint of the path. This is the default.
- [CGLineCap.square](square.md): A line with a squared-off end. Core Graphics extends the line beyond the endpoint of the path for a distance equal to half the line width.

# kCGLineCapRound (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A line with a rounded end. Core Graphics draws the line to extend beyond the endpoint of the path. The line ends with a semicircular arc with a radius of 1/2 the line’s width, centered on the endpoint.

## Declaration

```objectivec
kCGLineCapRound
```

## See Also

### Constants

- [kCGLineCapButt](butt.md): A line with a squared-off end. Core Graphics draws the line to extend only to the exact endpoint of the path. This is the default.
- [kCGLineCapSquare](square.md): A line with a squared-off end. Core Graphics extends the line beyond the endpoint of the path for a distance equal to half the line width.
