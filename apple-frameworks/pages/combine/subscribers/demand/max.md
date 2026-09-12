> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscribers/demand/max](https://developer.apple.com/documentation/combine/subscribers/demand/max)

# max

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of requested values.

## Declaration

```swift
var max: Int? { get }
```

<a id="discussion"></a>

## Discussion

The value is `nil` if the demand is [unlimited](unlimited.md).
