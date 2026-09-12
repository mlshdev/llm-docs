> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcarray/subscript(_:as:default:)-4ey7n](https://developer.apple.com/documentation/xpc/xpcarray/subscript(_:as:default:)-4ey7n)

# subscript(\_:as:default:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get a value in this array as a UUID.

## Declaration

```swift
subscript(index: Int, as type: uuid_t.Type = uuid_t.self, default defaultValue: @autoclosure () -> uuid_t) -> uuid_t { get }
```

## Parameters

- `index`: The index at which to get the UUID.
- `type`: The expected type of the resulting value.
- `defaultValue`: The value to produce if no UUID is available at `index`.

<a id="return-value"></a>

## Return Value

A UUID value, possibly `defaultValue`.
