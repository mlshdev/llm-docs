> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/xpc/xpcdictionary/subscript(_:as:default:)-17z80](https://developer.apple.com/documentation/xpc/xpcdictionary/subscript(_:as:default:)-17z80)

# subscript(\_:as:default:)

**Framework:** XPC  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Get a value in this dictionary as an XPCArray.

## Declaration

```swift
subscript(key: String, as type: XPCArray.Type = XPCArray.self, default defaultValue: @autoclosure () -> XPCArray) -> XPCArray { get }
```

## Parameters

- `key`: The key under which to get the XPCArray.
- `type`: The expected type of the resulting value.
- `defaultValue`: The value to produce if no XPCArray is available under `key`.

<a id="return-value"></a>

## Return Value

An XPCArray value, possibly `defaultValue`.
