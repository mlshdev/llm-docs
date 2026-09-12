> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/integerformatstyle/percent/consuming(_:startingat:in:)](https://developer.apple.com/documentation/foundation/integerformatstyle/percent/consuming(_:startingat:in:))

# consuming(\_:startingAt:in:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Process the input string within the specified bounds, beginning at the given index, and return the end position (upper bound) of the match and the produced output.

## Declaration

```swift
func consuming(_ input: String, startingAt index: String.Index, in bounds: Range<String.Index>) throws -> (upperBound: String.Index, output: Value)?
```

## Parameters

- `input`: An input string to match against.
- `index`: The index within `input` at which to begin searching.
- `bounds`: The bounds within `input` in which to search.

<a id="return-value"></a>

## Return Value

The upper bound where the match terminates and a matched instance, or `nil` if there isn’t a match.
