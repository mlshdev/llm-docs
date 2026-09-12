> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcdictionary/subscript(_:as:)-1nvet](https://developer.apple.com/documentation/xpc/xpcdictionary/subscript(_:as:)-1nvet)

# subscript(\_:as:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get a value in this dictionary as data.

## Declaration

```swift
subscript(key: String, as type: RawSpan.Type = RawSpan.self) -> RawSpan? { get }
```

## Parameters

- `key`: The key under which to get the data.
- `type`: The expected type of the resulting value.

<a id="return-value"></a>

## Return Value

A RawSpan containing the data or `nil` if no such value was found.
