> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcdictionary/subscript(_:)-11qvo](https://developer.apple.com/documentation/xpc/xpcdictionary/subscript(_:)-11qvo)

# subscript(\_:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get or set a value in this dictionary as a UUID.

## Declaration

```swift
subscript(key: String) -> uuid_t? { get set }
```

## Parameters

- `key`: The key under which to get or set the UUID.

<a id="return-value"></a>

## Return Value

A UUID value or `nil` if no such value was found.
