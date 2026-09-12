> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/groupsummaries/subscript(_:)](https://developer.apple.com/documentation/tabulardata/groupsummaries/subscript(_:))

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Retrieves one or more summaries by their group keys.

## Declaration

```swift
subscript(keys: Any?...) -> DataFrame? { get }
```

## Parameters

- `keys`: A comma-separated, or variadic, list of key optionals.
