> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtime/convertscale(_:method:)](https://developer.apple.com/documentation/coremedia/cmtime/convertscale(_:method:))

# convertScale(\_:method:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Converts the source time to a new timescale using the specified rounding method.

## Declaration

```swift
func convertScale(_ newTimescale: Int32, method: CMTimeRoundingMethod) -> CMTime
```

## Parameters

- `newTimescale`: The timescale to use for the converted time.
- `method`: The rounding method to apply.

<a id="return-value"></a>

## Return Value

A converted time value.

## See Also

### Changing the Timescale

- [CMTimeRoundingMethod](../cmtimeroundingmethod.md): An enumeration of rounding methods to use when performing time calculations.
