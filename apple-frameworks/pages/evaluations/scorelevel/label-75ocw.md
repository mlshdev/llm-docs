> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/evaluations/scorelevel/label-75ocw](https://developer.apple.com/documentation/evaluations/scorelevel/label-75ocw)

# label

**Framework:** Evaluations  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

A short judge-facing label for this level.

## Declaration

```swift
var label: String { get }
```

<a id="discussion"></a>

## Discussion

The default is `String(describing: self)`, which for enums produces the case name.
