> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/temporalsegmentidentifier/init(source:range:timescale:)](https://developer.apple.com/documentation/createmlcomponents/temporalsegmentidentifier/init(source:range:timescale:))

# init(source:range:timescale:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a temporal-segment identifier.

## Declaration

```swift
init(source: String, range: Range<Int>, timescale: Int)
```

## Parameters

- `source`: A unique source description.
- `range`: A timestamp range.
- `timescale`: The number of uniquely identifiable timestamps in a second.
