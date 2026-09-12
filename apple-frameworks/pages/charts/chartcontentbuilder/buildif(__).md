> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/chartcontentbuilder/buildif(_:)](https://developer.apple.com/documentation/charts/chartcontentbuilder/buildif(_:))

# buildIf(\_:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Builds a partial result that’s conditionally present.

## Declaration

```swift
static func buildIf<T>(_ content: T?) -> T? where T : ChartContent
```

## Parameters

- `content`: The content to use if the condition is `true`.

<a id="discussion"></a>

## Discussion

This method provides support for `if` statements. It produces optional chart content that is visible only when the condition evaluates to `true`.

## See Also

### Building conditionally

- [buildEither(first:)](buildeither%28first_%29.md): Builds a partial result from a condition that’s true.
- [buildEither(second:)](buildeither%28second_%29.md): Builds a partial result from a condition that’s false.
