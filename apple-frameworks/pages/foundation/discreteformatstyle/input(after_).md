> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/discreteformatstyle/input(after:)](https://developer.apple.com/documentation/foundation/discreteformatstyle/input(after:))

# input(after:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

The next input value after the given input.

## Declaration

```swift
func input(after input: Self.FormatInput) -> Self.FormatInput?
```

<a id="return-value"></a>

## Return Value

The next “greater” input value that can be represented by [FormatInput](../formatstyle/formatinput.md) or an underlying representation the format style uses internally.

<a id="discussion"></a>

## Discussion

Use this function to determine if the return value provided by [discreteInput(before:)](discreteinput%28before_%29.md) is precise enough for your use case for any input `y`:

```swift
guard let x = style.discreteInput(before: y) else {
    return
}

let z = style.input(after: x) ?? y
```

If the distance between `x` and `z` is too large for the precision you require, you may want to manually probe [format(\_:)](../formatstyle/format%28__%29.md) at a higher rate in that interval, as there is no guarantee for what the output will be in that interval.

## Default Implementations

### DiscreteFormatStyle Implementations

- [input(after:)](input%28after_%29-3nkyz.md): Conforms when `FormatInput` is `Duration`. The next input value after the given input.
- [input(after:)](input%28after_%29-4op7c.md): Conforms when `FormatInput` conforms to `FloatingPoint`. The next input value after the given input.
- [input(after:)](input%28after_%29-8exd1.md): Conforms when `FormatInput` conforms to `FixedWidthInteger`. The next input value after the given input.
- [input(after:)](input%28after_%29-9h7f8.md): Conforms when `FormatInput` is `Date`. The next input value after the given input.
