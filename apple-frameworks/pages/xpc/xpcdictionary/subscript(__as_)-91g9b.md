> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpcdictionary/subscript(_:as:)-91g9b

# subscript(\_:as:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get a value in this dictionary as a UUID.

## Declaration

```swift
subscript(key: String, as type: uuid_t.Type = uuid_t.self) -> uuid_t? { get }
```

## Parameters

- `key`: The key under which to get the UUID.
- `type`: The expected type of the resulting value.

<a id="return-value"></a>

## Return Value

A UUID value or `nil` if no such value was found.
