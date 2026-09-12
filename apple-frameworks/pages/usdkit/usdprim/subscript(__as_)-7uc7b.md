> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/subscript(_:as:)-7uc7b](https://developer.apple.com/documentation/usdkit/usdprim/subscript(_:as:)-7uc7b)

# subscript(\_:as:)

**Framework:** USDKit  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

> Use USDArray\<Int32\> for int\[\] or USDArray\<Int64\> for int64\[\].

## Declaration

```swift
subscript(attributeName: USDToken, as type: USDArray<Int>.Type) -> USDArray<Int>? { get nonmutating set }
```
