> Snapshot-pinned source payload for Apple Swift snapshot-5915b24a1311; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/regexbuilder/alternationbuilder/buildpartialblock(first:)-520tx

# buildPartialBlock(first:)

**Framework:** RegexBuilder  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

## Declaration

```swift
static func buildPartialBlock<R, W, C1>(first regex: R) -> ChoiceOf<(W, C1?)> where R : RegexComponent, R.RegexOutput == (W, C1)
```
