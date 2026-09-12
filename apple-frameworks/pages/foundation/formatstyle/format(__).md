> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatstyle/format(_:)](https://developer.apple.com/documentation/foundation/formatstyle/format(_:))

# format(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Formats a value, using this style.

## Declaration

```swift
func format(_ value: Self.FormatInput) -> Self.FormatOutput
```

## Parameters

- `value`: The value to format.

<a id="return-value"></a>

## Return Value

A representation of `value`, in the [FormatOutput](formatoutput.md) type, formatted according to the style’s configuration.

<a id="Discussion"></a>

## Discussion

Use this method when you want to create a single style instance, and then use it to format multiple values.
