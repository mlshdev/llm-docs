> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontentbuilder/buildeither(second:)](https://developer.apple.com/documentation/charts/chartcontentbuilder/buildeither(second:))

# buildEither(second:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Builds a partial result from a condition that’s false.

## Declaration

```swift
static func buildEither<T1, T2>(second: T2) -> BuilderConditional<T1, T2> where T1 : ChartContent, T2 : ChartContent
```

## Parameters

- `second`: The content to use if the condition is `false`.

<a id="discussion"></a>

## Discussion

This method provides support for `if` statements with an `else` clause and `switch` statements. It produces optional chart content that is visible when the condition evaluates to `false`.

## See Also

### Building conditionally

- [buildIf(\_:)](buildif%28__%29.md): Builds a partial result that’s conditionally present.
- [buildEither(first:)](buildeither%28first_%29.md): Builds a partial result from a condition that’s true.
