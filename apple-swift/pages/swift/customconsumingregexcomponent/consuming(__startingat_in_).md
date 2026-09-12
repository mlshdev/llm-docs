> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/customconsumingregexcomponent/consuming(_:startingat:in:)](https://developer.apple.com/documentation/swift/customconsumingregexcomponent/consuming(_:startingat:in:))

# consuming(\_:startingAt:in:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Process the input string within the specified bounds, beginning at the given index, and return the end position (upper bound) of the match and the produced output.

## Declaration

```swift
func consuming(_ input: String, startingAt index: String.Index, in bounds: Range<String.Index>) throws -> (upperBound: String.Index, output: Self.RegexOutput)?
```

## Parameters

- `input`: The string in which the match is performed.
- `index`: An index of `input` at which to begin matching.
- `bounds`: The bounds in `input` in which the match is performed.

<a id="return-value"></a>

## Return Value

The upper bound where the match terminates and a matched instance, or `nil` if there isn’t a match.
