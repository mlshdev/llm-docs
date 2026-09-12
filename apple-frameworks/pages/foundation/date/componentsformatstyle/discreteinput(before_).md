> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/componentsformatstyle/discreteinput(before:)](https://developer.apple.com/documentation/foundation/date/componentsformatstyle/discreteinput(before:))

# discreteInput(before:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

The next discretization boundary before the given input.

## Declaration

```swift
func discreteInput(before input: Range<Date>) -> Range<Date>?
```

<a id="return-value"></a>

## Return Value

If `isPositve` is true, the range `input.lowerBound..<x`, where `x` is the greatest date that is smaller than `input.upperBound` for which this style might produce a different [FormatOutput](../../formatstyle/formatoutput.md). The function may return `nil` if there is no such value greater or equal to `input.lowerBound`. If [isPositive](ispositive.md) is false, the range `x..<input.upperBound`, where `x` is the greatest date that is smaller than `input.lowerBound` for which this style might produce a different [FormatOutput](../../formatstyle/formatoutput.md).

<a id="discussion"></a>

## Discussion

Use this function to determine the next smaller input that warrants updating the formatted output. If [isPositive](ispositive.md) is true, the returned range has the same `lowerBound` as the `input`, but reduces the `upperBound` so that the returned range produces the next smaller output. If [isPositive](ispositive.md) is false, the returned range has the same `upperBound` as the `input` and a smaller `lowerBound`.

```
 let style = Date.ComponentsFormatStyle(style: .wide)
 print(style.format(start..<end)) // "1 hour"
 guard let next = style.discreteInput(before: start..<end) else {
     return
 }
 print(style.format(next)) // "59 minutes, 59 seconds"
```
