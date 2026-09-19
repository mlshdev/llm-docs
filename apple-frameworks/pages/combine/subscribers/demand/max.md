> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/combine/subscribers/demand/max

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
