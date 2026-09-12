> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscribers/demand/+=(_:_:)-3k1hv](https://developer.apple.com/documentation/combine/subscribers/demand/+=(_:_:)-3k1hv)

# +=(\_:\_:)

**Framework:** Combine  
**Kind:** Operator  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Adds an integer to a demand, and assigns the result to the demand.

## Declaration

```swift
static func += (lhs: inout Subscribers.Demand, rhs: Int)
```

<a id="discussion"></a>

## Discussion

When adding any value to `.unlimited`, the result is `.unlimited`.

## See Also

### Performing mathematical operations

- [\*(\_:\_:)](_%28____%29.md): Returns the result of multiplying a demand by an integer.
- [\*=(\_:\_:)](_=%28____%29.md): Multiplies a demand by an integer, and assigns the result to the demand.
- [+(\_:\_:)](+%28____%29-2hdad.md): Returns the result of adding two demands. When adding any value to `.unlimited`, the result is `.unlimited`.
- [+(\_:\_:)](+%28____%29-902we.md): Returns the result of adding an integer to a demand.
- [+=(\_:\_:)](+=%28____%29-20lis.md): Adds two demands, and assigns the result to the first demand.
- [-(\_:\_:)](-%28____%29-1r0gm.md): Returns the result of subtracting one demand from another.
- [-(\_:\_:)](-%28____%29-6mw4s.md): Returns the result of subtracting an integer from a demand.
- [-=(\_:\_:)](-=%28____%29-1d0m9.md): Subtracts one demand from another, and assigns the result to the first demand.
- [-=(\_:\_:)](-=%28____%29-9pwnc.md): Subtracts an integer from a demand, and assigns the result to the demand.
