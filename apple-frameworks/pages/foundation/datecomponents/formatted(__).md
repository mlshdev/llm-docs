> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/datecomponents/formatted(_:)](https://developer.apple.com/documentation/foundation/datecomponents/formatted(_:))

# formatted(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Converts `self` to its textual representation.

## Declaration

```swift
func formatted<F>(_ format: F) -> F.FormatOutput where F : FormatStyle, F.FormatInput == DateComponents
```

## Parameters

- `format`: The format for formatting `self`.

<a id="return-value"></a>

## Return Value

A representation of `self` using the given `format`. The type of the representation is specified by `FormatStyle.FormatOutput`.
