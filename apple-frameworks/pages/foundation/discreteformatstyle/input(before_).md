> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/discreteformatstyle/input(before:)](https://developer.apple.com/documentation/foundation/discreteformatstyle/input(before:))

# input(before:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

The next input value before the given input.

## Declaration

```swift
func input(before input: Self.FormatInput) -> Self.FormatInput?
```

<a id="return-value"></a>

## Return Value

The next “smalller” input value that can be represented by [FormatInput](../formatstyle/formatinput.md) or an underlying representation the format style uses internally.

<a id="discussion"></a>

## Discussion

Use this function to determine if the return value provided by [discreteInput(after:)](discreteinput%28after_%29.md) is precise enough for your use case for any input `y`:

```swift
guard let x = style.discreteInput(after: y) else {
    return
}

let z = style.input(before: x) ?? y
```

If the distance between `z` and `x` is too large for the precision you require, you may want to manually probe [format(\_:)](../formatstyle/format%28__%29.md) at a higher rate in that interval, as there is no guarantee for what the output will be in that interval.

## Default Implementations

### DiscreteFormatStyle Implementations

- [input(before:)](input%28before_%29-4vowu.md): Conforms when `FormatInput` conforms to `FloatingPoint`. The next input value before the given input.
- [input(before:)](input%28before_%29-78v7r.md): Conforms when `FormatInput` is `Duration`. The next input value before the given input.
- [input(before:)](input%28before_%29-7kuw0.md): Conforms when `FormatInput` is `Date`. The next input value before the given input.
- [input(before:)](input%28before_%29-guib.md): Conforms when `FormatInput` conforms to `FixedWidthInteger`. The next input value before the given input.
