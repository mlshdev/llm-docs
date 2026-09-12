> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axiscontentbuilder/buildlimitedavailability(_:)](https://developer.apple.com/documentation/charts/axiscontentbuilder/buildlimitedavailability(_:))

# buildLimitedAvailability(\_:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Provides support for “if” statements with `#available()` clauses in multi-statement closures, producing conditional content for the “then” branch, i.e. the conditionally-available branch.

## Declaration

```swift
static func buildLimitedAvailability<Content>(_ content: Content) -> AnyAxisContent where Content : AxisContent
```
