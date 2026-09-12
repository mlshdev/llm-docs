> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/unitcurve/easeout](https://developer.apple.com/documentation/swiftui/unitcurve/easeout)

# easeOut

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A bezier curve that starts out quickly, then slows down as it approaches the end.

## Declaration

```swift
static let easeOut: UnitCurve
```

<a id="discussion"></a>

## Discussion

The start and end control points are located at (x: 0, y: 0) and (x: 0.58, y: 1).

## See Also

### Getting easing curves

- [easeIn](easein.md): A bezier curve that starts out slowly, then speeds up as it finishes.
- [easeInOut](easeinout.md): A bezier curve that starts out slowly, speeds up over the middle, then slows down again as it approaches the end.
- [circularEaseIn](circulareasein.md): A curve that starts out slowly, then speeds up as it finishes.
- [circularEaseOut](circulareaseout.md): A circular curve that starts out quickly, then slows down as it approaches the end.
- [circularEaseInOut](circulareaseinout.md): A circular curve that starts out slowly, speeds up over the middle, then slows down again as it approaches the end.
