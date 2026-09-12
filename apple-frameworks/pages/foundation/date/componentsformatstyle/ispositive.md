> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/date/componentsformatstyle/ispositive](https://developer.apple.com/documentation/foundation/date/componentsformatstyle/ispositive)

# isPositive

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Controls whether the format input is formatted as a positive or negative range.

## Declaration

```swift
var isPositive: Bool
```

<a id="discussion"></a>

## Discussion

When the range is formatted as a positive value, the returned string describes the time from `lowerBound` to `upperBound`. When `isPositive` is set to `false`, the returned string describes the time from `upperBound` to `lowerBound`.
