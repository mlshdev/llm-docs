> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressmanager/fractioncompleted](https://developer.apple.com/documentation/foundation/progressmanager/fractioncompleted)

# fractionCompleted

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The proportion of work completed. This takes into account the fraction completed in its children instances if children are present. If `self` is indeterminate, the value will be 0.0.

## Declaration

```swift
final var fractionCompleted: Double { get }
```
