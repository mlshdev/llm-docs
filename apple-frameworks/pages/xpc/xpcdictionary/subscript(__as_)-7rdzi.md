> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcdictionary/subscript(_:as:)-7rdzi](https://developer.apple.com/documentation/xpc/xpcdictionary/subscript(_:as:)-7rdzi)

# subscript(\_:as:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

Get an `XPCEndpoint` value in this dictionary.

## Declaration

```swift
subscript(key: String, as type: XPCEndpoint.Type = XPCEndpoint.self) -> XPCEndpoint? { get }
```

## Parameters

- `key`: The key under which to get the xpc endpoint.
- `type`: The expected type of the resulting value.

<a id="return-value"></a>

## Return Value

A previously-set endpoint value. If no endpoint was previously set for `key`, returns `nil`.
