> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/discreteformatstyle/discreteinput(after:)](https://developer.apple.com/documentation/foundation/discreteformatstyle/discreteinput(after:))

# discreteInput(after:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

The next discretization boundary after the given input.

## Declaration

```swift
func discreteInput(after input: Self.FormatInput) -> Self.FormatInput?
```

<a id="return-value"></a>

## Return Value

For most `input`s, the method returns the “smallest” value “greater” than `input` for which the style produces a different [FormatOutput](../formatstyle/formatoutput.md), or `nil` if no such value exists. For some input values, the function may also return a value “greater” than `input` for which the style still produces the same [FormatOutput](../formatstyle/formatoutput.md) as for `input`.

<a id="discussion"></a>

## Discussion

Use this function to determine the next “greater” input that warrants updating the formatted output. The following example prints all possible outputs the format style can produce upwards starting from the `startInput`:

```swift
var previousInput = startInput
while let nextInput = style.discreteInput(after: previousInput) {
    print(style.format(nextInput))
    previousInput = nextInput
}
```
