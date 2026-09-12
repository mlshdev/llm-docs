> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/unitcurve/inverse](https://developer.apple.com/documentation/swiftui/unitcurve/inverse)

# inverse

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a copy of the curve with its x and y components swapped.

## Declaration

```swift
var inverse: UnitCurve { get }
```

<a id="discussion"></a>

## Discussion

The inverse can be used to solve a curve in reverse: given a known output (y) value, the corresponding input (x) value can be found by using `inverse`:

```swift
let curve = UnitCurve.easeInOut

/// The input time for which an easeInOut curve returns 0.6.
let inputTime = curve.inverse.evaluate(at: 0.6)
```
