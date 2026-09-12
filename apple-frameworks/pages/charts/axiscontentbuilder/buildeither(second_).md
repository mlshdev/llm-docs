> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axiscontentbuilder/buildeither(second:)](https://developer.apple.com/documentation/charts/axiscontentbuilder/buildeither(second:))

# buildEither(second:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Provides support for “if-else” statements in multi-statement closures, producing conditional content for the “else” branch.

## Declaration

```swift
static func buildEither<T1, T2>(second: T2) -> BuilderConditional<T1, T2> where T1 : AxisContent, T2 : AxisContent
```
