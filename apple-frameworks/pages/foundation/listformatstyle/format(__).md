> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/listformatstyle/format(_:)

# format(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a locale-aware string representation of the value.

## Declaration

```swift
func format(_ value: Base) -> String
```

## Parameters

- `value`: The sequence of elements to format.

<a id="return-value"></a>

## Return Value

A string representation of the provided sequence.

<a id="Discussion"></a>

## Discussion

The [format(\_:)](format%28__%29.md) instance method generates a string from the provided sequence. Once you create a style, you can use it to format similar sequences multiple times. For example:

```swift
let percentStyle = ListFormatStyle<IntegerFormatStyle.Percent, [Int]>(memberStyle: .percent)
percentStyle.format([92, 98]) // 92% and 98%
percentStyle.format([67, 72, 99]) // 67%, 72%, and 99%
```
