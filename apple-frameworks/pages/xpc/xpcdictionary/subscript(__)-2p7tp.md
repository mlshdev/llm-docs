> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpcdictionary/subscript(_:)-2p7tp

# subscript(\_:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

Get or set an `XPCEndpoint` value in this dictionary.

## Declaration

```swift
subscript(key: String) -> XPCEndpoint? { get set }
```

## Parameters

- `key`: The key under which to get the xpc endpoint.

<a id="return-value"></a>

## Return Value

A previously-set endpoint value. If no endpoint was previously set for `key`, returns `nil`.
