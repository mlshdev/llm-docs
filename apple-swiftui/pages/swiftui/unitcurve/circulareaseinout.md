> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/unitcurve/circulareaseinout](https://developer.apple.com/documentation/swiftui/unitcurve/circulareaseinout)

# circularEaseInOut

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A circular curve that starts out slowly, speeds up over the middle, then slows down again as it approaches the end.

## Declaration

```swift
static let circularEaseInOut: UnitCurve
```

<a id="discussion"></a>

## Discussion

The shape of the curve is defined by a piecewise combination of `circularEaseIn` and `circularEaseOut`.

## See Also

### Getting easing curves

- [easeIn](easein.md): A bezier curve that starts out slowly, then speeds up as it finishes.
- [easeOut](easeout.md): A bezier curve that starts out quickly, then slows down as it approaches the end.
- [easeInOut](easeinout.md): A bezier curve that starts out slowly, speeds up over the middle, then slows down again as it approaches the end.
- [circularEaseIn](circulareasein.md): A curve that starts out slowly, then speeds up as it finishes.
- [circularEaseOut](circulareaseout.md): A circular curve that starts out quickly, then slows down as it approaches the end.
