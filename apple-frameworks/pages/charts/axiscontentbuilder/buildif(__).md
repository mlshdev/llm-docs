> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axiscontentbuilder/buildif(_:)](https://developer.apple.com/documentation/charts/axiscontentbuilder/buildif(_:))

# buildIf(\_:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Provides support for “if” statements in multi-statement closures, producing an optional axis content that is visible only when the condition evaluates to `true`.

## Declaration

```swift
static func buildIf<T>(_ content: T?) -> T? where T : AxisContent
```
