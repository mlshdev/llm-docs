> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/axistick/length/longestlabel(extendpastby:)](https://developer.apple.com/documentation/charts/axistick/length/longestlabel(extendpastby:))

# longestLabel(extendPastBy:)

**Framework:** Swift Charts  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Describes a tick that extends to the longest label on the axis, with the given additional length.

## Declaration

```swift
static func longestLabel(extendPastBy: CGFloat = 0) -> AxisTick.Length
```

## Parameters

- `extendPastBy`: The additional length to add past the associated label.
