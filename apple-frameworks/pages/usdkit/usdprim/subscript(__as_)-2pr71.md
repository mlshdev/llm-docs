> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/subscript(_:as:)-2pr71](https://developer.apple.com/documentation/usdkit/usdprim/subscript(_:as:)-2pr71)

# subscript(\_:as:)

**Framework:** USDKit  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

> Use USDArray\<UInt32\> for uint\[\] or USDArray\<UInt64\> for uint64\[\].

## Declaration

```swift
subscript(attributeName: USDToken, as type: USDArray<UInt>.Type) -> USDArray<UInt>? { get nonmutating set }
```
