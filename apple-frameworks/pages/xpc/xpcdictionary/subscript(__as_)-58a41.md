> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcdictionary/subscript(_:as:)-58a41](https://developer.apple.com/documentation/xpc/xpcdictionary/subscript(_:as:)-58a41)

# subscript(\_:as:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** iOS 18.5+ · iPadOS 18.5+ · Mac Catalyst 18.5+ · macOS 15.5+ · tvOS 18.5+ · visionOS 2.5+ · watchOS 11.5+

Get a value in this dictionary as an XPCArray.

## Declaration

```swift
subscript(key: String, as type: XPCArray.Type = XPCArray.self) -> XPCArray? { get }
```

## Parameters

- `key`: The key under which to get the XPCArray.
- `type`: The expected type of the resulting value.

<a id="return-value"></a>

## Return Value

An XPCArray value or `nil` if no such value was found.
