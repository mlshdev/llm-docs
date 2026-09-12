> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/parsestrategy/parse(_:)](https://developer.apple.com/documentation/foundation/parsestrategy/parse(_:))

# parse(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Parses a value, using this strategy.

## Declaration

```swift
func parse(_ value: Self.ParseInput) throws -> Self.ParseOutput
```

## Parameters

- `value`: A value whose type matches the strategy’s [ParseInput](parseinput.md) type.

<a id="return-value"></a>

## Return Value

A parsed value of the type declared by [ParseOutput](parseoutput.md).

<a id="Discussion"></a>

## Discussion

This method throws an error if the parse strategy can’t parse `value`.
