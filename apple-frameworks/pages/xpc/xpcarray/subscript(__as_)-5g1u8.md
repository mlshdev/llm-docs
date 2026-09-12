> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcarray/subscript(_:as:)-5g1u8](https://developer.apple.com/documentation/xpc/xpcarray/subscript(_:as:)-5g1u8)

# subscript(\_:as:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Get a value in this array as an endpoint.

## Declaration

```swift
subscript(index: Int, as type: XPCEndpoint.Type = XPCEndpoint.self) -> XPCEndpoint? { get }
```

## Parameters

- `index`: The index at which to get the endpoint.
- `type`: The expected type of the resulting value.

<a id="return-value"></a>

## Return Value

An endpoint value or `nil` if no such value was found.
