> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcarray/subscript(_:)-7io5d](https://developer.apple.com/documentation/xpc/xpcarray/subscript(_:)-7io5d)

# subscript(\_:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Get or set a value in this array as an endpoint.

## Declaration

```swift
subscript(index: Int) -> XPCEndpoint? { get set }
```

## Parameters

- `index`: The index at which to get or set the endpoint.

<a id="return-value"></a>

## Return Value

An endpoint value or `nil` if no such value was found.
