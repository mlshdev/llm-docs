> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcdictionary/subscript(_:as:default:)-vwea](https://developer.apple.com/documentation/xpc/xpcdictionary/subscript(_:as:default:)-vwea)

# subscript(\_:as:default:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get a value in this dictionary as a UUID.

## Declaration

```swift
subscript(key: String, as type: uuid_t.Type = uuid_t.self, default defaultValue: @autoclosure () -> uuid_t) -> uuid_t { get }
```

## Parameters

- `key`: The key under which to get the UUID.
- `type`: The expected type of the resulting value.
- `defaultValue`: The value to produce if no UUID is available under `key`.

<a id="return-value"></a>

## Return Value

A UUID value, possibly `defaultValue`.
