> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabulardata/rowgrouping/subscript(_:)-2xxs8](https://developer.apple.com/documentation/tabulardata/rowgrouping/subscript(_:)-2xxs8)

# subscript(\_:)

**Framework:** TabularData  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Retrieves a group slice by key.

## Declaration

```swift
subscript(keys: Any?...) -> DataFrame.Slice? { get }
```

## Parameters

- `keys`: A comma-separated, or variadic, list of key optionals.
