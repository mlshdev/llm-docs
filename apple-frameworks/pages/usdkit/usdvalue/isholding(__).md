> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/isholding(_:)](https://developer.apple.com/documentation/usdkit/usdvalue/isholding(_:))

# isHolding(\_:)

**Framework:** USDKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns whether this value holds a value of type `T`.

## Declaration

```swift
func isHolding<T>(_ type: T.Type) -> Bool where T : USDValueProtocol
```
