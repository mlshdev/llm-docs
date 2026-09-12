> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscribers/demand/-(_:_:)-1r0gm](https://developer.apple.com/documentation/combine/subscribers/demand/-(_:_:)-1r0gm)

# -(\_:\_:)

**Framework:** Combine  
**Kind:** Operator  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns the result of subtracting one demand from another.

## Declaration

```swift
static func - (lhs: Subscribers.Demand, rhs: Subscribers.Demand) -> Subscribers.Demand
```

<a id="discussion"></a>

## Discussion

When subtracting any value (including `.unlimited`) from `.unlimited`, the result is still `.unlimited`. Subtracting `.unlimited` from any value (except `.unlimited`) results in `.max(0)`. A negative demand is impossible; when an operation would result in a negative value, Combine adjusts the value to `.max(0)`.

## See Also

### Performing mathematical operations

- [\*(\_:\_:)](_%28____%29.md): Returns the result of multiplying a demand by an integer.
- [\*=(\_:\_:)](_=%28____%29.md): Multiplies a demand by an integer, and assigns the result to the demand.
- [+(\_:\_:)](+%28____%29-2hdad.md): Returns the result of adding two demands. When adding any value to `.unlimited`, the result is `.unlimited`.
- [+(\_:\_:)](+%28____%29-902we.md): Returns the result of adding an integer to a demand.
- [+=(\_:\_:)](+=%28____%29-20lis.md): Adds two demands, and assigns the result to the first demand.
- [+=(\_:\_:)](+=%28____%29-3k1hv.md): Adds an integer to a demand, and assigns the result to the demand.
- [-(\_:\_:)](-%28____%29-6mw4s.md): Returns the result of subtracting an integer from a demand.
- [-=(\_:\_:)](-=%28____%29-1d0m9.md): Subtracts one demand from another, and assigns the result to the first demand.
- [-=(\_:\_:)](-=%28____%29-9pwnc.md): Subtracts an integer from a demand, and assigns the result to the demand.
