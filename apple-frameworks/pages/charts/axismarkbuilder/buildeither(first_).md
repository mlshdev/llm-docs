> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/charts/axismarkbuilder/buildeither(first:)

# buildEither(first:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Provides support for “if-else” statements in multi-statement closures, producing conditional content for the “then” branch.

## Declaration

```swift
static func buildEither<T1, T2>(first: T1) -> BuilderConditional<T1, T2> where T1 : AxisMark, T2 : AxisMark
```
