> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/xpc/xpcdictionary/subscript(_:)-u6bo

# subscript(\_:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Get or set a value in this dictionary as an XPCArray.

## Declaration

```swift
subscript(key: String) -> XPCArray? { get set }
```

## Parameters

- `key`: The key under which to get or set the XPCArray.

<a id="return-value"></a>

## Return Value

An XPCArray value or `nil` if no such value was found.
